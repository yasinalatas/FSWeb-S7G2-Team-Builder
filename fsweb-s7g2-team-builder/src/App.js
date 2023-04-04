import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Form from "./Comps/Form";

function App() {
  const [Uyeler, setUyeler] = useState([
    { name: "İlhan", email: "ilhan.mansiz@example.com", role: "Developer" },
    {
      name: "Sergen",
      email: "segen.yalcin@example.com",
      role: "Product Manager",
    },
  ]);

  const addMember = (member) => {
    setUyeler([...Uyeler, member]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addMember={addMember} />
      <ul></ul>
    </div>
  );
}

export default App;
