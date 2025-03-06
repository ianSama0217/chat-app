import { useState } from "react";
import "./index.scss";

const Signup: React.FC = () => {
  const [signupParam, setSignupParam] = useState({
    email: "",
    account: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupParam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log(signupParam);
  };

  return (
    <div className="signupPage">
      <form>
        <label htmlFor="email">信箱</label>
        <input
          type="email"
          name="email"
          id="email"
          value={signupParam.email}
          onChange={handleChange}
        />
        <label htmlFor="account">帳號</label>
        <input
          type="text"
          name="account"
          id="account"
          maxLength={16}
          value={signupParam.account}
          onChange={handleChange}
        />
        <label htmlFor="password">密碼</label>
        <input
          type="password"
          name="password"
          id="password"
          maxLength={16}
          value={signupParam.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">確認密碼</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          maxLength={16}
          value={signupParam.confirmPassword}
          onChange={handleChange}
        />
        <div className="btn-bar">
          <button type="button" onClick={handleLogin}>
            確認
          </button>
          <button type="button">取消</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
