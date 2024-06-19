import { CardType, Type } from '@/interfaces/card'
import * as MonsterTypes from '@/interfaces/card/monster'

export interface ICardsQueryParams {
  id?: string
  name?: string
  description?: string
  cardType?: CardType | ''
  type?: Type
  monsterCardType?: MonsterTypes.MonsterCardType
  attribute?: MonsterTypes.Attribute
  atk?: MonsterTypes.Atk
  atkMin?: string
  atkMax?: string
  def?: MonsterTypes.Def
  defMin?: string
  defMax?: string
  level?: MonsterTypes.Level
  levelMin?: MonsterTypes.Level
  levelMax?: MonsterTypes.Level
  rank?: MonsterTypes.Rank
  rankMin?: MonsterTypes.Rank
  rankMax?: MonsterTypes.Rank
  rating?: MonsterTypes.Rating
  ratingMin?: MonsterTypes.Rating
  ratingMax?: MonsterTypes.Rating
  arrows?: MonsterTypes.LinkArrows
  properties?: MonsterTypes.Property[]
  pendulum?: boolean
  pendulumScale?: MonsterTypes.Scale
  pendulumDescription?: string
}
