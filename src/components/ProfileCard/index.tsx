"use client";

import Image from "next/image";
import profilePicture from "@/assets/logo/profilePicture.png";
import circle from "@/assets/logo/circle.png";
import pencil from "@/assets/logo/pencil.png";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function ProfileCard() {
  const t = useTranslations("Homepage");

  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="shrink-0 relative w-[150px] h-[150px]">
        <Image
          src={pencil}
          alt="profile pencil"
          width={150}
          height={150}
          priority
          className="rounded-full absolute top-[-95px] left-[80px] dark:filter dark:brightness-0 dark:invert"
        />
        <Image
          src={profilePicture}
          alt="profile picture"
          width={150}
          height={150}
          priority
          className="rounded-full absolute z-10"
          style={{
            width: "calc(100% - 8px)",
            height: "calc(100% - 8px)",
            left: "4px",
            top: "4px",
          }}
        />
        <Image
          src={circle}
          alt="profile frame"
          width={150}
          height={150}
          priority
          className="rounded-full absolute dark:filter dark:brightness-0 dark:invert"
        />
      </div>

      <div className="flex flex-col gap-4 min-w-0">
        <div className="min-w-0">
          <h1 className="font-bold text-[26px] block truncate">
            Mehmet Baran ÇAKMAK
          </h1>
          <p className="font-medium text-neutral-500 dark:text-neutral-300 block">
            {t("frontend_web_developer")} | {t("computer_engineer")}
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/mehmet-baran-%C3%A7akmak-888a58141/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Linkedin className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
          </Link>
          <Link
            href="https://www.instagram.com/m.baranckmk?utm_source=qr&igsh=aXNiMzhqZWVyOGY="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Instagram className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
          </Link>
          <Link
            href="mailto:m.barancakmak@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Mail className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
