import React from 'react'
import Carousel from 'components/Carousel/Carousel';
import { CarouselMovil } from 'componentsmovil/CarouselMovil/CarouselMovil';
import Cifras from 'components/Cifras/Cifras';
import Servicios from 'components/Servicios/Servicios';
import Portafolio from 'components/Portafolio/Portafolio';
import { CifrasMovil } from 'componentsmovil/CifrasMovil/CifrasMovil';
// import { ServiciosMovil } from 'componentsmovil/ServiciosMovil/ServiciosMovil';
import { PortafolioMovil } from 'componentsmovil/PortafolioMovil/PortafolioMovil';
import { ServiciosMovil } from 'componentsmovil/ServiciosMovil/ServiciosMovil-ANYI-LOZANO';

const Home: React.FC = (): JSX.Element => {
    const [width, setWidth] = React.useState<number>(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));

        return () => window.removeEventListener('resize', () => setWidth(window.innerWidth))
    }, [])
    
    return (
        <React.Fragment>
            {
                width >= 768 ? (
                    <React.Fragment>
                        <Carousel/>
                        <Cifras/>
                        <Servicios/>
                        <Portafolio/>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <CarouselMovil />
                        <CifrasMovil />
                        <ServiciosMovil />
                        <PortafolioMovil />
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default Home
