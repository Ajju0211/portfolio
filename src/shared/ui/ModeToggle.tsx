"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/shared/utils/cn";
import { Button } from "@/components/ui/button";

type ToggleButton = {
  className?: string;
};

export function ModeToggle({ className }: ToggleButton) {
  const clickSound = React.useRef<HTMLAudioElement | null>(null);
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(() => {});
    }
  };

  const selectedTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
    handleClick();
  };

  if (!mounted) return null;

  return (
    <Button
      className={cn("border-none bg-transparent hover:bg-white/10", className)}
      variant="outline"
      size="icon"
      onClick={selectedTheme}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
      <audio ref={clickSound} src="/click.mp3" preload="auto" />
    </Button>
  );
}
