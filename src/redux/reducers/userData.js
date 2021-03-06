import { SAVE_NAME } from "../actions";

const INITIAL_STATE = {
  name: "",
};

const userData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_NAME:
      return {
        ...state,
        name: action.payload.name
      };
    default:
      return state;
  }
};

export default userData;
