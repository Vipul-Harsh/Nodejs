import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import TodoEdit from "./TodoEdit";
uuidv4();
const TodoWrapper = () => {
  const [Task, setTask] = useState([]);
  const addtask = (todo) => {
    setTask([
      ...Task,
      { id: uuidv4(), task: todo, completed: false, isedit: false },
    ]);
    console.log(Task);
  };
  const toggleComplete = (id) => {
    setTask(
      Task.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };
  const deletetodo = (id) => {
    setTask(Task.filter((todo) => todo.id !== id));
  };
  const edit = (id) => {
    setTask(
      Task.map((todo) =>
        todo.id === id ? { ...todo, isedit: !todo.isedit } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTask(
      Task.map((todo) =>
        todo.id === id ? { ...todo, task, isedit: !todo.isedit } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1>Today's Work</h1>
      <TodoForm addtask={addtask} />
      {Task.map((todo, index) =>
        todo.isedit ? (
          <TodoEdit edit={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deletetodo={deletetodo}
            edit={edit}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
