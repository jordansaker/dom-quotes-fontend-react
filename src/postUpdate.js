async function postUpdate (data) {
  try {
    const res = await fetch('https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const returnedData = await res.json()
    console.log('Sucess')
    return returnedData
  } catch (err) {
    console.error('Error:', err)
    throw Error(err)
  }
}

export {
  postUpdate
}