import React, { useState } from 'react'
import './App.css'
import HeaderDashboard from './HeaderDashboard'
import { postUpdate } from './postUpdate'



const NewQuotePage = () => {

    const [quote, setQuote] = useState('')
    const [movieTitle, setMovieTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const postData = {
            quote,
            movie_title: movieTitle
        }
        postUpdate(postData)
    }

  return <>
    <HeaderDashboard />
    <h3>Add New Quote</h3>
    <form className='forms' onClick={ handleSubmit }>
        <label>Quote:</label>
        <textarea 
            name="quote" 
            id="newQuote"
            cols="30"
            rows="10"
            value={quote}
            onChange={e => setQuote(e.target.value)}
        ></textarea>
        <label>Movie Title:</label>
        <input
            type="text"
            name="movieTitle"
            id="movieTitle"
            value={movieTitle}
            onChange={e => setMovieTitle(e.target.value)}
        />
        <input type="submit" value="Submit" />
    </form>
  </>
}

export default NewQuotePage