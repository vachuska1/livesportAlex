import * as React from "react";
import "./Login.less";

export const Login: React.FC = () => {
  return (
    <div className="login-box">
      <div className="box">
        <div className="textcont">
          <div className="login">Přihlášení</div>
          <div className="facebook">facebook</div>
          <div className="google">google</div>
          <div className="apple">apple</div>
          <input className="email" value="Email" />
          <input className="password" value="Heslo" />
          <div className="logging">Přihlásit</div>
        </div>
      </div>
    </div>
  );
};
