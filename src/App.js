import { react, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import NoPlayer from "./components/NoPlayer";
import AddPlayerBtn from "./components/AddPlayerBtn";
import PlayerCard from "./components/PlayerCard";
import View1 from "./components/View1";
import DeleteAll from "./components/DeleteAll";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container bodyy">
        <View1 />
        {/* <DeleteAll DeleteCards={DeleteCards} /> */}
      </div>
    </div>
  );
}

export default App;
