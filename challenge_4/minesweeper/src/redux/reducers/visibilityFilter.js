import { SET_FILTER } from "../actionTypes";

const initialState = "-";

const visibility = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default visibility;