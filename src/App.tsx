import clsx from "clsx";
import {
  AdjustmentsHorizontalIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ClipboardIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

import { Editor } from "./Editor.tsx";

function App() {
  const icon = "h-6 w-6 text-black dark:text-white";
  return (
    <div className="m-0 flex flex-col align-center h-full">
      <header
        className={clsx(
          "sticky top-0 z-50 w-full",
          "border-b border-gray-300 dark:border-gray-400/40",
          "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          "px-4 mb-2",
        )}
      >
        <div className="flex h-14 max-w-screen-2xl items-center">
          <div className="flex items-center gap-1 text-sm">
            <span>Future functionality</span>
            <button className="iconButton">
              <AdjustmentsHorizontalIcon className={icon} />
            </button>
            <button className="iconButton">
              <ArrowLeftIcon className={icon} />
            </button>
            <button className="iconButton">
              <ArrowRightIcon className={icon} />
            </button>
            <button className="iconButton">
              <ClipboardIcon className={icon} />
            </button>
            <button className="iconButton">
              <InformationCircleIcon className={icon} />
            </button>
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
