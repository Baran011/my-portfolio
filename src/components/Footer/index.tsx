"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const t = useTranslations("Footer");

  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Baran011",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mehmet-baran-çakmak-888a58141",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Email",
      url: "mailto:m.barancakmak@hotmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container w-full lg:w-1/2 px-4 py-8 md:py-12 items-center justify-between justify-self-center">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">{t("title")}</h3>
            <p className="text-muted-foreground mt-2 max-w-md text-center text-sm md:text-left">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button key={link.name} asChild variant="ghost" size="icon">
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </Link>
                </Button>
              ))}
            </div>
            <p className=" text-sm text-muted-foreground">
              © {currentYear} {t("copyright", { name: t("yourName") })}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            {t("builtWith")}{" "}
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              TypeScript
            </Link>
            ,{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Tailwind CSS
            </Link>
            ,{" "}
            <Link
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              shadcn/ui
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
