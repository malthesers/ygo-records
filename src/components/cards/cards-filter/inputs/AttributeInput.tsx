import { Attribute, MonsterType } from '@/interfaces/card/monster'
import OptionsInputTemplate from './templates/OptionsInputTemplate'
import SelectInputTemplate from './templates/SelectInputTemplate'
import { attributeIconsList } from '@/app/data/card-info/attributes'

export default function AttributeInput() {
  // return <OptionsInputTemplate<Attribute> field='type' options={attributes} columns={3} />
  return <SelectInputTemplate field='attribute' options={attributeIconsList} defaultValue='Attribute' />
}
