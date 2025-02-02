import "./books.css";

import { Button } from "react-bootstrap";

export default function Book({ book }) {
  return (
    <div className="book">
      <p className={book.completed ? "book-title-completed " : ""}>
        {book?.title}
      </p>
      <div className="btn-group">
        <Button variant="warning" onClick={() => console.log("Read/Unread")}>
          {book.completed ? "Read" : "Unread"}
          
        </Button>
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
}