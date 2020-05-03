import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import history from "../../helpers/History";

import Dialog from "@material-ui/core/Dialog";

const style = {
  margin: 15,
  row: {
    flex: 1,
    flexDirection: "row",
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  root: {
    width: "70%",
    paddingBottom: 300,
    margin: "auto",
  },
  textfield: {
    padding: 10,
  },
  li: {
    listStyle: "none",
    margin: 20,
  },
  button: {
    margin: 10,
  },
  button2: {
    margin: 30,
  },
  dialog: {
    pafdding: 30,
  },
  typography:{
    paddingLeft:30,
    paddingRight:30,
    paddingTop:30
  }
};

class BookingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      Name: "",
      ContactNumber: "",
      Issuedate: "",
      Returndate: "",
      dialogOpen: false,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{ float: "center" }}>
        <p>this is booking deatails page</p>
        <Paper elevation={1} className={classes.root}>
          <Typography variant="h4" style={{ paddingTop: 20 }}>
            Booking Details:
          </Typography>
          <ul>
            <li className={classes.li}>
              <TextField
                className={classes.textfield}
                required
                id="standard-required"
                label="Name"
                defaultValue=""
              />
            </li>
            <li className={classes.li}>
              <TextField
                className={classes.textfield}
                required
                id="standard-required"
                label="Contact"
                defaultValue=""
              />
            </li>
            <li className={classes.li}>
              <TextField
                className={classes.textfield}
                required
                id="standard-required"
                label="Issue Date"
                defaultValue=""
              />
            </li>
            <li className={classes.li}>
              <TextField
                className={classes.textfield}
                required
                id="standard-required"
                label="Return Date"
                defaultValue=""
              />
            </li>
            <li className={classes.li}>
              <Button
                className={classes.button}
                color="secondary"
                variant="contained"
                onClick={() => {
                  history.push("/");
                }}
              >
                Back
              </Button>
              <Button
                color="secondary"
                variant="contained"
                className={classes.button}
                onClick={() => {
                  this.setState({ dialogOpen: true });
                }}
              >
                Book Now
              </Button>
            </li>
          </ul>
          <Dialog
            className={classes.dialog}
            onClose={() => {
              history.push("/");
            }}
            open={this.state.dialogOpen}
          >
            <Typography className={classes.typography} variant="h4">Booking Successful</Typography>
            <Button
              size='medium'
              color="primary"
              variant='contained'
              className={classes.button2}
              onClick={() => {
                history.push("/");
              }}
            >
              Close
            </Button>
          </Dialog>
        </Paper>
      </div>
    );
  }
}

export default withStyles(style)(BookingDetails);
