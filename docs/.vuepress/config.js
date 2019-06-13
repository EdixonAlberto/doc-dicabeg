module.exports = {
    base: "/doc-dicabeg/",
    title: 'Dicabeg',
    lang: "es-VE",
    description: 'Página de documentación para la app movil dicabeg',
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        search: false,
        logo: '/img/logo_dicabeg.png',
        nav: [
            { text: 'Creadores', link: '/creators' },
            { text: 'Contacto', link: '/contact' },
        ],
        sidebar: [
            {
                title: 'Menú',
                collapsable: false,
                children: [
                    '/',
                    '/menu/images',
                    '/menu/politic',
                    '/menu/download'
                ]
            }
        ],
        activeHeaderLinks: false,
    }
}
