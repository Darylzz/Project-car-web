import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="HomeContainer">
        <nav>
          <div className="navLeft">
            <h1>Project Car</h1>
          </div>
          <div className="navRight">
            <Link style={{ padding: "1rem" }} to="/">
              Home
            </Link>
            <Link style={{ padding: "1rem" }} to="/">
              Product
            </Link>
            <Link style={{ padding: "1rem" }} to="/">
              Wishlist
            </Link>
            <Link style={{ padding: "1rem" }} to="/">
              Profile
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
