function Book(title, author, pages, read){
    this.title = title;
    this. author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
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
    //console.table(library);
    render();
}

function render(){
    var titleP = document.createElement("p");
    titleP.innerHTML = library[library.length-1].title;
    var authorP = document.createElement("p");
    authorP.innerHTML = library[library.length-1].author;
    var pagesP = document.createElement("p");
    pagesP.innerHTML = library[library.length-1].pages;
    var readP = document.createElement("p");
    var bookDiv = document.createElement("div");
    bookDiv.setAttribute("data-index",library.length-1);
    var delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.innerHTML = "DELETE";
    bookDiv.classList.add("aBook");
    readP.classList.add("readBtn");
    library[library.length-1].read ? readP.innerHTML = "Read" : readP.innerHTML = "Not Read";
    bookDiv.appendChild(titleP);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(pagesP);
    bookDiv.appendChild(readP);
    bookDiv.appendChild(delBtn);
    container.appendChild(bookDiv);
    deleteButton();
    readButton(library.length-1);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    input();
})

function deleteButton(){
    document.querySelectorAll(".delBtn").forEach(function(e){
        e.addEventListener('click',function(e){
            var parentDiv = this.parentElement;
            var index = parentDiv.dataset.index;
            delete library[index];
            parentDiv.remove();
            //console.table(library);
        })
    })
}

// function readButton(){
//     document.querySelectorAll(".readBtn").forEach(function(e){
//         e.addEventListener("click",function(e){
//             var parentDiv = this.parentElement;
//             var index = parentDiv.dataset.index;
//             var currentBook = library[index];
//             currentBook.read = !currentBook.read;
//             console.table(library);
//             currentBook.read? this.innerHTML = "Read" : this.innerHTML = "Not Read";
//             //alert(currentBook.read);
//         })
//     })
// }

function readButton(num){
    document.querySelectorAll(".readBtn")[num].addEventListener("click",function(e){
            var parentDiv = this.parentElement;
            var index = parentDiv.dataset.index;
            var currentBook = library[index];
            currentBook.read = !currentBook.read;
            console.table(library);
            currentBook.read? this.innerHTML = "Read" : this.innerHTML = "Not Read";
            //alert(currentBook.read);
        })
}