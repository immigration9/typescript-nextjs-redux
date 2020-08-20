import {
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  VisibilityActionTypes,
} from "../actions/VisibilityActions.types";
import { VisibilityState } from "../interfaces/visibility";

const initialState: VisibilityState = {
  filter: VisibilityFilters.SHOW_ALL,
};

const visibilityFilter = (
  state = initialState,
  action: VisibilityActionTypes
): VisibilityState => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default visibilityFilter;
