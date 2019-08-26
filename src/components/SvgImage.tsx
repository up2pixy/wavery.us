import React from "react";

export const SvgImage = (props: { url: string }) => (
  <img
    style={{
      width: "auto",
      height: "auto",
      maxHeight: "100%",
      maxWidth: "100%"
    }}
    src={props.url}
    alt="SVG"
  />
);
