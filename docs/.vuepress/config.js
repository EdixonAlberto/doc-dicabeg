module.exports = {
  base: "/doc-dicabeg/",
  title: "Dicabeg",
  lang: "es-VE",
  description: "Documentación sobre aplicación movil Dicabeg",
  head: [
    ["meta", { name: "author", content: "Edixon Piña" }],
    ["meta", { property: "og:image", content: "https://raw.githubusercontent.com/EdixonAlberto/doc-dicabeg/master/.github/index-page.png" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto"
      }
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  themeConfig: {
    search: false,
    logo: "/img/dicabeg.png",
    nav: [
      { text: "Creadores", link: "/creators" },
      { text: "Contacto", link: "/contact" }
    ],
    sidebar: [
      {
        title: "Menú",
        collapsable: false,
        children: [
          "/",
          "/menu/images",
          "/menu/policy",
          "/menu/terms",
          "/menu/download"
        ]
      }
    ],
    activeHeaderLinks: false,
    sidebarDepth: 0
  },
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
