import logo from './logo.svg';
import React, { useState } from 'react';
import './App.scss';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});
const renderer = new marked.Renderer();

//a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text

const initialText = `
# Header

   ## Subheader 

   [a link](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
   \`inlinecode\`

   \`\`\`
   codeblock
   codeblock
   \`\`\`

  1. Ordered List
  2. Ordered List

  - unordered List
  - unordered List
  
  
  > a block quote

  ![alt text](image.jpg)

   
   **bold text**
   `;

function App() {
  const [text, setText] = useState(initialText);

  const parseH = (text) => {
    let htmlText = marked(text, { renderer: renderer });
    return (
      <div id='preview' dangerouslySetInnerHTML={{ __html: htmlText }}></div>
    );
  };

  return (
    <div className='App'>
      <div className='container-fluid gradient-custom'>
        <h2 className='text-center'>Markdown Previewer</h2>
        <div className='row'>
          <div className='col-6'>
            <label for='editor' class='form-label'>
              Enter Markdown
            </label>
            <textarea
              class='input form-control'
              id='editor'
              rows='10'
              onChange={(event) => setText(event.target.value)}
            >
              {initialText}
            </textarea>
          </div>
          <div className='col-6'>
            <label for='preview' class='form-label'>
              Preview
            </label>
            <p className='preview form-control'>{parseH(text)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
