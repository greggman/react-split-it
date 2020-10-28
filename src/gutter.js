import React from 'React';

export default class Gutter extends React.Component {
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
  }
  handleMouseDownAndTouchStart = (e) => {
    const {onMouseDownAndTouchStart} = this.props;
    onMouseDownAndTouchStart(e);
  }
  componentDidMount() {
    // There's no way in React 16 to add passive false event listeners
    // which means there is no way to drag a splitter and prevent mobile browsers
    // from scrolling without doing this manually.
    const elem = this.elementRef.current;
    elem.addEventListener('mousedown', this.handleMouseDownAndTouchStart, {passive: false});
    elem.addEventListener('touchstart', this.handleMouseDownAndTouchStart, {passive: false});
  }
  componentWillUnmount() {
    const elem = this.elementRef.current;
    elem.removeEventListener('mousedown', this.handleMouseDownAndTouchStart);
    elem.removeEventListener('touchstart', this.handleMouseDownAndTouchStart);
  }
  render() {
    const {direction, dragging, current, style, gutterClassName} = this.props;
    return (
      <div
        ref={this.elementRef}
        className={`${gutterClassName} ${gutterClassName}-${direction} ${dragging && current ? `${gutterClassName}-dragging` : ''}`}
        style={style}
      />
    );
  }
}