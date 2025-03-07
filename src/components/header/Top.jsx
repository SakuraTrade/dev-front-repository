import Button from "../Button";
import "./Top.css";

const Top = () => {
  return (
    <div className="Top">
      <div className="Favorites">
        <Button
          text={"★ 즐겨찾기"}
          onClick={(e) => {
            console.log(e);
          }}
        />
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
