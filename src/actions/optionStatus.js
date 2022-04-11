import { OPTIONS_STATUS } from "../constants/actionTypes";

const optionStatusAction = (payload) => ({
  type: OPTIONS_STATUS,
  payload,
});

export { optionStatusAction };
