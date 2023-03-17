import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Pricing", icon: "tags", link: "/pricing/" },
  {
    text: "Docs", icon: "book", link: "/docs/",
    /*children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],*/
  },
  { text: "Changelog", icon: "tags", link: "/changelog/" },
]);
