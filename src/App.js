import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/router";

function App() {
  return (
    <div>
      <Router />
      <ToastContainer position="bottom-center" autoClose={2000} theme="light" />
    </div>
  );
}

export default App;
