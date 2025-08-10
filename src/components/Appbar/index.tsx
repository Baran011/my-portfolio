"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sun, Moon, Globe, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import lightLogo from "@/assets/logo/mbcLightLogo.png";
import darkLogo from "@/assets/logo/mbcDarkLogo.png";
import Image from "next/image";

export default function AppBar() {
  const t = useTranslations("AppBar");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  const changeLanguage = (locale: string) => {
    const newPath = pathname.replace(/^\/(en|tr)/, `/${locale}`);
    router.push(newPath);
  };

  const downloadCV = () => {
    const currentLocale = pathname.split("/")[1] || "en";
    const cvPath = currentLocale === "tr" ? "/cv_tr.pdf" : "/cv_en.pdf";

    const link = document.createElement("a");
    link.href = cvPath;
    link.download = `Mehmet Baran CAKMAK_CV_${currentLocale.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentLocale = pathname.split("/")[1] || "en";
  const navLinks = [
    { href: `/${currentLocale}`, label: t("home") },
    { href: `/${currentLocale}/about`, label: t("about") },
    // { href: `/${currentLocale}/projects`, label: t("projects") },
    // { href: `/${currentLocale}/contact`, label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex w-full lg:w-1/2 h-16 items-center justify-between justify-self-center">
        <div className="flex items-center gap-6">
          <Link href={"/"}>
            <Image
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="logo"
              width={80}
              height={80}
              className="rounded-full cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-4 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <Button
            variant={"outline"}
            className="cursor-pointer"
            onClick={downloadCV}
          >
            {t("download_cv")}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button variant="ghost" size="sm" className="gap-1.5">
                <Globe className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only">{t("language")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => changeLanguage("en")}
                className={
                  currentLocale === "en" ? "bg-accent" : "" + "cursor-pointer"
                }
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => changeLanguage("tr")}
                className={
                  currentLocale === "tr" ? "bg-accent" : "" + "cursor-pointer"
                }
              >
                Türkçe
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center space-x-2">
            {theme === "dark" ? (
              <Moon className="mr-2 h-4 w-4" />
            ) : (
              <Sun className="mr-2 h-4 w-4" />
            )}
            <Switch
              className="cursor-pointer"
              checked={theme === "dark"}
              onCheckedChange={() =>
                handleThemeChange(theme === "dark" ? "light" : "dark")
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                  pathname === link.href ? "bg-accent" : ""
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
