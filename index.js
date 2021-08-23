const express = require('express')
const app = express()

app.use(express.static('./Public'))

app.listen(6969, '0.0.0.0')