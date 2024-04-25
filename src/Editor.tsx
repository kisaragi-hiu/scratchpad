import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";
import clsx from "clsx";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

export function Editor() {
  const initialConfig = {
    namespace: "Scratchpad",
    theme: { ltr: "align-left", rtl: "align-right", paragraph: "" },
    onError(err) {
      console.error(err);
    },
  };

  const textClass = "text-sm";

  return (
    <div className="relative h-full">
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className={clsx(
                "h-full",
                "bg-transparent",
                textClass,
                "disabled:cursor-not-allowed disabled:opacity-50",
                "focus-visible:outline-none",
              )}
            />
          }
          placeholder={
            <div
              className={clsx(
                "absolute pointer-events-none top-0 text-gray-400 dark:gray-400",
                textClass,
              )}
            >
              Write something into the scratchpad...
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </LexicalComposer>
    </div>
  );
}
