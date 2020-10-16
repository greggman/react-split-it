import React from 'react';
import Split from './split.js';
import {makeABGenerator} from './utils.js';

const genName = makeABGenerator();

export default class AddRemovePanes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {panes: [genName(), genName()]};
  }
  addPane = () => {
    const {panes} = this.state;
    this.setState({panes: [...panes, genName()]});
  };
  deletePane = (i) => {
    const {panes} = this.state;
    this.setState({
      panes: [
        ...panes.slice(0, i),
        ...panes.slice(i + 1),
      ],
    });
  };
  render() {
    const {panes} = this.state
    return (
      <div>
        <div className="add-remove-panes">
          <Split>
          {
            panes.map((pane, i) => (
              <div className="pane" key={pane}>
                {pane}
                <div class="buttons">
                  <button
                    className="delete"
                    onClick={() => this.deletePane(i)}
                  >⊗</button>
                </div>
              </div>
            ))
          }
          </Split>
        </div>
        <button onClick={this.addPane}>Add Pane</button>
      </div>
    );
  }
}
