// templates/parts/head.js

export function head(page) {
  return `
   <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <title>${page.title}</title>
    <link rel="canonical" href="${page.canonical}">
    <link rel="shortcut icon" href="${page.favicon}"
        sizes="16x16">
    <link href="${page.canonical}" rel="dns-prefetch">
    <meta name="description"
        content="${page.desc}">
    <meta name="google" content="notranslate">
    <meta name="robots" content="index, follow">
    <meta name="rating" content="general">
    <meta name="geo.region" content="id_ID">
    <meta name="googlebot" content="index,follow">
    <meta name="geo.country" content="id">
    <meta name="language" content="Id-ID">
    <meta name="distribution" content="global">
    <meta name="geo.placename" content="Indonesia">
    <meta name="author" content="${page.site_name}">
    <meta name="publisher" content="${page.site_name}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="id_ID">
    <meta property="og:locale:alternate" content="en_ID">
    <meta property="og:title" content="${page.title}">
    <meta property="og:description"
        content="${page.desc}">
    <meta property="og:url" content="${page.canonical}">
    <meta property="og:site_name" content="${page.site_name}">
    <meta property="og:image" content="${page.image}">
    <meta property="og:image:alt" content="${page.site_name}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@${page.site_name}">
    <meta name="twitter:creator" content="@${page.site_name}">
    <meta name="twitter:domain" content="${page.canonical}">
    <meta name="twitter:title" content="${page.title}">
    <meta name="twitter:description"
        content="${page.desc}">
    <meta name="twitter:image" content="${page.image}">
    <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">

    <style amp-boilerplate>
        body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
    </style>
    <noscript>
        <style amp-boilerplate>
            body {
                -webkit-animation: none;
                -moz-animation: none;
                -ms-animation: none;
                animation: none
            }
        </style>
    </noscript>

    <style amp-custom>
        .login-btn,body{color:var(--text)}.btn,.btncil{display:inline-flex}.navbar{position:sticky;backdrop-filter:blur(12px)}.btn,.btncil{letter-spacing:1px;text-transform:uppercase;text-transform:uppercase}:root{--bg:#140505;--bg-soft:#230909;--panel:rgba(34, 32, 11, 0.92);--panel-2:rgba(48, 46, 16, 0.94);--text:#edf6ff;--muted:#9fb4cb;--primary:#efff5b;--primary-2:#f7ff8e;--accent:#fdff6f;--line:rgba(252, 255, 91, 0.18);--glow:0 0 0 1px rgba(255, 91, 91, 0.12),0 8px 30px rgba(0, 0, 0, .35),0 0 30px rgba(255, 111, 111, 0.08);--radius:18px}.login-btn,.slide{border:1px solid var(--line)}html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}*{margin:0;padding:0;box-sizing:border-box}body{font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;background:radial-gradient(circle at top left,rgba(255,91,91,.1),transparent 28%),radial-gradient(circle at top right,rgba(255,111,111,.08),transparent 24%),linear-gradient(180deg,#130303 0,#1d0808 55%,#140505 100%)}a,a:active,a:focus{text-decoration:none;outline:0;color:inherit}.clear{clear:both}.container{width:100%;max-width:1040px;margin:0 auto;padding:0 16px}.pb-2{padding-bottom:.5rem}.mt-2{margin-top:.5rem}@media (max-width:768px){.content{padding-top:90px}}.navbar{border-bottom:1px solid var(--line)}.btn{align-items:center;justify-content:center}.daftar-btn{background:linear-gradient(135deg,var(--primary),var(--primary-2));animation:1.6s infinite pulseBorder}.content-group table,.slide{overflow:hidden;background:linear-gradient(180deg,var(--panel),var(--panel-2));box-shadow:var(--glow);width:100%}@keyframes pulseBorder{0%{box-shadow:0 0 0 0 rgba(255,91,91,.34),0 12px 28px rgba(255,91,91,.24)}70%{box-shadow:0 0 0 10px rgba(255,91,91,0),0 12px 28px rgba(255,91,91,.24)}100%{box-shadow:0 0 0 0 rgba(255,91,91,0),0 12px 28px rgba(255,91,91,.24)}}.slide{border-radius:20px}.slide amp-img{display:block}.content-group table{border-collapse:separate;border-spacing:0;border-radius:20px;border:1px solid var(--line);text-align:center}.content-group table td,.content-group table th{padding:14px 12px;border-bottom:1px solid rgba(255,255,255,.06);border-right:1px solid rgba(255,255,255,.05)}.content-group table tr:last-child td{border-bottom:none}.content-group table td:last-child,.content-group table th:last-child{border-right:none}.content-group table th{background:linear-gradient(135deg,rgba(255,91,91,.22),rgba(255,111,111,.18));color:#fff;font-size:16px;letter-spacing:.8px}.content-group table td{background:rgba(255,255,255,.015);color:var(--text);font-weight:600}.btncil{align-items:center;justify-content:center;min-width:120px;min-height:40px;padding:8px 18px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:linear-gradient(135deg,#3a1717,#270d0d);color:#fff;font:700 13px/1 Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;box-shadow:0 8px 18px rgba(0,0,0,.24)}.footer{color:var(--muted);padding:22px 0 30px;font-size:14px;text-align:center}.footer strong{color:var(--primary-2)}.section-space{margin-top:18px}.navbar{top:0;z-index:999;width:100%;padding:14px 0;background:rgba(20,5,5,.82);border-bottom:1px solid var(--line);box-shadow:0 8px 24px rgba(0,0,0,.28)}.content{padding-top:18px}.topbar-wrap{background:linear-gradient(90deg,rgba(44,10,10,.96),rgba(34,7,7,.96));border:1px solid var(--line);border-radius:24px;padding:18px;box-shadow:var(--glow)}.topbar-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;align-items:center}.topbar-link{display:block;width:100%}.btn{display:flex;align-items:center;justify-content:center;width:100%;min-height:54px;padding:14px 18px;border-radius:16px;border:1px solid transparent;font:700 15px/1 Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;cursor:pointer;transition:.25s}.login-btn{background:linear-gradient(135deg,#001dc2,#001dc2);border:1px solid var(--line);color:var(--text);box-shadow:0 10px 22px rgba(0,0,0,.26)}.daftar-btn{background:linear-gradient(135deg,var(--primary),var(--primary-2));border:1px solid rgba(255,255,255,.18);color:#1b0303;box-shadow:0 12px 28px rgba(255,91,91,.28)}.login-btn:hover{border-color:rgba(255,142,142,.45);box-shadow:0 0 0 1px rgba(255,91,91,.16),0 12px 24px rgba(0,0,0,.28),0 0 18px rgba(255,91,91,.1)}.daftar-btn:hover{filter:brightness(1.03);box-shadow:0 0 0 1px rgba(255,255,255,.1),0 14px 28px rgba(255,91,91,.3),0 0 20px rgba(255,91,91,.18)}@media (max-width:768px){.content{padding-top:14px}.topbar-wrap{padding:14px;border-radius:20px}.topbar-grid{grid-template-columns:1fr;gap:12px}.btn{min-height:50px;font-size:14px}}
    </style>

    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>

    <script type="application/ld+json">
  {
    "@context":"http://schema.org",
    "@type":"Game",
    "name":"Togel Online",
    "author":{"@type":"Person","name":"${page.site_name}"},
    "headline":"${page.site_name} Situs Togel Online & Daftar Agen Pede Togel Terpercaya",
    "description":"${page.desc}",
    "keywords":["${page.site_name}","${page.site_name} link","${page.site_name} login","${page.site_name} gacor","${page.site_name} asia","situs terpercaya","bandar terpercaya","${page.site_name} gacor hari ini","${page.site_name} slot online","${page.site_name} bonus terbesar"],
    "image":"${page.image}",
    "url":"${page.canonical}",
    "publisher":{"@type":"Organization","name":"${page.site_name}"},
    "aggregateRating":{"@type":"AggregateRating","ratingValue":"96","bestRating":"100","worstRating":"0","ratingCount":"888888"},
    "inLanguage":"id-ID"
  }
  </script>
`;
}
