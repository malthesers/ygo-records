import { ICard } from '@/interfaces/card'

export const testCards: ICard[] = [
  {
    id: 14558127,
    cardType: 'Monster',
    monsterCardType: 'Effect',
    name: 'Ash Blossom & Joyous Spring',
    frame: 'effect',
    properties: ['tuner'],
    description:
      'When a card or effect is activated that includes any of these effects (Quick Effect): You can discard this card; negate that effect.\r\n● Add a card from the Deck to the hand.\r\n● Special Summon from the Deck.\r\n● Send a card from the Deck to the GY.\r\nYou can only use this effect of "Ash Blossom & Joyous Spring" once per turn.',
    atk: 0,
    def: 1800,
    level: 3,
    type: 'Zombie',
    attribute: 'FIRE',
  },
  {
    id: 82112494,
    cardType: 'Monster',
    monsterCardType: 'Pendulum',
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
  },
  {
    id: 25311006,
    cardType: 'Spell',
    name: 'Triple Tactics Talent',
    frame: 'spell',
    description:
      'If your opponent has activated a monster effect during your Main Phase this turn: Activate 1 of these effects;\r\n● Draw 2 cards.\r\n● Take control of 1 monster your opponent controls until the End Phase.\r\n● Look at your opponent\'s hand, and choose 1 card from it to shuffle into the Deck. You can only activate 1 "Triple Tactics Talent" per turn.',
    type: 'Normal',
  },
]
