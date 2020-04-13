function Book(title, author, pages, read){
    this.title = title;
    this. author = author;
    this.pages = pages;
    this.read = read;
    let readStat = "";
    if (read == "yes") readStat = "already read";
    if (read == "no") readStat = "not read yet";
    this.info = function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + readStat;
    }
}


function render(){
    
}

// const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "yes");

// const foundation = new Book("Foundation", "Isaac Asimov", 300, "yes");
// console.log (foundation.info());