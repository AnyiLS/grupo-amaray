import React from "react";

export const PortafolioMovil: React.FC = () => {
  const [height, setHeight] = React.useState<string>("100vh");

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
    <div>
      <svg
        viewBox="0 0 360 760"
        preserveAspectRatio="none"
        width="100%"
        height={height}
      >
        <defs>
          <style>
            {
              ".a-portaf{fill:#e40032;}.b-portaf{fill:#001f5f;}.c-portaf,.e-portaf,.f-portaf{fill:#fff;}.d-portaf{fill:url(#a-portaf);}.e-portaf{font-size:14px;font-family:Silka-Regular, Silka;}.f-portaf{font-size:46px;font-family:'Kiona-Bold';font-weight:700;}.g{filter:url(#b-portaf);}"
            }
          </style>
          <pattern
            id="a-portaf"
            width={1}
            height={1}
            viewBox="155.008 23.137 322.169 386.756"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={645.002}
              height={433.03}
              xlinkHref="/images/protafoliomovil.jpg"
            />
          </pattern>
          <filter
            id="b-portaf"
            x={0}
            y={0}
            width={378.715}
            height={451.03}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="c-portaf" />
            <feFlood floodOpacity={0.4} />
            <feComposite operator="in" in2="c-portaf" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(0 0)">
          <rect
            className="a-portaf"
            width={360}
            height={760}
            transform="translate(1)"
          />
          <path
            className="b-portaf"
            d="M360.012,759.786V673.055H212.205c-37.611,0-72.227,33.065-93.549,86.731Z"
          />
          <path
            className="c-portaf"
            d="M362.084,470.261H333.953a82.34,82.34,0,0,1-76.2-50.808l-6.8-15.056h-1.291l7.015,15.525a83.511,83.511,0,0,0,77.284,51.516h28.131Z"
          />
          <g className="g-portaf" transform="matrix(1, 0, 0, 1, -9, -6)">
            <path
              className="d-portaf"
              d="M187.27,433.03,0,432.6V0H360.715V181.856L281.388,371.073c-16.182,37.6-52.809,59.965-94.118,61.957"
              transform="translate(9 6)"
            />
          </g>
          <text className="e-portaf" transform="translate(37.357 560.284)">
            <tspan x={10} y={13}>
              {"Somos un grupo empresarial con una "}
            </tspan>
            <tspan x={6} y={29}>
              {"clara inspiraci\xF3n profesional y humana; "}
            </tspan>
            <tspan x={8} y={45}>
              {"ofrecemos un portafolio de soluciones "}
            </tspan>
            <tspan x={5} y={61}>
              {"en salud de la m\xE1s alta calidad para el "}
            </tspan>
            <tspan x={50} y={77}>
              {"cuidado de los pacientes. "}
            </tspan>
          </text>
          <text className="f-portaf" transform="translate(39.084 481.717)">
            <tspan x={0} y={46}>
              {"Portafolio "}
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  );
};
