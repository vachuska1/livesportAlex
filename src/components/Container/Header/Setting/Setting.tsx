import * as React from "react";
import "./Setting.less";

export const Setting: React.FC = () => {
  return (
    <div className="setting-box">
      <div className="box">
        <div className="textcont">
          <div className="setting">Nastavení</div>
          <div className="result">Obecný výpis výsledků</div>
          <div className="classify">Řadit zápasy podle:</div>
          <div className="nametime">
            <input type="radio" checked />
            <div className="name">Názvu soutěže</div>
            <input type="radio" className="radio" />
            <div className="time">Času začátku zápasu</div>
          </div>
          <div className="result">Moje zápasy</div>
          <div className="classify">Umožnit řazení do skupin:</div>
          <div className="nametime">
            <input type="radio" />
            <div className="name">Ano</div>
            <input type="radio" checked className="radio" />
            <div className="time">Ne</div>
          </div>
          <div className="classify">
            Zobrazovat notifikace v levém dolním rohu obrazovky:
          </div>
          <div className="nametime">
            <input type="radio" />
            <div className="name">Ano, se zvukem</div>
            <input type="radio" checked className="radio" />
            <div className="name">Ano, bez zvuku</div>
            <input type="radio" className="radio" />
            <div className="time">Ne</div>
          </div>
        </div>
      </div>
    </div>
  );
};
