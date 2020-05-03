import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import carLogo from "../carLogo.png";
import history from "../helpers/History";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 0,
    paddingLeft: 0,
  },
  appbar: {
    background: "#212121",
    height: 60,
    alignContent: "right",
  },
  img: {
    height: 40,
    width: 60,
    margin: 0,
    padding: 0,
    paddingRight: 3,
  },
  button: {
    background: "#212121",
    color: "#f2f2f2",
  },
  button2: {
    background: "#212121",
    color: "#f2f2f2",
    marginRight: 0,
    marginLeft: "auto",
  },
}));

function Header() {
  const classes = useStyles();
  console.log(" Header REndered");
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Button
          variant="text"
          size="small"
          className={classes.button}
          onClick={() => {
            history.push("/");
          }}
        >
          <img className={classes.img} src={carLogo} alt='logo' />
          <Typography variant="h6" className={classes.title}>
            {" "}
            CAR RENTAL
          </Typography>
        </Button>
        <Button
          variant="text"
          size="large"
          className={classes.button2}
          onClick={() => {
            history.push("/");
          }}
        >
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
