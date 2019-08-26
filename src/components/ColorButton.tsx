import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { WaveryColorInfo } from "../wavery/wavery";

const styles = {
  colorButtonStyle: {
    margin: "6px 0px 6px 0px",
    width: "98%",
    height: "40px",
    "&:hover": {
      filter: "drop-shadow(0px 0px 2px #888888)",
      width: "100%"
    }
  }
};

function ColorButton(props: {
  classes: any;
  pattern: WaveryColorInfo[];
  selected: boolean;
  index: number;
  onClick: () => void;
}) {
  const generateLinearGradientStyle = (pattern: WaveryColorInfo[]): string => {
    let result: string = pattern
      .map((colorInfo: WaveryColorInfo) => `${colorInfo.colorValue} ${colorInfo.position * 100}%`)
      .reduce((output: string, colorInfoString: string) => `${output}, ${colorInfoString}`);
    return `linear-gradient(90deg, ${result}`;
  };

  return (
    <Button
      className={props.classes.colorButtonStyle}
      style={{
        background: generateLinearGradientStyle(props.pattern),
        border: props.selected ? "2px solid #3294e0" : "none"
      }}
      onClick={props.onClick}
    >
      {" "}
    </Button>
  );
}
export default withStyles(styles)(ColorButton);
