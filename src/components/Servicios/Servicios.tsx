import { CarouselInterface } from "flowbite";
import { Carousel } from "flowbite-react";
import { CarouselServiciosItems, carouselServiciosItems } from "mocks/carouselServicios.mocks";
import React from "react";

const Servicios: React.FC = () => {
  const [height, setHeight] = React.useState<string>("100vh");

  const carouselRef = React.useRef<any>(undefined);

  React.useEffect(() => {
    const resizeImage = () => {
      if (window.innerWidth > 1024 && window.innerHeight > 1080) {
        setHeight("100%");
      } else if (window.innerWidth < 1024 && window.innerHeight > 900) {
        setHeight("100%");
      } else if (window.innerHeight > 800) {
        setHeight("110vh");
      } else if (window.innerHeight < 700) {
        setHeight("100%");
      } else {
        setHeight("100vh");
      }
    };
    window.addEventListener("resize", resizeImage);

    resizeImage();

    return () => window.removeEventListener("resize", resizeImage);
  }, []);

  const [flowIndex, setFlowIndex] = React.useState<number>(0)

  const handleChangeSlide = (position: number) => {
    console.log(carouselRef)
    // if (carouselRef.current) return carouselRef.current!.slideTo(position)
    
  }

  return (
    <Carousel slide={false} ref={carouselRef}>
      {carouselServiciosItems.map((item: CarouselServiciosItems, index: number) => (
        <React.Fragment key={index}>
          {item.slide(height, flowIndex, handleChangeSlide)}
        </React.Fragment>
      ))}
    </Carousel>
  );
};

export default Servicios;
