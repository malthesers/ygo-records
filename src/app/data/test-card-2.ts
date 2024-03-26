import { ICard } from '@/interfaces/card'

export const testCard2: ICard = {
  id: 82112494,
  name: 'Superheavy Samurai Prodigy Wakaushi',
  frame: 'effect',
  properties: ['tuner'],
  description:
    'If you have no Spells/Traps in your GY: You can discard 1 monster; Special Summon 1 "Superheavy Samurai" monster from your hand or Deck in Defense Position, also you cannot Special Summon monsters for the rest of this turn, except "Superheavy Samurai" monsters. If this card is used as Synchro Material and added to your Extra Deck face-up: You can place this card in your Pendulum Zone. You can only use each effect of "Superheavy Samurai Prodigy Wakaushi" once per turn.',
  atk: 1000,
  def: 1500,
  level: 4,
  type: 'Machine',
  attribute: 'DARK',
  pendulum: {
    scale: 8,
    description:
      'If you have no Spells/Traps in your GY: You can place 1 "Superheavy Samurai" Pendulum Monster from your Deck, except "Superheavy Samurai Prodigy Wakaushi", in your other Pendulum Zone, then Special Summon this card. You can only use this effect of "Superheavy Samurai Prodigy Wakaushi" once per turn.',
  },
}
