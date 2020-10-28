import React from 'react';
import Split from 'react-split-it';
import './example-split.css';
import './StartingSizes.css';

export default function StartingSizes() {
  return (
    <div className="starting-sizes">
      {/* sizes are in normalized values 0.0 to 1.0 */}
      <Split sizes={[0.1, 0.7, 0.2]}>
        <div className="content r">pane one</div>
        <div className="content y">pane two</div>
        <div className="content o">pane three</div>
      </Split>
    </div>
  );
}
