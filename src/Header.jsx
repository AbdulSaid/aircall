import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FilterListIcon from "@mui/icons-material/FilterList";
import ActiveTab from "./ActiveTab.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__left__icon">
          <LocalPhoneIcon fontSize="small" />
        </div>
        <p>Activity</p>
      </div>
      <div className="header__right">
        <ActiveTab name="Inbox" />
        <p>All Calls</p>
        <div>
          <FilterListIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
