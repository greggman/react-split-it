import React from 'react';
import Split from 'react-split-it';
import './example-split.css';
import './SimpleVertical.css';

export default function SimpleVertical() {
  return (
    <div className="simple-vertical">
      <Split className="split-vertical" direction="vertical">
        <div className="content r">pane one</div>
        <div className="content y">pane two</div>
        <div className="content o">pane three</div>
      </Split>
    </div>
  );
}
