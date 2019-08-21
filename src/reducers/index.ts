import { combineReducers } from "redux";
import OptionsReducer from "./OptionsReducer";
import SvgReducer from "./SvgReducer";

export default combineReducers({
  //app: AppReducer,
  options: OptionsReducer,
  svg: SvgReducer
});
