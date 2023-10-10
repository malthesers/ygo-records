import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  data: Array<WorldsEvent>
}

interface WorldsEvent {
  year: number,
  name: string,
  deck: string,
  attendance: number
}

const worldsEvents: Array<WorldsEvent> = [
  {
    year: 2023,
    name: 'Paulie Aronson',
    deck: 'Bystial Dragon Link',
    attendance: 28,
  },
  {
    year: 2019,
    name: 'Kouki Kosaka',
    deck: 'Salamangreat',
    attendance: 28
  },
  {
    year: 2018,
    name: 'Chia Ching Wang',
    deck: 'Trickstar',
    attendance: 28
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: worldsEvents })
}