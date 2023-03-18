import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: 'Home',
      link: '/docs',
    },
    {
      text: 'Installation',
      link: '/docs/installation' 
    },
    {
      text: 'Getting Started',
      link: '/docs/gettingstarted'
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
          text: 'Driver Hardening',
          link: '/docs/config/driverhardening'
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
          text: 'Annotation Encryption',
          link: '/docs/config/annotationencryption'
        },
        {
          text: 'Flow Exception Range',
          link: '/docs/config/flowrange'
        },
        {
          text: 'Exception Return',
          link: '/docs/config/exceptionreturn'
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
      text: 'Bug Reporting',
      link: '/docs/bugreporting'
    }
  ],
});
