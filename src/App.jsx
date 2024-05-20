import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Marked, marked } from "marked";

import "./App.css";
marked.setOptions({
  breaks: true,
});


// defaultMarkdown contains valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
const markdownText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![fcc Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png "Markdown Logo")

`;

function App() {
  const [text, setText] = useState (markdownText);
  const [isFullEditor, setIsFullEditor] = useState (false);
  const [isFullpreview, setisFullPreview] = useState (false);


 function editor(a) {
  let e =document.getElementById("editor-box")
  let p =document.getElementById("preview-box")
  let pp =document.getElementById("pre-name")
  let ee =document.getElementsByClassName("torque")
  let eee =document.getElementById("editor")
  let eeee =document.getElementById("edior")




  if (a === "editor"  ) {
    if (!isFullEditor) {
      
ee[0].innerText = "close"
p.style.display = "none"

eee.style.wdth = 100 + "%"
eee.style.height = 65 + "rem"
setIsFullEditor(true)
  } else  {
    ee[0].innerHTML = "maximise"
p.style.display = "block"



eee.style.widh = 13 + "rem"
eee.style.height = 120 + "px"
setIsFullEditor(false)

  } } else {
    if (!isFullpreview) {
      ee[1].innerHTML = "close"
      e.style.display = "none"
      
      
      p.style.widh = 100 + "%"
      p.style.height = 100 + "%"
      setisFullPreview(true)
        } else  {
          ee[1].innerHTML = "maximise"
      e.style.display = "block"
      
      
      
      setisFullPreview(false)
        }
  }


 }
  return (
    <>
      <div id="container">
      

      
        <h1 id="title">Markdown Previewer</h1>
        <div id="box">
          <div id="editor-box">
          <div className="header">
          <div className="name">yousay</div>
          <div className="torque" onClick={() => editor("editor")}>maximise</div>
          </div>
          <textarea
            
            id="editor"
            
            
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          </div>
          <div id="preview-box" >
            <div className="header">
            <div className="name">aysf</div>

            <div className="torque" onClick={() => editor("preview")}>maximise</div>
            </div  >
            <div id="preview" dangerouslySetInnerHTML={{__html:marked(text)}} />
            {/* <div id="preview">
            <ReactMarkdown>{text}</ReactMarkdown>
            </div> */}
          </div>
        </div> 
      </div>
    </>
  );
}

export default App;
