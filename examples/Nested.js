import React from 'react';
import Split from 'react-split-it';
import './example-split.css';
import './Nested.css';

export default function Nested() {
  return (
    <div className="nested">
      <Split direction="vertical">
        <div className="content">
          <Split>
            <div className="content r">pane one</div>
            <div className="content y">pane two</div>
            <div className="content o">pane three</div>
          </Split>
        </div>
        <div className="content">
          <Split>
            <div className="content g">pane four</div>
            <div className="content b">pane five</div>
            <div className="content i">pane six</div>
          </Split>
        </div>
        <div className="content">
          <Split>
            <div className="content v">pane seven</div>
            <div className="content r">pane eight</div>
            <div className="content y">pane nine</div>
          </Split>
        </div>
      </Split>
    </div>
  );
}
