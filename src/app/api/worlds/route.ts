import { Event } from "@/interfaces/event"

const worldsEvents:Array<Event> = [
  {
    year: 2023,
    name: 'Paulie Aronson',
    deck: 'Bystial Dragon Link',
    location: 'Japan',
    attendance: 28,
  },
  {
    year: 2019,
    name: 'Kouki Kosaka',
    deck: 'Salamangreat',
    location: 'Germany',
    attendance: 28
  },
  {
    year: 2018,
    name: 'Chia Ching Wang',
    deck: 'Trickstar',
    location: 'Japan',
    attendance: 28
  },
]

export async function GET() {
  return Response.json( worldsEvents )
}