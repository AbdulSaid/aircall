import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import ActivityFeed from "./ActivityFeed.jsx";
import ActivityDetail from "./ActivityDetail.jsx";
import Footer from "./footer.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <ActivityFeed />
      <ActivityDetail />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
