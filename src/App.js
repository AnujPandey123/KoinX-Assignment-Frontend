import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import MayLike from "./components/YouMayLike";
import Getstarted from "./components/Getstarted";
import BreadCrumb from "./components/New";
import Info from "./components/Info";

function App() {
  const [paths, setPaths] = useState(["Cryptocurrencies", "Bitcoin"]);
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <BreadCrumb paths={paths} />
      <Main />
      <Info />
      <MayLike />
      <div className="hidden sm:block md:block">
        <Getstarted />
      </div>
    </div>
  );
}

export default App;
