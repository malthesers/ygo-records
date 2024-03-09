export interface IDeck {
  id: number
  name: string
  archetype: string
  engine?: string[]
  thumbnail?: string
}

export interface IDeckList {
  mainDeck: {
    monsters: IDeckCard[]
    spells: IDeckCard[]
    traps: IDeckCard[]
  }
  extraDeck: IDeckCard[]
  sideDeck: IDeckCard[]
}

interface IDeckCard {
  name: string
  count: 1 | 2 | 3
}
