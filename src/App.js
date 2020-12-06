import React from "react";
import "./styles.css";

//Import variabel JSX ke dari file directory yang telah dibuat
import TodoList from "./pages/TodoList";

// Menjalankan fungsi yang mereturn skrip JSX
// Deklarasi sebuah variabel bernama App
// export default berfungsi mengeksport file ke directory lain untuk di import
export default function App() {
  // JSX skrip not JS
  return (
    // class to className in JSX
    //Komponen Paper untuk mengganti 2 div yang me-wrap seluruh section
    //Simplifikasi komponen JS ke dalam beberapa komponen React
    //Setiap komponen react dapat di import ke page yang kita inginkan
    <TodoList />
  );
}
