import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="LoginNav">
        <div className="LoginNavLeft">
          <h1>Project Car</h1>
        </div>
        <div className="LoginNavRight">
          <Link
            style={{
              textDecoration: "none",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#333"
            }}
            to="/register"
          >
            สมัครสมาชิก
          </Link>
        </div>
      </div>
      <div className="LoginContainer"></div>
    </>
  );
}
