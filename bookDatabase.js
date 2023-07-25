// Function to generate a random book name
function selectBook(i) {
    const bookNames = [
      "The Catcher in the Rye", "To Kill a Mockingbird", "1984",
      "Pride and Prejudice", "The Great Gatsby", "Harry Potter and the Sorcerer's Stone",
      "The Lord of the Rings", "Moby-Dick", "The Odyssey", "Alice's Adventures in Wonderland",
      "The Hobbit", "War and Peace", "Crime and Punishment", "The Adventures of Huckleberry Finn",
      "The Divine Comedy", "Don Quixote", "Wuthering Heights", "Anna Karenina", "Frankenstein",
      "Dracula", "The Brothers Karamazov", "The Picture of Dorian Gray", "Jane Eyre",
      "The Grapes of Wrath", "One Hundred Years of Solitude", "The Portrait of a Lady",
      "Brave New World", "The Sun Also Rises", "The Count of Monte Cristo",
      "The Adventures of Tom Sawyer", "The Secret Garden", "Les Misérables", "The War of the Worlds",
      "The Chronicles of Narnia", "Fahrenheit 451", "The Handmaid's Tale", "Slaughterhouse-Five",
      "The Shining", "The Hitchhiker's Guide to the Galaxy", "Gone with the Wind"
    ];
  
    return bookNames[i-1];
  }
  
  // Function to generate a random book author
  function generateRandAuthor() {
    const firstNames = [
      "John",
      "Jane",
      "Robert",
      "Emily",
      "Michael",
      "Elizabeth",
      "William",
      "Jennifer",
      "David",
      "Linda",
      "James",
      "Mary",
      "Richard",
      "Susan",
      "Charles",
      "Jessica",
      "Joseph",
      "Karen",
      "Thomas",
      "Nancy",
    ];
  
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Miller",
      "Davis",
      "Garcia",
      "Rodriguez",
      "Martinez",
      "Hernandez",
      "Lopez",
      "Gonzalez",
      "Wilson",
      "Anderson",
      "Thomas",
      "Taylor",
      "Moore",
      "Jackson",
      "Martin",
    ];
  
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    return `${firstName} ${lastName}`;
  }
  
  // Function to generate a random genre
  function selectGenre() {
    const genres = ["Fiction", "Mystery", "Science Fiction", "Romance", "Fantasy", "Thriller", "Horror", "Non-fiction", "Biography", "Historical Fiction"];
  
    return genres[Math.floor(Math.random() * genres.length)];
  }
  
  // Function to generate 20 books and store them in the book_database object
  function generateBooks() {
    const book_database = {};
  
    for (let i = 1; i <= 40; i++) {
      const book = {
        id: i,
        name: selectBook(i),
        author: generateRandAuthor(),
        genre: selectGenre(),
      };
  
      book_database[i] = book;
    }
  
    return book_database;
  }
  
  // Generate the books and store them in the book_database object
  const book_database = generateBooks();
  
  // Export the book_database object 

 

  