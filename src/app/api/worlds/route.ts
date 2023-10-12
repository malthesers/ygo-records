import { Event } from "@/interfaces/event"

const worldsEvents:Array<Event> = [
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

export async function GET() {
  return Response.json( worldsEvents )
}