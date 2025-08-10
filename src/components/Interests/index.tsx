import { Card } from "@/components/ui/card";
import { Film, Music, Palette, Plane } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Interests() {
  const t = useTranslations("About.Interests");

  const interests = [
    {
      title: t("film.title"),
      description: t("film.description"),
      icon: Film,
    },
    {
      title: t("music.title"),
      description: t("music.description"),
      icon: Music,
    },
    {
      title: t("design.title"),
      description: t("design.description"),
      icon: Palette,
    },
    {
      title: t("travel.title"),
      description: t("travel.description"),
      icon: Plane,
    },
  ];

  return (
    <section className="w-full">
      <div className="container">
        <div className="flex flex-col justify-center space-y-4 ">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tighter sm:text-xl md:text-2xl relative">
              {t("title")}
              <span className="absolute -bottom-3 left-0 right-0 w-24 h-1 bg-gray-800 dark:bg-gray-400"></span>
            </h2>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed italic">
              {t("subtitle")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card
                key={index}
                className="relative p-6 border-1 cursor-pointer border-gray-800 dark:border-gray-400 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-black"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-6 h-6 mt-1 text-gray-800 dark:text-gray-400" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {interest.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {interest.description}
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-4 border-b-2 border-r-2 border-gray-800 dark:border-gray-400" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
