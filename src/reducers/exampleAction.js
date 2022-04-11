import { EXAMPLE_ACTION } from "../constants/actionTypes";

const initialState = null;

const exampleAction = (state = initialState, { type, payload }) => {
  switch (type) {
    case EXAMPLE_ACTION:
      return payload;

    default:
      return state;
  }
};

export default exampleAction;
