"use client"
import { MoonIcon } from "@heroicons/react/20/solid"
import { SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeSwitcher = () => {

    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const renderThemeChanger = () => {
        if (!mounted) return null
        const curentTheme = theme === "system" ? systemTheme : theme

        if (curentTheme === "dark") {
            return (
                <MoonIcon
                    className="relative w-6 h-6 text-[#25a1e0] z-10"
                    role="button"
                    onClick={() => setTheme("light")}
                />
            )
        } else {
            return (
                <SunIcon 
                    className="relative w-6 h-6 text-[#f1ad06] z-10"
                    role="button"
                    onClick={() => setTheme('dark')}
                />
            )
        }
    }

    return (
        <>{renderThemeChanger()}</>
    )
}

export default ThemeSwitcher