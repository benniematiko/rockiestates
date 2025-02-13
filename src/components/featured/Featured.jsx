import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured">

      <div className="container">
        <div className="left">
          <h1>Find modern, affordable, <i>secure & comfortable</i> accomodation</h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt="" />
              <input type="text" placeholder="Search a rental property" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Classic rentals</span>
            <button>Capri Point</button>
            <button>Igoma</button>
            <button>Ilemela</button>
          </div>
        </div>
        <div className="right"></div>
      </div>
      
    </div>
  )
}

export default Featured
