import Logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
// import "./Center.css";

const Center = () => {
  const nav = useNavigate();

  return (
    <div className="w-full h-full flex items-center justify-between px-4">
      <div className="flex-1"></div>
      <div className="flex justify-center flex-1 cursor-pointer">
        <img src={Logo} onClick={() => nav(`/`)} />
      </div>
      <div className="flex justify-end flex-1 mr-8">
        <div className="flex items-center border-2 border-gray-100">
          <input type="text" className="" placeholder="검색" />
          <button className="bg-black text-white h-full w-5 grid place-content-center">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Center;
