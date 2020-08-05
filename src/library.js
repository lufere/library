'use strict';

class Library extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Test Book",
            author: "Test Author",
            pages: "123",
            read: false,
            books:[]
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
        const newBooks = this.state.books;
        this.setState({
            books: newBooks.concat([{
                title:this.state.title,
                author:this.state.author,
                pages:this.state.pages
            }])
        }, () => {
            console.table(this.state.books);
        });
        // debugger
        // console.log(
        //     this.state.title,
        //     this.state.author,
        //     this.state.pages,
        //     this.state.read
        // );
        event.preventDefault();
    }

    render(){
        const values = {
            title: this.state.title,
            author: this.state.author,
            pages: this.state.pages,
            read: this.state.read
        }
        return(
            <div>
                <BookInput
                    onInputChange ={this.handleChange}
                    onFormSubmit={this.handleSubmit}
                    {...values}
                />
                <BookContainer/>
            </div>
        );
    }
}

class BookInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.props.onInputChange(event);
    }

    handleSubmit(event){
        this.props.onFormSubmit(event);
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
                    value={this.props.title}
                    onChange={this.handleChange}
                    />
                </label>
                <label>
                    Author:
                    <input name="author" 
                    type="text" 
                    id="author" 
                    value={this.props.author}
                    onChange={this.handleChange}    
                    />
                </label>
                <label>
                    Pages:
                    <input name="pages" 
                    type="text" 
                    id="pages" 
                    value={this.props.pages}
                    onChange={this.handleChange}
                    />
                </label>
                <label>
                    Read?
                    <input 
                    name="read" 
                    type="checkbox" 
                    id="read"
                    checked={this.props.read}
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
        // <div>
        //     <div>
        //         <BookInput/>
        //     </div>
            <div className="books">
                <Book book={foundation}/>
                <Book book={foundation2}/>
            </div>
    );
}


var foundation = {title:"Foundation", author:"Isaac Asimov", pages:244, read: true};
var foundation2 = {title:"Foundation and Empire", author:"Isaac Asimov", pages:256, read: true};


let domContainer = document.querySelector('#reactTest');
ReactDOM.render(<Library/>, domContainer);