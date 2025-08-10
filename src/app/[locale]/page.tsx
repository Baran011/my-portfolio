"use client";

import Experiences from "@/components/Experiences";
import ProfileCard from "@/components/ProfileCard";
import Technologies from "@/components/Technologies";
import ThreeJSAnimation from "@/components/ThreeJSAnimation";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Homepage");
  return (
    <>
      <ThreeJSAnimation />
      <div
        className="flex flex-col w-full h-full gap-20"
        style={{ position: "relative", zIndex: 1 }}
      >
        <ProfileCard />
        <div>
          <Label className="text-xl font-bold tracking-tighter sm:text-xl md:text-2xl relative mb-4">
            {t("about_title")}
          </Label>
          <Label className="font-semibold text-[18px] block truncate mb-4">
            {t("greeting")}
          </Label>
          <Label className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
            {t("description")}
            <br />
            <br />
            {t("what_i_do_title")}
            <br />
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
              <li>{t("what_i_do.0")}</li>
              <li>{t("what_i_do.1")}</li>
              <li>{t("what_i_do.2")}</li>
              <li>{t("what_i_do.3")}</li>
              <li>{t("what_i_do.4")}</li>
            </ul>
          </Label>
          <br></br>
          {t("professional_approach_title")}
          <ul className="mt-4 space-y-4 list-none pl-0 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span>
                <strong>{t("professional_approach.0.title")}:</strong>{" "}
                {t("professional_approach.0.description")}
              </span>
            </li>
            <li className="flex items-start">
              <span>
                <strong>{t("professional_approach.1.title")}:</strong>{" "}
                {t("professional_approach.1.description")}
              </span>
            </li>
            <li className="flex items-start">
              <span>
                <strong>{t("professional_approach.2.title")}:</strong>{" "}
                {t("professional_approach.2.description")}
              </span>
            </li>
            <li className="flex items-start">
              <span>
                <strong>{t("professional_approach.3.title")}:</strong>{" "}
                {t("professional_approach.3.description")}
              </span>
            </li>
          </ul>
        </div>
        <Technologies />
        <Experiences />
      </div>
    </>
  );
}
