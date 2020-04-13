function Book(title, author, pages, read){
    this.title = title;
    this. author = author;
    this.pages = pages;
    this.read = read;
    // let readStat = "";
    // if (read) readStat = "already read";
    // if (!read) readStat = "not read yet";
    this.info = function(){
    //return this.title + " by " + this.author + ", " + this.pages + " pages, " + readStat;
    }
}
var title="";
var author;
var pages;
var read;
var library = [];
const container = document.querySelector("#books");

function input(){
    title = document.querySelector("#title").value;
    author = document.querySelector("#author").value;
    pages = document.querySelector("#pages").value;
    read = document.querySelector("#read").checked;
    library.push(new Book(title,author,pages,read));
    console.table(library);
    render();
}

function render(){
    var titleP = document.createElement("p");
    titleP.innerHTML = library[library.length-1].title;
    var authorP = document.createElement("p");
    authorP.innerHTML = library[library.length-1].author;
    var pagesP = document.createElement("p");
    pagesP.innerHTML = library[library.length-1].pages;
    var bookDiv = document.createElement("div");
    var readP = document.createElement("p");
    library[library.length-1].read ? readP.innerHTML = "Read" : readP.innerHTML = "Not Read";
    bookDiv.appendChild(titleP);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(pagesP);
    bookDiv.appendChild(readP);
    container.appendChild(bookDiv);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    input();
})