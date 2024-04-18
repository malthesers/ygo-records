import { IDeck } from '@/interfaces/deck'

export const testDeck2: IDeck = {
  _id: '2',
  placement: 1,
  deckType: {
    _id: '2',
    name: 'Snake-Eye',
    slug: 'snake-eye',
    engines: ['Snake-Eye'],
    thumbnail: '48452496',
  },
  event: {
    _id: '3',
    name: 'TEAM YCS San Jose 2024',
    slug: 'san-jose-2024',
    type: {
      name: 'TEAM YCS',
      slug: 'team-ycs',
    },
    year: 2024,
    date: 'February 17-18',
    location: 'San Jose, Costa Rica',
    attendance: 136,
    winner: {
      _id: '3',
      name: 'Pakawat Pamornsut',
      slug: 'pakawat-pamornsut',
      nationality: 'US',
      deck: {
        _id: '2',
        name: 'Snake-Eye',
        slug: 'snake-eye',
        engines: ['Snake-Eye'],
        thumbnail: '48452496',
      },
    },
    thumbnail: '',
    topcut: 64,
  },
  player: {
    _id: '3',
    name: 'Pakawat Pamornsut',
    slug: 'pakawat-pamornsut',
    nationality: 'US',
  },
  decklist: {
    mainDeck: {
      monsters: [
        {
          name: 'Snake-Eye Ash',
          count: 3,
        },
        {
          name: 'Snake-Eye Oak',
          count: 1,
        },
        {
          name: 'Snake-Eyes Poplar',
          count: 3,
        },
        {
          name: 'Diabellstar the Black Witch',
          count: 3,
        },
        {
          name: 'Snake-Eyes Flamberge Dragon',
          count: 2,
        },
        {
          name: 'Jet Synchron',
          count: 1,
        },
        {
          name: 'Ash Blossom & Joyous Spring',
          count: 3,
        },
        {
          name: 'Effect Veiler',
          count: 3,
        },
        {
          name: 'Droll & Lock Bird',
          count: 3,
        },
        {
          name: 'Nibiru, the Primal Being',
          count: 3,
        },
      ],
      spells: [
        {
          name: 'Triple Tactics Talent',
          count: 1,
        },
        {
          name: 'Divine Temple of the Snake-Eye',
          count: 1,
        },
        {
          name: 'Original Sinful Spoils - Snake-Eye',
          count: 1,
        },
        {
          name: 'WANTED: Seeker of Sinful Spoils',
          count: 3,
        },
        {
          name: 'Bonfire',
          count: 3,
        },
        {
          name: 'Monster Reborn',
          count: 1,
        },
        {
          name: 'One for One',
          count: 1,
        },
        {
          name: 'Crossout Designator',
          count: 3,
        },
      ],
      traps: [
        {
          name: 'Infinite Impermanence',
          count: 3,
        },
      ],
    },
    extraDeck: [
      {
        name: 'Formula Synchron',
        count: 1,
      },
      {
        name: 'Borreload Savage Dragon',
        count: 1,
      },
      {
        name: 'Baronne de Fleur',
        count: 1,
      },
      {
        name: 'Linkuriboh',
        count: 1,
      },
      {
        name: 'I:P Masquerena',
        count: 1,
      },
      {
        name: 'S:P Little Knight',
        count: 1,
      },
      {
        name: 'Dharc the Dark Charmer, Gloomy',
        count: 1,
      },
      {
        name: 'Hiita the Fire Charmer, Ablaze',
        count: 1,
      },
      {
        name: 'Knightmare Phoenix',
        count: 1,
      },
      {
        name: 'Promethean Princess, Bestower of Flames',
        count: 1,
      },
      {
        name: 'Selene, Queen of the Master Magicians',
        count: 1,
      },
      {
        name: 'Apollousa, Bow of the Goddess',
        count: 1,
      },
      {
        name: 'Salamangreat Raging Phoenix',
        count: 1,
      },
      {
        name: 'Worldsea Dragon Zealantis',
        count: 1,
      },
      {
        name: 'Underworld Goddess of the Closed World',
        count: 1,
      },
    ],
    sideDeck: [
      {
        name: 'Ghost Mourner & Moonlit Chill',
        count: 3,
      },
      {
        name: 'Ghost Belle & Haunted Mansion',
        count: 3,
      },
      {
        name: 'Kurikara Divincarnate',
        count: 1,
      },
      {
        name: 'Bystial Magnamhut',
        count: 1,
      },
      {
        name: 'Bystial Druiswurm',
        count: 1,
      },
      {
        name: 'Called by the Grave',
        count: 1,
      },
      {
        name: 'Triple Tactics Talent',
        count: 2,
      },
      {
        name: 'Summon Limit',
        count: 3,
      },
    ],
  },
}
