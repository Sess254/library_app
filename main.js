const newBtn = document.getElementById('new_book')
const addBtn = document.getElementById('add_book')
const bookModal = document.getElementById('book_modal')
const closeBtn = document.getElementById('close_btn')

const myLibrary = []


function addToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
    console.log(newBook)
}

newBtn.addEventListener('click', () => {
    bookModal.style.display = 'flex'
    console.log('clicked')
})

closeBtn.addEventListener('click', () => {
    bookModal.style.display = 'none'
})

addBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log("clicked")
})


function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

const neWbookForm = document.getElementById('book_form')

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('read').checked

    addToLibrary(title, author, pages, isRead)
    neWbookForm.reset()
})


