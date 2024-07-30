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
      <CustomIcon className="inline dark:hidden" name="sun" size={24} />
      <CustomIcon className="hidden dark:block" name="moon" size={18} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
