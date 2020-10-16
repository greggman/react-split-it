import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddRemovePanes from './AddRemovePanes.js';
import AddRemovePanesManaged from './AddRemovePanesManaged.js';
import Simple from './Simple.js';
import SimpleVertical from './SimpleVertical.js';

const examples = {
  'simple': Simple,
  'simple-vertical': SimpleVertical,
  'add-remove-panes': AddRemovePanes,
  'add-remove-panes-managed': AddRemovePanesManaged,
};

document.querySelectorAll('[data-id]').forEach(async(elem) => {
  const id = elem.dataset.id;
  const Component = examples[id];

  ReactDOM.render(
    <React.StrictMode>
      {
        React.createElement(Component)
      }
    </React.StrictMode>,
    elem);
});
