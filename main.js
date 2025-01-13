const newBtn = document.getElementById('new_book')
const addBtn = document.getElementById('add_book')
const bookModal = document.getElementById('book_modal')
const closeBtn = document.getElementById('close_btn')
const newBookForm = document.getElementById('book_form')
const libraryEl = document.getElementById('library')

const myLibrary = []

newBtn.addEventListener('click', () => {
    bookModal.style.display = 'flex'
    console.log('clicked')
})

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('read').checked
    addToLibrary(title, author, pages, isRead)
    newBookForm.reset()
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    bookModal.style.display = 'none'
})


function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

Book.prototype.toggleReadStatus = function(){
    this.isRead = !this.isRead
}


function addToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
    displayLibrary()
    console.log(myLibrary)
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1)
    displayLibrary()
}

function displayLibrary() {
    libraryEl.innerHTML = ""

    myLibrary.map((book, index) => {
        const bookCard = document.createElement('div')
        bookCard.classList.add('book_cards')

        const bookTitle = document.createElement('p')
        bookTitle.textContent = `Title: ${book.title}`

        const bookAuthor = document.createElement('p')
        bookAuthor.textContent = `Author: ${book.author}`

        const bookPages = document.createElement('p')
        bookPages.textContent = `Pages: ${book.pages} pages long`

        const readStatus = document.createElement('p')
        readStatus.textContent = `Read: ${book.isRead ? 'Yes': 'No'}`
        

        const toggleReadButton = document.createElement('button')
        toggleReadButton.classList.add('toggle')
        toggleReadButton.textContent = 'Read?'
        toggleReadButton.addEventListener('click', () => {
            book.toggleReadStatus()
            displayLibrary()
            console.log(myLibrary)
        })

        const removeButton = document.createElement('button')
        removeButton.classList.add('remove')
        removeButton.textContent = 'Remove'
        removeButton.addEventListener('click', () => removeBookFromLibrary(index))

        bookCard.appendChild(bookTitle)
        bookCard.appendChild(bookAuthor)
        bookCard.appendChild(bookPages)
        bookCard.appendChild(bookPages)
        bookCard.appendChild(readStatus)
        bookCard.appendChild(toggleReadButton)
        bookCard.appendChild(removeButton)

        libraryEl.appendChild(bookCard)
    })
}

