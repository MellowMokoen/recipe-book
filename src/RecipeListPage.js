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
            <h1>Improve your cooking skills</h1>
         <div className = "row">
            <div className="col-md-4">
            <img src= {lasagne} />
            <img src= {beef} />
            <img src= {rice} />
            </div>
            <div className="col-md-4">
            <img src= {pizza} />
            <img src= {stake} />
            <img src= {cheese} />
            </div>
            <div className="col-md-4">
            <img src= {noodles} />
            <img src= {pasta} />
            <img src= {chicken} />
            </div>
         </div>
        </div>
    );
}