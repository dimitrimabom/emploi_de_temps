import React from "react";

const TopBar = () => {
  return (
    <div className="top_bar">
      <i
        className="fa fa-angle-left"
        onClick={() =>
          window.location.assign(import.meta.env.VITE_REACT_APP_UI_HOME)
        }
      ></i>
      <div className="arian">
        <strong>Accueil</strong>
      </div>
    </div>
  );
};

export default TopBar;
