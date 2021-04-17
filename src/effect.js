import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
const Effect = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    async function getData() {
      let url = `  https://api.github.com/users/${name}`;
      //   let url = "https://api.github.com/users/${name}";
      const response = await axios.get(url);
      const data = response.data;
      setImg(data.avatar_url);
      console.log(response);
    }
    getData();
  });
  return (
    <div className="App">
      <h2>You choose :{name}</h2>
      <img src={img} alt={name} />
      <select value={name} onChange={handleChange}>
        <option>nabarajrai</option>
        <option>rameshsyn</option>
        <option>colt</option>
      </select>
    </div>
  );
};

export default Effect;
