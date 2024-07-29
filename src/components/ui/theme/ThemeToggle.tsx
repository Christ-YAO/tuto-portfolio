// src/components/ThemeToggle.
"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { CustomIcon } from "../../../../app/_components/icons/CustomIcon";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className="text-primary"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" /> */}
      <CustomIcon className="inline" name="videoEditing" size={24} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
