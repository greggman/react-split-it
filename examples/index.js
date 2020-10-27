const toClass = s => `${s[0].toUpperCase()}${s.substr(1).replace(/-(.)/g, (m, m1) => m1.toUpperCase())}`;

{
  const div = document.querySelector('#example-css');
  loadCSS(div, 'example-split.css');
}

document.querySelectorAll('[data-caption]').forEach(async(elem) => {
  if (elem.dataset.type) {
    return;
  }
  const id = elem.id;
  const componentName = toClass(id);
  const req = await fetch(`./examples/${componentName}.js`);
  const text = await req.text();
  addCode(elem, text);
  // I could not figure out if it's possible to get babel/standalone to deal with these.
  // Ideally I'd just give it a map of paths to url/modules and for these I'd tell it
  // they are already loaded
  let css;
  const hackedText = text
      .replace("import React from 'react';", "")
      .replace("import './example-split.css';", "")
      .replace(/import '.\/(.*?\.css)';/, (m, m1) => { css = m1; return ''; })
      .replace(/import Split from 'react-split-it';/, "")
      .replace('export default ', '');
  if (css) {
    const div = document.createElement('div');
    elem.appendChild(div);
    loadCSS(div, css);
  }
  const code = Babel.transform(hackedText, {
    presets: ['env', 'react'],
    plugins: [
      [Babel.availablePlugins["proposal-class-properties"], {"loose": true }],
    ],
  }).code;
  loadScript(code);
  const Component = window[componentName];
  if (typeof Component !== 'function') {
    throw new Error(`${componentName} is not a function`);
  }
  const div = document.createElement('div');
  elem.appendChild(div);
  ReactDOM.render(
    React.createElement(Component),
    div);
});

function addCode(elem, text, lang = 'javascript') {
  const pre = document.createElement('pre');
  const code = document.createElement('code');
  pre.appendChild(code);
  code.textContent = text;
  code.className = `language-${lang} layout-scrollbar`;
  elem.appendChild(pre);
  hljs.highlightBlock(code);
}

function loadScript(code) {
  const script = document.createElement('script');
  script.text = code;
  document.body.appendChild(script);
}

async function loadCSS(elem, css) {
  const cssHref = `./examples/${css}`;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = cssHref;
  document.head.appendChild(link);
  const req = await fetch(cssHref);
  const text = await req.text();
  addCode(elem, `/* ${css} */\n${text}`, 'css');
}

