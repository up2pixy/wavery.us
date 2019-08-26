import React from "react";
import { returntypeof } from "react-redux-typescript";
import { State } from "../models/StateTypes";
import { connect } from "react-redux";
import SvgImage from "./SvgImage";
import { Fab, Typography } from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

class PreviewPanel extends React.Component<Props, {}> {
  svgUriToPngUri = (svgDataUrl: string, width: number, height: number): string => {
    const image = new Image();
    image.src = svgDataUrl;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const encoderType = "image/png";
    const encoderOptions = 0.8;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${canvas.width}px`;
    canvas.style.height = `${canvas.height}px`;

    if (context !== null) {
      context.drawImage(image, 0, 0);
    }
    const pngUri: string = canvas.toDataURL(encoderType, encoderOptions);
    return pngUri;
  };

  download = (uri: string, name: string): void => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  onDownloadButtonClicked = () => {
    const pngUri = this.svgUriToPngUri(this.props.svgBase64, this.props.svgWidth, this.props.svgHeight);
    this.download(pngUri, "Wavery.png");
  };

  render() {
    return (
      <React.Fragment>
        <SvgImage />
        <Fab
          variant="extended"
          aria-label="Download"
          style={{ margin: 0, bottom: 20, position: "absolute" }}
          onClick={this.onDownloadButtonClicked}
        >
          <CloudDownloadIcon style={{ margin: "0 10 0 0" }} color="primary" />{" "}
          <Typography color="primary" noWrap style={{ textTransform: "capitalize" }}>
            Download
          </Typography>
        </Fab>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    svgBase64: state.svg.base64,
    svgWidth: state.options.width,
    svgHeight: state.options.height
  };
};

const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps;

export default connect(mapStateToProps)(PreviewPanel);
