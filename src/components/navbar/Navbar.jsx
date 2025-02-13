import "./Navbar.css";

import { useEffect, useState } from "react";
import { Link, useLocation }  from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [mobile, setMobile] = useState(false);

  const { pathname } = useLocation()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=> {
    window.addEventListener("scroll" ,isActive );

    return ()=> {
      window.removeEventListener("scroll",isActive)
    }

  }, [] )
  return (
    <div className={ active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className="container">

        <div className="logo">
          <Link to="/" className="link"><span className="text">RockyCity Real Estates</span></Link>

          <span className="dot">.</span>
        </div>
        <div className="links">
          
         <li> <Link to="/rentals"><span>Rentals</span></Link></li>
          <li><Link to="/plotsale"><span>Plots for Sale</span></Link></li>
          <li><Link to="landsale"><span>Land for Sale</span></Link></li>
          <li><Link to="otherproperty"><span>Other Property</span></Link></li>
          <li><Link to="becomeagent"><span>Become an Agent</span></Link></li>        
          <li><Link to="signin"><span>Sign In</span></Link></li>
        
          
          <button className={ active ? "abutton" : "ubutton" }>Register</button>       
          

        </div>

        <span className="toggle" onClick={ () => setMobile(!mobile)}>
            <span className="fa-bars">{ mobile ? <FaTimes /> : <FaBars /> } </span>
          </span>
        
      </div>

      

      { ( active || pathname !=="/") && (
        <>
          
          <hr />
          <div className="menu">
            <span>Ilemela</span>
            <span>Nyegezi</span>
            <span>Mwanza CBD</span>
            <span>SAUT</span>
            <span>Igoma</span>
            <span>Capri Point</span>
            <span>Buswelu</span>
          
          </div>
          
        </>
      )}


      
    </div>
  );
};

export default Navbar;
