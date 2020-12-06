import React from "react";
import PropTypes from "prop-types";

//variabel
const Todo = (props) => {
  return (
    <div className="todo">
      <span className="todo-text">{props.text}</span>
    </div>
  );
};

//Deklarasi prop-types
Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
