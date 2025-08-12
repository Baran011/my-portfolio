"use client";
import Experiences from "@/components/Experiences";
import Interests from "@/components/Interests";
import ThreeJSAnimation from "@/components/ThreeJSAnimation";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Briefcase, Code2, Users } from "lucide-react";

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
          <div className=" inset-0 flex flex-col z-10 ">
            <motion.div
              className="relative z-10 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-2xl  p-8 flex flex-col gap-6 max-w-4xl w-[90%] text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl md:text-3xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {t("about_title")}
              </motion.h1>

              <TypeAnimation
                sequence={[
                  t("frontend"),
                  1500,
                  t("react_next"),
                  1500,
                  t("ui"),
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="flex flex-col items-center">
                  <Code2 className="h-8 w-8  " />
                  <p className="text-xl font-bold">3+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("stats.years_experience")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Briefcase className="h-8 w-8 " />
                  <p className="text-xl font-bold">20+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("stats.technology")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-8 w-8 " />
                  <p className="text-xl font-bold">5+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("stats.reference")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
