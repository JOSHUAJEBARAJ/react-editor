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

  function Add(){
    console.log(mark)
    setMark(prevmark=>prevmark+"Hello")

  }

  return (
    <>
    <h1>Hello</h1>
<div className="flexbox-container">
<div >
    <VsCode
    
    value={mark}
    changeValue={setMark}/>
    </div>
    <div>
    <Output value={mark}/>
    </div>

 {/* List  */}
 <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action active">
   Topics
  </button>
  <button type="button"  onClick={Add} className="list-group-item list-group-item-action">Title</button>
  <button type="button" className="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" className="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" className="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
</div>
</div>
<span > this was created by </span>
</>
  );
}

export default App;