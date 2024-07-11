import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

async function generateSitemap() {
  const links = [
    { url: "/", changefreq: "daily", priority: 0.8 },
    {
      url: "/muide",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/teagmháil",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/cluichí",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/cluichí/ainmhite",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/cluichí/dathanna",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/cluichí/uimhreacha",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/cluichí/torthai",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/cluichí/glasrai",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/cluichí/aimsir",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
  ];

  const sitemapStream = new SitemapStream({
    hostname: "https://gogaeilge.com",
  });
  const writeStream = createWriteStream(resolve("./public/sitemap.xml"));

  sitemapStream.pipe(writeStream);
  links.forEach((link) => sitemapStream.write(link));
  sitemapStream.end();

  await streamToPromise(sitemapStream);
}

generateSitemap();
