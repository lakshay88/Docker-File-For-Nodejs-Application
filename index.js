const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    "author":"Lakshay Maheshwari",
    "application":"NodeJs",
    "docker-image":"DockerFile",
    "Description":"Its a basic image created by DockerFile which is NodeJs Applications"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})