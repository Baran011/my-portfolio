"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import nextLogo from "@/assets/logo/nextjs.svg";
import javascriptLogo from "@/assets/logo/javascript.svg";
import typescriptLogo from "@/assets/logo/typescript.svg";
import reactLogo from "@/assets/logo/react.svg";
import reduxLogo from "@/assets/logo/redux.svg";
import reacthookformLogo from "@/assets/logo/reacthookform.svg";
import jestLogo from "@/assets/logo/jest.svg";
import zodLogo from "@/assets/logo/zod.svg";
import muiLogo from "@/assets/logo/mui.svg";
import tailwindcssLogo from "@/assets/logo/tailwindcss.svg";
import styledComponentsLogo from "@/assets/logo/styledcomponents.svg";
import storybookLogo from "@/assets/logo/storybook.svg";
import figmaLogo from "@/assets/logo/figma.svg";
import webpackLogo from "@/assets/logo/webpack.svg";
import npmLogo from "@/assets/logo/npm.svg";
import yarnLogo from "@/assets/logo/yarn.svg";
import nxLogo from "@/assets/logo/nx.svg";
import jiraLogo from "@/assets/logo/jira.svg";
import bitbucketLogo from "@/assets/logo/bitbucket.svg";
import awsLogo from "@/assets/logo/aws.svg";
import Image from "next/image";
import AutoCarousel from "./AutoCarousel";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

const technologies = [
  { name: "JavaScript (ES6+)", icon: javascriptLogo },
  { name: "TypeScript", icon: typescriptLogo },
  { name: "React", icon: reactLogo },
  { name: "Next.js", icon: nextLogo },
  { name: "Redux", icon: reduxLogo },
  { name: "React Hook Form", icon: reacthookformLogo },
  { name: "Zod", icon: zodLogo },
  { name: "JEST", icon: jestLogo },
  { name: "Material-UI", icon: muiLogo },
  { name: "Tailwind CSS", icon: tailwindcssLogo },
  { name: "Styled Components", icon: styledComponentsLogo },
  { name: "Storybook", icon: storybookLogo },
  { name: "Figma", icon: figmaLogo },
  { name: "Webpack", icon: webpackLogo },
  { name: "npm", icon: npmLogo },
  { name: "Yarn", icon: yarnLogo },
  { name: "NX", icon: nxLogo },
  { name: "Jira", icon: jiraLogo },
  { name: "Bitbucket", icon: bitbucketLogo },
  { name: "AWS", icon: awsLogo },
];

export default function Technologies() {
  const t = useTranslations("Homepage");
  const card = (tech: { name: string; icon: StaticImageData }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full bg-neutral-100 cursor-pointer">
      <CardContent className="flex flex-col items-center justify-center p-4 h-full transform group-hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 mb-2 flex items-center justify-center">
          <Image
            src={tech.icon}
            alt={tech.name}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-sm text-center font-medium text-black">
          {tech.name}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <section className="pb-8">
      <h2 className="text-xl font-bold tracking-tighter sm:text-xl md:text-2xl relative mb-4">
        {t("technologies_I_use")}
      </h2>

      <AutoCarousel
        direction="right"
        speed={28}
        items={technologies.slice(0, 10).map((t) => card(t))}
      />

      <AutoCarousel
        direction="left"
        speed={28}
        items={technologies.slice(10, 20).map((t) => card(t))}
      />
    </section>
  );
}
