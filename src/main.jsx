import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import Content from './Components/Content'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
)


