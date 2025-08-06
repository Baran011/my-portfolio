"use client";
import { useTranslations } from "next-intl";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Experiences() {
  const t = useTranslations("Experiences");
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>(
    {}
  );

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const experiences = [
    {
      company: t("KSHabithouse.company"),
      position: t("KSHabithouse.position"),
      period: t("KSHabithouse.period"),
      description: [
        t("KSHabithouse.description.0"),
        t("KSHabithouse.description.1"),
        t("KSHabithouse.description.2"),
        t("KSHabithouse.description.3"),
        t("KSHabithouse.description.4"),
      ],
      technologies: [
        t("technologies.react"),
        t("technologies.formik"),
        t("technologies.chakra"),
        t("technologies.zustand"),
      ],
    },
    {
      company: t("Edulog.company"),
      position: t("Edulog.position"),
      period: t("Edulog.period"),
      description: [
        t("Edulog.description.0"),
        t("Edulog.description.1"),
        t("Edulog.description.2"),
        t("Edulog.description.3"),
        t("Edulog.description.4"),
        t("Edulog.description.5"),
        t("Edulog.description.6"),
      ],
      technologies: [
        t("technologies.nextjs"),
        t("technologies.react"),
        t("technologies.typescript"),
        t("technologies.redux"),
        t("technologies.awsCognito"),
        t("technologies.nxMonorepo"),
        t("technologies.tailwind"),
        t("technologies.jest"),
        t("technologies.rtl"),
        t("technologies.mui"),
        t("technologies.tanstackTable"),
      ],
    },
    {
      company: t("AdanaEmlak.company"),
      position: t("AdanaEmlak.position"),
      period: t("AdanaEmlak.period"),
      description: [
        t("AdanaEmlak.description.0"),
        t("AdanaEmlak.description.1"),
      ],
      technologies: [
        t("technologies.itManagement"),
        t("technologies.networkSystems"),
        t("technologies.techSupport"),
      ],
    },
  ];

  return (
    <section>
      <div className="space-y-2 mb-8">
        <h2 className="font-medium text-[22px] block truncate mb-4">
          {t("title")}
        </h2>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow flex ">
            <CardHeader
              className="cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCard(index);
                    }}
                  >
                    {expandedCards[index] ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                  <div>
                    <CardTitle className="font-medium text-[16px] block truncate">
                      {exp.position}
                    </CardTitle>
                    <CardDescription className="font-medium text-[16px] block truncate">
                      {exp.company}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="text-sm">
                  {exp.period}
                </Badge>
              </div>
            </CardHeader>

            <div
              className={`overflow-hidden transition-all duration-1300 ease-in-out ${
                expandedCards[index] ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <Separator className="mb-4" />
              <CardContent className="space-y-4">
                <ul className="space-y-2 list-disc pl-5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-sm font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
