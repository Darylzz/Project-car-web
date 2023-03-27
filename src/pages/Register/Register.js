import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import validateRegister from "../../validator/registerValidate";
import * as authApi from "../../api/authApi";

export default function Register() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleChangeRegisterInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitRegisterForm = async e => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
      }
      await authApi.register(input);
      setInput({});
      toast.success("Success Register");
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  console.log(input);

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
          <div className="input">
            <form onSubmit={handleSubmitRegisterForm}>
              <input
                type="text"
                placeholder="กรุณากรอกอีเมล"
                value={input.email}
                name="email"
                onChange={handleChangeRegisterInput}
                error={error.email}
              />
              <br />
              <input
                type="password"
                placeholder="กรุณากรอกรหัสผ่าน"
                value={input.password}
                name="password"
                onChange={handleChangeRegisterInput}
                error={error.password}
              />
              <br />
              <input
                type="password"
                placeholder="กรุณายืนยันรหัสผ่าน"
                value={input.confirmPassword}
                name="confirmPassword"
                onChange={handleChangeRegisterInput}
                error={error.confirmPassword}
              />
              <br />
              <button>สมัครสมาชิก</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
