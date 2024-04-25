import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";
import clsx from "clsx";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ClickableLinkPlugin from "@lexical/react/LexicalClickableLinkPlugin";
import { AutoLinkPlugin } from "@lexical/react/LexicalAutoLinkPlugin";
import { AutoLinkNode } from "@lexical/link";
const URL_MATCHER =
  /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&\/\/=]*)/;

const MATCHERS = [
  (text: string) => {
    const match = URL_MATCHER.exec(text);
    if (match === null) {
      return null;
    }
    const fullMatch = match[0];
    return {
      index: match.index,
      length: fullMatch.length,
      text: fullMatch,
      url: fullMatch.startsWith("http") ? fullMatch : `https://${fullMatch}`,
      // attributes: { rel: 'noreferrer', target: '_blank' }, // Optional link attributes
    };
  },
];

export function Editor() {
  const initialConfig = {
    namespace: "Scratchpad",
    theme: { ltr: "align-left", rtl: "align-right", paragraph: "" },
    onError(err: unknown) {
      console.error(err);
    },
    nodes: [AutoLinkNode],
  };

  /** Class that applies to both the contentEditable and the placeholder */
  const textClass = "";

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
                "prose",
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
        <ClickableLinkPlugin />
        <AutoFocusPlugin />
        <AutoLinkPlugin matchers={MATCHERS} />
      </LexicalComposer>
    </div>
  );
}
