import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Form from "./Comps/Form";

function App() {
  const [Uyeler, setUyeler] = useState([
    { id: 1, name: "İlhan", surname: "Mansiz" },
    { id: 2, name: "Sergen", surname: "Yalcin" },
  ]);

  return (
    <div className="App">
      <h1>Team Members</h1>
      <ul></ul>
    </div>
  );
}

export default App;
