import "./User.css";
import useAuth from "../../hook/useAuth";

export default function User() {
  const { logout } = useAuth();

  return (
    <>
      <div className="UserNav">
        <div className="UserNavLeft">
          <h1>Project Car</h1>
        </div>
        <div className="UserNavRight">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  );
}
