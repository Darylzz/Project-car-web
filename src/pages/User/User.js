import "./User.css";
import useAuth from "../../hook/useAuth";
import carGTR from "../../asset/GTR-R35.jpeg";
import { useState } from "react";
import Modal from "./Modal/Modal";

export default function User() {
  const { logout } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="UserNav">
        <div className="UserNavLeft">
          <h1>Project Car</h1>
        </div>
        <div className="UserNavRight">
          <button onClick={() => setOpenModal(true)}>เพิ่มรถของคุณ</button>
          <Modal openModal={openModal} onClose={() => setOpenModal(false)} />
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="UserContainer">
        <div className="UserContent">
          <div className="UserFlex">
            <div className="UserCarImage">
              <img src={carGTR} alt="" />
            </div>
          </div>
          <div className="UserCarContent">
            <div className="UserFlex">
              <div className="UserCarInfo">
                <h3>Name: GTR R35 Nismo</h3>
                <button>กดเพื่ออ่านข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
