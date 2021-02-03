import { useEffect, useState } from "react";
import Book from './Book';

const SearchResults = (props) => {
    const [results, setResults] = useState([]);

    useEffect(()=>{
        if(props.searchResults)setResults(props.searchResults.map(result => {
            console.log('searchArray',props.searchResults);
            console.log('TITLE', result.volumeInfo.title);
            let oneBook = {};
            if(result.volumeInfo.authors && result.volumeInfo.imageLinks){
                oneBook.title = result.volumeInfo.title;
                oneBook.author = result.volumeInfo.authors[0];
                oneBook.pages = result.volumeInfo.pageCount;
                oneBook.cover = result.volumeInfo.imageLinks.smallThumbnail;
                oneBook.read = false;
            }
            // return <p key={result.volumeInfo.title}>{result.volumeInfo.title}</p>
            return  <Book
                        key={result.volumeInfo.title}
                        book = {oneBook}
                        search = {true}
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
    if(props.showResults){
        return(
            <div className='searchContainer' onClick={props.hideResults}>
                <div className='searchResults'>
                    <button className='exit' onClick={props.hideResults}>X</button>
                    {/* {searchArray} */}
                    {/* SEARCH RESULTS */}
                    {results}
                    {/* <button
                        onClick={()=>{
                            setResults(props.searchResults.map(result => {
                    console.log('searchArray',props.searchResults);
                    console.log('TITLE', result.volumeInfo.title);
                    return <p key={result.volumeInfo.title}>{result.volumeInfo.title}</p>
                }))
                        }}
                    >TEST</button> */}
                </div>
            </div>
        )
    }else{
        return null
    }
}

export default SearchResults