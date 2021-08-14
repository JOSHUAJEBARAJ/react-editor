import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'

export default function Output(props) {
  const {
    value
  } = props


  return (
    <>
      <div className="output-container">
        <div className="editor-title">
          OUTPUT
          <button
            onClick={() => navigator.clipboard.writeText(value)}
          >
            Copy
          </button>
        </div>
        <div>
          <ReactMarkdown children={value} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </>
  )
}
