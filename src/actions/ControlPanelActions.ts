import { ActionType } from "../models/ActionTypes";
import { ActionObject } from "../models/ActionObject";
import { Wavery, WaveryOption } from "../wavery/wavery";
import { OptionsState, State } from "../models/StateTypes";
import { Constants } from "../models/Constants";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

export const updateWidth = (width: number): ActionObject => ({
  type: ActionType.UPDATE_WIDTH,
  width
});
export const updateHeight = (height: number): ActionObject => ({
  type: ActionType.UPDATE_HEIGHT,
  height
});
export const updateLayerCount = (count: number): ActionObject => ({
  type: ActionType.UPDATE_LAYERCOUNT,
  count
});
export const updateTurnCount = (count: number): ActionObject => ({
  type: ActionType.UPDATE_TURNCOUNT,
  count
});
export const updateVarianceAndSvg = (
  options: OptionsState,
  factor: number
): ThunkAction<void, State, null, Action> => {
  return (dispatch: ThunkDispatch<ActionObject, void, Action>): void => {
    dispatch({
      type: ActionType.UPDATE_VARIANCE,
      factor
    });
    if (factor !== options.variance) {
      dispatch(updateSvg({ ...options, variance: factor }));
    }
  };
};

export const updateColorSelectionAndSvg = (
  options: OptionsState,
  index: number
): ThunkAction<void, State, null, Action> => {
  return (dispatch: ThunkDispatch<ActionObject, void, Action>): void => {
    dispatch({
      type: ActionType.UPDATE_COLOR_SELECTION,
      colorPatternIndex: index
    });
    dispatch(updateSvg({ ...options, selectedPatternIndex: index }));
  };
};

export const updateSvg = (options: OptionsState): ActionObject => {
  const waveryOption: WaveryOption = {
    width: options.width,
    height: options.height,
    segmentCount: options.turnCount,
    layerCount: options.layerCount,
    variance: options.variance / 100,
    strokeWidth: 0,
    strokeColor: "none",
    gradientColors: Constants.presetColorPatterns[options.selectedPatternIndex]
  };
  const wavery = new Wavery(waveryOption);
  const serializedSvgElement: string = new XMLSerializer().serializeToString(
    wavery.generateSvg()
  );
  const encodedData = window.btoa(serializedSvgElement);
  return {
    type: ActionType.UPDATE_SVG,
    base64: `data:image/svg+xml;base64,${encodedData}`,
    option: waveryOption
  };
};
