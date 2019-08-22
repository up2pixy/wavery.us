import React from "react";
import { returntypeof } from "react-redux-typescript";
import { State } from "../models/StateTypes";
import { connect } from "react-redux";

class SvgImage extends React.Component<Props, {}> {
  render() {
    return (
      <img
        style={{
          width: "auto",
          height: "auto",
          maxHeight: "100%",
          maxWidth: "100%"
        }}
        src={this.props.base64}
        alt="SVG"
      />
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    base64: state.svg.base64
  };
};

const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps;

export default connect(mapStateToProps)(SvgImage);
