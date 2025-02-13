import "./Signin.css";

import { Link } from "react-router-dom"

const Signin = () => {
  return (
    <div className="signin">
      <div className="container">
        <div className="title">
          <h2>Login Now</h2>
        </div>

        <div className="signform">

          <div className="emailaddress">
            <input type="email" placeholder="Email address" />
          </div>
          <div className="password">
            <input type="password" placeholder="Password" />
          </div>

          <div className="notsigned">
            <p>
              Not signed up yet, click <Link>here</Link>
            </p>
          </div>

          <div className="signinbtn">
            <input type="submit" placeholder="Login Now"/>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Signin
