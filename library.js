let myLibrary = [ 
    {
        title: "Kane and Abel",
        author: "Jeffrey Archer",
        pages: 656,
        read: true
    },
    {
        title: "Titans Of War",
        author: "Wilbur Smith", 
        pages: 480,
        read: false,
    }
]


function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
        }
 




let form = document.getElementById("modalForm")
let formBtn = document.getElementById("newBook")
let closeBtn = document.getElementById("resetButton")
const libCont = document.querySelector('.library-container')

form.style.display = 'none'
libCont.style.display = 'block'

for (let i = 0; i<myLibrary.length; i++) {
     createBook(myLibrary[i])
}

formBtn.addEventListener('click', () => {
            form.style.display = 'block'
            formBtn.style.display = 'none'
            document.body.style.backgroundColor = '#1d838e'
            libCont.style.display = 'none'
})


closeBtn.addEventListener('click', () => {
    form.style.display = 'none'
    formBtn.style.display = 'block'
    document.body.style.backgroundColor = '#2cbfcf'
    libCont.style.display = 'block'
    
})

function createBook (item) {
    const library = document.querySelector(".library-container")
    const bookDiv = document.createElement('div')
    const titleDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const pagesDiv = document.createElement('div')
    const readButton = document.createElement('button')
    const removeButton = document.createElement('button')

    bookDiv.setAttribute('id', myLibrary.indexOf(item))

    titleDiv.textContent = item.title
    bookDiv.appendChild(titleDiv)

    authorDiv.textContent = item.author
    bookDiv.appendChild(authorDiv)

    pagesDiv.textContent = item.pages
    bookDiv.appendChild(pagesDiv)

    bookDiv.appendChild(readButton)
    bookDiv.appendChild(removeButton)
     
    library.appendChild(bookDiv)
}