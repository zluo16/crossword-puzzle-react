export default function crosswordGrid(state = [
  { id: "1", type: 'empty numbered', key: '', value: '' },
  { id: "2", type: 'empty', key: '', value: '' },
  { id: "3", type: 'empty', key: '', value: '' },
  { id: "4", type: 'empty', key: '', value: '' },
  { id: "5", type: 'empty', key: '', value: '' },
  { id: "6", type: 'filled', key: '', value: '' },
  { id: "7", type: 'filled', key: '', value: '' },
  { id: "8", type: 'filled', key: '', value: '' },
  { id: "9", type: 'filled', key: '', value: '' },
  { id: "10", type: 'filled', key: '', value: '' },
  { id: "11", type: 'filled', key: '', value: '' },
  { id: "12", type: 'filled', key: '', value: '' },
  { id: "13", type: 'filled', key: '', value: '' },
  { id: "14", type: 'empty numbered', key: '', value: '' },
  { id: "15", type: 'empty', key: '', value: '' },
  { id: "16", type: 'empty', key: '', value: '' },
  { id: "17", type: 'empty', key: '', value: '' },
  { id: "18", type: 'empty', key: '', value: '' },
  { id: "19", type: 'empty', key: '', value: '' },
  { id: "20", type: 'filled', key: '', value: '' },
  { id: "21", type: 'filled', key: '', value: '' },
  { id: "22", type: 'filled', key: '', value: '' },
  { id: "23", type: 'empty numbered', key: '', value: '' },
  { id: "24", type: 'empty', key: '', value: '' },
  { id: "25", type: 'empty', key: '', value: '' },
  { id: "26", type: 'empty', key: '', value: '' },
  { id: "27", type: 'empty', key: '', value: '' },
  { id: "28", type: 'empty', key: '', value: '' },
  { id: "29", type: 'filled', key: '', value: '' },
  { id: "30", type: 'filled', key: '', value: '' },
  { id: "31", type: 'filled', key: '', value: '' },
  { id: "32", type: 'filled', key: '', value: '' },
  { id: "33", type: 'filled', key: '', value: '' },
  { id: "34", type: 'filled', key: '', value: '' },
  { id: "35", type: 'filled', key: '', value: '' },
  { id: "36", type: 'empty numbered', key: '', value: '' },
  { id: "37", type: 'empty', key: '', value: '' },
  { id: "38", type: 'empty', key: '', value: '' },
  { id: "39", type: 'empty', key: '', value: '' },
  { id: "40", type: 'empty', key: '', value: '' },
  { id: "41", type: 'empty', key: '', value: '' },
  { id: "42", type: 'empty', key: '', value: '' },
  { id: "43", type: 'empty', key: '', value: '' },
  { id: "44", type: 'empty', key: '', value: '' },
  { id: "45", type: 'empty', key: '', value: '' },
  { id: "46", type: 'empty', key: '', value: '' },
  { id: "47", type: 'empty', key: '', value: '' },
  { id: "48", type: 'empty', key: '', value: '' },
  { id: "49", type: 'empty', key: '', value: '' },
  { id: "50", type: 'empty', key: '', value: '' },
  { id: "51", type: 'empty', key: '', value: '' },
  { id: "52", type: 'empty numbered', key: '', value: '' },
  { id: "53", type: 'filled', key: '', value: '' },
  { id: "54", type: 'filled', key: '', value: '' },
  { id: "55", type: 'filled', key: '', value: '' },
  { id: "56", type: 'filled', key: '', value: '' },
  { id: "57", type: 'filled', key: '', value: '' },
  { id: "58", type: 'filled', key: '', value: '' },
  { id: "59", type: 'filled', key: '', value: '' },
  { id: "60", type: 'filled', key: '', value: '' },
  { id: "61", type: 'filled', key: '', value: '' },
  { id: "62", type: 'filled', key: '', value: '' },
  { id: "63", type: 'filled', key: '', value: '' },
  { id: "64", type: 'filled', key: '', value: '' },
  { id: "65", type: 'filled', key: '', value: '' },
  { id: "66", type: 'filled', key: '', value: '' },
  { id: "67", type: 'filled', key: '', value: '' },
  { id: "68", type: 'filled', key: '', value: '' },
  { id: "69", type: 'filled', key: '', value: '' },
  { id: "70", type: 'filled', key: '', value: '' },
  { id: "71", type: 'filled', key: '', value: '' },
  { id: "72", type: 'filled', key: '', value: '' },
  { id: "73", type: 'filled', key: '', value: '' },
  { id: "74", type: 'empty numbered', key: '', value: '' },
  { id: "75", type: 'empty', key: '', value: '' },
  { id: "76", type: 'empty', key: '', value: '' },
  { id: "77", type: 'empty', key: '', value: '' },
  { id: "78", type: 'empty', key: '', value: '' },
  { id: "79", type: 'empty', key: '', value: '' },
  { id: "80", type: 'empty', key: '', value: '' },
  { id: "81", type: 'empty', key: '', value: '' },
  { id: "82", type: 'empty', key: '', value: '' },
  { id: "83", type: 'empty', key: '', value: '' },
  { id: "84", type: 'empty', key: '', value: '' },
  { id: "85", type: 'filled', key: '', value: '' },
  { id: "86", type: 'filled', key: '', value: '' },
  { id: "87", type: 'filled', key: '', value: '' },
  { id: "88", type: 'filled', key: '', value: '' },
  { id: "89", type: 'filled', key: '', value: '' },
  { id: "90", type: 'filled', key: '', value: '' },
  { id: "91", type: 'filled', key: '', value: '' },
  { id: "92", type: 'filled', key: '', value: '' },
  { id: "93", type: 'filled', key: '', value: '' },
  { id: "94", type: 'filled', key: '', value: '' },
  { id: "95", type: 'filled', key: '', value: '' },
  { id: "96", type: 'filled', key: '', value: '' },
  { id: "97", type: 'filled', key: '', value: '' },
  { id: "98", type: 'filled', key: '', value: '' },
  { id: "99", type: 'filled', key: '', value: '' },
  { id: "100", type: 'filled', key: '', value: '' },
  { id: "101", type: 'filled', key: '', value: '' },
  { id: "102", type: 'filled', key: '', value: '' },
  { id: "103", type: 'filled', key: '', value: '' },
  { id: "104", type: 'filled', key: '', value: '' },
  { id: "105", type: 'filled', key: '', value: '' },
  { id: "106", type: 'filled', key: '', value: '' },
  { id: "107", type: 'filled', key: '', value: '' },
  { id: "108", type: 'filled', key: '', value: '' },
  { id: "109", type: 'filled', key: '', value: '' },
  { id: "110", type: 'filled', key: '', value: '' },
  { id: "111", type: 'filled', key: '', value: '' },
  { id: "112", type: 'filled', key: '', value: '' },
  { id: "113", type: 'filled', key: '', value: '' },
  { id: "114", type: 'filled', key: '', value: '' },
  { id: "115", type: 'filled', key: '', value: '' },
  { id: "116", type: 'filled', key: '', value: '' },
  { id: "117", type: 'filled', key: '', value: '' },
  { id: "118", type: 'filled', key: '', value: '' },
  { id: "119", type: 'filled', key: '', value: '' },
  { id: "120", type: 'filled', key: '', value: '' }
], action) {
  switch (action.type) {

    case 'ADD_INPUT':
      let box = state.find(b => b.id === action.payload.id)
      box['value'] = action.payload.value
      return state

    default:
      return state
  }
}
