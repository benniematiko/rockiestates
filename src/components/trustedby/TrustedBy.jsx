import { Link } from "react-router-dom"
import "./TrustedBy.css"

const TrustedBy = () => {
  return (
    <div className="trustedby">

      <div className="container">

        <span>Trusted by: </span>
        <Link>NBCL </Link>
        <Link>King Fish </Link>
        <Link>Gold Crest </Link>

      </div>
      
    </div>
  )
}

export default TrustedBy
