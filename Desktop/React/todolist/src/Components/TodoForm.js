import React, { useState } from "react";

const TodoForm = ({ addtask }) => {
  const [Data, setData] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    addtask(Data);
    setData("");
  };
  return (
    <div>
      <form className="Todo" onSubmit={handlesubmit}>
        <input
          type="text"
          className="inp"
          value={Data}
          placeholder="Whats Your Task today ?"
          onChange={(e) => {
            setData(e.target.value);
          }}
        ></input>
        <button type="submit" className="btn">
          ADD TASK
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
