import { CardType, Type } from '@/interfaces/card'
import { Attribute } from '@/interfaces/card/monster'
import { ICardsQueryParams } from '@/interfaces/query-params'

const initialQueryParams: ICardsQueryParams = {
  // id: '',
  name: '',
  description: '',
  cardType: '' as CardType,
  type: '' as Type,
  // monsterCardType: MonsterTypes.MonsterCardType,
  attribute: '' as Attribute,
  // atk: MonsterTypes.Atk,
  atkMin: '',
  atkMax: '',
  // def: MonsterTypes.Def,
  defMin: '',
  defMax: '',
  // level: MonsterTypes.Level,
  // levelMin: MonsterTypes.Level,
  // levelMax: MonsterTypes.Level,
  // rank: MonsterTypes.Rank,
  // rankMin: MonsterTypes.Rank,
  // rankMax: MonsterTypes.Rank,
  // rating: MonsterTypes.Rating,
  // ratingMin: MonsterTypes.Rating,
  // ratingMax: MonsterTypes.Rating,
  // arrows: MonsterTypes.LinkArrows,
  // properties: MonsterTypes.Property[],
  // pendulum: boolean,
  // pendulumScale: MonsterTypes.Scale,
  // pendulumDescription: string
}

export default initialQueryParams
