import React from "react";
import {useState,useEffect} from 'react'

import VsCode from "./Editor";
import Editor from "@monaco-editor/react";
import Output from "./output";

function App() {

  const [src,setSrc]=useState('')
  const[mark,setMark]=useState('')

  useEffect(()=>{

    const timeout = setTimeout(()=>{
  setSrc(mark)
  
    },250)
    return () => clearTimeout(timeout)

  },[mark])


  return (
    <>

   <div className="pane">
    <VsCode
    
    value={mark}
    changeValue={setMark}/>
    </div>
    <div className="pane">
    <Output value={mark}/>
    </div>
<span > this was created by </span>
</>
  );
}

export default App;