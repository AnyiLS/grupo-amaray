import Slide1 from "components/Carousel/components/Slide1";
import Slide2 from "components/Carousel/components/Slide2";
import Slide3 from "components/Carousel/components/Slide3";

export interface CarouselHeaderItems {
    slide: (height: string, onClick: (number: number) => void) => JSX.Element
    image: string
}

export const carouselHeaderItems: CarouselHeaderItems[] = [
    {
        slide: (height: string, onClick: (number: number) => void) => <Slide1 height={height} onClick={onClick}/>,
        image: '/images/slider1.jpg'
    },
    {
        slide: (height: string, onClick: (number: number) => void) => <Slide2 height={height} onClick={onClick}/>,
        image: '/images/carouselHeader/ComponentTMP_0-image4.png'
    },
    {
        slide: (height: string, onClick: (number: number) => void) => <Slide3 height={height} onClick={onClick}/>,
        image: '/images/slider3.jpg'
    }
]