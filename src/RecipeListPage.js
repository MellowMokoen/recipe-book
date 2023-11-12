import React from "react";
import './RecipeListPage.css';
import lasagne from './images/lasagne.jpg';
import beef from './images/beef-burger.jpg';
import cheese from './images/cheese-burger.jpg';
import pasta from './images/chicken-pasta.jpg';
import noodles from './images/noodles.jpg';
import pizza from './images/pizza.jpg';
import rice from './images/rice-dish.jpg';
import chicken from './images/roasted-chicken.jpg';
import stake from './images/stake.jpg';

export default function() {
    return (
        <div>
            <h1></h1>
         <div className = "row">
            <div className="col-md-4 beef-row">
            <img src= {lasagne} alt="lasagne"/>
            <img src= {beef} alt="beef burger"/>
            <img src= {rice}  alt="rice tomatoes"/>
            </div>
            <div className="col-md-4 pizza-row">
            <img src= {pizza} alt="pizza"/>
            <img src= {stake} alt="beef stake"/>
            <img src= {cheese} alt="cheese burger"/>
            </div>
            <div className="col-md-4 chicken-row">
            <img src= {noodles} alt="noodles"/>
            <img src= {pasta} alt="chicken pasta"/>
            <img src= {chicken} alt="full roasted chicken"/>
            </div>
         </div>
        </div>
    );
}