import React from 'react';
import Split from 'react-split-it';
import './example-split.css';
import './ZeroHeightGutterVertical.css';

export default function ZeroHeightGutterVertical() {
  return (
    <div className="zero-height-gutter-vertical">
      <Split className="split-vertical" gutterSize="0" direction="vertical">
        <div className="content r">pane one</div>
        <div className="content y">pane two</div>
        <div className="content o">pane three</div>
      </Split>
    </div>
  );
}
