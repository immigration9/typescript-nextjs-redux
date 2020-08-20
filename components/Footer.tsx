import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
  SET_VISIBILITY_FILTER,
  VisibilityActionTypes,
} from "../actions/VisibilityActions.types";

const Footer = () => {
  const filter = useSelector<RootState, string>(
    (state) => state.visibilityFilter.filter
  );
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{ backgroundColor: filter === SHOW_ALL ? "red" : "white" }}
        onClick={() =>
          dispatch<VisibilityActionTypes>({
            type: SET_VISIBILITY_FILTER,
            filter: SHOW_ALL,
          })
        }
      >
        SHOW ALL
      </div>
      <div
        style={{ backgroundColor: filter === SHOW_COMPLETED ? "red" : "white" }}
        onClick={() => {
          dispatch<VisibilityActionTypes>({
            type: SET_VISIBILITY_FILTER,
            filter: SHOW_COMPLETED,
          });
        }}
      >
        SHOW COMPLETED
      </div>
      <div
        style={{ backgroundColor: filter === SHOW_ACTIVE ? "red" : "white" }}
        onClick={() => {
          dispatch<VisibilityActionTypes>({
            type: SET_VISIBILITY_FILTER,
            filter: SHOW_ACTIVE,
          });
        }}
      >
        SHOW ACTIVE
      </div>
    </div>
  );
};

export default Footer;
