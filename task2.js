const fs = require('fs')
const fetch = require('node-fetch')
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(response => {
  fs.writeFile('result/post.txt', `${JSON.stringify(response)}`, (err) => {
    if (err) throw err
    console.log('file created successfully.')
  })
})