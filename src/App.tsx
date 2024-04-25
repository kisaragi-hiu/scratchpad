import { useState } from "react";
import clsx from "clsx";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import {
  AdjustmentsHorizontalIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";

import { Editor } from "./Editor.tsx";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  const icon = "h-6 w-6 text-black";
  return (
    <div className="m-0 flex flex-col align-center h-full">
      <header
        className={clsx(
          "sticky top-0 z-50 w-full",
          "border-b border-border/40",
          "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          "px-4 mb-2",
        )}
      >
        <div className="flex h-14 max-w-screen-2xl items-center">
          <div className="flex items-center gap-4 text-sm">
            <span>Future functionality</span>
            <AdjustmentsHorizontalIcon className={icon} />
            <ArrowLeftIcon className={icon} />
            <ArrowRightIcon className={icon} />
            <ClipboardIcon className={icon} />
          </div>
        </div>
      </header>
      <div className="px-4 grow">
        <Editor />
      </div>
    </div>
  );
}

export default App;
