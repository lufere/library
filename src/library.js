'use strict';

function Book(props){
    return(
        <div className="aBook">
            <p>{props.book.title}</p>
            <p>{props.book.author}</p>
            <p>{props.book.pages}</p>
            <p className="readBtn">{props.book.read}</p>
            <button className="delBtn">DELETE</button>
        </div>
    );
}

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

var foundation = {title:"Foundation", author:"Isaac Asimov", pages:244}

let domContainer = document.querySelector('#reactTest');
ReactDOM.render(<Book book ={foundation}/>, domContainer);