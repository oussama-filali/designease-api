"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm border-border/40">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-foreground">
              <Code className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-semibold">DesignEase API</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            <a href="#features" className="transition-colors text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#templates" className="transition-colors text-muted-foreground hover:text-foreground">
              Templates
            </a>
            <a href="#api" className="transition-colors text-muted-foreground hover:text-foreground">
              API
            </a>
            <a href="#docs" className="transition-colors text-muted-foreground hover:text-foreground">
              Docs
            </a>
            <a href="#demo" className="transition-colors text-muted-foreground hover:text-foreground">
              Demo
            </a>
          </nav>

          <div className="items-center hidden space-x-4 md:flex">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90">Get API Key</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="pb-4 mt-4 border-t md:hidden border-border/40">
            <nav className="flex flex-col mt-4 space-y-4">
              <a href="#features" className="transition-colors text-muted-foreground hover:text-foreground">
                Features
              </a>
              <a href="#templates" className="transition-colors text-muted-foreground hover:text-foreground">
                Templates
              </a>
              <a href="#api" className="transition-colors text-muted-foreground hover:text-foreground">
                API
              </a>
              <a href="#docs" className="transition-colors text-muted-foreground hover:text-foreground">
                Docs
              </a>
              <a href="#demo" className="transition-colors text-muted-foreground hover:text-foreground">
                Demo
              </a>
              <div className="flex flex-col pt-4 space-y-2">
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setDarkMode((prev) => !prev)}
                >
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  Sign In
                </Button>
                <Button className="bg-foreground text-background hover:bg-foreground/90">Get API Key</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
