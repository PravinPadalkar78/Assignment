import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BooksForm from './Components/BooksForm'
import BooksTable from './Components/BooksTable'
import Data from '../Data'

function App() {
  const [booksData,setBooksData] = useState(Data);
  const [bookData,setBookData] = useState({
    title: "",
    author:"",
    publisher:""
  })
  const [editingID,setEditingID] = useState('')
  // fetch('https://freetestapi.com/api/v1/books?limit=5').then((res)=>res.json()).then((data)=>{
  //   console.log(data)
  // }).catch((err)=>{
  //   console.log(err)
  // })

  return (
   <main>
    <h1>Book Inventory Management System</h1>
     <div className="container">
      <BooksForm bookData={bookData} setBookData={setBookData} setBooksData={setBooksData} editingID={editingID} setEditingID={setEditingID}/>
      <BooksTable setBookData={setBookData} booksData ={booksData} setBooksData={setBooksData} setEditingID={setEditingID}/>
    </div>
   </main>
  )
}

export default App
