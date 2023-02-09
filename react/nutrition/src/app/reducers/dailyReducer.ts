import { ADD_ITEM } from "../actionTypes";

const initialState = {
  items: [] as any[]
};

export const dailyReducer = (state = initialState, action: any): any => {
  if (action.type === 'ADD_ITEM') {
    return { 
      ...state,
      items: state.items.concat(action.payload)
    };
  }
  else if (action.type === 'REMOVE_ITEM') {
    return { 
      ...state,
      items: state.items.filter(x => x !== action.payload)
    };
  }
  else {
    return state;
  }
}