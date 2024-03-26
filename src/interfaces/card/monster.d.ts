import { ICardBase } from '.'

interface IMonsterCard extends ICardBase {
  cardType: 'Monster'
  monsterCardType: MonsterCardType
  attribute: Attribute
  type: MonsterType
  atk: number
  def: number
  level: Level
  properties: Property[]
  xyz?: XyzAttributes
  pendulum?: PendulumAttributes
  link?: LinkAttributes
}

interface XyzAttributes {
  rank: Rank
}

interface PendulumAttributes {
  scale: Scale
  description: string
}

interface LinkAttributes {
  rating: Rating
}

type Rating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

type Scale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

type Property = 'tuner' | 'spirit' | 'gemini' | 'toon' | 'flip' | 'union'

type MonsterCardType = 'Normal' | 'Effect' | 'Fusion' | 'Ritual' | 'Synchro' | 'Xyz' | 'Pendulum' | 'Link'

type Attribute = 'DARK' | 'LIGHT' | 'EARTH' | 'WIND' | 'WATER' | 'FIRE' | 'DIVINE'

type MonsterType =
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
