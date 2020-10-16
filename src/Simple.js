import React from 'react';
import './App.css';
import Split from './split.js';

export default function App() {
  return (
    <div className="simple">
      <Split>
        <div className="pane r">pane one</div>
        <div className="pane y">pane two</div>
        <div className="pane o">pane three</div>
      </Split>
    </div>
  );
}
