import React from 'react';

class BookSearch extends React.Component{
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
            <form id="inputs" onSubmit={e => { e.preventDefault(); }}>
            <h2>Search in Google Books:</h2>
                <label>
                    Search query:
                    <input 
                    name="search" 
                    type="text" 
                    id="search" 
                    value={this.props.search}
                    onChange={this.handleChange}
                    />
                </label>
                <label>
                    Read?
                    <input 
                    name="readSearch" 
                    type="checkbox" 
                    id="readSearch"
                    checked={this.props.read}
                    onChange={this.handleChange}
                    />
                </label>
                <button 
                type="button" 
                id = "btn"
                onClick={this.handleSubmit}
                >
                    Search Book
                </button>
            </form>
        );
    }
}

export default BookSearch