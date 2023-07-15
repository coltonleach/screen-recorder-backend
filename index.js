const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())

app.use((req, res, next) => {
  res.header('Cross-Origin-Opener-Policy', 'same-origin')
  res.header('Cross-Origin-Embedder-Policy', 'require-corp')
  next()
})

app.use(express.static(path.join(__dirname, 'public', 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})
