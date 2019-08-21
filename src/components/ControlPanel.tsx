import React from "react";
import {
  Typography,
  Grid,
  TextField,
  Slider,
  InputAdornment
} from "@material-ui/core";
import { returntypeof } from "react-redux-typescript";
import { State } from "../models/StateTypes";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch, Action } from "redux";
import {
  updateWidth,
  updateHeight,
  updateLayerCount,
  updateTurnCount,
  updateVarianceAndSvg,
  updateColorSelectionAndSvg,
  updateSvg
} from "../actions";
import { Constants } from "../models/Constants";
import ColorButton from "./ColorButton";

class ControlPanel extends React.Component<Props, {}> {
  handleWidthChange = (e: any) => {
    this.props.updateWidth(Number(e.target.value));
  };

  handleHeightChange = (e: any) =>
    this.props.updateHeight(Number(e.target.value));

  handleLayerCountChange = (e: any) =>
    this.props.updateLayerCount(Number(e.target.value));

  handleTurnCountChange = (e: any) =>
    this.props.updateTurnCount(Number(e.target.value));

  handleVarianceChange = (_event: any, value: any) => {
    this.props.updateVarianceAndSvg(this.props.options, value);
  };

  handleColorSelectionChange = (index: number) => {
    this.props.updateColorSelectionAndSvg(this.props.options, index);
  };

  tryUpdateSvg = (e: any) => {
    if (e.type === "keydown") {
      if (e.key !== "Enter") {
        return;
      }
    }
    let shouldUpdate = false;
    const newValue = Number(e.target.value);
    const element = e.target.id;
    if (
      (element === "width" && newValue !== this.props.svg.option.width) ||
      (element === "height" && newValue !== this.props.svg.option.height) ||
      (element === "layers" && newValue !== this.props.svg.option.layerCount) ||
      (element === "turns" && newValue !== this.props.svg.option.segmentCount)
    ) {
      shouldUpdate = true;
    }
    if (shouldUpdate) {
      this.props.updateSvg(this.props.options);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Grid item xs={6} className={this.props.styles.controlPanelGrid}>
          <TextField
            fullWidth
            id="width"
            label="Width"
            defaultValue={this.props.options.width}
            type="number"
            onChange={this.handleWidthChange}
            onKeyDown={this.tryUpdateSvg}
            onBlur={this.tryUpdateSvg}
            InputProps={{
              inputProps: { min: Constants.minWidth, max: Constants.maxWidth },
              endAdornment: <InputAdornment position="end">px</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={6} className={this.props.styles.controlPanelGrid}>
          <TextField
            fullWidth
            id="height"
            label="Height"
            defaultValue={this.props.options.height}
            type="number"
            onChange={this.handleHeightChange}
            onKeyDown={this.tryUpdateSvg}
            onBlur={this.tryUpdateSvg}
            InputProps={{
              inputProps: { min: 0, max: 4096 },
              endAdornment: <InputAdornment position="end">px</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={6} className={this.props.styles.controlPanelGrid}>
          <TextField
            fullWidth
            id="layers"
            label="Layers"
            defaultValue={this.props.options.layerCount}
            type="number"
            onChange={this.handleLayerCountChange}
            onKeyDown={this.tryUpdateSvg}
            onBlur={this.tryUpdateSvg}
          />
        </Grid>
        <Grid item xs={6} className={this.props.styles.controlPanelGrid}>
          <TextField
            fullWidth
            id="turns"
            label="Turns"
            defaultValue={this.props.options.turnCount}
            type="number"
            onChange={this.handleTurnCountChange}
            onKeyDown={this.tryUpdateSvg}
            onBlur={this.tryUpdateSvg}
          />
        </Grid>
        <Grid item xs={12} className={this.props.styles.controlPanelGrid}>
          <Typography className={this.props.styles.sliderCaption}>
            Variance
          </Typography>
          <Slider
            defaultValue={50}
            id="variance"
            aria-labelledby="Variance"
            onChange={this.handleVarianceChange}
          />
        </Grid>
        <Grid container xs={12} className={this.props.styles.controlPanelGrid}>
          <Grid item xs={12}>
            <Typography className={this.props.styles.sliderCaption}>
              Color
            </Typography>
          </Grid>
          {Constants.presetColorPatterns.map((pattern, index) => {
            return (
              <Grid container xs={12} justify="center">
                <ColorButton
                  pattern={pattern}
                  selected={index === this.props.options.selectedPatternIndex}
                  onClick={() => this.handleColorSelectionChange(index)}
                />
              </Grid>
            );
          })}
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    options: state.options,
    svg: state.svg
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<{}>>) => {
  return bindActionCreators(
    {
      updateWidth,
      updateHeight,
      updateLayerCount,
      updateTurnCount,
      updateVarianceAndSvg,
      updateColorSelectionAndSvg,
      updateSvg
    },
    dispatch
  );
};

const stateProps = returntypeof(mapStateToProps);
const dispatchProps = returntypeof(mapDispatchToProps);
type Props = typeof stateProps & typeof dispatchProps & { styles: any };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel);
