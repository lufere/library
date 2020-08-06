'use strict';

function DeleteBtn(props){
    return(
        <button
            className="delBtn"
            onClick={()=>props.onClick()}
        >
            DELETE
        </button>
    );
}

class Book extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let read;
        this.props.book.read? read = "READ": read = 'NOT READ';
        return(
            <div className="aBook">
                <p className="title">{this.props.book.title}</p>
                <p className="author">{this.props.book.author}</p>
                <p className="pages">{this.props.book.pages}</p>
                <p className="readBtn">{read}</p>
                <DeleteBtn
                    onClick={() => this.props.handleDel(event)}
                />
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

function BookContainer(props){
    const books = props.books;
    return(
        <div className="books">
            {books.map(book => <Book 
            handleDel={() => props.handleDel(event)} 
            key={book.title} 
            book={book} 
                /> 
            )}
        </div>
    );
}

class Library extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Test Book",
            author: "Test Author",
            pages: 123,
            read: false,
            books:[{title:"Foundation", author:"Isaac Asimov", pages:244, read:true},{title:"The Way of Kings", author:"Brandon Sanderson", pages:1007, read:true}]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDel = this.handleDel.bind(this);
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
                pages:this.state.pages,
                read:this.state.read
            }]),
            title:"",
            author:"",
            pages:"",
            read:""
        }, () => {
            console.table(this.state.books);
        });
        event.preventDefault();
    }

    handleDel(event){
        const target = event.target.parentElement;
        const title = target.querySelector(".title").innerHTML;
        const newBooks = this.state.books;
        const index = newBooks.map((book) => {return book.title}).indexOf(title);
        newBooks.splice(index,1);
        this.setState({
            books:newBooks
        });

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
                <BookContainer
                    handleDel={this.handleDel} 
                    books = {this.state.books}
                />
            </div>
        );
    }
}

let domContainer = document.querySelector('body');
ReactDOM.render(<Library/>, domContainer);