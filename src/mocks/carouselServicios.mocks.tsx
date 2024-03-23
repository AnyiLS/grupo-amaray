import {Slider1} from "components/Servicios/components/Slider1";
import {Slider2} from "components/Servicios/components/Slider2";
import {Slider3} from "components/Servicios/components/Slider3";
import {Slider4} from "components/Servicios/components/Slider4";

export interface CarouselServiciosItems {
    slide: (height: string, index: number) => JSX.Element
    image: string
}

export const carouselServiciosItems: CarouselServiciosItems[] = [
    {
        slide: (height: string, index: number) => <Slider1 height={height} index={index}/>,
        image: '/images/ComponentTMP_0-image.png'
    },
    {
        slide: (height: string, index: number) => <Slider2 height={height} index={index}/>,
        image: '/images/carouselHeader/ComponentTMP_0-image4.png'
    },
    {
        slide: (height: string, index: number) => <Slider3 height={height} index={index}/>,
        image: '/images/carouselHeader/image_5.jpg'
    },
    {
        slide: (height: string, index: number) => <Slider4 height={height} index={index}/>,
        image: '/images/carouselHeader/image_5.jpg'
    }
]