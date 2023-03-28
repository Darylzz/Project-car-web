import "./User.css";
import useAuth from "../../hook/useAuth";
import { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import ManageModal from "./ManageModal/ManageModal";
import * as carApi from "../../api/carApi";

export default function User() {
  const { authenticatedUser, logout } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  const [openManageModal, setOpenManageModal] = useState(false);
  const [allUserCar, setAllUserCar] = useState([]);

  useEffect(() => {
    const fetchUserCar = async () => {
      const res = await carApi.getCarByUserId(authenticatedUser.id);
      // console.log(res.data.car);
      setAllUserCar(res.data.car);
    };
    fetchUserCar();
  }, [authenticatedUser.id]);

  // console.log(allUserCar);

  // console.log(authenticatedUser);

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
        {allUserCar?.map(el => (
          <div className="UserContent" key={el.id}>
            <div className="UserFlex">
              <div className="UserCarImage">
                <img src={process.env.REACT_APP_URL + el.image} alt="" />
              </div>
            </div>
            <div className="UserCarContent">
              <div className="UserFlex">
                <div className="UserCarInfo">
                  <h3>
                    Name: {el.brand} {el.model}
                  </h3>
                  <button onClick={() => setOpenManageModal(true)}>กดเพื่อแก้ไขข้อมูล</button>
                  <ManageModal
                    openManageModal={openManageModal}
                    onClose={() => setOpenManageModal(false)}
                    id={el.id}
                    userId={authenticatedUser.id}
                    CarUserId={el.userId}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
