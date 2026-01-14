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

export default function Education() {
  const t = useTranslations("Education");
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>(
    {}
  );

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const educations = [
    {
      university: t("IskenderunTechnical.university"),
      degree: t("IskenderunTechnical.degree"),
      period: t("IskenderunTechnical.period"),
      gpa: t("IskenderunTechnical.gpa"),
      note: t("IskenderunTechnical.note"),
    },
    {
      university: t("Harran.university"),
      degree: t("Harran.degree"),
      period: t("Harran.period"),
      gpa: t("Harran.gpa"),
      note: "",
    },
  ];

  return (
    <section className="relative">
      <div className="space-y-2 mb-8">
        <h2 className="text-xl font-bold tracking-tighter sm:text-xl md:text-2xl relative">
          {t("title")}
          <span className="absolute -bottom-3 left-0 right-0 w-24 h-1 bg-gray-800 dark:bg-gray-400"></span>
        </h2>
        <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed italic">
          {t("subtitle")}
        </p>
      </div>

      <div className="relative space-y-8">
        {educations.map((edu, index) => (
          <div key={index} className="relative">
            <Card className="relative bg-white dark:bg-black border-1 border-gray-800 dark:border-gray-400 shadow-none hover:shadow-sm transition-shadow">
              <CardHeader
                className="cursor-pointer py-4 pr-8"
                onClick={() => toggleCard(index)}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="flex items-start gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 border border-gray-300 dark:border-gray-600"
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
                      <CardTitle className="font-medium text-[16px]">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="font-medium text-[16px]">
                        {edu.university}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-sm border-gray-800 dark:border-gray-400"
                  >
                    {edu.period}
                  </Badge>
                </div>
              </CardHeader>

              <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                  expandedCards[index] ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <Separator className="mb-4 border-gray-300 dark:border-gray-700" />
                <CardContent className="space-y-4 pb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="text-sm font-normal border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800"
                      >
                        {edu.gpa}
                      </Badge>
                    </div>
                    {edu.note && (
                      <p className="text-muted-foreground text-sm italic">
                        {edu.note}
                      </p>
                    )}
                  </div>
                </CardContent>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-4 border-b-2 border-r-2 border-gray-800 dark:border-gray-400" />
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
