import React from "react";
import "./styles.css";

// Menjalankan fungsi yang mereturn skrip JSX
// Deklarasi sebuah variabel bernama App
// export default berfungsi mengeksport file ke directory lain untuk di import
export default function App() {
  // JSX skrip not JS
  return (
    // class to className in JSX
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-btn main-black-color">Add</button>
          <h1 className="header-title">ToDo Lists</h1>
          <button className="header-btn main-red-color">Clear</button>
        </section>

        <section className="add">
          <form className="add-form">
            <input type="text" className="add-input" />
            <button className="add-button main-black-color">Add</button>
          </form>
        </section>
        <section className="todos">
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
        </section>
      </div>
    </div>
  );
}
