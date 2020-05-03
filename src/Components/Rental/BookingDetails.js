import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

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
  },
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
      <div>
        <p>this is booking deatails page</p>
        <Paper elevation= {1} className={classes.root}>

        </Paper>
      </div>
    );
  }
}

export default withStyles(style)(BookingDetails);
