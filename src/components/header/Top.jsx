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
  const username = useSelector(selectUsername);
  const status = useSelector(selectStatus);

  return (
    <div className="Top">
      <div className="Favorites">
        <Button text={"★ 즐겨찾기"} onClick={() => nav("/favorites")} />
      </div>
      <div className="User">
        {status === "logout" ? (
          <div>
            <Button
              text={"회원가입"}
              onClick={(e) => {
                console.log(e);
              }}
            />
            <Button
              text={"로그인"}
              onClick={() => {
                dispatch(login({ id: "123", username: "testUser" }));
              }}
            />
          </div>
        ) : (
          <div>
            <Button
              text={"로그아웃웃"}
              onClick={() => {
                dispatch(logout());
              }}
            />
            <Button
              text={`${username}의 마이페이지`}
              onClick={(e) => {
                console.log(e);
              }}
            />
          </div>
        )}
        <Button
          text={"FAQ"}
          onClick={(e) => {
            console.log(e);
          }}
        />
      </div>
    </div>
  );
};

export default Top;
