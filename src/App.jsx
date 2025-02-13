import "./App.css"
import Navbar from "./components/navbar/Navbar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Rentals from "./pages/rentals/Rentals"
import Footer from "./components/footer/Footer"
import Plotsale from "./pages/plotsale/Plotsale"
import Landsale from "./pages/landsale/Landsale"
import OtherProperty from "./pages/otherproperty/OtherProperty"
import Signin from "./pages/signin/Signin"

const App = () => {
  return (
    <div>

      <Router>

        <Navbar />

        
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/rentals" element={< Rentals />} />
          <Route path="/plotsale" element={< Plotsale />} />
          <Route path="/landsale" element={< Landsale />} />
          <Route path="/otherproperty" element={< OtherProperty />} />
          <Route path="/signin" element={< Signin />} />

        </Routes>

        <Footer />

      </Router>


    
    </div>
  )
}

export default App
