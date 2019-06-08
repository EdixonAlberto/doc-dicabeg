module.exports = {
    title: 'Dicabeg',
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }],
        ['link', { rel: 'icon', href: 'http://localhost/doc-dicabeg/img/favicon.ico' }]
    ],
    description: 'Página de documentación para la app movil dicabeg',
    base: "/doc-dicabeg/",
    themeConfig: {
        nav: [
            { text: 'Inicio', link: '/' },
            { text: 'Autores', link: '/autors' },
            { text: 'Contacto', link: '/contact' },
        ],

        search: false,

        sidebar: [
            {
                title: 'Menú',
                collapsable: false,
                children: [
                    '/menu/images',
                    '/menu/download',
                    '/menu/politic'
                ]
            }
        ]
    }
}
