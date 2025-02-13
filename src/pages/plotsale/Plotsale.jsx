import "./Plotsale.css";

import { RecentSalePlots } from "../../constants/recentSalePlots";
import { Link } from "react-router-dom";

const Plotsale = () => {
  return (
    <div className="plotsale">
      <div className="container">
        <div className="title">
          <h2>Recent/New Plots For Sale</h2>
        </div>

        <div className="plotsalecard">
          
          {RecentSalePlots.map((recentsaleplot, index) => {
            return (
              <div key={index} className="recentsaleplotcard">
                <div className="recentimage">
                  <Link to="{slug}">
                    <img
                      src={recentsaleplot.image}
                      alt="sale plot image"
                      className="plotforsale"
                    />
                  </Link>
                </div>
                <div className="recentsaleplotdetails">
                  <div className="recentplotstitle">
                    <h2>{recentsaleplot.title}</h2>
                  </div>
                  <div className="recentplotarea">
                    <p>Area: {recentsaleplot.location}</p>
                  </div>
                </div>
                <div className="recentsaleplotsize">
                  <div className="recentplotsize">
                    <p>Size: {recentsaleplot.size}</p>
                  </div>
                  <div className="recentplotprice">
                    <p>{recentsaleplot.price}</p>
                  </div>
                </div>
                <div className="recentplotowner">
                  <p>
                    <Link to="/"> Owner : {recentsaleplot.owner}</Link>
                  </p>
                </div>

                <div className="exploreplot">
                  <p>
                    <Link>Explore plot</Link>
                  </p>
                  <p>|</p>
                  <p>
                    <Link>Agent: {recentsaleplot.agent}</Link>
                  </p>
                  <p>|</p>
                  <p>
                    <Link>Lease Plot</Link>
                  </p>
                </div>
                <div className="plottype">
                  <p>{recentsaleplot.type}</p>                  
                  <p>{recentsaleplot.discount}</p>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Plotsale;
