import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
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
      <input onChange={getName} type="text" placeholder="What's your name?" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
