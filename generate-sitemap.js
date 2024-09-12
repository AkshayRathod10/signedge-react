// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const fs = require('fs');
const path = require('path');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: 'https://www.signedgeindia.com/' });

streamToPromise(sitemap).then((sm) =>
  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sm.toString())
);

links.forEach((link) => sitemap.write(link));

sitemap.end();
