import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

import { Editor } from "./Editor.tsx";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="m-0 px-4 flex flex-col align-center h-full">
      <div>Anything here </div>
      <div className="grow">
        <Editor />
      </div>
    </div>
  );
}

export default App;
