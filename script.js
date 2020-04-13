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
}



const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    input();
})