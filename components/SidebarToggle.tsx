import { Menu, X } from "lucide-react"

interface SidebarToggleProps {
  isOpen: boolean
  toggle: () => void
}

export function SidebarToggle({ isOpen, toggle }: SidebarToggleProps) {
  return (
    <button
      className={`fixed top-4 z-50 bg-black/70 text-white p-2 rounded-md hover:bg-black/90 transition-all duration-300 ${
        isOpen ? "left-[240px]" : "left-4"
      }`}
      onClick={toggle}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  )
}
