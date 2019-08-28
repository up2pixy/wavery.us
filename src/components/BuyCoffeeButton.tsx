import React from "react";
import withWidth, { isWidthUp, WithWidth, isWidthDown } from "@material-ui/core/withWidth";

const BuyCoffeeButtonC = (props: WithWidth) => {
  return (
    <div style={{ margin: "0px 20px" }}>
      <a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/MichaelC">
        <img
          src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg"
          alt="Buy me a coffee"
        />
        {isWidthDown("sm", props.width) ? null : <span style={{ marginLeft: "5px" }}>Buy me a coffee</span>}
      </a>
    </div>
  );
};

export const BuyCoffeeButton = withWidth()(BuyCoffeeButtonC);
