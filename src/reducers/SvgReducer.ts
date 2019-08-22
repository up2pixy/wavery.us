import { ActionType } from "../models/ActionTypes";
import { ActionObject } from "../models/ActionObject";
import { SvgState } from "../models/StateTypes";
import { Reducer } from "redux";
import { Constants } from "../models/Constants";
import { Wavery } from "../wavery/wavery";
//import { Wavery, WaveryOption } from "wavery";

function getInitialState(): SvgState {
  const wavery = new Wavery(Constants.defaultOption);
  const svgElement = wavery.generateSvg();
  const serializedSvgElement: string = new XMLSerializer().serializeToString(svgElement);
  const encodedData = window.btoa(serializedSvgElement);
  return {
    base64: `data:image/svg+xml;base64,${encodedData}`,
    option: Constants.defaultOption,
    svgElement
  };
}

const initialState: SvgState = getInitialState();

const reducer: Reducer<SvgState, ActionObject> = (state = initialState, action: ActionObject): SvgState => {
  switch (action.type) {
    case ActionType.UPDATE_SVG:
      return {
        ...state,
        base64: action.base64,
        option: action.option,
        svgElement: action.svgElement
      };
    default:
      return state;
  }
};

export default reducer;
