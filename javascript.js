const main = document.querySelector('.books');
const add = document.querySelector('#add-button');
const prompt = document.querySelector('.add-prompt');
const close = document.querySelector('.close-prompt');
const submit = document.querySelector('.add-book');
const bookName = document.querySelector('#book-name');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const readStatus = document.querySelector('#status');
const body = document.querySelector('#body');
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const refreshLibrary = () => {
    const book = myLibrary[myLibrary.length - 1];
    const displayBook = document.createElement('div');
    displayBook.classList.add('display-book');

    const displayTitle = document.createElement('p');
    displayTitle.classList.add('display-title');
    displayTitle.innerHTML = `${book.title}`;
    displayBook.appendChild(displayTitle);

    const displayAuthor = document.createElement('p');
    displayAuthor.classList.add('display-author');
    displayAuthor.innerHTML = `${book.author}`;
    displayBook.appendChild(displayAuthor);

    const displayPages = document.createElement('p');
    displayPages.classList.add('display-pages');
    displayPages.innerHTML = `${book.pages} pages`;
    displayBook.appendChild(displayPages);

    const displayStatus = document.createElement('button');
    displayStatus.classList.add('display-status');
    displayStatus.style.color = 'white';
    if (book.read) {
        displayStatus.innerHTML = 'Read';
        displayStatus.style.background = 'green';
    } else {
        displayStatus.innerHTML = 'Not Read';
        displayStatus.style.background ='red';
    }
    displayBook.appendChild(displayStatus)

    displayStatus.addEventListener('click', () => {
        if (displayStatus.innerHTML === 'Read') {
            displayStatus.innerHTML = 'Not Read';
            displayStatus.style.background ='red';
        } else {
            displayStatus.innerHTML = 'Read';
            displayStatus.style.background = 'green';
        }
    })

    const removeBook = document.createElement('button');
    removeBook.classList.add('remove-book');
    removeBook.innerHTML = 'Remove';
    displayBook.appendChild(removeBook);

    removeBook.addEventListener('click', () => {
        removeBook.parentNode.remove();
    })

    main.appendChild(displayBook);
}

add.addEventListener('click', () => {
    prompt.style.visibility = 'visible';
    body.style.cssText = `
        font-family: 'Palanquin Dark', sans-serif;
        background-color: gray;
        pointer-events: none';
        z-index: 100;
        opacity: .3;`
})

close.addEventListener('click', () => {
    prompt.style.visibility = 'hidden';
    body.style.cssText = `
        font-family: 'Palanquin Dark', sans-serif;
        background-color: var(--gray);
        `
    bookName.value = '';
    author.value = '';
    pages.value = '';
    readStatus.checked = false;
})

submit.addEventListener('click', () => {
    if (bookName.value && author.value && pages.value) {
        let bookInput = new Book(bookName.value, author.value, pages.value, readStatus.checked);
        addBookToLibrary(bookInput);
        body.style.cssText = `
            font-family: 'Palanquin Dark', sans-serif;
            background-color: var(--gray);
            `
        bookName.value = '';
        author.value = '';
        pages.value = '';
        readStatus.checked = false;
        refreshLibrary();
        prompt.style.visibility = 'hidden';
    }
})