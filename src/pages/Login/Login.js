import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth;

  // const handleChangeLogin = e => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };

  const handleSubmitLoginForm = async e => {
    try {
      e.preventDefault();
      await login(inputEmail, inputPassword);
      toast.success("Login success");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

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
              <form onSubmit={handleSubmitLoginForm}>
                <input
                  type="text"
                  placeholder="กรุณากรอกอีเมล"
                  name="email"
                  value={inputEmail}
                  onChange={e => setInputEmail(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  placeholder="กรุณากรอกรหัสผ่าน"
                  name="password"
                  value={inputPassword}
                  onChange={e => setInputPassword(e.target.value)}
                />
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
