import { Link } from "react-router-dom";
import "./CatCard.css";

const CatCard = ({ item }) => {
  return (
    <Link to="/rentals?cat=rentals">
      <div className="catcard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default CatCard;
