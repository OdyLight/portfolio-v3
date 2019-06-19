import path from 'path';
import fs from 'fs';
import util from 'util';
import { reloadClientData } from 'react-static/node';

const readFile = util.promisify(fs.readFile);

if (process.env.NODE_ENV === 'development') {
  fs.watch('./public/content', reloadClientData);
}

export default {
  getSite: () => ({
    siteTitle: 'Evan Godon',
    metaDescription: 'A front-end web developer experienced in React',
  }),
  getRoutes: () => [
    {
      path: '/about',
      getData: async () => {
        const aboutData = await readFile('./public/content/about.json', 'utf8');
        return { aboutData: JSON.parse(aboutData) };
      },
    },
  ],
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-svg'),
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-styled-components'),
  ],
};
