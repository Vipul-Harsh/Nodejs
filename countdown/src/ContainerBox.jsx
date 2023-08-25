import React, { useState } from "react";
import "./ContainerBox.css";

const ContainerBox = () => {
  const [Counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(Counter + 1);
  };

  const decrease = () => {
    if (Counter < 0) {
      alert("Count can not be negetive");
    } else {
      setCounter(Counter - 1);
    }
  };
  return (
    <div className="box">
      <div className="inner">
        <div
          style={{
            fontSize: "35px",
            color:"white",
          }}
        >
          {Counter}
        </div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};

export default ContainerBox;
