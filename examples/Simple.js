import React from 'react';
import Split from 'react-split-it';
import './example-split.css';
import './Simple.css';

export default function Simple() {
  return (
    <div className="simple">
      <Split>
        <div className="content r">pane one</div>
        <div className="content y">pane two</div>
        <div className="content o">pane three</div>
      </Split>
    </div>
  );
}
