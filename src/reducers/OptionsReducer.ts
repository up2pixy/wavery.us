import { ActionType } from "../models/ActionTypes";
import { ActionObject } from "../models/ActionObject";
import { OptionsState } from "../models/StateTypes";
import { Reducer } from "redux";
import { Constants } from "../models/Constants";

function getInitialState(): OptionsState {
  return {
    width: Constants.defaultWidth,
    height: Constants.defaultHeight,
    turnCount: Constants.defaultTurnCount,
    layerCount: Constants.defaultLayerCount,
    variance: Constants.defaultVariance,
    selectedPatternIndex: Constants.defaultColorPatternIndex,
    seed: Date.now().toString()
  };
}

const initialState: OptionsState = getInitialState();

const reducer: Reducer<OptionsState, ActionObject> = (state = initialState, action: ActionObject): OptionsState => {
  switch (action.type) {
    case ActionType.UPDATE_WIDTH:
      return { ...state, width: action.width };
    case ActionType.UPDATE_HEIGHT:
      return { ...state, height: action.height };
    case ActionType.UPDATE_LAYERCOUNT:
      return { ...state, layerCount: action.count };
    case ActionType.UPDATE_TURNCOUNT:
      return { ...state, turnCount: action.count };
    case ActionType.UPDATE_VARIANCE:
      return { ...state, variance: action.factor };
    case ActionType.UPDATE_COLOR_SELECTION:
      return { ...state, selectedPatternIndex: action.colorPatternIndex };
    default:
      return state;
  }
};

export default reducer;
