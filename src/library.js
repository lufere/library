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
            <h2>Add a book manually:</h2>
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
                    Cover URL:
                    <input name="cover" 
                    type="text" 
                    id="cover" 
                    value={this.props.cover}
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
    }

    render(){
        let read;
        let defaultBG = "https://cdn.hipwallpaper.com/i/7/96/AKf6Qb.jpg";
        let background;
        this.props.book.cover? background = this.props.book.cover: background = defaultBG;
        this.props.book.read? read = "READ": read = 'NOT READ';
        return(
            <div className="aBookWrapper" style={{backgroundImage:`url(${background})`}}>
            <div className="aBook">
                <p className="title">{this.props.book.title}</p>
                <p className="author">{this.props.book.author}</p>
                <p className="pages">{this.props.book.pages}</p>
                <p className="readBtn">{read}</p>
                <DeleteBtn
                    onClick={() => this.props.handleDel(event)}
                />
            </div>
            </div>
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
            cover: "https://prodimage.images-bn.com/pimages/9780765376671_p0_v5_s1200x630.jpg",
            read: false,
            books:[
                {title:"Foundation", author:"Isaac Asimov", pages:244, read:true, cover: "https://i.pinimg.com/originals/c6/6e/bc/c66ebc177446badebed65a0d80c45a64.jpg"},
                {title:"The Way of Kings", author:"Brandon Sanderson", pages:1007, read:true, cover: "https://prodimage.images-bn.com/pimages/9780765376671_p0_v5_s1200x630.jpg"}
            ]
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
                cover:this.state.cover,
                read:this.state.read
            }]),
            title:"",
            author:"",
            pages:"",
            cover:"",
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
            cover: this.state.cover,
            read: this.state.read
        }
        return(
            <div>

                <BookContainer
                    handleDel={this.handleDel} 
                    books = {this.state.books}
                />
                <BookInput
                    onInputChange ={this.handleChange}
                    onFormSubmit={this.handleSubmit}
                    {...values}
                />
            </div>
        );
    }
}



let domContainer = document.querySelector('#root');
ReactDOM.render(<Library/>, domContainer);