const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    addBookToLibrary();
    clearForm()
    form.style.display = 'none'
    $container.style.display = 'flex'
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
        pages: '30',

    },
    {
        title: "Jack of Diamonds",
        author: 'Bryce Courtenay',
        status: 'Unread',
        pages: '230',

    },
    {
        title: "Kane And Abel",
        author: 'Jeffrey Archer',
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
const $editForm = document.querySelector('.edit-container')
const form = document.getElementById("modalForm")

form.style.display = "none"
$editForm.style.display = "none"

const $title = document.querySelector('#title')
const $author = document.querySelector('#author')
const $pages = document.querySelector('#pages')
const $status = document.querySelector('#status')
const messageBlock = document.querySelector('#message')
const $container = document.querySelector('.library-container')
const $deleteButton = document.querySelector('#deleteBook')
const $submitEdit = document.querySelector('#submitEdit')



if (myLibrary.length > 1){
    $container.style.display = 'flex'
} else {
    $container.style.display = 'none'
}


function addBookToLibrary() { 
    render()
    let newBook = new Book($title.value, $author.value, $pages.value, $status.value)
    myLibrary.push (newBook)
}


 


    
function createBook (item) {
    const bookDiv = document.createElement('div')
    const titleDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const pagesDiv = document.createElement('div')
    const readButton = document.createElement('button')
    const removeButton = document.createElement('button')
    const editButton = document.createElement('button')

    editButton.innerText = 'Edit'
    editButton.classList.add('editButtonStyle')
    

    removeButton.innerText = 'Remove'
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
    bookDiv.appendChild(editButton)
    $container.appendChild(bookDiv)
     
   document.querySelectorAll('.title').forEach(item => {
    item.addEventListener('click', (event) => {
            console.log(event.target.parentElement.id)
    })
   })
   document.querySelectorAll('.readButtonStyle').forEach(item => {
    item.addEventListener('click', (event) => {
        console.log(event.target.parentElement.id)
        
    })
   })
  removeButton.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(item),1)
    console.log(item)
    console.log(myLibrary)
    render()
    
})

editButton.addEventListener('click', () => {
    console.log('edit button')
    form.style.display = 'none'
    $container.style.display = 'none'
    $editForm.style.display = 'flex'


    
    
    

})



}

$deleteButton.addEventListener('click', (item) => {
    myLibrary.splice(myLibrary.indexOf(item),1)
    console.log('delete button clicked')
    $editForm.style.display = 'none'
    $container.style.display = 'flex'
    render()
    

})
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
    $container.style.display = 'flex' 
    $editForm.style.display = 'none'
})

const displayForm = document.querySelector('#newBook')
displayForm.addEventListener('click', () => {
    form.style.display = 'flex'
    $container.style.display = 'none'
    $editForm.style.display = 'none'
    
})




render()

