import React, { useEffect, useState } from 'react'

const styles = {
    border: '1px solid #fff',
    padding: '1.5rem',
    margin: '0.5rem',
}

const Quote = () => {
    const [quoteObject, setQuote] = useState(null)
    function fetchQuote () {
        fetch('https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/')
            .then(response => response.json())
            .then(data => {
            setQuote(data)
            })
    }

    useEffect(() => {
    fetch('https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/')
        .then(response => response.json())
        .then(data => setQuote(data))
    }, [])


  return (
    <div style={styles}> 
        <button onClick={fetchQuote}>Get Quote</button>
        {quoteObject && <blockquote >"{quoteObject.quote}"</blockquote>}
        {quoteObject && <p>{quoteObject.movie_title}</p>}
    </div>
  )
}

export default Quote