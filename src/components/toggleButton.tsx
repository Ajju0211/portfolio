"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import clsx from "clsx"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"



type ToggleButton = {
  className?: string
}

export function ModeToggle( {className} : ToggleButton ) {

  const clickSound = React.useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0; // rewind if already playing
      clickSound.current.play();
    }
  };

  const { setTheme, theme } = useTheme()

  const selectedTheme = (): void => {
    setTheme(theme == 'dark'? 'light': 'dark')
    handleClick()
    if(theme === 'dark'){
    toast.success("Dark", {
      description: "Doesn't is light very much"
        })
      return
      }
    toast.success("Light",{
      description: "Doesn't like dark very much"
    })
    
  }

  return (
        <Button className={clsx("sm:flex hidden border-none", className)} variant="outline" size="icon" onClick={selectedTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
          <audio ref={clickSound} src="/click.mp3" preload="auto" />
        </Button>
  )
}
