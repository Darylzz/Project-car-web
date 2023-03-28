import "./ManageModal.css";
import * as carApi from "../../../api/carApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Modal({ openManageModal, onClose, id }) {
  const navigate = useNavigate();

  const [updateCar, setUpdateCar] = useState({
    brand: "",
    model: "",
    image: ""
  });

  const handleClickDelete = async () => {
    await carApi.deleteCarUserById(id);
    navigate(0);
  };

  const handleChangeUpdate = e => {
    setUpdateCar({ ...updateCar, [e.target.name]: e.target.value });
  };

  // console.log(userId, CarUserId);

  const handleUpdateCarForm = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("brand", updateCar.brand);
      formData.append("model", updateCar.model);
      formData.append("image", updateCar.image);
      await carApi.updateCarUser(formData, id);
      setUpdateCar({
        brand: "",
        model: "",
        image: ""
      });
      toast.success("Update car success");
      navigate(0);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      {openManageModal ? (
        <>
          <div className="UserModalContainer">
            <div className="UserModalBox">
              <button onClick={onClose}>X</button>
              <div className="UserModalText">
                <h1>เพิ่มรถของคุณ</h1>
              </div>
              <div className="UserModalFlex">
                <div className="UserModalInput">
                  <form onSubmit={handleUpdateCarForm}>
                    <label>กรุณากรอกยี่ห้อรถยนต์ : </label>
                    <input
                      type="text"
                      placeholder="เช่น BMW BENZ etc."
                      name="brand"
                      value={updateCar.brand}
                      onChange={handleChangeUpdate}
                    />
                    <br />
                    <br />
                    <br />
                    <label>กรุณากรอกรุ่นรถยนต์ : </label>
                    <input
                      type="text"
                      placeholder="เช่น M3 C43 etc."
                      name="model"
                      value={updateCar.model}
                      onChange={handleChangeUpdate}
                    />
                    <br />
                    <br />
                    <br />
                    <label>กรุณาอัปโหลดรูปภาพรถของคุณ :</label>
                    <input
                      type="file"
                      name="image"
                      onChange={e => {
                        if (e.target.files[0]) {
                          setUpdateCar({ ...updateCar, image: e.target.files[0] });
                        }
                      }}
                    />
                    <div className="UserModalInputButton">
                      <button type="submit">Save</button>
                      <button style={{ marginLeft: "30px" }} onClick={onClose}>
                        Cancel
                      </button>
                      <button style={{ marginLeft: "30px" }} onClick={handleClickDelete}>
                        Delete
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
