import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "../next-intl.config";

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
