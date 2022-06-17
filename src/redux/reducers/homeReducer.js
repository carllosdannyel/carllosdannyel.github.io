import { SEND_SAVE_NAME } from "../actions";

const INITIAL_STATE = {
  name: "",
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_SAVE_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

export default homeReducer;
