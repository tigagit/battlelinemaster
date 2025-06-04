// src/server.js

import { Server } from "boardgame.io/server"
import { BattleLine } from "./Game"
import cors from "cors"

const dotenv = require("dotenv")
dotenv.config()

const server = Server({
  games: [BattleLine],
  origins: [process.env.FRONTEND_URL || "http://localhost:3000", "*"],
})

// Add CORS middleware
const app = server.app
app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "http://localhost:3000", "*"],
    credentials: true,
  }),
)

// ONLINE:
const PORT = process.env.PORT || 8000
// LOCAL:
// const PORT = 8000;
// END

server.run(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
