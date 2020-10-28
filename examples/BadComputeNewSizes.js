import React from 'react';
import Split from 'react-split-it';
import './example-split.css';
import './BadComputeNewSizes.css';

function badComputeNewSizes({
  startSizes,
  prevPaneNdx,
  delta,
}) {
  return [
    ...startSizes.slice(0, prevPaneNdx),
    startSizes[prevPaneNdx    ] + delta,
    startSizes[prevPaneNdx + 1] - delta,
    ...startSizes.slice(prevPaneNdx + 2, startSizes.length),
  ];
}

export default function BadComputeNewSizes() {
  return (
    <div className="bad-compute-new-sizes">
      <Split computeNewSizesFn={badComputeNewSizes}>
        <div className="content r">pane one</div>
        <div className="content y">pane two</div>
        <div className="content o">pane three</div>
        <div className="content g">pane four</div>
      </Split>
    </div>
  );
}
