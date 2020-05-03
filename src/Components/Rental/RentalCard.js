import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
// import hondaAmaze from "../../static/hondaAmaze.jpg";
import Typography from "@material-ui/core/Typography";
import history from '../../helpers/History';

const styles = {
  card: {
    border: "3px",
    borderColor: "#2f2f2f",
    width: "70%",
    margin: "auto",
    marginBottom: 6,
    marginTop: 6,
  },
  cardheader: {
    marginLeft: 0,
  },
  media: {
    height: 100 + 10,
    width: 150 + 20,
    marginLeft: 0,
    float: "left",
  },
  button: {
    margin: "auto",
    marginRight: 0,
  },
  h5:{
      margin:3,
      padding:0,
  }

};

class RentalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
    this.setState({});
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card elevation={2} className={classes.card}>
          <CardHeader
            title={`${this.props.carData.name} ${this.props.carData.model}`}
            className={classes.cardheader}
          />
          <CardContent>
            <img
              src={this.props.carData.image}
              className={classes.media}
              alt="honda"
            />
            <div style={{ float: "center" }}>
              <Typography variant="h6">Description:</Typography>
              <p>Car in good condition. this is diesel variant car</p>
              <div>
                <ul style={{listStyle:"none", alignItems:"right"}}>
                  <li style={{display: "inline"}}>
                    <h5 className={classes.h5}>Vehicle Number: {this.props.carData.vnumber}</h5>
                  </li>
                  <li style={{display: "inline"}}>
                    <h5 className={classes.h5}>Color: {this.props.carData.color}</h5>
                  </li>
                  <li style={{paddingLeft:120}}>
                    <h5 className={classes.h5}>Seating capacity: {this.props.carData.capacity}</h5>
                  </li>
                  <li style={{paddingLeft:120}}>
                    <h5 className={classes.h5}>Rent per day: Rs. {this.props.carData.rentperday}</h5>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant={"contained"}
              className={classes.button}
              color={"secondary"}
              onClick={()=>{history.push("/booking-details")}}
              disabled ={this.props.carData.availability? false: true}
            >
              {" "}
              Book Now
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(RentalCard);
