import Book from './Book';

function BookContainer(props){
    const books = props.books;
    return(
        <div className="books">
            {books.map(book => <Book 
            handleDel={(e) => props.handleDel(e)}
            readToggle={(e) => props.readToggle(e)} 
            key={book.title} 
            book={book} 
                /> 
            )}
        </div>
    );
}

export default BookContainer