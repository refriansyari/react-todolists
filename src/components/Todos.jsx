import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Learning React!"
    },
    {
      text: "Learning Props in React!"
    },
    {
      text: "Learning React Hooks!"
    },
    {
      text: "Learning React State!"
    },
    {
      text: "Learning React!"
    },
    {
      text: "Learning React!"
    },
    {
      text: "Learning Props in React!"
    },
    {
      text: "Learning React Hooks!"
    },
    {
      text: "Learning React State!"
    },
    {
      text: "Learning React!"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;

//hardcode
{
  /* <section className="todos">
      <div className="todo">
        <span className="todo-text">Learning React</span>
      </div>
      <div className="todo">
        <span className="todo-text">Learning React</span>
      </div>
      <div className="todo">
        <span className="todo-text">Learning React</span>
      </div>
      <div className="todo">
        <span className="todo-text">Learning React</span>
      </div>

      <div className="todo">
        <span className="todo-text">Learning React</span>
      </div>

      <div className="todo">
        <span className="todo-text">Learning React</span>
      </div>
      <div className="todo">
        <span className="todo-text">Learning React</span>
      </div>
      <div className="todo">
        <span className="todo-text">Learning React</span>
      </div>
      <div className="todo">
        <span className="todo-text">Learning React</span>
      </div>
    </section> */
}
