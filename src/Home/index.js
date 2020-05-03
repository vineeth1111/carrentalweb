import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Rental from '../Components/Rental';

const styles = {
  paper: {
    width: "80%",
    height: 100,
    paddingTop:10,
    margin: "auto",
  },
  title: {
    alignSelf: "right",
  },
  rental:{
      margin:"auto",
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    console.log("Home is mounted");
  }
  render() {
    const { classes } = this.props;
    console.log("Home is rendered");
    return (
      <div>
        {/* <Paper elevation={1} square className={classes.paper}> */}
            <div>
          <Typography variant="h5" className={classes.title}>Cars for rent</Typography>
          <Rental/></div>
        {/* </Paper> */}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
