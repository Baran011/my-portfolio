import { getRequestConfig } from "next-intl/server";
import { defaultLocale } from "../../next-intl.config";

export default getRequestConfig(async ({ locale }) => {
  const activeLocale = locale ?? defaultLocale;
  return {
    messages: (await import(`../messages/${activeLocale}.json`)).default,
    locale: activeLocale,
  };
});
