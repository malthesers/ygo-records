import { MonsterType } from '@/interfaces/card/monster'
import OptionsInputTemplate from './templates/OptionsInputTemplate'
import monsterTypes from '@/app/data/card-info/monsterTypes'
import SelectInputTemplate from './templates/SelectInputTemplate'

export default function MonsterTypeInput() {
  // return <OptionsInputTemplate<MonsterType> field='type' options={monsterTypes} columns={2} />
  return <SelectInputTemplate field='type' options={monsterTypes} defaultValue='Type' />
}
