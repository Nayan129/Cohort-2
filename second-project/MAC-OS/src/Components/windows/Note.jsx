// before writing anything in this file install markdown package so that we can access note.txt content in it by using : ----        "npm i react-markdown".

import { useEffect, useState } from "react";
import Markdown from "react-markdown";

// this two packages for highlighting terminal notes

import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MacWindow from "./MacWindow";
import "./note.scss";

const Note = () => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <MacWindow>
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
