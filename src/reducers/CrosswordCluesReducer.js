export default function crosswordClues(state = [], action) {
  switch (action.type) {
    case 'FETCH_CLUES':
      console.log(action.payload);
      return action.payload

    default:
      return state

  }
}

// state = [
//   {
//         boxId: "1",
//     alignment: "across",
//        answer: "MAINE",
//          clue: "Traditionally speaking, as this state goes, \"so goes the nation\""
//   },
//   {
//         boxId: "13",
//     alignment: "across",
//        answer: "ORE",
//          clue: "Term for the minerals from which metals are extracted"
//   },
//   {
//         boxId: "16",
//     alignment: "across",
//        answer: "WAX",
//          clue: "Daedalus used this substance to fasten the wings to his back"
//   },
//   {
//         boxId: "24",
//     alignment: "across",
//        answer: "GRUFF",
//          clue: "Name shared by the 3 billy goats who met up with the wicked old troll"
//   },
//   {
//         boxId: "36",
//     alignment: "across",
//        answer: "SMIRNOFF",
//          clue: "Favorite vodka of czar's family in Russia & best-selling brand in the U.S. today"
//   },
//   {
//         boxId: "48",
//     alignment: "across",
//        answer: "DUMMY",
//          clue: "In bridge it's the hand not played by the player to whom it was dealt"
//   },
//   {
//         boxId: "71",
//     alignment: "across",
//        answer: "MAORI",
//          clue: "Tradition says these Polynesians, who now live in New Zealand, came from a land called Hawaiki"
//   },
//   {
//         boxId: "77",
//     alignment: "across",
//        answer: "ANGELICA",
//          clue: "A heavenly herb, or a dessert wine said to have originated near Los Angeles, for which it's named"
//   },
//   {
//         boxId: "103",
//     alignment: "across",
//        answer: "AHI",
//          clue: "Type of tuna"
//   },
//   {
//         boxId: "116",
//     alignment: "across",
//        answer: "VAULT",
//          clue: "As a noun it can be a burial chamber; as a verb, it means to leap"
//   },
//   {
//         boxId: "36",
//     alignment: "down",
//        answer: "SMELL",
//          clue: "Psychologists refer to this sense as olfaction"
//   },
//   {
//         boxId: "60",
//     alignment: "down",
//        answer: "DIGIT",
//          clue: "This word for any of the 10 Arabic number symbols comes from the Latin word for \"finger\""
//   },
//   {
//         boxId: "69",
//     alignment: "down",
//        answer: "JAW",
//          clue: "If this part is made of glass a fighter has to watch his opponent"
//   }
// ]
