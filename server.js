const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/route')
require('./models/db')

app.use('/api/v1',router)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))