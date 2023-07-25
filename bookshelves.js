const BOOKSHELVES_KEY = "bookshelves";

// Load bookshelves from sessionStorage on page load
function loadBookshelves() {
    const storedBookshelves = sessionStorage.getItem(BOOKSHELVES_KEY);
    if (storedBookshelves) {
        return JSON.parse(storedBookshelves);
    }
    return [];
}

// Save bookshelves to sessionStorage
function saveBookshelves() {
    sessionStorage.setItem(BOOKSHELVES_KEY, JSON.stringify(bookshelves));
}

// Initialize bookshelves with data from sessionStorage
const bookshelves = loadBookshelves();

function removeBookFromBookshelf(bookshelf, bookId) {
    const index = bookshelf.books.indexOf(bookId);
    if (index !== -1) {
        bookshelf.books.splice(index, 1);
        saveBookshelves();
        displayBookshelves();
    }
}



function displayBookshelf(bookshelf) {
    const bookshelfContainer = document.getElementById("bookshelfContainer");
    

    // Create bookshelf element
    const bookshelfElement = document.createElement("div");
    bookshelfElement.classList.add("bookshelf");

    // Create bookshelf name
    const bookshelfName = document.createElement("h3");
    bookshelfName.textContent = bookshelf.name;

    // Create books container
    const booksContainer = document.createElement("div");
    booksContainer.classList.add("books-container");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
        deleteBookshelf(bookshelf.id);
    });

    bookshelf.books.forEach((bookId) => {
        const book = book_database[bookId];
        const bookElement = createBookPost(book, bookshelf); // Pass the bookshelf to createBookPost
        booksContainer.appendChild(bookElement);
    });

    // Append elements to the bookshelf element
    bookshelfElement.appendChild(bookshelfName);
    bookshelfElement.appendChild(booksContainer);
    bookshelfElement.appendChild(deleteButton);


    // Append the bookshelf element to the container
    bookshelfContainer.appendChild(bookshelfElement);
}


function createBookshelf(name) {
    const bookshelf = {
        id: bookshelves.length + 1,
        name: name,
        books: [],
    };
    bookshelves.push(bookshelf);
    saveBookshelves();

    const bookshelfElement = createBookshelfElement(bookshelf);
    const bookshelfContainer = document.getElementById("bookshelfContainer");
    bookshelfContainer.appendChild(bookshelfElement);
}



function createBookshelfElement(bookshelf) {
    const bookshelfElement = document.createElement("div");
    bookshelfElement.classList.add("bookshelf");

    const bookshelfName = document.createElement("h3");
    bookshelfName.textContent = bookshelf.name;

    const booksContainer = document.createElement("div");
    booksContainer.classList.add("books-container");

    bookshelf.books.forEach((bookId) => {
        const book = book_database[bookId];
        const bookElement = createBookPost(book);
        booksContainer.appendChild(bookElement);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
        deleteBookshelf(bookshelf.id);
    });

    bookshelfElement.appendChild(bookshelfName);
    bookshelfElement.appendChild(booksContainer);
    bookshelfElement.appendChild(deleteButton);

    return bookshelfElement;
}

function deleteBookshelf(bookshelfId) {
    const index = bookshelves.findIndex((bookshelf) => bookshelf.id === bookshelfId);
    if (index !== -1) {
        bookshelves.splice(index, 1);
        displayBookshelves();
        
    }
    saveBookshelves(); 
}

function displayBookshelves() {
    const bookshelfContainer = document.getElementById("bookshelfContainer");
    bookshelfContainer.innerHTML = ""; // Clear previous bookshelves

    bookshelves.forEach((bookshelf) => {
        const bookshelfElement = createBookshelfElement(bookshelf);
        bookshelfContainer.appendChild(bookshelfElement);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    displayBookshelves();

    const addBookshelfButton = document.getElementById("addBookshelfButton");
    addBookshelfButton.addEventListener("click", () => {
        const bookshelfName = prompt("Enter the name of the bookshelf:");
        if (bookshelfName) {
            createBookshelf(bookshelfName);
        }
    });
});


// Function to select a bookshelf from existing ones
function selectBookshelf() {
    const bookshelfNames = bookshelves.map((bookshelf) => bookshelf.name);
    const selectedBookshelf = prompt("Select a bookshelf:\n\n" + bookshelfNames.join("\n"));

    if (selectedBookshelf) {
        const bookshelf = bookshelves.find((bookshelf) => bookshelf.name === selectedBookshelf);
        if (bookshelf) {
            return bookshelf;
        }
    }

    alert("Invalid bookshelf selection or bookshelves do not exist.");
    return null;
}

// Function to add a book to a selected bookshelf
function addBookToBookshelf(book, bookshelf) {
    bookshelf.books.push(book.id);
    saveBookshelves();
    displayBookshelves();
}


function createBookPost(book, bookshelf) {
    const bookPost = document.createElement('div');
    bookPost.classList.add('book-post');

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.name;

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`;

    const bookGenre = document.createElement('p');
    bookGenre.textContent = `Genre: ${book.genre}`;

    const removeButton = document.createElement('button');
    removeButton.className = "remove-button";
    removeButton.textContent = '-';
    removeButton.addEventListener('click', () => {
        removeBookFromBookshelf(bookshelf, book.id);
    });


  


    // Append elements to the book post container
    bookPost.appendChild(bookTitle);
    bookPost.appendChild(bookAuthor);
    bookPost.appendChild(bookGenre);
      bookPost.appendChild(removeButton);


    return bookPost;
}












