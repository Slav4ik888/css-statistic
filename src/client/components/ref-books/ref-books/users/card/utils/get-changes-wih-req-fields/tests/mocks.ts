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
    first  : `Slava`,
    second: `K`,
    middle : `Alexandrovich`
  },
  email: `course@thm.su`,
  any: `any - field - nah`,
  baee: `baee`
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
      id    : `123`,
      email : `course@thm.su`,
      baee  : `baee`
    }
  ],
  [
    {
      description : `stored is undefined`,
      stored      : undefined,
      updated
    },
    {
      ...updated,
      id    : undefined,
      email : undefined
    }
  ],
  [
    {
      description : `updated is undefined`,
      stored,
      updated     : undefined
    },
    {
      id    : `123`,
      email : `course@thm.su`
    }
  ]
];
