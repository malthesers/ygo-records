import { Event } from "@/interfaces/event"

const worldsEvents:Array<Event> = [
  {
    year: 2023,
    location: 'Japan',
    attendance: 28,
    winner: {
      name: 'Paulie Aronson',
      deck: 'Bystial Dragon Link',
    }
  },
  {
    year: 2019,
    location: 'Germany',
    attendance: 28,
    winner: {
      name: 'Kouki Kosaka',
      deck: 'Salamangreat',
    }
  },
  {
    year: 2018,
    location: 'Japan',
    attendance: 28,
    winner: {
      name: 'Chia Ching Wang',
      deck: 'Trickstar',
    }
  },
]

export async function GET() {
  return Response.json( worldsEvents )
}