import React from "react";
import { Fab, Typography } from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

export const DownloadButton = (props: { onClick: () => void }) => (
  <Fab
    variant="extended"
    aria-label="Download"
    style={{ margin: 0, bottom: 20, position: "absolute" }}
    onClick={props.onClick}
  >
    <CloudDownloadIcon style={{ margin: "0 10 0 0" }} color="primary" />{" "}
    <Typography color="primary" noWrap style={{ textTransform: "capitalize" }}>
      Download
    </Typography>
  </Fab>
);
