const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    addBookToLibrary();
    clearForm()
    form.style.display = 'none'
    $container.style.display = 'block'
    render()
    console.log(myLibrary)

})
let myLibrary = [
    {
        title: "me",
        author: 'Elton John',
        status: 'Read',
        pages: '230',

    },
    {
        title: "River God",
        author: 'Wilbur Smith',
        status: 'Read',
        pages: '230',

    }
]

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status
    }
}
let form = document.getElementById("modalForm")
form.style.display = "none"

const $title = document.querySelector('#title')
const $author = document.querySelector('#author')
const $pages = document.querySelector('#pages')
const $status = document.querySelector('#status')
const messageBlock = document.querySelector('#message')
const $container = document.querySelector('.library-container')

if (myLibrary.length > 1){
    $container.style.display = 'block'
} else {
    $container.style.display = 'none'
}


function addBookToLibrary() { //maybe have some 'onchange' event listener for when all fields have been inputted, so the error message can be removed asap not on form submission
    if($author.value.length === 0 || $title.value.length === 0) {
    messageBlock.innerText = "Error: All fields need an entry!"
    render()

} else {
    messageBlock.innerText = ""
    let newBook = new Book($title.value, $author.value, $pages.value, $status.value)
    myLibrary.push (newBook)
}


} 


    
function createBook (item) {
    const bookDiv = document.createElement('div')
    const titleDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const pagesDiv = document.createElement('div')
    const readButton = document.createElement('button')
    const removeButton = document.createElement('button')

    removeButton.innerText = 'remove'
    removeButton.classList.add('removeButtonStyle')

    bookDiv.classList.add("bookStyle")
    bookDiv.setAttribute('id', myLibrary.indexOf(item))
    

    titleDiv.textContent = item.title
    titleDiv.classList.add("title")
    bookDiv.appendChild(titleDiv)

    authorDiv.textContent = item.author
    bookDiv.appendChild(authorDiv)

    pagesDiv.textContent = item.pages
    bookDiv.appendChild(pagesDiv)

    readButton.classList.add('readButtonStyle')
    bookDiv.appendChild(readButton)
        if (item.status === "Read") {
                readButton.textContent = "Read";
                readButton.style.backgroundColor= "#63da63"

        } else if (item.status === "Unread") {
                readButton.textContent = "Unread";
                readButton.style.backgroundColor= "#e04f63"

        } else  {
            readButton.textContent = "Reading";
            readButton.style.backgroundColor= "orange"
        }


    bookDiv.appendChild(removeButton)
    $container.appendChild(bookDiv)
     
   document.querySelectorAll('.title').forEach(item => {
    item.addEventListener('click', (event) => {
            console.log(event.target.parentElement.id)
    })
   })
  removeButton.addEventListener('click', (item) => {
    myLibrary.splice(myLibrary.indexOf(item),1)
    $container.removeChild(item)
    console.log(myLibrary)
    
})

}
function render() {
    const display = document.querySelector('.library-container')
    const books = document.querySelectorAll('.bookStyle')
    books.forEach(book => display.removeChild(book));

    for (let i = 0; i<myLibrary.length; i++) {
    createBook(myLibrary[i])
    }}

function clearForm() {
    $title.value = ""
    $author.value = ""
    $pages.value = ""

}


const reset = document.querySelector('#resetButton')
reset.addEventListener('click', ()=> {
    form.style.display = 'none'
    $container.style.display = 'block'
})

const displayForm = document.querySelector('#newBook')
displayForm.addEventListener('click', () => {
    form.style.display = 'block'
    $container.style.display = 'none'
    messageBlock.innerText = ''
})


render()

