// // import Home from "./home";
// // import Effect from "./effect";
// import { Tooltip } from "bootstrap";
// import { useState } from "react";
// function App() {
//   const [value, setValue] = useState();
//   const [values, setValues] = useState();
//   const [total, setTotal] = useState();
//   const handleChange = (e) => {
//     setValue(e.target.value);
//     totalPrice();
//   };
//   const handleChanges = (e) => {
//     setValues(e.target.value);
//   };
//   const totalPrice = () => {
//     const price = value * values;
//     setTotal(price);
//     totalPrice();
//   };
//   return (
//     <div>
//       {/* <Effect /> */}

//       <input type="text" onChange={handleChange} />
//       <input type="range" step="1" max="10" onChange={handleChanges} />
//       <p>total price :{total}</p>
//       {/* <button onClick={totalPrice}>Add</button> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import Slider from "react-slick";
import Home from "./home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
