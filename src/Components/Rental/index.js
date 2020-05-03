import React, {Component} from 'react';
import RentalSection from './RentalSection';

import hondaAmaze from "../../static/hondaAmaze.jpg";
import hondaCRV from "../../static/hondaCRV.jpg";
import hyundaiVenue from "../../static/hyundaiVenue.jpg";
import toyotaInnova from "../../static/toyotaInnova.jpg";
import vwPolo from "../../static/vwPolo.jpg";
/**
 *  Car name/modal, description, vehicle number, maximum seating capacity, color, rent/day,
 */

let carsData = {

    c1:{
        name:"Hyundai",
        model:"Venue",
        vnumber:"AP 10 2020",
        capacity:'4',
        color: "Blue",
        image: hyundaiVenue,
        availability:false,
        rentperday:3000,
    },
    c2:{
        name:"Volkswagen",
        model:"Polo",
        vnumber:"AP 10 2022",
        capacity:'4',
        color: "Red",
        image:vwPolo,
        availability: true,
        rentperday:3000,
    },
    c3:{
        name:"Toyota",
        model:"Innova",
        vnumber:"AP 10 2023",
        capacity:'7',
        color: "Grey",
        image:toyotaInnova,
        availability: true,
        rentperday:3000,
    },
    c4:{
        name:"Honda",
        model:"Amaze",
        vnumber:"AP 10 2024",
        capacity:'4',
        color: "Red",
        image: hondaAmaze,
        availability: false,
        rentperday:3000,
    },
    c5:{
        name:"Honda",
        model:"CR-V",
        vnumber:"AP 10 2025",
        capacity:'5',
        color: "Silver",
        image: hondaCRV,
        availability: true,
        rentperday:3000,
    },
}

class Rental extends Component{

    constructor(props){
        super(props)
        console.log("Rental page rendered")

        this.state ={
            carsData:carsData,
        }
    }

    render(){
        return(
                <RentalSection carsData={this.state.carsData}/>  
        );
    }
}
export default Rental;