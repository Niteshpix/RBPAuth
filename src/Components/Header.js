import styled from "@emotion/styled";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 3,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome!
          </Typography>
          <Button color="inherit">profile</Button>
          <Button color="inherit">logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
