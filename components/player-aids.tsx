"use client"

import { useState } from "react"

interface PlayerAidsProps {
  className?: string
}

export function PlayerAids({ className }: PlayerAidsProps) {
  const [showFormations, setShowFormations] = useState(false)
  const [showTactics, setShowTactics] = useState(false)

  return (
    <div
      className={`player-aids ${className || ""}`}
      style={{
        position: "fixed",
        top: "100px",
        right: "10px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {/* Formation Strength Aid */}
      <div style={{ backgroundColor: "#f0f0f0", border: "1px solid #ccc", borderRadius: "5px" }}>
        <button
          onClick={() => setShowFormations(!showFormations)}
          style={{
            width: "100%",
            padding: "8px 12px",
            backgroundColor: "#e0e0e0",
            border: "none",
            borderRadius: "5px 5px 0 0",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          Formation Strength {showFormations ? "▼" : "▶"}
        </button>
        {showFormations && (
          <div style={{ padding: "10px", maxWidth: "300px" }}>
            <img
              src="https://cf.geekdo-images.com/JwFB5_eezBpx01Ku396hdQ__original/img/_tw1ZI0QyTnbyApLtyOJReFc5PY=/0x0/filters:format(jpeg)/pic5688208.jpg"
              alt="Formation Strength Guide"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>

      {/* Tactics Cards Aid */}
      <div style={{ backgroundColor: "#f0f0f0", border: "1px solid #ccc", borderRadius: "5px" }}>
        <button
          onClick={() => setShowTactics(!showTactics)}
          style={{
            width: "100%",
            padding: "8px 12px",
            backgroundColor: "#e0e0e0",
            border: "none",
            borderRadius: "5px 5px 0 0",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          Tactics Cards {showTactics ? "▼" : "▶"}
        </button>
        {showTactics && (
          <div style={{ padding: "10px", maxWidth: "300px" }}>
            <img
              src="https://cf.geekdo-images.com/MwnMj3EZRnlqFKG26VZU8A__original/img/Eji57TZ2pZTdAxzxW9zo_kCwmIg=/0x0/filters:format(png)/pic3337539.png"
              alt="Tactics Cards Guide"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
