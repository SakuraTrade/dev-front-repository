import Logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Center.css";

const Center = () => {
  const nav = useNavigate();

  return (
    <div className="Center">
      <div className="logo_wrapper">
        <img src={Logo} onClick={() => nav(`/`)} />
      </div>
      <div className="search_wrapper">
        <input type="text" />
        <button>🔍</button>
      </div>
    </div>
  );
};

export default Center;
