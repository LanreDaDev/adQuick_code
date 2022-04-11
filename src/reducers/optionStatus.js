import { OPTIONS_STATUS } from "../constants/actionTypes";

const initialState = null;

const optionStatus = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPTIONS_STATUS:
      return payload;

    default:
      return state;
  }
};

export default optionStatus;
