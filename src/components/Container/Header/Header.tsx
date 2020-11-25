import * as React from "react";
import { useState } from "react";
import "./Header.less";

export const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

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
          <label className="switch">
            <input
              type="checkbox"
              checked={isDark}
              onChange={(event) => setIsDark(!isDark)}
            />
            {/* <div className="changeicon">
              <div className="changeicon changeicon--1"></div>
              <div className="changeicon changeicon--2"></div>
            </div> */}
            <div className="slider slider--round"></div>
          </label>
          <div className="search"></div>
          <div className="setting"></div>
          <div className="login">přihlášení</div>
          <div className="registration">REGISTRACE</div>
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
