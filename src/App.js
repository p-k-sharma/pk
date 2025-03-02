import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">PK Sharma</h1>
      <video controls className="video">
        <source src="PKSharmaNaAaye.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;