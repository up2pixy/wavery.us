import { ActionType } from "../models/ActionTypes";
import { ActionObject } from "../models/ActionObject";
import { SvgState } from "../models/StateTypes";
import { Reducer } from "redux";
import { Constants } from "../models/Constants";
import { Wavery, WaveryOption } from "../wavery/wavery";
//import { Wavery, WaveryOption } from "wavery";

function getInitialState(): SvgState {
  const defaultOption: WaveryOption = {
    width: Constants.defaultWidth,
    height: Constants.defaultHeight,
    segmentCount: Constants.defaultTurnCount,
    layerCount: Constants.defaultLayerCount,
    variance: Constants.defaultVariance / 100,
    strokeWidth: 0,
    strokeColor: "none",
    gradientColors: Constants.presetColorPatterns[0],
    seed: Date.now().toString()
  };
  const wavery = new Wavery(defaultOption);
  const serializedSvgElement: string = new XMLSerializer().serializeToString(wavery.generateSvg());
  const encodedData = window.btoa(serializedSvgElement);
  return {
    base64: `data:image/svg+xml;base64,${encodedData}`,
    option: defaultOption
  };
}

const initialState: SvgState = getInitialState();

const reducer: Reducer<SvgState, ActionObject> = (state = initialState, action: ActionObject): SvgState => {
  switch (action.type) {
    case ActionType.UPDATE_SVG:
      return {
        ...state,
        base64: action.base64,
        option: action.option
      };
    default:
      return state;
  }
};

export default reducer;
