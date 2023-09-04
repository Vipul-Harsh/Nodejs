import React, { useState } from "react";

const TodoEdit = ({ edit, task }) => {
  const [Data, setData] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    edit(Data, task.id);
    setData("");
  };
  return (
    <div>
      <form className="Todo" onSubmit={handlesubmit}>
        <input
          type="text"
          className="inp"
          value={Data}
          placeholder="Update your task"
          onChange={(e) => {
            setData(e.target.value);
          }}
        ></input>
        <button type="submit" className="btn">
          UPDATE TASK
        </button>
      </form>
    </div>
  );
};

export default TodoEdit;
