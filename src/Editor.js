import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

export default function VsCode(props) {
  const { value, changeValue } = props;

  function handleChange(newValue, e) {
    //  console.log(newValue)
    changeValue(newValue);
  }
  return (
    <>
      <div className="editor-container">
        <Editor
          onChange={handleChange}
          height="90vh"
          width="100%"
          theme="vs-dark"
          defaultLanguage="markdown"
          //  defaultValue="test"
          value={value}
        />
      </div>
    </>
  );
}
