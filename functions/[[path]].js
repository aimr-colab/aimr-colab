// s functions/[[path]].js

import { ampPage } from "./amp.js";
import { pagesPage } from "./pages.js";
import { robotsPage } from "./robots.js";
import { sitemapPage } from "./sitemap.js";
import { rssPage } from "./rss.js";

export async function onRequest(context) {

  const pathname = new URL(context.request.url).pathname;

  // Home AMP
  if (pathname === "/amp") {
    return ampPage("/");
  }

  // Halaman AMP lainnya
  if (pathname.endsWith("/amp")) {

    const pagePath =
      pathname.replace(/\/amp$/, "") || "/";

    return ampPage(pagePath);
  }

  if (pathname === "/robots.txt") {
    return robotsPage();
  }

  if (pathname === "/sitemap.xml") {
    return sitemapPage();
  }

  if (pathname === "/rss.xml") {
    return rssPage();
  }

  return pagesPage(pathname);
}
