"use client"

import { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { MainContent } from "../components/MainContent"
import { PlayerControls } from "../components/PlayerControls"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar setActiveSection={setActiveSection} />
        <MainContent activeSection={activeSection} />
      </div>
      <PlayerControls />
    </div>
  )
}
