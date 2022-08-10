import { Mocks } from "./types";


export const mocks: Mocks = [
  [
    {
      description: `Object with 1 lvl deep`,
      updated: {
        id: `id-123`,
        person: {
          first: `Slava`
        }
      }
    },
    {
      id: `id-123`,
      'person.first': `Slava`
    }
  ],
  [
    {
      description: `Object with 2 lvl deep`,
      updated: {
        id: `id-123`,
        person: {
          first: `Slava`
        },
        home: {
          rooms: {
            first: `first room`,
            second: `second room`
          }
        }
      }
    },
    {
      id: `id-123`,
      'person.first': `Slava`,
      'home.rooms.first': `first room`,
      'home.rooms.second': `second room`
    }
  ],
  [
    {
      description: `Object with 3 lvl deep`,
      updated: {
        id: `id-123`,
        person: {
          first: `Slava`
        },
        home: {
          rooms: {
            first: `first room`,
            second: `second room`,
          }
        },
        cars: {
          mans: {
            shvans: {
              blubs: `blums`
            }
          }
        }
      }
    },
    {
      id: `id-123`,
      'person.first': `Slava`,
      'home.rooms.first': `first room`,
      'home.rooms.second': `second room`,
      'cars.mans.shvans.blubs': `blums`
    }
  ],
  [
    {
      description: `updated is undefined`,
      updated: undefined
    },
    {}
  ],
  [
    {
      description: `updated is typeof number`,
      updated: 5 as unknown as object
    },
    {}
  ]
];
