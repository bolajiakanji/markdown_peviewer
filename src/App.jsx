import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import "./App.css";

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

 function editor(a) {
  let e =document.getElementById("editor")
  let p =document.getElementById("preview")
  if (a === "editor"  ) {
e.innerHTML = "close"
p.style.display = "none"
e.style.cols = 100 + "%"
e.style.rows = 100 + "%"
  } else  {
    p.innerHTML = "close"
e.style.display = "none"


  }


 }
  return (
    <>
      <div id="container">
      
        <h1 id="title">Markdown Previewer</h1>
        <div id="box">
          <div id="editor-tor" onClick={() => editor("editor")}>editor</div>
          <textarea
            
            id="editor"
            cols="30"
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div id="preview" >
            <div id="preview-tor" onClick={() => editor("preview")}>preview</div>
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div> 
      </div>
    </>
  );
}

export default App;
