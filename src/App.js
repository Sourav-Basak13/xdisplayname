import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFullName(`${event.target[0].value} ${event.target[1].value}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <div>
          <label>First Name:</label>
          <input type="text" name="fname" required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lname" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {!!fullName?.length && <p>Full Name: {fullName}</p>}
    </>
  );
}

export default App;
