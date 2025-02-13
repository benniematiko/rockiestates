import "./OtherProperty.css"

import {  OtherPropertyItems } from "../../constants/otherPropertyItems";
import { Link } from "react-router-dom";

const OtherProperty = () => {
  return (
    <div className="otherproperty">
      <div className="container">
        <div className="title">
          <h2>Classified Property</h2>
        </div>

        <div className="otherpropertysalecard">

          {

            OtherPropertyItems.map((otherpr, index)=>{
              return(
                <div className="otherpropertycard" key={index}>

                  <div className="otherimage">
                    <Link>
                    <img src={otherpr.image} alt="" 
                    className="otherforsale" />
                    </Link>
                  </div>

                  <div className="otherpropertydetails">
                    <div className="otherpropertytitle">
                      <h2>{otherpr.title}</h2>
                    </div>
                    <div className="otherpropertyarea">
                      <p>Location: {otherpr.location}</p>
                    </div>
                  </div>

                  <div className="otherprsize">
                    <div className="otherpsize">
                      <p>Size: {otherpr.size}</p>
                    </div>

                    <div className="otherpprice">
                      <p>Price: {otherpr.price}</p>
                    </div>
                  </div>

                  <div className="otherowner">
                    <p>
                      <Link>
                      Owner: {otherpr.owner}
                      </Link>
                    </p>
                  </div>

                  <div className="exploreotherpr">
                    <p>
                      <Link>Explore Property</Link>
                    </p>
                    <p>|</p>
                    <p>
                      <Link>Other Info</Link>
                    </p>
                  </div>
                  <div className="prtype">
                    <p>{otherpr.type}</p>
                    <p>{otherpr.discount}</p>
                  </div>               

                </div>
              )
            })
          }

        </div>

      </div>
      
    </div>
  )
}

export default OtherProperty
