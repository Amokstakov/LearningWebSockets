import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import "./App.css";

const ENDPOINT = "http://127.0.0.1:5001";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("From API", (data: any) => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}

export default App;
