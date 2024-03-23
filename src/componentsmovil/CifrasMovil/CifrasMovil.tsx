import React from "react";

export const CifrasMovil: React.FC = () => {
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
    <svg
      viewBox="0 0 360 760"
      preserveAspectRatio="none"
      width="100%"
      height={height}
    >
      <defs>
        <style>
          {
            ".a-cifras-mobile,.e-cifras-mobile,.f-cifras-mobile,.g-cifras-mobile{fill:none;}.b-cifras-mobile{fill:#001f5f;stroke:#707070;}.c-cifras-mobile{opacity:0.52;}.d-cifras-mobile{clip-path:url(#a-cifras-mobile);}.e-cifras-mobile{stroke:#fff;}.e-cifras-mobile,.f-cifras-mobile,.g-cifras-mobile{stroke-miterlimit:10;stroke-width:1.074px;}.f-cifras-mobile{stroke:#db032e;}.g-cifras-mobile{stroke:#e40032;}.h-cifras-mobile,.k-cifras-mobile{fill:#fff;font-family:'Kiona-Bold';font-weight:700;}.h-cifras-mobile{font-size:45px;}.i-cifras-mobile{fill:url(#b-cifras-mobile);}.j-cifras-mobile,.m-cifras-mobile{opacity:0.7;fill:url(#e-cifras-mobile);}.j-cifras-mobile,.q-cifras-mobile,.s-cifras-mobile,.u-cifras-mobile{mix-blend-mode:multiply;isolation:isolate;}.k-cifras-mobile{font-size:18px;}.l-cifras-mobile{fill:url(#f-cifras-mobile);}.n-cifras-mobile{fill:url(#l-cifras-mobile);}.o-cifras-mobile{fill:url(#r-cifras-mobile);}.p-cifras-mobile{stroke:none;}.q-cifras-mobile{filter:url(#v-cifras-mobile);}.r-cifras-mobile{filter:url(#s-cifras-mobile);}.s-cifras-mobile{filter:url(#p-cifras-mobile);}.t-cifras-mobile{filter:url(#m-cifras-mobile);}.u-cifras-mobile{filter:url(#j-cifras-mobile);}.v-cifras-mobile{filter:url(#g-cifras-mobile);}.w-cifras-mobile{filter:url(#c-cifras-mobile);}"
          }
        </style>
        <clipPath id="a-cifras-mobile">
          <rect
            className="a-cifras-mobile"
            width={360}
            height={760}
            transform="translate(503 1)"
          />
        </clipPath>
        <pattern
          id="b-cifras-mobile"
          width={1}
          height={1}
          viewBox="0 7.163 324.967 229.414"
        >
          <image
            preserveAspectRatio="xMidYMid slice"
            width={360}
            height={270.016}
            xlinkHref="/images/cifrasmovil1.jpg"
          />
        </pattern>
        <filter
          id="c-cifras-mobile"
          x={0}
          y={0}
          width={378}
          height={272.146}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="d-cifras-mobile" />
          <feFlood floodOpacity={0.349} />
          <feComposite operator="in" in2="d-cifras-mobile" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="e-cifras-mobile"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#001f5f" stopOpacity={0} />
          <stop offset={1} stopColor="#001f5f" />
        </linearGradient>
        <pattern
          id="f-cifras-mobile"
          width={1}
          height={1}
          patternTransform="translate(762.437 508.292) rotate(-180)"
          viewBox="49.953 17.752 271.89 191.943"
        >
          <image
            preserveAspectRatio="xMidYMid slice"
            width={381.219}
            height={254.146}
            xlinkHref="/images/cifrasmovil3.jpg"
          />
        </pattern>
        <filter
          id="g-cifras-mobile"
          x={0}
          y={500.854}
          width={378}
          height={272.146}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={-3} />
          <feGaussianBlur stdDeviation={3} result="h-cifras-mobile" />
          <feFlood floodOpacity={0.349} />
          <feComposite operator="in" in2="h-cifras-mobile" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="j-cifras-mobile"
          x={0}
          y={500.854}
          width={378}
          height={272.146}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={-3} />
          <feGaussianBlur stdDeviation={3} result="k" />
          <feFlood floodOpacity={0.349} />
          <feComposite operator="in" in2="k" />
          <feComposite in="SourceGraphic" />
        </filter>
        <pattern
          id="l-cifras-mobile"
          width={1}
          height={1}
          patternTransform="matrix(-1, 0, 0, 1, 577.191, 0)"
          viewBox="0 4.007 288.595 184.593"
        >
          <image
            preserveAspectRatio="xMidYMid slice"
            width={288.595}
            height={192.606}
            xlinkHref="/images/cifrasmovil.jpg"
          />
        </pattern>
        <filter
          id="m-cifras-mobile"
          x={0}
          y={0}
          width={306.595}
          height={202.593}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="n" />
          <feFlood floodOpacity={0.349} />
          <feComposite operator="in" in2="n" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="p-cifras-mobile"
          x={0}
          y={0}
          width={306.595}
          height={202.593}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="q-cifras-mobile" />
          <feFlood floodOpacity={0.349} />
          <feComposite operator="in" in2="q-cifras-mobile" />
          <feComposite in="SourceGraphic" />
        </filter>
        <pattern
          id="r-cifras-mobile"
          width={1}
          height={1}
          patternTransform="translate(577.191 370.794) rotate(-180)"
          viewBox="8.884 9.584 270.828 173.228"
        >
          <image
            preserveAspectRatio="xMidYMid slice"
            width={288.595}
            height={192.397}
            xlinkHref="/images/cifrasmovil4.jpg"
          />
        </pattern>
        <filter
          id="s-cifras-mobile"
          x={71.405}
          y={570.407}
          width={306.595}
          height={202.593}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={-3} />
          <feGaussianBlur stdDeviation={3} result="t-cifras-mobile" />
          <feFlood floodOpacity={0.349} />
          <feComposite operator="in" in2="t-cifras-mobile" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="v-cifras-mobile"
          x={71.405}
          y={570.407}
          width={306.595}
          height={202.593}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={-3} />
          <feGaussianBlur stdDeviation={3} result="w-cifras-mobile" />
          <feFlood floodOpacity={0.349} />
          <feComposite operator="in" in2="w-cifras-mobile" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g>
        <g transform="translate(-503 -1614)">
          <g className="b-cifras-mobile" transform="translate(503 1614)">
            <rect className="p-cifras-mobile" width={360} height={760} />
            <rect
              className="a-cifras-mobile"
              x={0.5}
              y={0.5}
              width={359}
              height={759}
            />
          </g>
          <g className="c-cifras-mobile" transform="translate(0 1614)">
            <g className="d-cifras-mobile" transform="translate(0 0)">
              <path
                className="e-cifras-mobile"
                d="M1283.034.21,1155.683,303.341a117.06,117.06,0,0,1-108.037,71.273H803.563a117.07,117.07,0,0,0-108.037,71.271L588,701.765a117.063,117.063,0,0,1-108.037,71.273H235.883A117.069,117.069,0,0,0,127.846,844.31L.5,1147.441"
                transform="translate(-432.935 -859.873)"
              />
              <path
                className="f-cifras-mobile"
                d="M1348.51,65.685,1221.159,368.816a117.06,117.06,0,0,1-108.037,71.273H869.039A117.07,117.07,0,0,0,761,511.36L653.48,767.24a117.063,117.063,0,0,1-108.037,71.273H301.359a117.069,117.069,0,0,0-108.037,71.273L65.971,1212.916"
                transform="translate(-374.188 -802.413)"
              />
              <path
                className="e-cifras-mobile"
                d="M1413.985,131.16,1286.634,434.291A117.06,117.06,0,0,1,1178.6,505.564H934.514a117.07,117.07,0,0,0-108.037,71.271L718.955,832.715a117.063,117.063,0,0,1-108.037,71.273H366.834A117.069,117.069,0,0,0,258.8,975.26L131.446,1278.391"
                transform="translate(-315.443 -744.954)"
              />
              <path
                className="g-cifras-mobile"
                d="M1479.46,196.635,1352.109,499.766a117.059,117.059,0,0,1-108.037,71.275H999.989a117.07,117.07,0,0,0-108.037,71.271L784.43,898.19a117.065,117.065,0,0,1-108.037,71.275H432.309a117.069,117.069,0,0,0-108.037,71.273L196.921,1343.868"
                transform="translate(-256.697 -687.495)"
              />
              <path
                className="e-cifras-mobile"
                d="M1544.936,262.111,1417.585,565.242a117.06,117.06,0,0,1-108.037,71.273H1065.465a117.07,117.07,0,0,0-108.037,71.271L849.906,963.666a117.063,117.063,0,0,1-108.037,71.273H497.785a117.069,117.069,0,0,0-108.037,71.273L262.4,1409.342"
                transform="translate(-197.951 -630.034)"
              />
              <path
                className="f-cifras-mobile"
                d="M1610.411,327.586,1483.06,630.717a117.06,117.06,0,0,1-108.037,71.273H1130.94A117.07,117.07,0,0,0,1022.9,773.261l-107.521,255.88a117.063,117.063,0,0,1-108.037,71.273H563.26a117.069,117.069,0,0,0-108.037,71.273L327.872,1474.817"
                transform="translate(-139.205 -572.575)"
              />
              <path
                className="e-cifras-mobile"
                d="M1675.886,393.061,1548.536,696.192A117.06,117.06,0,0,1,1440.5,767.465H1196.415a117.071,117.071,0,0,0-108.037,71.271l-107.521,255.88a117.063,117.063,0,0,1-108.037,71.273H628.735A117.069,117.069,0,0,0,520.7,1237.161L393.347,1540.292"
                transform="translate(-80.459 -515.116)"
              />
              <path
                className="f-cifras-mobile"
                d="M1741.362,458.537,1614.012,761.668a117.063,117.063,0,0,1-108.037,71.273H1261.891a117.07,117.07,0,0,0-108.037,71.271l-107.521,255.88a117.065,117.065,0,0,1-108.037,71.273H694.211a117.069,117.069,0,0,0-108.037,71.273L458.823,1605.768"
                transform="translate(-21.713 -457.656)"
              />
              <path
                className="e-cifras-mobile"
                d="M1806.837,524.012,1679.486,827.143a117.06,117.06,0,0,1-108.037,71.273H1327.366a117.07,117.07,0,0,0-108.037,71.271l-107.521,255.88a117.063,117.063,0,0,1-108.037,71.273H759.686a117.07,117.07,0,0,0-108.037,71.273L524.3,1671.243"
                transform="translate(37.033 -400.196)"
              />
            </g>
          </g>
        </g>
        <text className="h-cifras-mobile" transform="translate(37 330)">
          <tspan x={25} y={45}>
            {"Cifras de "}
          </tspan>
          <tspan x={43} y={92}>
            {"impacto"}
          </tspan>
        </text>
        <g className="w-cifras-mobile" transform="matrix(1, 0, 0, 1, -9, -6)">
          <path
            className="i-cifras-mobile"
            d="M0,0V254.146H234.883c37.352,0,71.021-37.311,85.294-94.517L360,0Z"
            transform="translate(9 6)"
          />
        </g>
        <path
          className="j-cifras-mobile"
          d="M0,0V254.146H234.883c37.352,0,71.021-37.311,85.294-94.517L360,0Z"
        />
        <text className="k-cifras-mobile" transform="translate(194 234)">
          <tspan x={0} y={0}>
            {"+3.000"}
          </tspan>
        </text>
        <g className="v-cifras-mobile" transform="matrix(1, 0, 0, 1, -9, -6)">
          <path
            className="l-cifras-mobile"
            d="M0,0V254.146H234.883c37.352,0,71.021-37.311,85.294-94.517L360,0Z"
            transform="translate(369 767) rotate(180)"
          />
        </g>
        <g className="u-cifras-mobile" transform="matrix(1, 0, 0, 1, -9, -6)">
          <path
            className="m-cifras-mobile"
            d="M0,0V254.146H234.883c37.352,0,71.021-37.311,85.294-94.517L360,0Z"
            transform="translate(369 767) rotate(180)"
          />
        </g>
        <text className="k-cifras-mobile" transform="translate(111 536)">
          <tspan x={0} y={0}>
            {"10 instituciones"}
          </tspan>
        </text>
        <g className="t-cifras-mobile" transform="matrix(1, 0, 0, 1, -9, -6)">
          <path
            className="n-cifras-mobile"
            d="M0,0V184.593H180.83c37.352,0,71.021-37.311,85.294-94.517L288.6,0Z"
            transform="translate(9 6)"
          />
        </g>
        <g className="s-cifras-mobile" transform="matrix(1, 0, 0, 1, -9, -6)">
          <path
            className="m-cifras-mobile"
            d="M0,0V184.593H180.83c37.352,0,71.021-37.311,85.294-94.517L288.6,0Z"
            transform="translate(9 6)"
          />
        </g>
        <text className="k-cifras-mobile" transform="translate(119 162)">
          <tspan x={0} y={0}>
            {"+5.000"}
          </tspan>
        </text>
        <g className="r-cifras-mobile" transform="matrix(1, 0, 0, 1, -9, -6)">
          <path
            className="o-cifras-mobile"
            d="M0,0V184.593H180.83c37.352,0,71.021-37.311,85.294-94.517L288.6,0Z"
            transform="translate(369 767) rotate(180)"
          />
        </g>
        <g className="q-cifras-mobile" transform="matrix(1, 0, 0, 1, -9, -6)">
          <path
            className="m-cifras-mobile"
            d="M0,0V184.593H180.83c37.352,0,71.021-37.311,85.294-94.517L288.6,0Z"
            transform="translate(369 767) rotate(180)"
          />
        </g>
        <text className="k-cifras-mobile" transform="translate(185 608)">
          <tspan x={0} y={0}>
            {"+45.600"}
          </tspan>
        </text>
      </g>
    </svg>
  );
};
