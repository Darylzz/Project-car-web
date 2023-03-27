import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="RegisterNav">
        <div className="RegisterNavLeft">
          <h1>Project Car</h1>
        </div>
        <div className="RegisterNavRight">
          <Link
            style={{
              textDecoration: "none",
              color: "#333",
              fontSize: "1.5rem",
              fontWeight: "bold"
            }}
            to="/login"
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      </div>
      <div className="RegisterContainer">
        <div className="RegisterInfo">
          <div className="RegisterText">
            <h1>
              สร้างรหัสผ่านเพื่อการ <br />
              เริ่มต้นเป็นสมาชิก
            </h1>
          </div>
          <div className="RegisterInput">
            <form>
              <p>E-mail: a@gmail.com</p>
              <input type="password" placeholder="กรุณากรอกรหัสผ่าน" />
              <br />
              <input type="password" placeholder="กรุณายืนยันรหัสผ่าน" />
              <br />
              <button>สมัครสมาชิก</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
