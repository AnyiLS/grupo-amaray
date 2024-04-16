export interface CarouselPortfolio {
    images: string
    title: string
    title_2?: string
    x: number
    x_selected: number
    x_2?: number
    to: string
}

export const carouselPortfolio: CarouselPortfolio[] = [
    {
        images: '/images/image_portfolio.jpg',
        title: 'Neurointervencionismo',
        x: 15,
        x_selected: 0,
        to: '/productos/neurointervencionismo'
    },
    {
        images: '/images/iamge_portfolio_1.jpg',
        title: 'Medicamentos',
        x: 55,
        x_selected: 15,
        to: '/productos/medicamentos'
    },
    {
        images: '/images/image_portfolio_2.jpg',
        title: 'Equipos Médicos',
        x_selected: 15,
        x: 42.715,
        to: '/productos/equipos-medicos'
    },
    {
        images: '/images/dispositivo.png',
        title: 'Dispositivos',
        x_selected: 0,
        x: 82.715,
        x_2: 35,
        title_2: 'médico-quirúrgicos',
        to: '/productos/dispositivos-medico-quirurgicos'
    },
    {
        images: '/images/ortopedi.png',
        title: 'Ortopedia',
        x_selected: 0,
        x: 93.715,
        to: '/productos/ortopedia'
    },
    {
        images: '/images/cirugia.png',
        title: 'Cirugía robótica',
        x_selected: 0,
        x: 57.715,
        to: '/productos/cirugia-robotica'
    },
    {
        images: '/images/genetica.png',
        title: 'Genómica y genética',
        x_selected: 0,
        x: 27.715,
        to: '/productos/genomica-y-genetica'
    },
    {
        images: '/images/ciudado.png',
        title: 'Cuidado avanzado',
        title_2: 'de heridas',
        x_2: 90,
        x_selected: 0,
        x: 42.715,
        to: '/productos/cuidado-avanzado-de-heridas'
    },
    {
        images: '/images/instrumental.png',
        title: 'Instrumental y',
        title_2: 'esterilización',
        x_2: 67.715,
        x_selected: 0,
        x: 63,
        to: '/productos/instrumental-y-estirilizacion'
    }
]