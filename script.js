function login() {
    // store input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Check  fields are not blank
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in both email and password fields.');
      return false; // Prevent form submission
    }

  
    // Go to the main feed
    window.location.href = 'feed.html';

    return false;
  }
  


function createBookPost(book) {
    const bookPost = document.createElement('div');
    bookPost.classList.add('book-post');

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.name;

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`;

    const bookGenre = document.createElement('p');
    bookGenre.textContent = `Genre: ${book.genre}`;

    const plusButton = document.createElement('button');
    plusButton.className = "add_button"
    plusButton.textContent = '+';
    plusButton.addEventListener('click', () => {
        const selectedBookshelf = selectBookshelf();
        if (selectedBookshelf) {
            addBookToBookshelf(book, selectedBookshelf);
        }
    });

    // Append elements to the book post container
    bookPost.appendChild(bookTitle);
    bookPost.appendChild(bookAuthor);
    bookPost.appendChild(bookGenre);
    bookPost.appendChild(plusButton);

    return bookPost;
}


function displayBookFeed() {
    // Check if the current page is feed.html
    const currentPath = window.location.pathname;
    const isFeedPage = currentPath.endsWith('feed.html');
    
    //This will create the feed
    if (isFeedPage) {
        const feedContainer = document.querySelector('.feed');

        for (const bookId in book_database) {
            const book = book_database[bookId];
            const bookPostElement = createBookPost(book);
            feedContainer.appendChild(bookPostElement);
        }
    }
}
// Assume you already have the book_database defined or imported
function searchBooks() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous search results
  
    // Loop through the book_database to find matching books
    for (const bookId in book_database) {
      const book = book_database[bookId];
      const bookName = book.name.toLowerCase();
  
      // Check if the book name contains the search input as a substring
      if (bookName.includes(searchInput)) {
        // Create a new book post element
        const bookElement = document.createElement("div");

        bookElement.classList.add("book");
  
        // Create book details
        const bookTitle = document.createElement("h2");
        bookTitle.textContent = book.name;
  
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = `Author: ${book.author}`;
  
        const bookGenre = document.createElement("p");
        bookGenre.textContent = `Genre: ${book.genre}`;
  
        // Create the add button
        const addButton = document.createElement("button");
        addButton.className = "add_button";
        addButton.textContent = "+";
        addButton.addEventListener('click', () => {
            const selectedBookshelf = selectBookshelf();
            if (selectedBookshelf) {
                addBookToBookshelf(book, selectedBookshelf);
            }
        });
  
        // Append the book details and add button to the book post container
        bookElement.appendChild(bookTitle);
        bookElement.appendChild(bookAuthor);
        bookElement.appendChild(bookGenre);
        bookElement.appendChild(addButton);
  
        // Append the book post element to the search results container
        searchResultsContainer.appendChild(bookElement);
      }
    }
  }
  


// Displays book feed when this page is loaded
document.addEventListener('DOMContentLoaded', displayBookFeed);



