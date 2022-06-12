import { NextApiRequest, NextApiResponse } from 'next'
import { events } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(events)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(events)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
