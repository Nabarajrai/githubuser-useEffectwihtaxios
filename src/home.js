import React from "react";
import useToggle from "./toggle/useToggle";

const Home = () => {
  const [email, handleEmail, submitEmail] = useToggle("");
  const [value, handleInput, submitInput] = useToggle("");
  return (
    <div>
      <h2>
        Email :{email} && Password:{value}{" "}
      </h2>
      <input type="text" value={email} onChange={handleEmail} />
      <input type="text" onChange={handleInput} value={value} />
      <button onClick={submitEmail}>Submit</button>
      <button onClick={submitInput}>Submit</button>
    </div>
  );
};

export default Home;
