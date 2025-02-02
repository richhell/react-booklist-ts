import { useState } from 'react'
import Stack from 'react-bootstrap/Stack';
import './App.css'
import { Button } from 'react-bootstrap'
import { BookItem } from './types'
import BookList from './components/BookList.tsx'
import { listOfBooks } from './data'

function App() {
  const [books, setBooks] = useState<BookItem[]>(listOfBooks);
  console.log({ listOfBooks });

  const addBook = () => {
    const newBook: BookItem = {
      id: books.length + 1,
      title: "New Book",
      completed: false,
    }
    setBooks([...books, newBook]);
  }

  const toggleRead = (id: number) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        book.completed = !book.completed;
      }
        return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBook = (id: number) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  
  return (
    <Stack gap={2}>
      <div className="title">
        <h1>Book List for 2025</h1>
        <Button variant="primary" onClick={addBook}>
          Add Book
          </Button>
      </div>
      
      <div className="p-2">
        <h5>Current List of Books to Read in 2025</h5>
        <BookList 
        books={listOfBooks} 
        toggleRead={toggleRead}
        deleteBook={deleteBook}
        />
      </div>
  </Stack>
      
  )

}

export default App
