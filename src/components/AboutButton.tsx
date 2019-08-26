import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { DialogContentText, IconButton, Link } from "@material-ui/core";
import InfoOutlined from "@material-ui/icons/InfoOutlined";

export class AboutButton extends React.Component<{}, { isOpen: boolean }> {
  state = {
    isOpen: false
  };

  openAboutDialog = () => {
    this.setState({ isOpen: true });
  };

  closeAboutDialog = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <IconButton
          aria-label="About"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={this.openAboutDialog}
        >
          <InfoOutlined />
        </IconButton>
        <Dialog
          open={this.state.isOpen}
          onClose={this.closeAboutDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          onClick={this.closeAboutDialog}
        >
          <DialogTitle>About</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Wavery.us is a web app that generates random wave images. It uses the open-source library{" "}
              <Link href="https://github.com/up2pixy/wavery" target="_blank">
                Wavery
              </Link>{" "}
              I created on GitHub. Please feel free to use the image created by the app since you own the copyright.
              This app is inspired by{" "}
              <Link href="https://trianglify.io" target="_blank">
                Trianglify.io
              </Link>
              .
            </DialogContentText>
            <DialogContentText> - Michael from Kirkland, WA</DialogContentText>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}
