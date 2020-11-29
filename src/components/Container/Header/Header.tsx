import * as React from "react";
import { useState } from "react";
import "./Header.less";
import { Login } from "./Login/Login";
import { Popup } from "./Popup/Popup";
import { Registration } from "./Registration/Registration";
import { Setting } from "./Setting/Setting";

export const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isChange, setChange] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegistration, setIsOpenRegistration] = useState(false);

  const togglePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };
  const toggleSetting = () => {
    setIsOpenSetting(!isOpenSetting);
  };
  const toggleLogin = () => {
    setIsOpenLogin(!isOpenLogin);
  };
  const toggleRegistration = () => {
    setIsOpenRegistration(!isOpenRegistration);
  };

  const toggleChange = () => {
    if (!isChange) {
      document.body.classList.add("theme--dark");
    } else {
      document.body.classList.remove("theme--dark");
    }
    setChange(!isChange);
    const switcher = document.getElementById("switch")!;
    if (switcher.classList.contains("switch--dark")) {
      switcher.classList.remove("switch--dark");
    } else {
      switcher.classList.add("switch--dark");
    }
    // let change = document.getElementsByClassName("Contentcont");
    // for (let e = 0; e < change.length; e++) {
    //   if (change[e].className.includes("Contentcont--change")) {
    //     change[e].classList.remove("Contentcont--change");
    //   } else change[e].classList.add("Contentcont--change");
    // }
    // let changing = document.getElementsByClassName("Content");
    // for (let i = 0; i < changing.length; i++) {
    //   if (changing[i].className.includes("Content--change")) {
    //     changing[i].classList.remove("Content--change");
    //   } else changing[i].classList.add("Content--change");
    // }
  };

  return (
    <div className="Header">
      <div className="Header Header__up">
        <div className="Header Header__up Header__up--cont">
          Live výsledky, livescore fotbal živě, fotbalové výsledky live
        </div>
      </div>
      <div className="Header Header__middle">
        <div className="Header Header__middle Header__middle--cont">
          <div className="logo"></div>
          <div id={"switch"} className={"switch"} onClick={toggleChange}>
            <div className={"switch__change"} />
          </div>
          <div className="search" onClick={togglePopup}>
            {isOpenPopup && <Popup />}
          </div>
          <div className="setting" onClick={toggleSetting}>
            {isOpenSetting && <Setting />}
          </div>
          <div className="login" onClick={toggleLogin}>
            {isOpenLogin && <Login />}přihlášení
          </div>
          <div className="registration" onClick={toggleRegistration}>
            {isOpenRegistration && <Registration />}REGISTRACE
          </div>
        </div>
      </div>
      <div className="Header Header__down">
        <div className="Header Header__down Header__down--cont">
          <div className="sport">
            <div className="football">
              <div className="football football--icon"></div>
              <div className="football football--name">FOTBAL</div>
              <div className="football football--count">102</div>
            </div>
            <div className="hockey">
              <div className="hockey hockey--icon"></div>
              <div className="hockey hockey--name">HOKEJ</div>
              <div className="hockey hockey--count">102</div>
            </div>
            <div className="tennis">
              <div className="tennis tennis--icon"></div>
              <div className="tennis tennis--name">TENIS</div>
              <div className="tennis tennis--count">102</div>
            </div>
            <div className="basketball">
              <div className="basketball basketball--icon"></div>
              <div className="basketball basketball--name">BASKETBAL</div>
              <div className="basketball basketball--count">102</div>
            </div>
            <div className="handball">
              <div className="handball handball--icon"></div>
              <div className="handball handball--name">HÁZENÁ</div>
              <div className="handball handball--count">102</div>
            </div>
            <div className="volleyball">
              <div className="volleyball volleyball--icon"></div>
              <div className="volleyball volleyball--name">VOLEJBAL</div>
              <div className="volleyball volleyball--count">102</div>
            </div>
          </div>
          <div className="othersport">
            <div className="othersport othersport--icon"></div>
            <div className="othersport othersport--name">DALŠÍ SPORTY</div>
          </div>
        </div>
      </div>
    </div>
  );
};
