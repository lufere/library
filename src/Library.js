import React from 'react';
import BookInput from './BookInput';
import BookContainer from './BookContainer';
import BookSearch from './BookSearch';
import SearchResults from './SearchResults';

import './css/reset.css';
import './css/style.css';

class Library extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Dune",
            author: "Frank Herbert",
            pages: 604,
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg",
            read: false,
            search:"Oathbringer",
            books:[
                {title:"Foundation", author:"Isaac Asimov", pages:244, read:true, cover: "https://i.pinimg.com/originals/c6/6e/bc/c66ebc177446badebed65a0d80c45a64.jpg"},
                {title:"The Way of Kings", author:"Brandon Sanderson", pages:1007, read:true, cover: "https://prodimage.images-bn.com/pimages/9780765376671_p0_v5_s1200x630.jpg"},
                {title:"A Storm of Swords", author:"George R. R. Martin", pages:992, read:true, cover: "https://images-na.ssl-images-amazon.com/images/I/91-KBK-9K2L.jpg"}
            ],
            readSearch: false,
            showResults: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.searchBook = this.searchBook.bind(this);
        this.readToggle = this.readToggle.bind(this);
        this.hideResults = this.hideResults.bind(this);
    }
    
    componentDidMount(){
        // localStorage.removeItem('library');
        let library = JSON.parse(localStorage.getItem('library'));
        if(library) this.setState({books: library});
    }

    handleChange(event){
        const target = event.target;
        const value = target.name === "read" || target.name === "readSearch" ? target.checked: target.value;
        // const value = target.name === "readSearch"? target.checked: target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        const newBooks = this.state.books;
        const index = newBooks.map((book) => {return book.title}).indexOf(this.state.title);
        if(!this.state.author) return alert('Author is required');
        if(!this.state.title) return alert('Title is required');
        if(!this.state.pages) return alert('Number of pages is required');
        if(index === -1){
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
                read:"",
                searchResults:"",
            }, () => {
                // console.table(this.state.books);
                localStorage.setItem('library', JSON.stringify(this.state.books));
            });
        }else{
            this.setState({
                title:"",
                author:"",
                pages:"",
                cover:"",
                read:""
            });
            alert("That book is already on your library!");
        }
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
        }, ()=>{
            localStorage.setItem('library', JSON.stringify(this.state.books));
        });
    }

    searchBook(event){
        event.persist()
        let query = this.state.search;
        if(!query) return alert('Please enter a search term')
        fetch("https://www.googleapis.com/books/v1/volumes?q="+query)
        .then((res)=>{
            return res.json()
        }).then((result)=>{
            // console.log(result.items[0].volumeInfo.title);
            const title = result.items[0].volumeInfo.title;
            const newBooks = this.state.books;
            const index = newBooks.map((book) => {return book.title}).indexOf(title);
            // console.log(this.state.readSearch);
            if(index === -1){
                this.setState({
                    searchResults: result.items,
                    showResults: true,
                    title: result.items[0].volumeInfo.title,
                    author: result.items[0].volumeInfo.authors[0],
                    pages: result.items[0].volumeInfo.pageCount,
                    cover: result.items[0].volumeInfo.imageLinks.smallThumbnail,
                    read: this.state.readSearch
                },()=>console.log(this.state.searchResults));
                this.handleSubmit(event);
            }else{
                alert("That book is already on your library!");
            }
    })
        this.setState({search:""});
        event.preventDefault();
    }

    readToggle(event){
        console.log(event.target.parentElement);
        const target = event.target.parentElement;
        const title = target.querySelector(".title").innerHTML;
        const newBooks = this.state.books;
        const index = newBooks.map((book) => {return book.title}).indexOf(title);
        newBooks[index].read = !newBooks[index].read;
        // console.log(newBooks[index].read);
        this.setState({
            books:newBooks
        }, ()=>{
            localStorage.setItem('library', JSON.stringify(this.state.books));
        });
    }

    hideResults(event){
        event.preventDefault();
        if(event.target === event.currentTarget) {
           this.setState({showResults:false})
        }
    }

    render(){
        const values = {
            title: this.state.title,
            author: this.state.author,
            pages: this.state.pages,
            cover: this.state.cover,
            read: this.state.read,
        }
        return(
            <div>
                <BookContainer
                    handleDel={this.handleDel} 
                    readToggle={this.readToggle} 
                    books = {this.state.books}
                />
                <div id="searchBars">
                    <BookInput
                        onInputChange ={this.handleChange}
                        onFormSubmit={this.handleSubmit}
                        {...values}
                    />
                    <p id="or">OR</p>
                    <BookSearch
                        onInputChange ={this.handleChange}
                        onFormSubmit={this.searchBook}
                        search = {this.state.search}
                    />
                </div>
                <SearchResults
                    searchResults={this.state.searchResults}
                    showResults={this.state.showResults}
                    hideResults={this.hideResults}
                />
            </div>
        );
    }
}

export default Library