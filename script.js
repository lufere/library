function Book(title, author, pages, read){
    this.title = title;
    this. author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
    }
}

var library = [];
const container = document.querySelector("#books");

function input(){
    var title = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var pages = document.querySelector("#pages").value;
    var read = document.querySelector("#read").checked;
    library.push(new Book(title,author,pages,read));
    console.table(library);
    render();
}

function render(){
    clear();
    for(let i = 0; i < library.length; i++){
        var titleP = document.createElement("p");
        titleP.innerHTML = library[i].title;
        var authorP = document.createElement("p");
        authorP.innerHTML = library[i].author;
        var pagesP = document.createElement("p");
        pagesP.innerHTML = library[i].pages;
        var readP = document.createElement("p");
        var bookDiv = document.createElement("div");
        bookDiv.setAttribute("data-index",i);
        var delBtn = document.createElement("button");
        delBtn.classList.add("delBtn");
        delBtn.innerHTML = "DELETE";
        bookDiv.classList.add("aBook");
        readP.classList.add("readBtn");
        library[i].read ? readP.innerHTML = "Read" : readP.innerHTML = "Not Read";
        bookDiv.appendChild(titleP);
        bookDiv.appendChild(authorP);
        bookDiv.appendChild(pagesP);
        bookDiv.appendChild(readP);
        bookDiv.appendChild(delBtn);
        container.appendChild(bookDiv);
        readButton(i);
    }
    deleteButton();
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    input();
})

function clear(){
    document.querySelectorAll(".aBook").forEach(function(e){
        e.remove();
    })
}

function deleteButton(){
    document.querySelectorAll(".delBtn").forEach(function(e){
        e.addEventListener('click',function(e){
            var parentDiv = this.parentElement;
            var index = parentDiv.dataset.index;
            library.splice(index, 1);
            render();
            // parentDiv.remove();
            //console.table(library);
        })
    })
}

function readButton(num){
    document.querySelectorAll(".readBtn")[num].addEventListener("click",function(e){
            var parentDiv = this.parentElement;
            var index = parentDiv.dataset.index;
            var currentBook = library[index];
            currentBook.read = !currentBook.read;
            // console.table(library);
            currentBook.read? this.innerHTML = "Read" : this.innerHTML = "Not Read";
            //alert(currentBook.read);
        })
}