import React from "react";
import Routesone from "./Routes";
import Navtop from "./components/Navbar";
import Search from "./pages/Search";


function App() {
  return (
    <div className="container-fluid">
      <Navtop />
      <Routesone />
    </div>
  );
}

export default App;
