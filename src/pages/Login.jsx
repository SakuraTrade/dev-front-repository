import LoginMain from "./../components/login/LoginMain";
import { useDispatch } from "react-redux";
import { login } from "../context/loginSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userId = formData.get("userId");
    const userPassword = formData.get("userPassword");

    if (!userId || !userPassword) {
      alert("이메일과 비밀번호를 입력하세요.");
      return;
    }

    dispatch(login({ id: userId, userName: userId }));
    nav(-1);
  };

  return <LoginMain onSubmitHandler={onSubmit} />;
};

export default Login;
