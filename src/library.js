'use strict';

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'You clicked this.';
    }

    return (
      <button onClick={() => this.setState({ clicked: true }) }>
        Click meeee
      </button>
    );
  }
}

let domContainer = document.querySelector('#reactTest');
ReactDOM.render(<ClickButton />, domContainer);