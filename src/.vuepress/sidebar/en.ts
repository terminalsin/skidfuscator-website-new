import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: 'Home',
      link: '/docs',
    },
    {
      text: 'Config',
      prefix: "docs/config",
      link: '/docs/config',
      children: [
        {
          text: 'Details',
          link: '/docs/config'
        },
        {
          text: 'String Encryption',
          link: '/docs/config/stringencryption'
        },
        {
          text: 'Number Encryption',
          link: '/docs/config/numberencryption'
        },
        {
          text: 'Flow Exception Range',
          link: '/docs/config/flowrange'
        },
      ]
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
