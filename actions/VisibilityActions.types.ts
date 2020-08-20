export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const SHOW_ACTIVE = "SHOW_ACTIVE";

export const VisibilityFilters = {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
};

interface SetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  filter: string;
}

export type VisibilityActionTypes = SetVisibilityFilterAction;
