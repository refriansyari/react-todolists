import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  //Value = Object/variable berisikan data array todoForm
  //setValue = Function untuk mengatur Value

  //useState = Hooks methode - database lokal
  const [value, setValue] = useState("");

  //submit sebuah state diluar todoForm saat menekan tombol add
  //menerima event yang akan di passing-dari jsx
  const handleFormSubmit = (e) => {
    //prevent default behavior dari submit page = refresh page
    e.preventDefault();

    if (!value) {
      alert("No blank todo!!");

      return;
    }

    addTodo(value);
    //dummy untuk menampilkan hasil submit pada browser
    alert(value);

    //set value setelah mengisi agar tulisan hilang dari form
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-button main-black-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
