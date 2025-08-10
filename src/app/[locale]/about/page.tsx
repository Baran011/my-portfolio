"use client";
import Experiences from "@/components/Experiences";
import Interests from "@/components/Interests";
import ThreeJSAnimation from "@/components/ThreeJSAnimation";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <>
      <ThreeJSAnimation />
      <div
        className="flex flex-col w-full h-full gap-20"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div>
          <Label className="text-xl font-bold tracking-tighter sm:text-xl md:text-2xl relative mb-4">
            {t("about_title")}
          </Label>
          <Label className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
            {t("description")}
          </Label>
          <br />
          <Label className="font-medium text-[22px] block truncate mb-4">
            {t("professional_journey")}
          </Label>
          <Label className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
            {t("journey_description_edulog")}
            <br />
            <br />
            {t("journey_description_habithouse")}
          </Label>
          <br />
          <Label className="font-medium text-[22px] block truncate mb-4">
            {t("technical_expertise")}
          </Label>
          <Label className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
            {t("technical_description")}
          </Label>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
            <li>{t("technical.0")}</li>
            <li>{t("technical.1")}</li>
            <li>{t("technical.2")}</li>
            <li>{t("technical.3")}</li>
            <li>{t("technical.4")}</li>
            <li>{t("technical.5")}</li>
            <li>{t("technical.6")}</li>
          </ul>
          <br />
          <Label className="font-medium text-[22px] block truncate mb-4">
            {t("professional_philosophy")}
          </Label>
          <Label className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
            {t("philosophy_description")}
          </Label>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
            <li>{t("philosophy.0")}</li>
            <li>{t("philosophy.1")}</li>
            <li>{t("philosophy.2")}</li>
            <li>{t("philosophy.3")}</li>
          </ul>
          <br />
          <Label className="font-medium text-[22px] block truncate mb-4">
            {t("last_word")}
          </Label>
          <Label className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
            {t("last_description")}
          </Label>
          <br />
          <Label className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
            {t("last_description_1")}
          </Label>
        </div>
        <Interests />
        <Experiences />
      </div>
    </>
  );
}
