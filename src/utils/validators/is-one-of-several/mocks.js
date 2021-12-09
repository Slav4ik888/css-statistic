
export default [
  {
    case: [`Word`, [`Number`, `Word`, `Strings`]],
    result: true
  }, {
    case: [`Word`, [`Number`, `World`, `Strings`]],
    result: false
  }, { // Object !== Object
    case: [{ word: `String`}, [{ word: `String`}, `Word`, `Strings`]],
    result: false
  }, {
    case: [{ word: `String`}, [`String`, `Word`, `Strings`]],
    result: false
  },
]