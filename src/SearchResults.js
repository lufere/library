import { useEffect, useState } from "react";
import Book from './Book';

const SearchResults = (props) => {
    const [results, setResults] = useState([]);

    useEffect(()=>{
        if(props.searchResults)setResults(props.searchResults.map(result => {
            console.log('searchArray',props.searchResults);
            console.log('TITLE', result.volumeInfo.title);
            let oneBook = {};
            oneBook.title = result.volumeInfo.title;
            oneBook.author = result.volumeInfo.authors[0];
            oneBook.pages = result.volumeInfo.pageCount;
            oneBook.cover = result.volumeInfo.imageLinks.smallThumbnail;
            oneBook.read = true;
            // return <p key={result.volumeInfo.title}>{result.volumeInfo.title}</p>
            return  <Book
                        key={result.volumeInfo.title}
                        book = {oneBook}
                    />
            
        }))
    },[props.searchResults])
    console.log(props.searchResults);
    if(props.searchResults){
        // var searchArray = props.searchResults.map(result => {
        //     console.log('searchArray',props.searchResults)
        //     console.log('TITLE', result.volumeInfo.title)
        //     return <p key={result.volumeInfo.title}>result.volumeInfo.title</p>
        // })

    }
    return(
        <div>
            {/* {searchArray} */}
            {results}
            SEARCH RESULTS
            <button
                onClick={()=>{
                    setResults(props.searchResults.map(result => {
            console.log('searchArray',props.searchResults);
            console.log('TITLE', result.volumeInfo.title);
            return <p key={result.volumeInfo.title}>{result.volumeInfo.title}</p>
        }))
                }}
            >TEST</button>
        </div>
    )
}

export default SearchResults