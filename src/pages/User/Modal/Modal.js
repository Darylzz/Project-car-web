import "./Modal.css";
import * as carApi from "../../../api/carApi";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ openModal, onClose }) {
  const [addCar, setAddCar] = useState({
    brand: "",
    model: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChangeInputAddCar = e => {
    setAddCar({ ...addCar, [e.target.name]: e.target.value });
  };

  const handleSubmitAddCarForm = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("brand", addCar.brand);
      formData.append("model", addCar.model);
      formData.append("image", addCar.image);
      await carApi.userAddCar(formData);
      setAddCar({
        brand: "",
        model: "",
        image: ""
      });
      toast.success("Add car success");
      navigate(0);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      {openModal ? (
        <>
          <div className="UserModalContainer">
            <div className="UserModalBox">
              <button onClick={onClose}>X</button>
              <div className="UserModalText">
                <h1>เพิ่มรถของคุณ</h1>
              </div>
              <div className="UserModalFlex">
                <div className="UserModalInput">
                  <form onSubmit={handleSubmitAddCarForm}>
                    <label>กรุณากรอกยี่ห้อรถยนต์ : </label>
                    <input
                      type="text"
                      placeholder="เช่น BMW BENZ etc."
                      name="brand"
                      value={addCar.brand}
                      onChange={handleChangeInputAddCar}
                    />
                    <br />
                    <br />
                    <br />
                    <label>กรุณากรอกรุ่นรถยนต์ : </label>
                    <input
                      type="text"
                      placeholder="เช่น M3 C43 etc."
                      name="model"
                      value={addCar.model}
                      onChange={handleChangeInputAddCar}
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
                          setAddCar({ ...addCar, image: e.target.files[0] });
                        }
                      }}
                    />
                    <div className="UserModalInputButton">
                      <button>Save</button>
                      <button style={{ marginLeft: "30px" }} onClick={onClose}>
                        Cancel
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
