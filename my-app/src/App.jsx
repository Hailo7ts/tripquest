import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import NewPostPage from './pages/NewPostPage';
import EditPage from './pages/EditPage';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'

function App() {
    return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/new" element={<NewPostPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/posts/edit/:id" element={<EditPage />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
