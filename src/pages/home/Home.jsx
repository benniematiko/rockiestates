import Featured from "../../components/featured/Featured";

import PostHouse from "../../components/posthouse/PostHouse";
// import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedby/TrustedBy";

import Plotsale from "../plotsale/Plotsale";
import Rentals from "../rentals/Rentals";

import "./Home.css";
import Landsale from "../landsale/Landsale";
import OtherProperty from "../otherproperty/OtherProperty";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      {/* <Slide /> */}

      <Rentals />

      <Plotsale />
      <Landsale />

      <PostHouse />

      <OtherProperty />
    </div>
  );
};

export default Home;
