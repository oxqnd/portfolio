"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "../components/Sidebar"
import { MainContent } from "../components/MainContent"
import { PlayerControls } from "../components/PlayerControls"
import { SidebarToggle } from "../components/SidebarToggle"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Set sidebar open state based on screen size on initial load
  useEffect(() => {
    setSidebarOpen(!isMobile)
  }, [isMobile])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  // Close sidebar when a section is selected on mobile
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-black">
      <SidebarToggle isOpen={sidebarOpen} toggle={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden bg-black">
        <Sidebar setActiveSection={handleSectionChange} isOpen={sidebarOpen} />
        <MainContent activeSection={activeSection} sidebarOpen={sidebarOpen} />
      </div>
      <PlayerControls />
    </div>
  )
}
