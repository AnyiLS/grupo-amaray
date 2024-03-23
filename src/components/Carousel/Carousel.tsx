import React from "react";
import { Carousel } from "flowbite-react";
import {
  CarouselHeaderItems,
  carouselHeaderItems,
} from "mocks/carouselHeader.mocks";
import Slide4 from "./components/Slide4";

const CarouselHeader: React.FC = () => {
  const [height, setHeight] = React.useState<string>("100vh");
  const [selected, setSelected] = React.useState<number | null>(null);
  const [slide, setSlide] = React.useState<boolean>(true);

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

  return (
    <Carousel slide={false}>
      {carouselHeaderItems.map((item: CarouselHeaderItems, index: number) => (
        <React.Fragment key={index}>
          {
            selected === index ? (
              <Slide4 height={height} image={item.image} onReturn={() => {setSelected(null); setSlide(true)}}/>
            ) : (
              <React.Fragment>
                {item.slide(height, (number: number) => {setSelected(number); setSlide(false)})}
              </React.Fragment>
            )
          }
        </React.Fragment>
      ))}
    </Carousel>
  );
};

export default CarouselHeader;
