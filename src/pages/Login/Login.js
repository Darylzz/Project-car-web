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
      <div className="LoginContainer">
        <div className="LoginBox">
          <div className="LoginFlex">
            <div className="LoginText">
              <h1>กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ</h1>
            </div>
          </div>
          <div className="LoginInput">
            <div className="LoginFlex">
              <form>
                <input type="email" placeholder="กรุณากรอกอีเมล" />
                <br />
                <input type="password" placeholder="กรุณากรอกรหัสผ่าน" />
                <br />
                <button>เข้าสู่ระบบ</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
