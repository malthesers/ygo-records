import { Duelist } from "./duelist";

export interface Event {
  year: number,
  location: string,
  attendance: number,
  winner: Duelist
}