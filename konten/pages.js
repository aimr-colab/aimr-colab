// konten/pages.js

import { home } from "./pages/home.js";
import { robopragma } from "./pages/robopragma.js";
import { tentangKami } from "./pages/tentang-kami.js";
import { kontak } from "./pages/kontak.js";

export const SITE = {
  title: page.title,
  desc: page.desc,
  afflink: page.afflink,
  site_name: page.site_name,
  canonical: page.canonical,
  logoimage: page.logoimage,
  image: page.image,
  favicon: page.favicon
};

export const PAGES = {
  "/": home,
  "/roboprgama": robopragma,
  "/tentang-kami": tentangKami,
  "/kontak": kontak
};
