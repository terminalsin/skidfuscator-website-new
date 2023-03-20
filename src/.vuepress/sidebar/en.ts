import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: 'Home',
      link: '/docs',
    },
    {
      text: 'Our Philosophy',
      link: '/docs/philosophy'
    },
    {
      text: 'Our Methodology',
      link: 'docs/methodology'
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
          text: 'Flow Outliner',
          link: '/docs/config/flowoutliner'
        },
        {
          text: 'Flow Range',
          link: '/docs/config/flowrange'
        },
        {
          text: 'Flow Condition',
          link: '/docs/config/flowcondition'
        },
        {
          text: 'Flow Exception',
          link: '/docs/config/flowexception'
        },
        {
          text: 'Flow Exception Return',
          link: '/docs/config/exceptionreturn'
        },
        {
          text: 'Flow Switch',
          link: '/docs/config/flowswitch'
        },
        {
          text: 'Method Renamer',
          link: '/docs/config/renamermethod'
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


