import {
  VisibilityActionTypes,
  SET_VISIBILITY_FILTER,
} from "./VisibilityActions.types";

export const setVisibilityFilter = (filter: string): VisibilityActionTypes => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
