const express = require('express')
const db = require('./models')
const Sequelize = require('sequelize')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3030
"production": {
  "use_env_variable": "postgres://xiyvitlmmbyylm:18b7bf50c7de59fd95641807f0f6bb08b90253dc2f196b4723e33262cd04ef93@ec2-54-221-207-184.compute-1.amazonaws.com:5432/d8560fdovklbdf"
}

const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())

const { Player } = db

app.listen(port, () => {
  console.log(`
Server is listening on ${port}.

Open http://localhost:${port}

to see the app in your browser.
    `)
})

Player.findAll().then(Player => {
  console.log(`I found these Player: ${Player}`)
})

app.get('/Players', (request, response) => {
  Player.findAll().then(Player => {
    response.send( Player )
  })
})

app.get('/Players/:id', (request, response) => {
  const playerId = request.params.id
  Player.findById(playerId).then(player => {
    if (player){
      response.send(player)
    }
    else {
        response.status(404)
        response.json ({ message: "No player with this id!"})
    }
  })
})

app.patch('/Players/:id', (req, res) => {
  const playerId = Number(req.params.id)
  const updates = req.body
  // find the product in the DB
  Player.findById(req.params.id)
    .then(entity => {
      // change the product and store in DB
      return entity.update(updates)
    })
    .then(final => {
      // respond with the changed product and status code 200 OK
      res.send(final)
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong`,
        error
      })
    })

})

app.post('/Players', (req, res) => {
  const player = req.body
  console.log(player)
  // insert the new data into our database
  Player.create(player).then(entity => {
    // ... product is now created

    // send an empty response to the client
    res.end()
  })


})
