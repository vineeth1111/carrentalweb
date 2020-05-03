import React, {Component} from 'react';
import RentalCard from './RentalCard';

class RentalSection extends Component{

    constructor(props){
        super(props)
        console.log("card rendered")
    }
    render(){

        let carsData = Object.values(this.props.carsData);

        let carArr =[]
        for(var i =0; i<5; i++){
            carArr.push(<RentalCard carData={carsData[i]}/>)
        }
        return(
            <div>
                {carArr}
            </div>
        );
    }
}
export default RentalSection;