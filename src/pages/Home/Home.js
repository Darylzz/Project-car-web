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
            <Link
              style={{
                padding: "0.5rem 1rem",
                textDecoration: "none",
                color: "#fff",
                background: "red",
                margin: "1rem",
                border: "none",
                borderRadius: "6px"
              }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{
                padding: "0.5rem 1rem",
                textDecoration: "none",
                color: "#fff",
                background: "red",
                margin: "1rem",
                border: "none",
                borderRadius: "6px"
              }}
              to="/"
            >
              Product
            </Link>
            <Link
              style={{
                padding: "0.5rem 1rem",
                textDecoration: "none",
                color: "#fff",
                background: "red",
                margin: "1rem",
                border: "none",
                borderRadius: "6px"
              }}
              to="/"
            >
              Wishlist
            </Link>
            <Link
              style={{
                padding: "0.5rem 1rem",
                textDecoration: "none",
                color: "#fff",
                background: "red",
                margin: "1rem",
                border: "none",
                borderRadius: "6px"
              }}
              to="/"
            >
              Profile
            </Link>
          </div>
        </nav>
        <div className="HeaderBackground">
          <div className="HeaderContentText">
            <h3>Website นี้ทำขึ้นมาเพื่อกลุ่มคนที่ชื่นชอบรถยนต์ และชื่อชอบในการแต่งรถ</h3>
            <p>สมัครสมาชิกเพื่อดูข้อทูล</p>
          </div>
          <div className="HeaderContentInput">
            <input type="email" placeholder="กรุณากรอก E-mail" />
            <button>เริ่มต้นใช้งาน</button>
          </div>
        </div>
      </div>
    </>
  );
}
