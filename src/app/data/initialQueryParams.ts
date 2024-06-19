import { CardType } from '@/interfaces/card'
import { ICardsQueryParams } from '@/interfaces/query-params'

const initialQueryParams: ICardsQueryParams = {
  // id: '',
  name: '',
  description: '',
  cardType: '' as CardType,
  // type: ,
  // monsterCardType: MonsterTypes.MonsterCardType,
  // attribute: MonsterTypes.Attribute,
  // atk: MonsterTypes.Atk,
  // atkMin: number,
  // atkMax: number,
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
