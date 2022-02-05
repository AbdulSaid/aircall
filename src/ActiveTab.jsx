import React from "react";

function ActiveTab(props) {
  return (
    <div className="active__tab">
      <p className="active__tab__text">{props.name}</p>
      <div className="active__tab__line"></div>
    </div>
  );
}

export default ActiveTab;
