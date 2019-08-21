import React from "react";
import { returntypeof } from "react-redux-typescript";
import { State } from "../models/StateTypes";
import { connect } from "react-redux";
import SvgImage from "./SvgImage";

class PreviewPanel extends React.Component<Props, {}> {
  render() {
    return (
      <React.Fragment>
        <SvgImage />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    svg: state.svg
  };
};

const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps;

export default connect(mapStateToProps)(PreviewPanel);
