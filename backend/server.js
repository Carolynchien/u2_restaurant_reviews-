const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res )=>{

})

// app.use(express.static(`${__dirname}/client/build`))
// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
//    })
app.listen(PORT, () => {
  console.log(`SERVER RUNNING on PORT ${PORT}`)
})
