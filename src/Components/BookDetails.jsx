import React from 'react'
import { useLocation } from 'react-router'
import './BookDetails.css'
export default function BookDetails() {
    
const {state} = useLocation();
const {cover_image,title,author,publisher,genre,id,publication_year,description} = state
  return (
   <>
    <h1>Book Details</h1>
     <main className='bookDetails'>
       
       <div className='image-section'>
           <img width={100} src={cover_image} alt="Book Image" />
       </div>
       <div className="content-section">
           <p>Title: {title}</p>
           <p>Author: {author}</p>
           <p>Publisher: {publisher}</p>
           <p>genre: {genre.join( )}</p>
           <p>Publication year: {publication_year}</p>
           <p>Description: {description}</p>
       </div>
   </main>
   </>
  )
}
