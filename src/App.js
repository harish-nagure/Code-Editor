import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const srcDoc = 
   `<html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>`;

  return (
    <div className="code-editor">
      <div className="code-inputs">
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          placeholder="HTML"/>

        <textarea
          value={css}
          onChange={(e) => setCss(e.target.value)}
          placeholder="CSS"/>
        
        <textarea
          value={js}
          onChange={(e) => setJs(e.target.value)}
          placeholder="JavaScript"/>
      
      </div>

      <div className="code-preview">
        <iframe
          srcDoc={srcDoc}
          title="preview"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
      
    </div>
  );
};

export default App;

