import { Request, Response } from 'express'

import database from '../database/DBConnection'
import convertHourToMinutes from '../utils/convertHoursToMinutes'

interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

export default class ClassesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body

    const trx = await database.transaction()

    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      })

      const user_id = insertedUsersIds[0]

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      })

      const class_id = insertedClassesIds[0]

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        }
      })

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()

      return response.status(201).send()
    } catch (err) {
      await trx.rollback()

      return response.status(400).json({
        status: 'error',
        message: 'Unexpected error while creating new class',
      })
    }
  }
}
