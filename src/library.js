'use strict';
class Book extends React.Component {
    constructor(props){
        super(props);
        // const {title, author, pages} = this.props;
        this.state = {clickDel: false}
    }

    handleClick(){
        this.setState({clickDel: true});
    }

    render(){
        let read;
        this.props.book.read? read = "READ": read = 'NOT READ';

        return(
            <div className="aBook">
                <p>{this.props.book.title}</p>
                <p>{this.props.book.author}</p>
                <p>{this.props.book.pages}</p>
                <p className="readBtn">{read}</p>
                {/* <button className="delBtn">DELETE</button> */}
                <DeleteBtn
                    onClick={() => this.handleClick()}
                    value = {this.state.clickDel}
                />
            </div>
        );
    }
}

// function Book(props){
//     return(
//         <div className="aBook">
//             <p>{props.book.title}</p>
//             <p>{props.book.author}</p>
//             <p>{props.book.pages}</p>
//             <p className="readBtn">{props.book.read}</p>
//             {/* <button className="delBtn">DELETE</button> */}
//             <DeleteBtn/>
//         </div>
//     );
// }

class DeleteBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
      }
    render(){
        if(this.props.value){
            return 'Works'
        }

        return(
            <button
                className="delBtn"
                onClick={()=>this.props.onClick()}
            >
                DELETE
            </button>
        );
    }
}

function BookContainer(props){
    return(
        <div className="books">
            <Book book={foundation}/>
            
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

var foundation = {title:"Foundation", author:"Isaac Asimov", pages:244, read: true}

let domContainer = document.querySelector('#reactTest');
ReactDOM.render(<BookContainer/>, domContainer);