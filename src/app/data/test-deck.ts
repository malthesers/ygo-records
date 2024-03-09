export interface ITestDeck {
  mainDeck: {
    monsters: ITestCard[]
    spells: ITestCard[]
    traps: ITestCard[]
  }
  extraDeck: ITestCard[]
  sideDeck: ITestCard[]
}

interface ITestCard {
  name: string
  count: 1 | 2 | 3
}

export const testDeck: ITestDeck = {
  mainDeck: {
    monsters: [
      {
        name: 'The Bystial Aluber',
        count: 1,
      },
      {
        name: 'Blazing Cartesia, the Virtuous',
        count: 1,
      },
      {
        name: 'Guiding Quem, the Virtuous',
        count: 3,
      },
      {
        name: 'The Bystial Lubellion',
        count: 3,
      },
      {
        name: 'Bystial Saronir',
        count: 2,
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
        name: 'Bystial Baldrake',
        count: 1,
      },
      {
        name: 'Ash Blossom & Joyous Spring',
        count: 3,
      },
    ],
    spells: [
      {
        name: 'Branded Regained',
        count: 2,
      },
      {
        name: 'Runick Fountain',
        count: 2,
      },
      {
        name: 'Runick Tip',
        count: 3,
      },
      {
        name: 'Runick Flashing Fire',
        count: 3,
      },
      {
        name: 'Runick Freezing Curses',
        count: 3,
      },
      {
        name: 'Runick Destruction',
        count: 3,
      },
      {
        name: 'Runick Slumber',
        count: 3,
      },
      {
        name: 'Runick Dispelling',
        count: 1,
      },
      {
        name: 'Runick Smiting Storm',
        count: 1,
      },
      {
        name: 'Duality',
        count: 3,
      },
    ],
    traps: [],
  },
  extraDeck: [
    {
      name: 'Hugin the Runick Wings',
      count: 2,
    },
    {
      name: 'Geri the Runick Fangs',
      count: 1,
    },
    {
      name: 'Sleipnir the Runick Mane',
      count: 1,
    },
    {
      name: 'Allvain the Essence of Vanity',
      count: 1,
    },
    {
      name: 'Bystial Dis Pater',
      count: 1,
    },
    {
      name: 'Chaos Angel',
      count: 1,
    },
    {
      name: 'Baronne de Fleur',
      count: 1,
    },
    {
      name: 'Swordsoul Supreme Sovereign - Chengying',
      count: 1,
    },
    {
      name: 'Scarlight Red Dragon Archfiend',
      count: 1,
    },
    {
      name: 'Tri-Edge Master',
      count: 1,
    },
    {
      name: 'Coral Dragon',
      count: 1,
    },
    {
      name: 'The Fabled Unicore',
      count: 1,
    },
    {
      name: 'S:P Little Knight',
      count: 1,
    },
    {
      name: 'Super Starslayer TY-PHON - Sky Crisis',
      count: 1,
    },
  ],
  sideDeck: [
    {
      name: 'Droll & Lock Bird',
      count: 3,
    },
    {
      name: 'Denko Sekka',
      count: 3,
    },
    {
      name: 'Ghost Sister & Spooky Dogwood',
      count: 3,
    },
    {
      name: 'Fantastical Dragon Phantazmay',
      count: 3,
    },
    {
      name: 'Nibiru, the Primal Being',
      count: 3,
    },
  ],
}
