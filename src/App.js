import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFullName(`${event.target[0].value} ${event.target[1].value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Full Name Display</h2>
      <label>First Name:</label>
      <input name="fname" required />
      <br />
      <label>Last Name:</label>
      <input name="lname" required />
      <br />
      <button type="submit">Submit</button>
      {!!fullName?.length && <p>Full Name: {fullName}</p>}
    </form>
  );
}

export default App;
