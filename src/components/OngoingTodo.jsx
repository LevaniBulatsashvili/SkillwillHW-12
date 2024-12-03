import React from "react";

const OngoingTodo = ({ todo, action }) => {
  return (
    <div className="ongoing-todos">
      <p>{todo}</p>
      <button onClick={action}>Done</button>
    </div>
  );
};

export default OngoingTodo;
