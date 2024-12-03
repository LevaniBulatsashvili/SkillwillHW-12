import React from "react";

const DoneTodos = ({ todo, undoTodo, deleteTodo }) => {
  return (
    <div className="done-todos">
      <p>{todo}</p>
      <div>
        <button onClick={undoTodo}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <button onClick={deleteTodo}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
};

export default DoneTodos;
