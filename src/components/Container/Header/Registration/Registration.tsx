import * as React from "react";
import "./Registration.less";

export const Registration: React.FC = () => {
  return (
    <div className="registration-box">
      <div className="box">
        <div className="boxing">
          <div className="picture">
            <div className="rows">
              <div className="rowone">
                Své nastavení najdete na <br /> všech svých zařízeních
              </div>
              <div className="rowtwo">
                Mějte přehled o zápasech svých <br /> oblíbených týmů
              </div>
              <div className="rowthree">
                Nenechte si ujít žádnou <br /> novinku
              </div>
            </div>
          </div>
          <div className="textcont">
            <div className="login">Registrujte se zdarma</div>
            <div className="facebook">facebook</div>
            <div className="google">google</div>
            <div className="apple">apple</div>
            <input className="email" value="Email" />
            <input className="password" value="Heslo" />
            <div className="logging">Registrovat</div>
          </div>
        </div>
      </div>
    </div>
  );
};
