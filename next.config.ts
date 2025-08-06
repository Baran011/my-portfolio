import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
});
