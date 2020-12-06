import React from "react";
import PropTypes from "prop-types";
//Membuat fungsi "Paper" yang akan me-return sebuah JSX
//Props = segala hal yang akan di inject pada komponen Paper
//Props = Object berisi children
const Paper = ({ children }) => {
  //Kurung kurawal menandakan notasi Javascript dalam JSX
  //Melakukan wrap pada komponen children
  //Div diberikan style = Apapun yg didalam children akan menjadi React elemen oleh div
  //Memberikan type dan fungsionalitas sama seperti index
  return (
    <div className="container">
      <div className="frame">{children}</div>
    </div>
  );
};

//Prop-types = memberikan typing pada setiap komponen di Paper

//children memiliki 1 dari tipe yang telah didefinisikan
//Hanaya terdiri dari 1 React component, atau sebuah kumpulan array dari React
Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
