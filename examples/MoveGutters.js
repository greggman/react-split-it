import React from 'react';
import Split from 'react-split-it';
import './example-split.css';
import './MoveGutters.css';

export default function MoveGutters() {
  return (
    <div className="move-gutters">
      <Split computeNewSizesFn={Split.moveGuttersComputeNewSizes}>
        <div className="content r">pane one</div>
        <div className="content y">pane two</div>
        <div className="content o">pane three</div>
        <div className="content g">pane four</div>
        <div className="content b">pane five</div>
      </Split>
    </div>
  );
}
