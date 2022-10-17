import { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  const testing = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      {/* ✅ disable button when input is empty */}
      <div>
        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={testing}
        />
        <button disabled={!message}>Click</button>
      </div>
      <hr />
    </div>
  );
};

export default App;
