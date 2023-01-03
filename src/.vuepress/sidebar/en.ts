import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: 'Home',
      link: '/docs',
    },
    {
      text: 'Exclusions',
      link: '/docs/exclusion',
    },
    {
        text: 'Libraries',
        link: '/docs/libraries',
    },
    {
        text: 'Transformers',
        link: '/docs/transformers',
    }
  ],
});
