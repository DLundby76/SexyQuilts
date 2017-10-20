const initalState = {
  purchasedItems: [],
 }

export default function(state = initalState, action) {
  switch (action.type) {
    case 'ADD_ITEM':{
      const newItem =  [...state, action.payload]
      return Object.assign({}, state, { purchasedItems: newItem})
    }
      break;

    default:
      return state;
  }
}
