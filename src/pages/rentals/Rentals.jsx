import "./Rentals.css";

import { RentalHouses } from "../../constants/rentals";
import { Link } from "react-router-dom";
const Rentals = () => {
  return (
    <div className="rentals">
      <div className="container">
        
        <div className="title">
          <h2>Rental Property</h2>
        </div>

        <div className="rentalscard">

          {RentalHouses.map((rentalhouse, index) => {
            return (
              <div key={index} className="rentalcard">
                <div className="rentalimage">
                  <Link to="{slug}">
                    <img
                      src={rentalhouse.image}
                      alt="rental house"
                      className="rentalimagehouse"
                    />
                  </Link>
                </div>
                <div className="rentaldetails">
                  <div className="housetitle">
                    <h2>{rentalhouse.title}</h2>
                  </div>
                  <div className="housearea">
                    <p>Area: {rentalhouse.location}</p>
                  </div>
                </div>
                <div className="rentalssize">
                  <div className="rentalsize">
                    <p>Size: {rentalhouse.areasize}</p>
                  </div>
                  <div className="rentalprice">
                    <p>{rentalhouse.price}</p>
                  </div>
                </div>
                <div className="rentalowner">
                  <p>
                    <Link to="/"> Owner : {rentalhouse.owner}</Link>
                  </p>
                </div>
                <div className="explorehouse">
                  <p>
                    <Link>Explore house</Link>
                  </p>
                  <p>|</p>
                  <p>
                    <Link>Agent: {rentalhouse.agent}</Link>
                  </p>
                  <p>|</p>
                  <p>
                    <Link>Lease house</Link>
                  </p>
                </div>
                <div className="housetype">
                  <p>{rentalhouse.type}</p>
                  <p>{rentalhouse.discount}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rentals;
