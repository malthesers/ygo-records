import { ICardBase } from '.'

type IMonsterCard =
  | INormalMonsterCard
  | IEffectMonsterCard
  | IFusionMonsterCard
  | IRitualMonsterCard
  | ISynchroMonsterCard
  | IXyzMonsterCard
  | ILinkMonsterCard

interface IMonsterCardBase extends ICardBase {
  cardType: 'Monster'
  monsterCardType: MonsterCardType
  attribute: Attribute
  type: MonsterType
  atk: Atk
  def: Def
  level: Level
  properties?: Property[]
  pendulum?: Pendulum
}

interface INormalMonsterCard extends IMonsterCardBase {
  monsterCardType: 'Normal'
}

interface IEffectMonsterCard extends IMonsterCardBase {
  monsterCardType: 'Effect'
}

interface IFusionMonsterCard extends IMonsterCardBase {
  monsterCardType: 'Fusion'
}

interface IRitualMonsterCard extends IMonsterCardBase {
  monsterCardType: 'Ritual'
}

interface ISynchroMonsterCard extends IMonsterCardBase {
  monsterCardType: 'Synchro'
}

interface IXyzMonsterCard extends Omit<IMonsterCardBase, 'level'> {
  monsterCardType: 'Xyz'
  rank: Rank
}

interface ILinkMonsterCard extends Omit<IMonsterCardBase, 'level' | 'def'> {
  monsterCardType: 'Link'
  rating: Rating
  arrows: LinkArrows
}

interface Pendulum {
  scale: Scale
  description: string
}

interface LinkArrows {
  TL?: boolean
  T?: boolean
  TR?: boolean
  L?: boolean
  R?: boolean
  BL?: boolean
  B?: boolean
  BR?: boolean
}

type Atk = '?' | number

type Def = '?' | number

type Rating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type Rank = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

type Scale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

type Frame = 'normal' | 'effect' | 'fusion' | 'ritual' | 'synchro' | 'xyz' | 'link'

type MonsterCardType = 'Normal' | 'Effect' | 'Fusion' | 'Ritual' | 'Synchro' | 'Xyz' | 'Link'

type Property = 'Tuner' | 'Spirit' | 'Gemini' | 'Toon' | 'Flip' | 'Union'

type Attribute = 'DARK' | 'LIGHT' | 'EARTH' | 'WIND' | 'WATER' | 'FIRE' | 'DIVINE'

type MonsterType =
  | 'Aqua'
  | 'Beast'
  | 'Beast-Warrior'
  | 'Creator-God'
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
