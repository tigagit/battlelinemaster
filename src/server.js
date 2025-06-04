// src/server.js

const { Server } = require("boardgame.io/server")
const { BattleLine } = require("./Game")

require("dotenv").config()

const server = Server({
  games: [BattleLine],
  origins: [process.env.FRONTEND_URL || "http://localhost:3000", "*"],
})

// Add CORS middleware
const cors = require("cors")
const app = server.app
app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "http://localhost:3000", "*"],
    credentials: true,
  }),
)

const PORT = process.env.PORT || 8000

server.run(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
