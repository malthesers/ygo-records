export interface ICard {
  id: number
  name: string
  frame: Frame
  properties: Property[]
  description: string
  atk: number
  def: number
  level: Level
  type: Type
  attribute: Attribute
  pendulum?: PendulumAttributes
}

interface PendulumAttributes {
  scale: Scale
  description: string
}

type Frame = 'normal' | 'effect' | 'fusion' | 'ritual' | 'synchro' | 'xyz' | 'link'

type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

type Scale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

type Property = 'tuner' | 'spirit' | 'gemini' | 'toon' | 'flip' | 'union'

type CardType = 'Normal' | 'Effect' | 'Fusion' | 'Ritual' | 'Synchro' | 'Xyz' | 'Pendulum' | 'Link'

type Type =
  | 'Aqua'
  | 'Beast'
  | 'Beast-Warrior'
  | 'Cyberse'
  | 'Dinosaur'
  | 'Divine-Beast'
  | 'Dragon'
  | 'Fairy'
  | 'Fiend'
  | 'Fish'
  | 'Insect'
  | 'Illusion'
  | 'Machine'
  | 'Plant'
  | 'Psychic'
  | 'Pyro'
  | 'Reptile'
  | 'Rock'
  | 'Sea Serpent'
  | 'Spellcaster'
  | 'Thunder'
  | 'Warrior'
  | 'Winged Beast'
  | 'Wyrm'
  | 'Zombie'

type Attribute = 'DARK' | 'LIGHT' | 'EARTH' | 'WIND' | 'WATER' | 'FIRE' | 'DIVINE'
