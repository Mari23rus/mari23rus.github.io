import React, { Component } from 'react';
import './App.css';
import marked from 'marked'

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: `
# H1 Header
## H2 Header

[I'm an inline-style link](https://google.com)

Inline \`code\` has \`back-ticks around\` it.

\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`


    No language indicated, so no syntax highlighting in Markdown Here. 

1. First ordered list item
2. Another item

* Unordered list can use asterisks
- Or minuses
+ Or pluses

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Inline-style img: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
      `
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div id="app">
        <h1>Live Markdown Previewer</h1>
        <div id="container">
          <div id="column1"><h2>Editor</h2>
            <textarea id="editor" onChange={this.handleChange}>{this.state.input}</textarea>
          </div>
          <div id="column2"><h2>Previewer</h2>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.input, {breaks: true, gfm: true})}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;