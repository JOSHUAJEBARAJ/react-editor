import React from "react";
import { useState, useEffect } from "react";

import VsCode from "./Editor";
import Editor from "@monaco-editor/react";
import Output from "./output";
import { ALL_SECTIONS } from "./sections";
import CountdownApp from "./time";


const BuyMeACoffeeSupport = () => {
  return (
     
    <a href="https://www.buymeacoffee.com/PskV9Rt">
      <img src="img/bmc.PNG" />
    </a>
     
  );
}


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

  function handleTimer(){
    console.log("Hello")
  }
  return (
    <>

    <div className="top">

<p className="title"> 😎 Smart Questions Asking Questions Made Easy</p>
            <CountdownApp/ >






      </div>
      <div className="flexbox-container">
        {/* List  */}
        <div className="list-group">
        <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
   SECTIONS 
  </button>
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

      <div className="top">

<p className="bottom "> Made with ❤️ by  <a href="https://joshuajebaraj.com/"> Joshua Jebaraj</a> </p>






      </div>
    </>
  );
}

export default App;
