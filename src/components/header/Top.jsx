import Button from "../common/Button";
import "../common/Button";
import { useNavigate } from "react-router-dom";

const Top = () => {
  const nav = useNavigate();

  return (
    <div className="Top">
      <div className="Favorites">
        <Button text={"★ 즐겨찾기"} onClick={() => nav("/favorites")} />
      </div>
      <div className="User">
        <Button
          text={"회원가입"}
          onClick={(e) => {
            console.log(e);
          }}
        />
        <Button
          text={"로그인"}
          onClick={(e) => {
            console.log(e);
          }}
        />
        <Button
          text={"마이페이지"}
          onClick={(e) => {
            console.log(e);
          }}
        />
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
