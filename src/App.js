import { Client } from "boardgame.io/react"
import { SocketIO } from "boardgame.io/multiplayer"
import { BattleLine } from "./Game"
import { BattleLineBoard } from "./Board"
import { BattleLineLobby } from "./Lobby"
import { Header } from "./Header"

const BattleLineClient = Client({
  game: BattleLine,
  board: BattleLineBoard,
  // ONLINE:
  multiplayer: SocketIO({ server: process.env.REACT_APP_SERVER_URL || "http://localhost:8000" }),
  // LOCAL:
  // multiplayer: SocketIO({ server: 'localhost:8000' }),
  // END
})

// ONLINE:
const App = () => (
  <div>
    <Header />
    <BattleLineLobby
      gameServer={process.env.REACT_APP_SERVER_URL || "http://localhost:8000"}
      lobbyServer={process.env.REACT_APP_SERVER_URL || "http://localhost:8000"}
      gameComponents={[{ game: BattleLine, board: BattleLineBoard }]}
    />
  </div>
)

// LOCAL:
// const App = () => (
//   <div>
//     <Header/>
//     <BattleLineClient/>
//   </div>
// )
// END

export default App
