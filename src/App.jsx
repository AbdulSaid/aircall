import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";

import ActivityDetail from "./ActivityDetail.jsx";
import Footer from "./footer.jsx";
import Inbox from "./Inbox.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Inbox />
      <ActivityDetail />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
