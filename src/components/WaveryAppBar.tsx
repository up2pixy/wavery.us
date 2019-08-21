import React from "react";
import { AppBar, Toolbar, Typography, SvgIcon } from "@material-ui/core";

export const WaveryAppBar = (props: { styles: any }) => {
  return (
    <AppBar>
      <Toolbar>
        <SvgIcon className={props.styles.icon}>
          <path
            fill="#FFFFFF"
            d="M20.549,0H3.736C1.746,0,0,1.461,0,3.449v6.889C1.519,9.99,3.116,9.749,4.906,9.793
      c4.171,0.103,6.497,0.851,8.515,1.511c1.773,0.581,3.248,1.081,6.047,1.081c1.931,0,3.62-0.139,4.532-0.325v-8.61
      C24,1.461,22.539,0,20.549,0z"
          />
          <path
            fill="#FFFFFF"
            d="M19.487,14.815c-3.477,0-5.446-0.656-7.388-1.292c-1.909-0.624-3.77-1.214-7.316-1.301
      C2.957,12.175,1.519,12.524,0,12.933v7.324C0,22.247,1.746,24,3.736,24h16.812C22.539,24,24,22.247,24,20.258v-5.724
      C22.785,14.704,21.29,14.815,19.487,14.815z"
          />
        </SvgIcon>
        <Typography variant="h6" color="inherit" noWrap className={props.styles.title}>
          Wavery.us
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default WaveryAppBar;
