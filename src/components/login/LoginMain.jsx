import "./LoginMain.css";

const LoginMain = ({ onSubmitHandler }) => {
  return (
    <div className="LoginMain">
      <h2>Login</h2>
      <form id="login-form" onSubmit={(e) => onSubmitHandler(e)}>
        <input type="text" name="userId" placeholder="Email" />
        <input type="password" name="userPassword" placeholder="Password" />
        <label htmlFor="remember-check">
          <input type="checkbox" id="remember-check" />
          아이디 저장하기
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginMain;
