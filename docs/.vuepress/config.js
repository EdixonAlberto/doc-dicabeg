module.exports = {
    title: 'Dicabeg',
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }]
    ],
    description: 'Pagina de documentación para la app movil dicabeg',
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
