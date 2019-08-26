import React from "react";
import { CssBaseline, Grid, makeStyles } from "@material-ui/core";
import { WaveryAppBar } from "./components/WaveryAppBar";
import ControlPanel from "./components/ControlPanel";
import PreviewPanel from "./components/PreviewPanel";

export const App = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      position: "fixed",
      height: "calc(var(--vh, 1vh) * 100)",
      [theme.breakpoints.down("xs")]: {
        padding: "56px 0px 0px 0px"
      },
      [theme.breakpoints.up("sm")]: {
        padding: "64px 0px 0px 0px"
      },
      backgroundColor: "grey"
    },
    previewGrid: {
      [theme.breakpoints.down("sm")]: {
        height: "50%",
        width: "100%"
      },
      [theme.breakpoints.up("md")]: {
        width: "70%",
        height: "100%"
      },
      [theme.breakpoints.up("lg")]: {
        width: "75%"
      },
      padding: "40px",
      backgroundColor: "grey",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    },
    controlPanelRoot: {
      [theme.breakpoints.down("sm")]: {
        height: "50%"
      },
      [theme.breakpoints.up("md")]: {
        width: "30%",
        height: "100%"
      },
      [theme.breakpoints.up("lg")]: {
        width: "25%"
      },
      padding: "20px",
      overflow: "auto",
      alignContent: "flex-start",
      backgroundColor: "white",
      WebkitOverflowScrolling: "touch"
    },
    controlPanelGrid: {
      padding: "10px"
    },
    controlPanelButtons: {
      marginTop: theme.spacing(4)
    },
    sliderCaption: {
      fontSize: "9pt",
      fontWeight: "lighter"
    }
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <WaveryAppBar />
      <Grid container className={classes.root}>
        <Grid container className={classes.previewGrid}>
          <PreviewPanel />
        </Grid>
        <Grid container className={classes.controlPanelRoot}>
          <ControlPanel styles={classes} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default App;
