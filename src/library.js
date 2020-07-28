'use strict';
class Book extends React.Component {
    constructor(props){
        super(props);
        this.state = {clickDel: false}
    }

    handleClick(){
        this.setState({clickDel: true});
    }

    render(){
        let read;
        this.props.book.read? read = "READ": read = 'NOT READ';

        if (this.state.clickDel) return (null);

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

function DeleteBtn(props){
    if(props.value){
        return 'Works'
    }
    return(
        <button
            className="delBtn"
            onClick={()=>props.onClick()}
        >
            DELETE
        </button>
    );
}


function BookContainer(props){
    return(
        <div className="books">
            <Book book={foundation}/>
            <Book book={foundation2}/>
        </div>
    );
}

var foundation = {title:"Foundation", author:"Isaac Asimov", pages:244, read: true};
var foundation2 = {title:"Foundation and Empire", author:"Isaac Asimov", pages:256, read: true};


let domContainer = document.querySelector('#reactTest');
ReactDOM.render(<BookContainer/>, domContainer);