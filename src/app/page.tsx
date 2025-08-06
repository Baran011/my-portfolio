import { defaultLocale } from "../../next-intl.config";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/${defaultLocale}`);
  return null;
}
