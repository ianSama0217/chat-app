import { useState } from "react";
import "./index.scss";

const Login: React.FC = () => {
  const [loginParam, setLoginParam] = useState({
    account: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginParam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log(loginParam);
  };

  return (
    <div className="loginPage">
      <form>
        <label htmlFor="account">account</label>
        <input
          type="text"
          name="account"
          id="account"
          maxLength={16}
          value={loginParam.account}
          onChange={handleChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          maxLength={16}
          value={loginParam.password}
          onChange={handleChange}
        />
        {/* <label htmlFor="">vertify code</label>
        <input type="text" /> */}
        <div className="btn-bar">
          <button type="button" onClick={handleLogin}>
            Login in
          </button>
          <button type="button">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
