import { Request, Response } from 'express'
import database from '../database/DBConnection'

export default class ConnectionsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const totalConnections = await database('connections').count('* as total')

    const { total } = totalConnections[0]

    return response.json({ total })
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body

    await database('connections').insert({
      user_id,
    })

    return response.status(201).send()
  }
}
