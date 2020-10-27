import React from 'react';
import Split from 'react-split-it';
import './example-split.css';
import './AddRemovePanesManaged.css';

let id = 0;
const genName = _ => `pane${id++}`;

export default class AddRemovePanesManaged extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panes: [
        { name: genName(), size: 0.5 },
        { name: genName(), size: 0.5 },
      ],
    };
  }
  addPane = (i) => {
    const {panes} = this.state
    const src = panes[i];
    this.setState({
      panes: [
        ...panes.slice(0, i),
        { ...src, size: src.size / 2 },
        { ...src, size: src.size / 2, name: genName() },
        ...panes.slice(i + 1),
      ],
    });
  };
  deletePane = (i) => {
    const {panes} = this.state
    const src = panes[i];
    const newPanes = [
      ...panes.slice(0, i),
      ...panes.slice(i + 1),
    ];
    // decide who gets our space
    const receiver = i > 0 ? i - 1 : 0;
    newPanes[receiver].size += src.size;
    this.setState({panes: newPanes});
  };
  setSizes = (sizes) => {
    const {panes} = this.state
    this.setState({
      panes: panes.map((pane, i) => {
        return {...pane, size: sizes[i]};
      }),
    });
  };
  render() {
    const {panes} = this.state;
    return (
      <div>
        <div className="add-remove-panes-managed">
          <Split
            sizes={panes.map(p => p.size)}
            onSetSizes={this.setSizes}
          >
            {
              panes.map((pane, i) => (
                <div className="content" key={pane.name}>
                  {pane.name}
                  <div className="buttons">
                    <button onClick={_ => this.addPane(i)}>⊕</button>
                    <button onClick={_ => this.deletePane(i)}>⊗</button>
                  </div>
                </div>
              ))
            }
          </Split>
        </div>
      </div>
    );
  }
}
