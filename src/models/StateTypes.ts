import { WaveryOption } from "../wavery/wavery";

export interface OptionsState {
  width: number;
  height: number;
  turnCount: number;
  layerCount: number;
  variance: number;
  selectedPatternIndex: number;
  seed: string;
}

export interface SvgState {
  base64: string;
  option: WaveryOption;
  svgElement: SVGElement;
}

export interface State {
  options: OptionsState;
  svg: SvgState;
}
