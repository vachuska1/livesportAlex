import * as React from "react";
import "./Popup.less";

export const Popup: React.FC = () => {
  return (
    <div className="popup-box">
      <div className="box">
        <div className="textcont">
          <div className="search">Vyhledávání</div>
          <input type="text" className="input" value="zadejte hledaný text" />
          <div className="info">
            Zadejte alespoň 3 znaky. Výsledky se zde začnou ihned zobrazovat.
          </div>
          <div className="recommended">Doporučeno pro vás</div>
          <div className="team"></div>
        </div>
      </div>
    </div>
  );
};
