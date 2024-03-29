import { ICard } from '@/interfaces/card'

export const testCards: ICard[] = [
  {
    id: 14558127,
    cardType: 'Monster',
    monsterCardType: 'Effect',
    name: 'Ash Blossom & Joyous Spring',
    frame: 'effect',
    properties: ['Tuner'],
    description:
      'When a card or effect is activated that includes any of these effects (Quick Effect): You can discard this card; negate that effect.\n● Add a card from the Deck to the hand.\n● Special Summon from the Deck.\n● Send a card from the Deck to the GY.\nYou can only use this effect of "Ash Blossom & Joyous Spring" once per turn.',
    atk: 0,
    def: 1800,
    level: 3,
    type: 'Zombie',
    attribute: 'FIRE',
  },
  {
    id: 10045474,
    cardType: 'Trap',
    name: 'Infinite Impermanence',
    frame: 'trap',
    description:
      'Target 1 face-up monster your opponent controls; negate its effects (until the end of this turn), then, if this card was Set before activation and is on the field at resolution, for the rest of this turn all other Spell/Trap effects in this column are negated. If you control no cards, you can activate this card from your hand.',
    type: 'Normal',
  },
  {
    id: 29301450,
    cardType: 'Monster',
    monsterCardType: 'Link',
    name: 'S:P Little Knight',
    frame: 'link',
    description:
      '2 Effect Monsters\n If this card is Link Summoned using a Fusion, Synchro, Xyz, or Link Monster as material: You can target 1 card on the field or in either GY; banish it, also your monsters cannot attack directly this turn. When your opponent activates a card or effect (Quick Effect): You can target 2 face-up monsters on the field, including a monster you control; banish both until the End Phase. You can only use each effect of "S:P Little Knight" once per turn.',
    atk: 1600,
    rating: 2,
    type: 'Warrior',
    attribute: 'DARK',
    arrows: {
      L: true,
      R: true,
    },
  },
  {
    id: 90448279,
    cardType: 'Monster',
    monsterCardType: 'Xyz',
    name: 'Divine Arsenal AA-ZEUS - Sky Thunder',
    frame: 'xyz',
    description:
      '2 Level 12 monsters\n Once per turn, if an Xyz Monster battled this turn, you can also Xyz Summon "Divine Arsenal AA-ZEUS - Sky Thunder" by using 1 Xyz Monster you control as material. (Transfer its materials to this card.) (Quick Effect): You can detach 2 materials from this card; send all other cards from the field to the GY. Once per turn, if another card(s) you control is destroyed by battle or an opponent\'s card effect: You can attach 1 card from your hand, Deck, or Extra Deck to this card as material.',
    atk: 3000,
    def: 3000,
    rank: 12,
    type: 'Machine',
    attribute: 'LIGHT',
  },
  {
    id: 25311006,
    cardType: 'Spell',
    name: 'Triple Tactics Talent',
    frame: 'spell',
    description:
      'If your opponent has activated a monster effect during your Main Phase this turn: Activate 1 of these effects;\n● Draw 2 cards.\n● Take control of 1 monster your opponent controls until the End Phase.\n● Look at your opponent\'s hand, and choose 1 card from it to shuffle into the Deck. You can only activate 1 "Triple Tactics Talent" per turn.',
    type: 'Normal',
  },
  {
    id: 82112494,
    cardType: 'Monster',
    monsterCardType: 'Effect',
    name: 'Superheavy Samurai Prodigy Wakaushi',
    frame: 'effect',
    properties: ['Tuner'],
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
]
