import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import globalConfig from "@/config/global";

export async function GET(context) {
  return rss({
    title: globalConfig.siteInfos.siteName,
    description: globalConfig.siteInfos.siteDescriptions,
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
