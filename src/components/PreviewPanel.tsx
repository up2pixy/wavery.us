import React from "react";
import { returntypeof } from "react-redux-typescript";
import { State } from "../models/StateTypes";
import { connect } from "react-redux";
import SvgImage from "./SvgImage";
import { Button } from "@material-ui/core";
//import { svgAsPngUri } from "save-svg-as-png";

class PreviewPanel extends React.Component<Props, {}> {
  // handleDownloadButtonClick = () => {
  //   svgAsPngUri(this.props.svgElement, {}, this.pngUrlCallBack);
  // };
  // pngUrlCallBack = (url: string) => {
  //   console.log(url);
  // };

  render() {
    return (
      <React.Fragment>
        <SvgImage />
        {/* <Button onClick={this.handleDownloadButtonClick}>Download</Button> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    svgElement: state.svg.svgElement
  };
};

const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps;

export default connect(mapStateToProps)(PreviewPanel);
