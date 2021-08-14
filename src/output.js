import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import gfm from 'remark-gfm'
import "github-markdown-css/github-markdown.css";


export default function Output(props) {
    const {
        value
    }=props
    return (
        <>
         <div className="output-container markdown-body"> 
                <div className="editor-title">
              OUTPUT 
              <button 
  onClick={() =>  navigator.clipboard.writeText(value)}
>
  Copy
</button>
            </div>
        <div>
            <ReactMarkdown children={value} remarkPlugins={[gfm]} ></ReactMarkdown>
            </div>
        </div>
   </>
    )
}
