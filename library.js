let myLibrary = [ 
    {
        title: "Kane and Abel",
        author: "Jeffrey Archer",
        pages: 656,
        read: true
    }
]


function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
 
}

bookButton = document.getElementById(newBook)
bookButton.addEventListener('click', () => {
    
})