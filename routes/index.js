const express = require("express")
const router = express.Router()

let players = [
  {
    id: 0,
    name: "Kyrie Irving",
    team: "Boston Celtics",
    position: "point guard",
    status: "active"
  },
  {
    id: 1,
    name: "",
    team: "Boston Celtics",
    position: "shooting guard",
    status: "active"
  },
  {
    id: 2,
    name: "Paul George",
    team: "Oklahoma City Thunder",
    position: "small forward",
    status: "active"
  },
  {
    id: 3,
    name: "Blake Griffin",
    team: "Boston Celtics",
    position: "power forward",
    status: "active"
  },
  {
    id: 4,
    name: "DeMarcus Cousins",
    team: "Sacramento Kings",
    position: "center",
    status: "active"
  }
]

// get item by id
const getItemById = (items, id) => {
  const item = items.filter(item => {
    return item.id === Number(id)
  })
  return item
}

// save new item
const saveNewItem = (items, data) => {
  items.push(data)
}

// display players
router.get("/", (req, res) => {
  res.send(players)
})

//display single player
router.get("/:id", (req,res) => {
  res.send({
    message: `get single player`,
    player: getItemById(players, req.params.id)
  })
})

//save new player
router.post("/", (req, res) => {
  const data = {
    id: players.length,
    name: req.body.name,
    team: req.body.team,
    position: req.body.position,
    status: req.body.status
  }
  saveNewItem(players, data)
  res.send(players)
})

// delete players
router.delete("/", (req,res) => {
  players.splice(0, players.length)
  res.send(players)
})

// delete single player
router.delete("/:id", (req, res) => {
    const currentPlayers = players.filter(player =>{
      return player.id !== Number(req.params.id)
    })
    players = currentPlayers
    res.send({message: `player deleted`, currentPlayers: players})
})

//Update player
router.put(`/:id`, (req, res) => {
  const itemId = Number(req.params.id)
  const name = req.body.name
  const team = req.body.team
  const posistion = req.body.position
  const status = req.body.status

  //find data index
  const itemIndex = players.findIndex((item, index) => {
    return item.id === itemId
  })

  //Modify matched data
  players[itemIndex]["name"] = name
  players[itemIndex]["team"] = team
  players[itemIndex]["position"] = posistion
  players[itemIndex]["status"] = status

  // Prepare  response
  const response = {
    message: `player data has been updated !`,
    itemId: itemId,
    itemBody: itemBody,
    itemIndex: itemIndex,
    players: players
  }

  //send response
  res.send(response)

})

module.exports = router;
