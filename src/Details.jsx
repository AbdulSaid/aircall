import React from "react";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Details() {
  return (
    <div className="cell">
      <div className="flex-row-vcenter">
        <div className="icon">
          <PhoneMissedIcon />
        </div>
        <div className="details flex-col-vsb">
          <div className="group-391 flex-row-hsb">
            <p className="number">+1 647 518 1111</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/XJzzrsF5GqHdV6zq0hI3Po-9%3A13?alt=media&token=8ae870e7-de5d-42cc-941d-05a45a881b5b"
              alt="image not found"
              className="count"
            />
          </div>
          <p className="msg">tried to call on Xavier</p>
        </div>
        <div className="details__right">
          <div className="moreVertIcon">
            <MoreVertIcon />
          </div>
          <p className="time">12:25</p>
          <div className="group-222">
            <p className="time-period">PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
