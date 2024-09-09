import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FetchAndProvideData from './utilities/dataContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <FetchAndProvideData>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </FetchAndProvideData >

)
