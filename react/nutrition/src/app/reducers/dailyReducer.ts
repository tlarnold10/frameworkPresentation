import { ADD_ITEM } from "../actionTypes";

const initialState = {
  items: [] as any[]
};

export const dailyReducer = (state = initialState, action: any): any => {
  if (action.type === 'ADD_ITEM') {
    console.log(state);
    console.log(action.payload);
    var newState = state.items.concat(action.payload);
    console.log(newState);
    return { 
      ...state,
      items: state.items.concat(action.payload)
    };
  }
  else {
    return state;
  }
}