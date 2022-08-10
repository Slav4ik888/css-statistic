import { Mocks } from "./types";


const stored = {
  id: `123`,
  person: {
    first  : `Slava`,
    second : `Korzan`,
    middle : `Alexandrovich`
  },
  email: `course@thm.su`,
  any: `any - field - nah`,
  baee: `foo-baee`
};


const updated = {
  id: `123`,
  person: {
    first    : `Slava`,
    second   : `K`,
    middle   : `Alexandrovich`
  },
  email : `course@thm.su`,
  any   : `any - field - nah`,
  baee  : `baee`
};


export const mocks: Mocks = [
  [
    {
      description: `All right`,
      stored,
      updated
    },
    {
      person: {
        second: `K`
      },
      baee: `baee`
    }
  ],
  [
    {
      description: `All right with new field in setObj`,
      stored,
      updated: {
        id: `123`,
        person: {
          first    : `Slava`,
          second   : `K`,
          middle   : `Alexandrovich`,
          newField : `newField nah`
        },
        email : `course@thm.su`,
        any   : `any - field - nah`,
        baee  : `baee`
      }
    },
    {
      person: {
        second: `K`,
        newField: `newField nah`
      },
      baee: `baee`
    }
  ],
  [
    {
      description : `stored is undefined`,
      stored      : undefined,
      updated
    },
    updated
  ],
  [
    {
      description : `updated is undefined`,
      stored,
      updated     : undefined
    },
    {}
  ]
];
