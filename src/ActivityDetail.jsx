import React from "react";

function ActivityDetail(props) {
  return (
    <div className="activityDetail">
      <div className="activity__left">
        <i class="fas fa-phone-alt"></i>
      </div>
      <div className="activity__middle">
        <p>+14161234567</p>
        <p>Tried to call on John</p>
      </div>
      <div className="activity__right">
        <p>7:59</p>
        <p>PM</p>
      </div>
    </div>
  );
}

export default ActivityDetail;
