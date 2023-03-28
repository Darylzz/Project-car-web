import "./Modal.css";

export default function Modal({ openModal, onClose }) {
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
