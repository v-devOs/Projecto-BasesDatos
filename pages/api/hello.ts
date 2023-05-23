// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '@/database'
import type { NextApiRequest, NextApiResponse } from 'next'
import { DataDocuments } from '../../interfaces/Data';
import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2';

type Data = { name: string } | RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {

    const consult = await client.query('SELECT * FROM alumno');

    const resolve = consult[0];

    console.log(consult);

    res.status(200).json(resolve)
    

    
  } catch (error) {
    res.status(500).json({name: 'CONSULTA FALLIDA'})

  }
}
