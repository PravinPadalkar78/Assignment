import React from "react";
import { Link } from "react-router";

export default function BooksTable({  booksData, setBookData, setBooksData,setEditingID}) {
  const handleDelete = (rowId) => {
    setBooksData((prevState) =>
      prevState.filter((book) => {
        if (book.id !== rowId) {
          return book;
        }
      })
    );
  };
  
  const handleEdit = (rowId, title, author, publisher) => {
    setEditingID(rowId)
    setBookData({ title, author, publisher });
  };
  return (
    <table className="content-table">
      <caption style={{textAlign:'left'}}><h2>Table Content</h2></caption>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>Details</th>
          <th>Edit/Update</th>
        </tr>
      </thead>
      <tbody>
        {booksData.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publisher}</td>
            <td>
              <Link to="/bookDetails" state={book}><i title="Preview" className="fa fa-eye icon" aria-hidden="true"></i>
             
              </Link>
            </td>
            <td>
              <i
                
                className="icon fas icon fa-edit"
                onClick={(e) => handleEdit(book.id, book.title, book.author, book.publisher)}
              ></i>
              <i
                className="icon fa-solid icon fa-trash"
                onClick={() => handleDelete(book.id)}
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
