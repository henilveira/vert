"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { flushSync } from "react-dom"
import { useTheme } from "next-themes"

import { cn } from "@vert/lib/utils"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    const newTheme = theme === "dark" ? "light" : "dark"

    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      setTheme(newTheme)
      return
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme)
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [theme, setTheme, duration])

  // Placeholder durante SSR para evitar layout shift
  if (!mounted) {
    return (
      <button
        ref={buttonRef}
        className={cn(
          "relative z-50 cursor-pointer rounded-md p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
          className
        )}
        aria-label="Alternar tema"
        {...props}
      >
        <div className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "relative z-50 cursor-pointer rounded-md p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
        className
      )}
      aria-label={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
      {...props}
    >
      {theme === "dark" ? (
        <IconSun className="h-5 w-5 text-neutral-300" />
      ) : (
        <IconMoon className="h-5 w-5 text-neutral-600" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
