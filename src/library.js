'use strict';

class Library extends React.Component{
    constructor(props){
        super(props);
    }
}

// function BookInput(props){
class BookInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            author: "",
            pages: "",
            read: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const value = target.name === "read"? target.checked: target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        console.log(
            this.state.title,
            this.state.author,
            this.state.pages,
            this.state.read
        );
        event.preventDefault();
    }

    render(){
        return(
            <form id="inputs">
                <label>
                    Title:
                    <input 
                    name="title" 
                    type="text" 
                    id="title" 
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
                </label>
                <label>
                    Author:
                    <input name="author" 
                    type="text" 
                    id="author" 
                    value={this.state.author}
                    onChange={this.handleChange}    
                    />
                </label>
                <label>
                    Pages:
                    <input name="pages" 
                    type="text" 
                    id="pages" 
                    value={this.state.pages}
                    onChange={this.handleChange}
                    />
                </label>
                <label>
                    Read?
                    <input 
                    name="read" 
                    type="checkbox" 
                    id="read"
                    checked={this.state.read}
                    onChange={this.handleChange}
                    />
                </label>
                <button 
                type="button" 
                id = "btn"
                onClick={this.handleSubmit}
                >
                    Add Book
                </button>
            </form>
        );
    }
}

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
        <div>
            <div>
                <BookInput/>
            </div>
            <div className="books">
                <Book book={foundation}/>
                <Book book={foundation2}/>
            </div>
        </div>
    );
}


var foundation = {title:"Foundation", author:"Isaac Asimov", pages:244, read: true};
var foundation2 = {title:"Foundation and Empire", author:"Isaac Asimov", pages:256, read: true};


let domContainer = document.querySelector('#reactTest');
ReactDOM.render(<BookContainer/>, domContainer);