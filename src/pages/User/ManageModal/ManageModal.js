import "./ManageModal.css";
import * as carApi from "../../../api/carApi";
import { useNavigate } from "react-router-dom";

export default function Modal({ openManageModal, onClose, id }) {
  const navigate = useNavigate();

  const handleClickDelete = async () => {
    await carApi.deleteCarUserById(id);
    navigate(0);
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
                  <form>
                    <label>กรุณากรอกยี่ห้อรถยนต์ : </label>
                    <input type="text" placeholder="เช่น BMW BENZ etc." />
                    <br />
                    <br />
                    <br />
                    <label>กรุณากรอกรุ่นรถยนต์ : </label>
                    <input type="text" placeholder="เช่น M3 C43 etc." />
                    <br />
                    <br />
                    <br />
                    <label>กรุณาอัปโหลดรูปภาพรถของคุณ :</label>
                    <input type="file" />
                    <div className="UserModalInputButton">
                      <button>Save</button>
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
