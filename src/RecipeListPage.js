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
        <h1>Find your favorite meal and get to the kitchen</h1>
         
      <div className="row">
        <div className="col-md-4">
          <div className="image-container">
             <h3>Cheesy lasagne</h3>
            <img src={lasagne} alt="lasagne" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="image-container">
             <h3>Beef Burger</h3>
            <img src={beef} alt="beef burger" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="image-container">
            <h3>Rice Tomatoes</h3>
            <img src={rice} alt="rice tomatoes" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
         <div className="image-container">
            <h3>Cheese Burger</h3>
           <img src={cheese} alt="Cheese burger" />
          </div>
        </div>

       <div className="col-md-4">
        <div className="image-container">
          <h3>Chicken Pasta</h3>
          <img src={pasta} alt="Chicken Pasta" />
        </div>
       </div>

       <div className="col-md-4">
        <div className="image-container">
          <h3>Noodles</h3>
          <img src={noodles} alt="Noodles" />
        </div>
       </div>
      </div>

      <div className="row">
        <div className="col-md-4">
         <div className="image-container">
           <h3>Mushroom Pizza</h3>
           <img src={pizza} alt="Mushroom Pizza" />
         </div>
        </div>

       <div className="col-md-4">
          <div className="image-container">
            <h3>Roasted chicken</h3>
            <img src={chicken} alt="Full roasted chicken" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="image-container">
             <h3>Beef Stake</h3>
             <img src={stake} alt="rice tomatoes" />
          </div>
        </div>
      </div>
      
    </div>
  );

}