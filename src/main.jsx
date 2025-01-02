import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter ,Routes, Route  } from "react-router";
import './index.css'
import App from './App.jsx'
import BookDetails from './Components/BookDetails.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bookdetails" element={<BookDetails />} />
  </Routes>
 </BrowserRouter>
)
