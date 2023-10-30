import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [hello, setHello] = useState(false)
  return (
    <div className="container beige">
      <button className="stats">stats</button>
      <div className="home-buttons">
        <Link className="home-button" href= "/math"><button className="purple">Math</button></Link>
        <button className="home-button">Physic</button>
        <button className="home-button">Friends</button>
      </div>
    </div>
  )
}
