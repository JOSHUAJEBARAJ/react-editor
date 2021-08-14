import React from "react";
import { useState, useEffect } from "react";

import VsCode from "./Editor";
import Editor from "@monaco-editor/react";
import Output from "./output";
import { ALL_SECTIONS } from "./sections";

function App() {
  const [src, setSrc] = useState("");
  const [mark, setMark] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(mark);
    }, 250);
    return () => clearTimeout(timeout);
  }, [mark]);

  function Add(selectedSection) {
    console.log(selectedSection);
    setMark((currentMark) => currentMark + selectedSection.content);
  }

  return (
    <>
      <h1>Hello</h1>
      <div className="flexbox-container">
        {/* List  */}
        <div className="list-group">
          <h4>Sections</h4>
          {ALL_SECTIONS.map((section) => (
            <button
              type="button"
              onClick={() => Add(section)}
              className="list-group-item list-group-item-action"
            >
              {section.title}
            </button>
          ))}
        </div>

        <div>
          <VsCode value={mark} changeValue={setMark} />
        </div>
        <div>
          <Output value={mark} />
        </div>
      </div>
      <span> this was created by </span>
    </>
  );
}

export default App;
