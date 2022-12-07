require('dotenv').config()

const express = require('express')
const app = express()

const notes = require('./data/notes')

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API is running')
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
  const note = notes.find((note) => note._id === req.params.id)

  if (note) {
    res.json(note)
  } else {
    res.send('Note is not found')
  }
})
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
