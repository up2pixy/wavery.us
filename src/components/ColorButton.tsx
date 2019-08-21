import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { WaveryColorInfo } from "../wavery/wavery";

const styles = {
  colorButtonStyle: {
    margin: "6px 0px 6px 0px",
    width: "100%",
    height: "40px",
    "&:hover": {
      filter: "drop-shadow(1px 1px 1px #888888)"
    }
  }
};

function generateLinearGradientStyle(pattern: WaveryColorInfo[]): string {
  let result: string = pattern
    .map(
      (colorInfo: WaveryColorInfo) =>
        `${colorInfo.colorValue} ${colorInfo.position * 100}%`
    )
    .reduce(
      (output: string, colorInfoString: string) =>
        `${output}, ${colorInfoString}`
    );
  return `linear-gradient(90deg, ${result}`;
}

function ColorButton(props: {
  classes: any;
  pattern: WaveryColorInfo[];
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      className={props.classes.colorButtonStyle}
      style={{
        background: generateLinearGradientStyle(props.pattern),
        border: props.selected ? "2px solid #4153af" : "none"
      }}
      onClick={props.onClick}
    />
  );
}
export default withStyles(styles)(ColorButton);
