import React, { useState } from "react";

export default function BooksForm({
  bookData,
  setBookData,
  setBooksData,
  editingID,
  setEditingID,
}) {

  const [errorData,setErrorData] = useState({})
  const handleChange = (event, key) => {
    setBookData((prevState) => ({ ...prevState, [key]: event.target.value }));
  };
  const validate=(formData)=>
  {
    let error ={}
    if(formData.title.length < 5)
    {
      error = {...error , title:'Title Should be minimum 5 char long '}
    }
    if(formData.author.length < 5)
    {
      error = {...error , author:'Author Should be minimum 5 char long '}
    }
    if(formData.publisher.length < 5)
    {
      error = {...error , publisher:'publisher Should be minimum 5 char long '}
    }
    setErrorData(error)
    return error
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const ErrorData = validate(bookData);
    if(Object.entries(ErrorData).length)
    {
      return
    }
    
    if (editingID) {
      setBooksData((prevState) =>
        prevState.map((curr) => {
          if (curr.id === editingID) {
            return { ...bookData, id: editingID };
          }
          return curr;
        })
      );
      setBookData({ title: "", author: "", publisher: "" });
      setEditingID("");
    } else {
      setBooksData((prevState) => [
        ...prevState,
        { ...bookData, id: crypto.randomUUID() },
      ]);
    }
  };
  return (
    <form action="/" className="content-form" onSubmit={handleSubmit}>
      <h2>Form</h2>
      <div className="input-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={bookData.title}
          onChange={(e) => handleChange(e, "title")}
        />
        <p className="error">{errorData.title}</p>
      </div>
      <div className="input-group">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          name="author"
          id="author"
          value={bookData.author}
          onChange={(e) => handleChange(e, "author")}
        />
        <p className="error" >{errorData.author}</p>
      </div>

      <div className="input-group">
        <label htmlFor="publisher">publisher:</label>
        <input
          id="publisher"
          name="publisher"
          value={bookData.publisher}
          onChange={(e) => handleChange(e, "publisher")}
        />
        <p className="error"> {errorData.publisher}</p>
      </div>
      <div className="input-group">
        <button className="add-btn" type="submit">
          {editingID ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}
//Let's implement the functionality
