import { Moon, Sun } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const [theme, setThemeState] = React.useState<"light" | "dark" | "system">("system");

    React.useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        setThemeState(isDarkMode ? "dark" : "light");
    }, []);

    React.useEffect(() => {
        const isDark =
            theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    }, [theme]);

    return (
        // <DropdownMenu>
        // <DropdownMenuTrigger asChild>
        <Button
            variant="ghost"
            size="icon"
            onClick={() => {
                if (theme == "light") {
                    setThemeState("dark");
                } else {
                    setThemeState("light");
                }
            }}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </Button>
        //     </DropdownMenuTrigger>
        //     <DropdownMenuContent align="end" className="mx-2">
        //         <DropdownMenuItem onClick={() => setThemeState("light")}>Light</DropdownMenuItem>
        //         <DropdownMenuItem onClick={() => setThemeState("dark")}>Dark</DropdownMenuItem>
        //         <DropdownMenuItem onClick={() => setThemeState("system")}>System</DropdownMenuItem>
        //     </DropdownMenuContent>
        // </DropdownMenu>
    );
}
