import { Link } from "react-router-dom";
import car1 from "../../asset/GTR-R35.jpeg";
import car2 from "../../asset/BMW-M3-E92.jpeg";
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
              to="/register"
            >
              Register
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
              to="/login"
            >
              Login
            </Link>
          </div>
        </nav>
        <div className="HeaderBackground">
          <div className="HeaderContentText">
            <h3>Website นี้ทำขึ้นมาเพื่อกลุ่มคนที่ชื่นชอบรถยนต์ และชื่นชอบในการแต่งรถ</h3>
            <p>สมัครสมาชิกเพื่อดูข้อมูล</p>
          </div>
          <div className="HeaderContentInput">
            <form>
              <Link
                style={{
                  padding: "1rem 6rem",
                  background: "red",
                  textDecoration: "none",
                  borderRadius: "4px",
                  color: "#fff"
                }}
                to="/register"
              >
                เริ่มต้นใช้งาน
              </Link>
            </form>
          </div>
        </div>
        <div className="PreContent">
          <div className="PreContentBox1">
            <div className="PreContentFlex">
              <div className="PreContentImage">
                <img src={car1} alt="" />
              </div>
            </div>
            <div className="PreContentFlex">
              <div className="PreContentInfo">
                <p>Name: Nissan GTR R35 Nismo</p>
                <button>กดเพื่ออ่านข้อมูล</button>
              </div>
            </div>
          </div>
          <div className="PreContentBox2">
            <div className="PreContentFlex">
              <div className="PreContentImage">
                <img src={car2} alt="" />
              </div>
            </div>
            <div className="PreContentFlex">
              <div className="PreContentInfo">
                <p>Name: BMW M3 E92</p>
                <button>กดเพื่ออ่านข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="FooterRegister">
            <p>สมัครสมาชิกเพื่อดูข้อมูล</p>
          </div>
          <div className="FooterRegisterInput">
            <form>
              <Link
                style={{
                  padding: "1rem 6rem",
                  background: "red",
                  textDecoration: "none",
                  borderRadius: "4px",
                  color: "#fff"
                }}
                to="/register"
              >
                เริ่มต้นใช้งาน
              </Link>
            </form>
          </div>{" "}
        </footer>
      </div>
    </>
  );
}
