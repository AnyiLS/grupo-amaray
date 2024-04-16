import {Slider1} from "components/Servicios/components/Slider1";
import {Slider2} from "components/Servicios/components/Slider2";
import {Slider3} from "components/Servicios/components/Slider3";
import {Slider4} from "components/Servicios/components/Slider4";

export interface CarouselServiciosItems {
    slide: (height: string, index: number, handleChangeSlide: (position: number) => void) => JSX.Element
    image: string
}

export const carouselServiciosItems: CarouselServiciosItems[] = [
    {
        slide: (height: string, index: number, handleChangeSlide: (position: number) => void) => <Slider1 height={height} index={index} handleChangeSlide={handleChangeSlide}/>,
        image: '/images/ComponentTMP_0-image.png'
    },
    {
        slide: (height: string, index: number, handleChangeSlide: (position: number) => void) => <Slider2 height={height} index={index} handleChangeSlide={handleChangeSlide}/>,
        image: '/images/carouselHeader/ComponentTMP_0-image4.png'
    },
    {
        slide: (height: string, index: number, handleChangeSlide: (position: number) => void) => <Slider3 height={height} index={index} handleChangeSlide={handleChangeSlide}/>,
        image: '/images/carouselHeader/image_5.jpg'
    },
    {
        slide: (height: string, index: number, handleChangeSlide: (position: number) => void) => <Slider4 height={height} index={index} handleChangeSlide={handleChangeSlide}/>,
        image: '/images/carouselHeader/image_5.jpg'
    }
]