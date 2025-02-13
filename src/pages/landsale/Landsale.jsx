import "./Landsale.css";

import { RecentSaleLands } from "../../constants/recentSaleLands";
import { Link } from "react-router-dom";

const Landsale = () => {
  return (
    <div className="landsale">
      <div className="container">
        <div className="title">
          <h2>Recent/New lands For Sale</h2>
        </div>

        <div className="landsalecard">
          
          {RecentSaleLands.map((recentsaleland, index) => {
            return (
              <div key={index} className="recentsalelandcard">
                <div className="recentimage">
                  <Link to="{slug}">
                    <img
                      src={recentsaleland.image}
                      alt="sale land image"
                      className="landforsale"
                    />
                  </Link>
                </div>
                <div className="recentsalelanddetails">
                  <div className="recentlandstitle">
                    <h2>{recentsaleland.title}</h2>
                  </div>
                  <div className="recentlandarea">
                    <p>Area: {recentsaleland.location}</p>
                  </div>
                </div>
                <div className="recentsalelandsize">
                  <div className="recentlandsize">
                    <p>Size: {recentsaleland.size}</p>
                  </div>
                  <div className="recentlandprice">
                    <p>{recentsaleland.price}</p>
                  </div>
                </div>
                <div className="recentlandowner">
                  <p>
                    <Link to="/"> Owner : {recentsaleland.owner}</Link>
                  </p>
                </div>

                <div className="exploreland">
                  <p>
                    <Link>Explore land</Link>
                  </p>
                  <p>|</p>
                  <p>
                    <Link>Agent: {recentsaleland.agent}</Link>
                  </p>
                  <p>|</p>
                  <p>
                    <Link>Lease Land</Link>
                  </p>
                </div>
                <div className="landtype">
                  <p>{recentsaleland.type}</p>                  
                  <p>{recentsaleland.discount}</p>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Landsale;
