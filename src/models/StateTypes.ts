import { WaveryOption, WaveryColorInfo } from "../wavery/wavery";

export interface OptionsState {
  width: number;
  height: number;
  turnCount: number;
  layerCount: number;
  variance: number;
  selectedPatternIndex: number;
}

export interface SvgState {
  base64: string;
  option: WaveryOption;
}

export interface State {
  options: OptionsState;
  svg: SvgState;
}
