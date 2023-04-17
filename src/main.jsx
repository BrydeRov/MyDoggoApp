import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/index.umd.js';
// Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

import AppLayout from './assets/Layouts/AppLayout.jsx';
import App from './App.jsx';

// POSTS
import PostsIndex from './Pages/Posts/Index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />

    {/* Routes */}
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout/>}/>
        <Route path='/Posts/' element={<PostsIndex/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
