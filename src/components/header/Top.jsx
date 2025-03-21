import Button from "../common/Button";
import "../common/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  logout,
  selectUsername,
  selectStatus,
} from "../../context/loginSlice";

const Top = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  return (
    <div className="flex justify-evenly border-b-1 border-gray-300">
      <div className="flex-1">
        <Button text={"★ 즐겨찾기"} onClick={() => nav("/favorites")} />
      </div>
      <div className="flex">
        {status === "logout" ? (
          <div className="logout">
            <Button
              text={"회원가입"}
              onClick={(e) => {
                nav("/signup");
              }}
            />
            <Button
              text={"로그인"}
              onClick={() => {
                nav("/login");
              }}
            />
          </div>
        ) : (
          <div className="login">
            <Button
              text={"로그아웃"}
              onClick={() => {
                dispatch(logout());
              }}
            />
            <Button
              text={"장바구니"}
              onClick={() => {
                nav("/carts");
              }}
            />
            <Button
              text={`마이페이지`}
              onClick={(e) => {
                console.log(e);
              }}
            />
          </div>
        )}
        <div>
          <Button
            text={"FAQ"}
            onClick={(e) => {
              console.log(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Top;
