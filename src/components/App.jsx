import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
  };
  return (
    <div className="container">
      <h1>
        {}Hello {name}
      </h1>
      <p>
        {submittedName
          ? `"${submittedName}" was submitted successfully.`
          : null}
      </p>
      <form onClick={handleSubmit}>
        <input onChange={getName} type="text" placeholder="What's your name?" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
