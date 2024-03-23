import { Carousel } from "flowbite-react";
import React from "react";

export const CarouselMovil: React.FC = () => {
  const [height, setHeight] = React.useState<string>("100vh");
  // const [selected, setSelected] = React.useState<number | null>(null);

  React.useEffect(() => {
    const resizeImage = () => {
      if (window.innerHeight < 800) setHeight("110vh");
      else setHeight("100vh");
    };
    window.addEventListener("resize", resizeImage);

    resizeImage();

    return () => window.removeEventListener("resize", resizeImage);
  }, []);

  return (
    <Carousel style={{ height }} slide={false}>
      <svg
        viewBox="0 0 360 760"
        preserveAspectRatio="none"
        width="100%"
        height={height}
      >
        <defs>
          <style>
            {
              ".a-8{fill:none;}.b-8{fill:#fff;}.c-8,.g-8{fill:#001f5f;}.d-8{fill:#e7002a;}.e-8{fill:url(#a-8);}.f-8{fill:url(#b-8);}.g-8{font-size:16px;font-family:Silka-Bold, Silka;font-weight:700;}.h-8{font-size:22px;}.i-8{clip-path:url(#c-8);}.j-8{fill:#e40032;}"
            }
          </style>
          <pattern
            id="a-8"
            width={1}
            height={1}
            viewBox="363.373 0 360 648.356"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={972.534}
              height={648.356}
              xlinkHref="/images/movil.jpg"
            />
          </pattern>
          <linearGradient
            id="b-8"
            x1={0.5}
            y1={0.358}
            x2={0.5}
            y2={1}
            gradientUnits="objectBoundingBox"
          >
            <stop offset={0} stopColor="#fff" stopOpacity={0} />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <clipPath id="c-8">
            <rect className="a-8" width={234.264} height={65.55} />
          </clipPath>
        </defs>
        <rect
          className="b-8"
          width={360}
          height={760}
          transform="translate(2)"
        />
        <path
          className="c-8"
          d="M72.975,51.309H0V0H111V13.284A38.025,38.025,0,0,1,72.975,51.309"
          transform="translate(2 0.395)"
        />
        <rect
          className="c-8"
          width={111}
          height={51.309}
          transform="translate(2 0.395)"
        />
        <path
          className="c-8"
          d="M191.307,54.823c-53.893,0-102.472,58.7-123.064,148.7L0,495.664V745.18H362.214V54.823Z"
          transform="translate(0 14.82)"
        />
        <path
          className="d-8"
          d="M250.3,0c-29.668,0-58.354,16.811-82.955,48.612-24.5,31.674-43.4,76.221-54.648,128.821L1.164,688.251H2.571v3.324L114.726,177.937c11.177-52.267,29.927-96.494,54.222-127.9C193.142,18.761,221.275,2.229,250.3,2.229H365.143V0Z"
          transform="translate(0 14.82)"
        />
        <path
          className="b-8"
          d="M45.263,0v28.75L70.157,14.374,58.266,7.508Z"
          transform="translate(6.911 346.233)"
        />
        <path
          className="e-8"
          d="M215.9,96.824H362.214V745.18h-360l108.324-508.7C128.167,151.954,169.757,96.824,215.9,96.824"
          transform="translate(0 14.82)"
        />
        <path
          className="f-8"
          d="M215.9,96.824H362.214V745.18h-360l108.324-508.7C128.167,151.954,169.757,96.824,215.9,96.824"
          transform="translate(28 14.82)"
        />
        <g transform="translate(49.066 585.038)">
          <text className="g-8" transform="translate(0 75.962)">
            <tspan x={20} y={15} xmlSpace="preserve">
              {"Un compromiso inquebrantable                  "}
            </tspan>
            <tspan className="h-8" x={30} y={37}>
              {"con la salud y la vida"}
            </tspan>
          </text>
          <g transform="translate(10.868)">
            <g className="i-8" transform="translate(0 0)">
              <path
                className="j-8"
                d="M39.065,42.163,48.327,54.77a.351.351,0,0,1,.066.2l.053,9.87a.346.346,0,0,1-.343.346l-1.377.007a.344.344,0,0,1-.346-.342l-.018-3.5-4.979.025.018,3.5a.344.344,0,0,1-.343.346l-1.377.007a.342.342,0,0,1-.345-.342l-.047-9.067a.343.343,0,0,1,.342-.346l1.377-.008a.346.346,0,0,1,.346.343l.018,3.5,4.979-.025-.02-3.745-8.41-11.449-7.155.037-8.29,11.538.018,3.744,4.98-.026-.018-3.5a.343.343,0,0,1,.342-.346l1.377-.008a.344.344,0,0,1,.346.343l.047,9.067a.345.345,0,0,1-.342.346l-1.377.007a.344.344,0,0,1-.346-.342l-.018-3.5-4.979.026.018,3.5a.346.346,0,0,1-.343.346l-1.377.007a.345.345,0,0,1-.346-.342l-.051-9.87a.344.344,0,0,1,.064-.2l9.129-12.7a.348.348,0,0,1,.278-.143l8.908-.046a.342.342,0,0,1,.279.141M24.722,31.856,9.819,27.1a.333.333,0,0,0-.212,0L.237,30.2a.345.345,0,0,0-.218.435L.45,31.943a.344.344,0,0,0,.435.218l3.323-1.1L5.772,35.79l-3.324,1.1a.345.345,0,0,0-.218.435l.431,1.308a.346.346,0,0,0,.435.218L11.706,36a.344.344,0,0,0,.218-.435l-.431-1.308a.346.346,0,0,0-.435-.218l-3.324,1.1L6.171,30.414l3.554-1.176,13.534,4.32L24.365,36.9,25.5,40.35l-8.29,11.538-3.556,1.175L12.1,48.334l3.324-1.1a.345.345,0,0,0,.218-.435l-.433-1.308a.344.344,0,0,0-.434-.218L6.163,48.121a.345.345,0,0,0-.218.435l.431,1.308a.345.345,0,0,0,.435.218l3.324-1.1L11.7,53.71l-3.324,1.1a.344.344,0,0,0-.22.435l.433,1.308a.345.345,0,0,0,.435.218l9.37-3.1a.345.345,0,0,0,.172-.126l9.128-12.7a.341.341,0,0,0,.047-.309l-2.8-8.457a.345.345,0,0,0-.222-.221M43.1,29.528l14.852-4.912a.341.341,0,0,0,.171-.126l5.76-8.015a.345.345,0,0,0-.079-.48l-1.118-.8a.344.344,0,0,0-.48.079l-2.044,2.843-4.044-2.906,2.043-2.843a.343.343,0,0,0-.078-.48l-1.118-.8a.342.342,0,0,0-.48.079l-5.292,7.362A.345.345,0,0,0,51.27,19l1.119.8a.345.345,0,0,0,.48-.079l2.043-2.843,4.044,2.906-2.185,3.04L43.283,27.291l-5.81-4.175L37.4,8.91l2.185-3.04,4.044,2.906-2.043,2.843a.344.344,0,0,0,.079.48l1.118.8a.344.344,0,0,0,.48-.079l5.292-7.364a.344.344,0,0,0-.079-.48l-1.118-.8a.345.345,0,0,0-.48.079L44.832,7.1l-4.042-2.9,2.043-2.844a.345.345,0,0,0-.079-.48l-1.118-.8a.342.342,0,0,0-.48.079L35.4,8.158a.35.35,0,0,0-.064.2L35.412,24a.342.342,0,0,0,.143.278l7.234,5.2a.345.345,0,0,0,.309.047M68.107,31.59l.418-1.313a.345.345,0,0,0-.224-.433l-9.4-3a.347.347,0,0,0-.213,0L43.835,31.757a.34.34,0,0,0-.22.222l-2.708,8.486a.343.343,0,0,0,.05.308l9.261,12.608a.351.351,0,0,0,.174.124l9.4,3a.344.344,0,0,0,.433-.224l.418-1.311a.342.342,0,0,0-.222-.433l-3.336-1.065L58.6,48.73l3.336,1.064a.345.345,0,0,0,.433-.222l.418-1.313a.345.345,0,0,0-.224-.433l-8.638-2.757a.343.343,0,0,0-.431.224l-.42,1.313a.343.343,0,0,0,.224.431L56.632,48.1l-1.513,4.743-3.567-1.138L43.141,40.257l2.176-6.815L58.8,28.982l3.566,1.139-1.513,4.743L57.522,33.8a.346.346,0,0,0-.433.224l-.418,1.313a.343.343,0,0,0,.224.431l8.637,2.757a.344.344,0,0,0,.433-.222l.42-1.313a.346.346,0,0,0-.224-.433l-3.336-1.064,1.514-4.743,3.336,1.065a.346.346,0,0,0,.433-.224M25.77,29.556l7.172-5.283a.346.346,0,0,0,.141-.28l-.1-15.643a.339.339,0,0,0-.067-.2L27.058.2a.343.343,0,0,0-.481-.074L25.468.946a.344.344,0,0,0-.072.481l2.077,2.819L23.463,7.2,21.386,4.381a.344.344,0,0,0-.481-.072L19.8,5.125a.344.344,0,0,0-.072.481l5.377,7.3a.344.344,0,0,0,.481.072l1.109-.817a.345.345,0,0,0,.074-.481L24.688,8.862,28.7,5.909l2.22,3.015.093,14.207-5.76,4.242-13.54-4.3-2.22-3.015L13.5,17.1l2.076,2.819a.344.344,0,0,0,.481.072l1.109-.817a.346.346,0,0,0,.074-.481l-5.379-7.3a.344.344,0,0,0-.481-.074l-1.109.817a.344.344,0,0,0-.072.481l2.076,2.819L8.266,18.4,6.189,15.576a.345.345,0,0,0-.481-.074L4.6,16.319a.344.344,0,0,0-.072.481l5.854,7.946a.338.338,0,0,0,.172.124l14.909,4.737a.346.346,0,0,0,.309-.051"
                transform="translate(0 0)"
              />
              <path
                className="c-8"
                d="M97.969,23.558H92.149a7.882,7.882,0,0,1-4.061-1.089,8.1,8.1,0,0,1-2.947-2.96,8.208,8.208,0,0,1,0-8.171,8.213,8.213,0,0,1,2.947-2.972,7.969,7.969,0,0,1,7.293-.408,8.125,8.125,0,0,1,2.686,1.931l-.817.767a7.013,7.013,0,0,0-5.1-2.228,6.8,6.8,0,0,0-3.491.942,7.031,7.031,0,0,0-2.551,2.537,7.021,7.021,0,0,0,0,7.02,7.088,7.088,0,0,0,2.551,2.562,6.719,6.719,0,0,0,3.491.954H96.8V16.674h-5.3V15.56h6.463Z"
                transform="translate(26.512 2.292)"
              />
              <path
                className="c-8"
                d="M108.7,23.511l-6.686-8.121h1.981a7.9,7.9,0,0,0,2.972-.471,3.969,3.969,0,0,0,1.461-1.2,2.835,2.835,0,0,0,.618-1.771,2.919,2.919,0,0,0-.52-1.647,3.842,3.842,0,0,0-1.485-1.275,4.822,4.822,0,0,0-2.228-.5H100.3V23.511H99.187V7.415h5.622a6.2,6.2,0,0,1,2.128.359A5.234,5.234,0,0,1,108.671,8.8a4.578,4.578,0,0,1,1.1,1.461,3.978,3.978,0,0,1-.434,4.123,4.716,4.716,0,0,1-1.931,1.548,5.094,5.094,0,0,1-1.5.433,13.113,13.113,0,0,1-1.547.087l5.818,7.057Z"
                transform="translate(31.286 2.339)"
              />
              <path
                className="c-8"
                d="M117.9,23.684a5.9,5.9,0,0,1-2.34-.483,6.114,6.114,0,0,1-1.993-1.375,5.667,5.667,0,0,1-1.325-1.981,6.355,6.355,0,0,1-.459-2.4V7.415h1.114V17.444a5.184,5.184,0,0,0,.384,1.981,4.9,4.9,0,0,0,1.077,1.634,5.027,5.027,0,0,0,1.634,1.1,4.882,4.882,0,0,0,1.907.384,4.936,4.936,0,0,0,1.931-.384,5.033,5.033,0,0,0,1.635-1.1,4.9,4.9,0,0,0,1.077-1.634,5.208,5.208,0,0,0,.383-1.981V7.415h1.116V17.444a6.38,6.38,0,0,1-.459,2.4,5.684,5.684,0,0,1-1.325,1.981,6.15,6.15,0,0,1-1.981,1.375,5.93,5.93,0,0,1-2.377.483"
                transform="translate(35.258 2.339)"
              />
              <path
                className="c-8"
                d="M125.51,23.511l-.025-16.1h5.744a5.612,5.612,0,0,1,2.612.62,5.054,5.054,0,0,1,1.907,1.659,4.014,4.014,0,0,1,0,4.545,5.015,5.015,0,0,1-1.907,1.671,5.612,5.612,0,0,1-2.612.62h-4.605v6.982Zm1.114-8.146h4.605a4.637,4.637,0,0,0,2.056-.458,3.913,3.913,0,0,0,1.5-1.239,2.859,2.859,0,0,0,.556-1.7,2.9,2.9,0,0,0-.556-1.721,3.913,3.913,0,0,0-1.5-1.239,4.637,4.637,0,0,0-2.056-.458H126.6Z"
                transform="translate(39.581 2.339)"
              />
              <path
                className="c-8"
                d="M145,23.726a7.938,7.938,0,0,1-4.086-1.1,8.205,8.205,0,0,1-4.061-7.119,8.205,8.205,0,0,1,4.061-7.119,8.123,8.123,0,0,1,8.171,0,8.206,8.206,0,0,1,4.061,7.119,8.206,8.206,0,0,1-4.061,7.119,7.939,7.939,0,0,1-4.086,1.1m0-15.3a6.776,6.776,0,0,0-3.516.954,7.17,7.17,0,0,0-2.564,2.576,7.1,7.1,0,0,0,0,7.106,7.16,7.16,0,0,0,2.564,2.576,6.959,6.959,0,0,0,7.032,0,7.053,7.053,0,0,0,2.551-2.576,7.181,7.181,0,0,0,0-7.106,7.063,7.063,0,0,0-2.551-2.576A6.779,6.779,0,0,0,145,8.422"
                transform="translate(43.167 2.297)"
              />
              <path
                className="c-8"
                d="M80.961,26.092h4.107a.539.539,0,0,1,.538.539V28.3a7.027,7.027,0,0,1,6.119-2.762c3.273,0,5.312,1.062,6.927,3.654a8.562,8.562,0,0,1,7.52-3.654c3.7,0,6.672,1.444,8.158,3.952a13.476,13.476,0,0,1,1.4,6.544V49.094a.539.539,0,0,1-.539.539h-4.574a.538.538,0,0,1-.539-.539V36.716c0-2.423-.339-3.74-1.147-4.632a4.164,4.164,0,0,0-3.271-1.36,4.286,4.286,0,0,0-4.037,2.38c-.51,1.063-.722,2.38-.722,4.929V49.094a.539.539,0,0,1-.539.539H95.791a.539.539,0,0,1-.539-.539V36.716c0-2.294-.339-3.7-1.062-4.59a4.54,4.54,0,0,0-3.485-1.4,4.055,4.055,0,0,0-4.079,2.549,13.925,13.925,0,0,0-.553,4.759V49.094a.539.539,0,0,1-.539.539H80.961a.539.539,0,0,1-.539-.539V26.632a.54.54,0,0,1,.539-.539"
                transform="translate(25.367 8.056)"
              />
              <path
                className="c-8"
                d="M134.171,49.633h-4.105a.539.539,0,0,1-.539-.539v-2.52a9.361,9.361,0,0,1-7.819,3.612c-6.884,0-11.856-5.142-11.856-12.239,0-7.181,5.014-12.407,11.984-12.407a8.75,8.75,0,0,1,7.691,3.7V26.63a.538.538,0,0,1,.539-.538h4.105a.538.538,0,0,1,.539.538V49.094a.539.539,0,0,1-.539.539M115.545,38.075A6.613,6.613,0,0,0,122.515,45c4.079,0,6.841-2.848,6.841-7.055,0-4.249-2.89-7.224-7.011-7.224-3.953,0-6.8,3.1-6.8,7.352"
                transform="translate(34.65 8.056)"
              />
              <path
                className="c-8"
                d="M132.777,26.092h4.107a.539.539,0,0,1,.538.539v1.755c1.488-2.21,2.677-2.847,5.1-2.847h.425v5.439c-3.4.086-5.056,1.913-5.056,5.567V49.094a.539.539,0,0,1-.539.539h-4.574a.539.539,0,0,1-.539-.539V26.632a.54.54,0,0,1,.539-.539"
                transform="translate(41.711 8.056)"
              />
              <path
                className="c-8"
                d="M147.467,40.369c.68,2.847,3.144,4.63,6.5,4.63a5.943,5.943,0,0,0,5.024-2.151.544.544,0,0,1,.4-.185h5.142a.537.537,0,0,1,.5.741,10.67,10.67,0,0,1-1.593,2.531,11.547,11.547,0,0,1-9.349,4.25c-7.252,0-12.858-5.463-12.745-12.445a12.513,12.513,0,0,1,13.621-12.147c6.382.581,10.938,5.729,10.938,12.608a9.1,9.1,0,0,1-.213,2.168ZM160.343,35.4c-.722-3.018-3.016-4.674-6.5-4.674-3.357,0-5.652,1.614-6.544,4.674Z"
                transform="translate(44.585 8.057)"
              />
              <path
                className="c-8"
                d="M168.713,47.291,160.387,26.7a.538.538,0,0,1,.5-.741h5.275a.537.537,0,0,1,.509.363l5.1,14.891,5.563-14.9a.539.539,0,0,1,.505-.35h5.306a.539.539,0,0,1,.495.752L170.511,57.037a.54.54,0,0,1-.495.325h-4.9a.54.54,0,0,1-.493-.756Z"
                transform="translate(50.577 8.189)"
              />
              <path
                className="c-8"
                d="M72.611,19.983h-4.59L62.24,33.857a.539.539,0,0,0,.5.746h4.934a.539.539,0,0,0,.508-.36l2.138-6.058L73.673,37.7h-9.32a5.573,5.573,0,0,0-5.146,3.431l-3.962,9.505a.539.539,0,0,0,.5.746H61a.539.539,0,0,0,.495-.326l3.344-7.79H76.01l3.219,7.783a.538.538,0,0,0,.5.333h5.246a.539.539,0,0,0,.5-.747Z"
                transform="translate(17.412 6.303)"
              />
            </g>
          </g>
        </g>
      </svg>
      <svg
        viewBox="0 0 360 760"
        preserveAspectRatio="none"
        width="100%"
        height={height}
      >
        <defs>
          <style>
            {
              ".f-slide-mobile-2{fill: #E40032;}.a-slide-mobile-2,.h-slide-mobile-2,.i-slide-mobile-2{fill:#001f5f;}.b-slide-mobile-2,.g-slide-mobile-2{fill:#fff;}.c-slide-mobile-2{clip-path:url(#a-slide-mobile-2);}.d-slide-mobile-2{fill:#e7002a;}.e-slide-mobile-2{fill:url(#b-slide-mobile-2);}.f{fill:#e40032;}.g-slide-mobile-2{font-size:18px;}.g-slide-mobile-2,.i-slide-mobile-2{font-family:'Kiona-Bold';font-weight:700;}.h-slide-mobile-2{font-size:16px;font-family:Silka-Regular, Silka;}.i-slide-mobile-2{font-size:32px;}.j-slide-mobile-2{filter:url(#c-slide-mobile-2);}"
            }
          </style>
          <clipPath id="a-slide-mobile-2">
            <rect className="a-slide-mobile-2" width={111} height={51.309} />
          </clipPath>
          <pattern
            id="b-slide-mobile-2"
            width={1}
            height={1}
            viewBox="262.95 -4.556 327.769 590.309"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={862.987}
              height={648.356}
              xlinkHref="/images/carouselHeader/ComponentTMP_0-image4.png"
            />
          </pattern>
          <filter
            id="c-slide-mobile-2"
            x={58.572}
            y={658}
            width={248}
            height={61.168}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="d-slide-mobile-2" />
            <feFlood floodOpacity={0.4} />
            <feComposite operator="in" in2="d-slide-mobile-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(1440.572 -812.395)">
          <rect
            className="b-slide-mobile-2"
            width={360}
            height={760}
            transform="translate(-1438.572 812.395)"
          />
          <path
            className="a-slide-mobile-2"
            d="M191.307,54.823c-53.893,0-102.472,58.7-123.064,148.7L0,495.664V745.18H362.214V54.823Z"
            transform="translate(-1440.572 827.215)"
          />
          <path
            className="b-slide-mobile-2"
            d="M45.263,0v28.75L70.157,14.374,58.266,7.508Z"
            transform="translate(-1433.661 1158.628)"
          />
          <g
            className="c-slide-mobile-2"
            transform="translate(-1438.572 812.79)"
          >
            <path
              className="a-slide-mobile-2"
              d="M72.975,51.309H0V0H111V13.284A38.025,38.025,0,0,1,72.975,51.309"
            />
          </g>
          <path
            className="d-slide-mobile-2"
            d="M250.3,0c-29.668,0-58.354,16.811-82.955,48.612-24.5,31.674-43.4,76.221-54.648,128.821L1.164,688.251H2.571v3.324L114.726,177.937c11.177-52.267,29.927-96.494,54.222-127.9C193.142,18.761,221.275,2.229,250.3,2.229H365.143V0Z"
            transform="translate(-1440.572 827.215)"
          />
          <g transform="translate(-1440.572 812.395)">
            <path
              className="e-slide-mobile-2"
              d="M215.9,96.824H362.214V745.18h-360l108.324-508.7C128.167,151.954,169.757,96.824,215.9,96.824"
              transform="translate(0 14.82)"
            />
            <g
              className="j-slide-mobile-2"
              transform="matrix(1, 0, 0, 1, 0, 0)"
            >
              <path
                className="f-slide-mobile-2"
                d="M230,0H47.176C28.161,0,11.086,12.6,4.142,31.746L0,43.169H181.308c20.259,0,38.4-13.581,45.534-34.092Z"
                transform="translate(67.57 664)"
              />
            </g>
            <text
              className="g-slide-mobile-2"
              transform="translate(123.072 692.584)"
            >
              <tspan x={0} y={0}>
                {"Conoce M\xE1s"}
              </tspan>
            </text>
            <text
              className="h-slide-mobile-2"
              transform="translate(40.572 592)"
            >
              <tspan x={17.228} y={15}>
                {"Llevando la precisi\xF3n quir\xFArgica "}
              </tspan>
              <tspan x={42.428} y={33}>
                {"m\xE1s all\xE1 de los l\xEDmites de "}
              </tspan>
              <tspan x={79.612} y={51}>
                {"nuestras\u202Fmanos"}
              </tspan>
            </text>
            <text
              className="i-slide-mobile-2"
              transform="translate(40.572 547)"
            >
              <tspan x={25} y={32}>
                {"Robot davinci"}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
      <svg
        viewBox="0 0 360 760"
        preserveAspectRatio="none"
        width="100%"
        height={height}
      >
        <defs>
          <style>
            {
              ".a-slide-mobile-3,.g-slide-mobile-3,.h-slide-mobile-3{fill:#001f5f;}.b-slide-mobile-3,.j-slide-mobile-3{fill:#fff;}.c-slide-mobile-3{clip-path:url(#a-slide-mobile-3);}.d-slide-mobile-3{fill:#e7002a;}.e-slide-mobile-3{fill:url(#b-slide-mobile-3);}.f-slide-mobile-3{fill:url(#c-slide-mobile-3);}.g-slide-mobile-3{font-size:22px;font-family:Silka-Bold, Silka;}.g-slide-mobile-3,.j-slide-mobile-3{font-weight:700;}.h-slide-mobile-3{font-size:16px;font-family:Silka-Regular, Silka;}.i-slide-mobile-3{fill:#e40032;}.j-slide-mobile-3{font-size:18px;font-family:'Kiona-Bold';}.k-slide-mobile-3{mix-blend-mode:multiply;isolation:isolate;}.l-slide-mobile-3{fill:#eae8ea;}.m-slide-mobile-3{fill:#eeebeb;}.n{fill:#d1d2d4;}.o-slide-mobile-3{filter:url(#d-slide-mobile-3);}"
            }
          </style>
          <clipPath id="a-slide-mobile-3">
            <rect className="a-slide-mobile-3" width={111} height={51.309} />
          </clipPath>
          <pattern
            id="b-slide-mobile-3"
            width={1}
            height={1}
            viewBox="279.602 0 360 648.356"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={1010.574}
              height={648.356}
              xlinkHref="/images/carouselHeader/image_5.jpg"
            />
          </pattern>
          <linearGradient
            id="c-slide-mobile-3"
            x1={0.5}
            y1={0.358}
            x2={0.5}
            y2={1}
            gradientUnits="objectBoundingBox"
          >
            <stop offset={0} stopColor="#fff" stopOpacity={0} />
            <stop offset={0.635} stopColor="#fff" stopOpacity={0.988} />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <filter
            id="d-slide-mobile-3"
            x={58.572}
            y={658}
            width={248}
            height={61.168}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="e-slide-mobile-3" />
            <feFlood floodOpacity={0.4} />
            <feComposite operator="in" in2="e-slide-mobile-3" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <rect
          className="b-slide-mobile-3"
          width={360}
          height={760}
          transform="translate(2)"
        />
        <g className="c-slide-mobile-3" transform="translate(2 0.395)">
          <path
            className="a-slide-mobile-3"
            d="M72.975,51.309H0V0H111V13.284A38.025,38.025,0,0,1,72.975,51.309"
          />
        </g>
        <path
          className="a-slide-mobile-3"
          d="M191.307,54.823c-53.893,0-102.472,58.7-123.064,148.7L0,495.664V745.18H362.214V54.823Z"
          transform="translate(0 14.82)"
        />
        <path
          className="d-slide-mobile-3"
          d="M250.3,0c-29.668,0-58.354,16.811-82.955,48.612-24.5,31.674-43.4,76.221-54.648,128.821L1.164,688.251H2.571v3.324L114.726,177.937c11.177-52.267,29.927-96.494,54.222-127.9C193.142,18.761,221.275,2.229,250.3,2.229H365.143V0Z"
          transform="translate(0 14.82)"
        />
        <path
          className="b-slide-mobile-3"
          d="M45.263,0v28.75L70.157,14.374,58.266,7.508Z"
          transform="translate(6.911 346.233)"
        />
        <path
          className="e-slide-mobile-3"
          d="M215.9,96.824H362.214V745.18h-360l108.324-508.7C128.167,151.954,169.757,96.824,215.9,96.824"
          transform="translate(0 14.82)"
        />
        <path
          className="f-slide-mobile-3"
          d="M215.9,96.824H362.214V745.18h-360l108.324-508.7C128.167,151.954,169.757,96.824,215.9,96.824"
          transform="translate(0 14.82)"
        />
        <text className="g-slide-mobile-3" transform="translate(57.572 623)">
          <tspan x={17} y={21}>
            {"tecnolog\xEDa en salud"}
          </tspan>
        </text>
        <text className="h-slide-mobile-3" transform="translate(68.572 570)">
          <tspan x={6.364} y={15}>
            {"Representamos las marcas "}
          </tspan>
          <tspan x={12.412} y={33}>
            {"de mayor prestigio a nivel "}
          </tspan>
          <tspan x={8.924} y={51}>
            {"mundial en investigaci\xF3n y "}
          </tspan>
        </text>
        <g transform="translate(67.572 664)">
          <g
            className="o-slide-mobile-3"
            transform="matrix(1, 0, 0, 1, -67.57, -664)"
          >
            <path
              className="i-slide-mobile-3"
              d="M230,0H47.176C28.161,0,11.086,12.6,4.142,31.746L0,43.169H181.308c20.259,0,38.4-13.581,45.534-34.092Z"
              transform="translate(67.57 664)"
            />
          </g>
          <text className="j-slide-mobile-3" transform="translate(55.5 28.584)">
            <tspan x={0} y={0}>
              {"Conoce M\xE1s"}
            </tspan>
          </text>
        </g>
      </svg>
    </Carousel>
  );
};
