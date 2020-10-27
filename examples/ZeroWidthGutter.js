import React from 'react';
import Split from 'react-split-it';
import './example-split.css';
import './ZeroWidthGutter.css';

export default function ZeroWidthGutter() {
  return (
    <div className="zero-width-gutter">
      <Split className="split-horizontal" gutterSize="0">
        <div className="content r">pane one</div>
        <div className="content y">pane two</div>
        <div className="content o">pane three</div>
      </Split>
    </div>
  );
}
