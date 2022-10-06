import React from "react";

export default function RoleSpecific({ roleValue }) {
  const check = roleValue.value || roleValue;

  switch (check) {
    case "10":
      return case10();
    case "30":
      return case30();
    case "80":
      return case80();
    case "110":
      return case110();
    default:
      return <h1>There has been a problem there chief</h1>;
  }
}

function case10() {
  return <p>Cool</p>;
}

function case30() {
  return (
    <div className="container">
      <p>Cooler</p>;
    </div>
  );
}

function case80() {
  return (
    <div className="container">
      <p>Amazing bro</p>;
    </div>
  );
}

function case110() {
  return (
    <div className="container">
      <p>MACHINE MAN</p>;
    </div>
  );
}
