import { ActionType } from "./ActionTypes";
import { WaveryOption } from "../wavery/wavery";

export interface UpdateWidth {
  type: ActionType.UPDATE_WIDTH;
  width: number;
}

export interface UpdateHeight {
  type: ActionType.UPDATE_HEIGHT;
  height: number;
}

export interface UpdateLayerCount {
  type: ActionType.UPDATE_LAYERCOUNT;
  count: number;
}

export interface UpdateTurnCount {
  type: ActionType.UPDATE_TURNCOUNT;
  count: number;
}

export interface UpdateVariance {
  type: ActionType.UPDATE_VARIANCE;
  factor: number;
}

export interface UpdateColorPatternSelection {
  type: ActionType.UPDATE_COLOR_SELECTION;
  colorPatternIndex: number;
}

export interface UpdateSvg {
  type: ActionType.UPDATE_SVG;
  base64: string;
  option: WaveryOption;
  svgElement: SVGElement;
}

export type ActionObject =
  | UpdateWidth
  | UpdateHeight
  | UpdateLayerCount
  | UpdateTurnCount
  | UpdateVariance
  | UpdateColorPatternSelection
  | UpdateSvg;
