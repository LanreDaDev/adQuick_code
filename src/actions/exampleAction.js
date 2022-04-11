import { EXAMPLE_ACTION } from "../constants/actionTypes";

const exampleAction = (payload) => ({
  type: EXAMPLE_ACTION,
  payload,
});

export { exampleAction };
