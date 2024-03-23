import React from "react";
import { CifrasVideo } from "./CifrasVideo";
/** Styles */
import './Cifras.css'

const Cifras: React.FC = () => {
  const [height, setHeight] = React.useState<string>("100vh");
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<number>(0);

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
    <div className="relative">
      <svg width='100%' height={height} viewBox="0 0 1920 1080" preserveAspectRatio="none">
      <defs>
      <style>
        {
          ".i-2{opacity: 1}.a-2,.f-2,.g-2{fill:none;}.a-2{stroke:rgba(0,0,0,0);}.b-2{fill:#e40032;}.c-2,.l-2{fill:#001f5f;}.d-2{opacity:0.52;}.e-2{clip-path:url(#a-2);}.f-2{stroke:#fff;}.f-2,.g-2{stroke-miterlimit:10;stroke-width:1.074px;}.g-2{stroke:#db032e;}.h-2,.i-2{fill:#fff;}.h-2{font-size:100px;}.h-2,.l-2{font-family:Kiona-Bold, Kiona;font-weight:700;}.j-2{fill:url(#b-2);}.k-2{opacity:0.45;fill:url(#e-2);}.l-2{font-size:55px; opacity: 1}.m-2{font-size:24px; fill: #001f5f}.n-2{ opacity: 1},.q-2,.s-2,.u-2,.x-2{isolation:isolate;}.o-2,.u-2{clip-path:url(#h-2);}.p-2{fill:url(#j-2);}.n-2, .p-2{opacity: 1}.q-2,.s-2{opacity:0.75;}.q-2,.s-2,.x-2{mix-blend-mode:multiply;}.q-2{fill:url(#k-2);}.r-2{fill:url(#l-2);}.s-2{fill:url(#o-2);}.t-2{fill:url(#q-2);}.v-2{filter:url(#r-2);}.w-2{filter:url(#m-2);}.x-2{filter:url(#f-2);}.y-2{filter:url(#c-2);}"
        }
      </style>
      <clipPath id="a-2">
      <rect className="a-2" width={1920} height={1079} />
      </clipPath>
      <pattern
        id="b-2"
        width={1}
        height={1}
        patternTransform="translate(1875.022 1250.014) rotate(-180)"
        viewBox="0 69.264 919.989 474.798"
      >
        <image
          preserveAspectRatio="xMidYMid slice"
          width={937.511}
          height={625.007}
          xlinkHref="/images/ComponentTMP_0-image1.png"
        />
      </pattern>
      <filter
        id="c-2"
        x={0}
        y={0}
        width={955.511}
        height={501.841}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="d-2" />
        <feFlood floodOpacity={0.502} />
        <feComposite operator="in" in2="d-2" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient
        id="e-2"
        x1={0.181}
        y1={1}
        x2={0.189}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#001f5f" stopOpacity={0} />
        <stop offset={1} stopColor="#001f5f" />
      </linearGradient>
      <filter
        id="f-2"
        x={0}
        y={0}
        width={955.511}
        height={501.841}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="g-2" />
        <feFlood floodOpacity={0.502} />
        <feComposite operator="in" in2="g-2" />
        <feComposite in="SourceGraphic" />
      </filter>
      <clipPath id="h-2">
        <rect className="b-2" width={48.222} height={48.939} />
      </clipPath>
      <pattern
        id="j-2"
        width={1}
        height={1}
        patternTransform="rotate(180)"
        viewBox="0 70.865 652.069 293.456"
      >
        <image
          preserveAspectRatio="xMidYMid slice"
          width={652.069}
          height={435.185}
          xlinkHref="/images/ComponentTMP_0-image2.png"
        />
      </pattern>
      <linearGradient id="k-2" x1={0.513} x2={0.54} y2={0} xlinkHref="#e" />
      <pattern
        id="l-2"
        width={1}
        height={1}
        viewBox="67.489 110.494 870.022 449.011"
      >
        <image
          preserveAspectRatio="xMidYMid slice"
          width={937.511}
          height={625.007}
          xlinkHref="/images/ComponentTMP_0-image3.png"
        />
      </pattern>
      <filter
        id="m-2"
        x={982.489}
        y={589.632}
        width={955.511}
        height={501.841}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={3} result="n-2" />
        <feFlood floodOpacity={0.502} />
        <feComposite operator="in" in2="n-2" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient
        id="o-2"
        x1={0.314}
        y1={1}
        x2={0.312}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#1c164e" stopOpacity={0} />
        <stop offset={1} stopColor="#1c164e" />
      </linearGradient>
      <pattern id="q-2" width={1} height={1} viewBox="0 111.16 652.069 293.456">
        <image
          preserveAspectRatio="xMidYMid slice"
          width={652.069}
          height={434.713}
          xlinkHref="/images/ComponentTMP_0-image4.png"
        />
      </pattern>
      <filter
        id="r-2"
        x={1267.93}
        y={780.017}
        width={670.069}
        height={311.456}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={-3}  />
        <feGaussianBlur stdDeviation={3} result="s-2" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="s-2" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g >
      <g transform="translate(0.207 0.764)">
        <rect className="c-2" width={1920} height={1079} />
        <g className="d-2">
          <g className="e-2" transform="translate(0 0)">
            <path
              className="f-2"
              d="M1803.186.21l-179,430.555A164.505,164.505,0,0,1,1472.332,532H1129.258A164.519,164.519,0,0,0,977.4,633.228L826.276,996.67A164.509,164.509,0,0,1,674.423,1097.9H331.348A164.517,164.517,0,0,0,179.5,1199.135L.5,1629.69"
              transform="translate(-785.418 -1059.319)"
            />
            <path
              className="g-2"
              d="M1868.662,65.685l-179,430.555a164.5,164.5,0,0,1-151.853,101.233H1194.734A164.519,164.519,0,0,0,1042.88,698.7L891.753,1062.145A164.509,164.509,0,0,1,739.9,1163.378H396.824a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
              transform="translate(-676.291 -950.183)"
            />
            <path
              className="f-2"
              d="M1934.137,131.16l-179,430.555a164.5,164.5,0,0,1-151.853,101.233H1260.209a164.519,164.519,0,0,0-151.853,101.23L957.227,1127.62a164.509,164.509,0,0,1-151.853,101.233H462.3a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
              transform="translate(-567.166 -841.047)"
            />
            <path
              className="g-2"
              d="M1999.612,196.635l-179,430.555a164.5,164.5,0,0,1-151.853,101.236H1325.684a164.519,164.519,0,0,0-151.853,101.23L1022.7,1193.094A164.511,164.511,0,0,1,870.849,1294.33H527.774a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
              transform="translate(-458.041 -731.911)"
            />
            <path
              className="f-2"
              d="M2065.088,262.111l-179,430.555A164.5,164.5,0,0,1,1734.234,793.9H1391.16a164.519,164.519,0,0,0-151.853,101.23l-151.128,363.441A164.509,164.509,0,0,1,936.325,1359.8H593.25A164.517,164.517,0,0,0,441.4,1461.036l-179,430.555"
              transform="translate(-348.914 -622.773)"
            />
            <path
              className="g-2"
              d="M2130.563,327.586l-179,430.555a164.5,164.5,0,0,1-151.853,101.233H1456.635A164.518,164.518,0,0,0,1304.781,960.6l-151.128,363.441A164.509,164.509,0,0,1,1001.8,1425.279H658.725a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
              transform="translate(-239.789 -513.638)"
            />
            <path
              className="f-2"
              d="M2196.038,393.061l-179,430.555a164.505,164.505,0,0,1-151.854,101.233H1522.11a164.519,164.519,0,0,0-151.853,101.23l-151.128,363.442a164.509,164.509,0,0,1-151.853,101.233H724.2a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
              transform="translate(-130.664 -404.502)"
            />
            <path
              className="g-2"
              d="M2261.514,458.537l-179,430.555a164.508,164.508,0,0,1-151.853,101.233H1587.586a164.519,164.519,0,0,0-151.853,101.23L1284.6,1455a164.511,164.511,0,0,1-151.853,101.233H789.676a164.517,164.517,0,0,0-151.853,101.233l-179,430.555"
              transform="translate(-21.538 -295.364)"
            />
            <path
              className="f-2"
              d="M2326.989,524.012l-179,430.555A164.505,164.505,0,0,1,1996.136,1055.8H1653.061a164.519,164.519,0,0,0-151.854,101.23l-151.128,363.441A164.509,164.509,0,0,1,1198.226,1621.7H855.151A164.518,164.518,0,0,0,703.3,1722.938l-179,430.555"
              transform="translate(87.587 -186.228)"
            />
          </g>
        </g>
      </g>
      <text className="h-2" transform="translate(284.131 700.51)">
        <tspan x={0} y={100}>
          {"Cifras de "}
        </tspan>
        <tspan x={0} y={205}>
          {"impacto"}
        </tspan>
      </text>
      <g transform="translate(0.208 0)" onClick={() => {setOpenModal(true); setSelected(2)}}>
        <path
          className="i-2"
          d="M282.186.49H952.023V587.4H-8.185l131.6-425.818C149.837,64.133,212.559.49,282.186.49Z"
          transform="translate(951.815 587.402) rotate(180)"
        />
        <g className="y-2" transform="matrix(1, 0, 0, 1, -9, -6)">
          <path
            className="j-2"
            d="M239.377,0H937.511V483.841H0L108.49,132.8C130.271,52.466,181.977,0,239.377,0Z"
            transform="translate(946.51 489.84) rotate(180)"
          />
        </g>
        <g className="x-2" transform="matrix(1, 0, 0, 1, -9, -6)" >
          <path
            className="k-2"
            d="M239.377,0H937.511V483.841H0L108.49,132.8C130.271,52.466,181.977,0,239.377,0Z"
            transform="translate(946.51 489.84) rotate(180)"
          />
        </g>
        <text className="l-2" transform="translate(668.755 545.908)">
          <tspan x={-155.265} y={0}>
            {"+3000"}
          </tspan>
          <tspan className="m-2">
            <tspan x={-402.264} y={25}>
              {"cirug\xEDas rob\xF3ticas realizadas"}
            </tspan>
          </tspan>
        </text>
        <g className="n-2" transform="translate(675.953 508.939)" >
          <g className="o-2">
            <path
              className="b-2"
              d="M18.574,0a3.076,3.076,0,0,1,1.9,1.927A2.62,2.62,0,0,1,17.73,5.212c-3.733.027-7.466.008-11.2.009H5.256V43.651H43.071c0-.47,0-.9,0-1.321,0-3.806-.009-7.611.021-11.416a2.541,2.541,0,0,1,4.647-1.426,3.1,3.1,0,0,1,.455,1.52q.051,7.611.014,15.222a2.639,2.639,0,0,1-2.671,2.7c-.217.011-.435,0-.652,0H3.35C.891,48.935.023,48.067.022,45.6.021,31.5.037,17.4,0,3.3A3.089,3.089,0,0,1,2.044,0Z"
              transform="translate(0)"
            />
            <path
              className="b-2"
              d="M110.6,10.271c-3.558,0-6.854,0-10.149,0-1.791,0-2.984-1.039-3-2.58a2.664,2.664,0,0,1,2.963-2.617q8.151-.016,16.3,0c2.15,0,2.788.618,2.8,2.785q.04,8.2.01,16.41a2.6,2.6,0,0,1-2.551,2.9c-1.548.017-2.59-1.155-2.6-2.961-.01-3.321,0-6.641,0-9.962l-.478-.394a3.8,3.8,0,0,1-.527,1.058q-8.2,8.246-16.444,16.446a4.46,4.46,0,0,1-1.584,1.076,2.561,2.561,0,0,1-2.5-4.3c2.23-2.278,4.5-4.519,6.751-6.773q5.11-5.111,10.219-10.222c.219-.22.417-.46.781-.863"
              transform="translate(-71.924 -3.958)"
            />
          </g>
        </g>
      </g>
      <g transform="translate(0.208 0)" onClick={() => {setOpenModal(true); setSelected(1)}}>
        <path
          className="i-2"
          d="M208.125.49H673.547V382.075H.729L88.043,105.227C108.026,41.868,155.464.49,208.125.49Z"
          transform="translate(673.547 382.786) rotate(180)"
          
        />
        <text className="l-2" transform="translate(466 288.076)">
          <tspan x={-173.855} y={55}>
            {"+17300"}
          </tspan>
          <tspan className="m-2">
            <tspan x={-359.664} y={80}>
              {"profesionales capacitados"}
            </tspan>
          </tspan>
        </text>
        <g className="n-2" transform="translate(471.953 306.106)">
          <g className="o-2">
            <path
              className="b-2"
              d="M18.574,0a3.076,3.076,0,0,1,1.9,1.927A2.62,2.62,0,0,1,17.73,5.212c-3.733.027-7.466.008-11.2.009H5.256V43.651H43.071c0-.47,0-.9,0-1.321,0-3.806-.009-7.611.021-11.416a2.541,2.541,0,0,1,4.647-1.426,3.1,3.1,0,0,1,.455,1.52q.051,7.611.014,15.222a2.639,2.639,0,0,1-2.671,2.7c-.217.011-.435,0-.652,0H3.35C.891,48.935.023,48.067.022,45.6.021,31.5.037,17.4,0,3.3A3.089,3.089,0,0,1,2.044,0Z"
              transform="translate(0)"
            />
            <path
              className="b-2"
              d="M110.6,10.271c-3.558,0-6.854,0-10.149,0-1.791,0-2.984-1.039-3-2.58a2.664,2.664,0,0,1,2.963-2.617q8.151-.016,16.3,0c2.15,0,2.788.618,2.8,2.785q.04,8.2.01,16.41a2.6,2.6,0,0,1-2.551,2.9c-1.548.017-2.59-1.155-2.6-2.961-.01-3.321,0-6.641,0-9.962l-.478-.394a3.8,3.8,0,0,1-.527,1.058q-8.2,8.246-16.444,16.446a4.46,4.46,0,0,1-1.584,1.076,2.561,2.561,0,0,1-2.5-4.3c2.23-2.278,4.5-4.519,6.751-6.773q5.11-5.111,10.219-10.222c.219-.22.417-.46.781-.863"
              transform="translate(-71.924 -3.958)"
            />
          </g>
        </g>
        <path
          className="p-2"
          d="M160.226.49H652.8V293.946H.729L67.878,81.037C83.245,32.312,119.727.49,160.226.49Z"
          transform="translate(652.798 294.657) rotate(180)"
        />
        <path
          className="q-2"
          d="M160.226.49H652.8V293.946H.729L67.878,81.037C83.245,32.312,119.727.49,160.226.49Z"
          transform="translate(652.798 294.657) rotate(180)"
        />
      </g>
      <g transform="translate(982.696 595.632)" onClick={() => {setOpenModal(true); setSelected(3)}}>
        <g transform="translate(0)">
          <path
            className="i-2"
            d="M282.186.49H952.023V587.4H-8.185l131.6-425.818C149.837,64.133,212.559.49,282.186.49Z"
            transform="translate(-14.305 -103.561)"
          />
          <g className="w-2" transform="matrix(1, 0, 0, 1, -991.49, -601.63)">
            <path
              className="r-2"
              d="M231.192.49H929.326V484.331H-8.185l108.49-351.037C132.958,38.3,139.455.49,231.192.49Z"
              transform="translate(999.67 601.14)"
            />
          </g>
          <path
            className="s-2"
            d="M231.192.49H929.326V484.331H-8.185l108.49-351.037C131.77,52.442,129.882-2.309,231.192.49Z"
            transform="translate(8.185 -0.49)"
            
          />
        </g>
        <text className="l-2" transform="translate(292.511 -42.071)"  onClick={() => {setOpenModal(true); setSelected(3)}}>
          <tspan x={0} y={0}>
            {"10 instituciones "}
          </tspan>
          <tspan className="m-2">
            <tspan x={0} y={25}>
              {"con el modelode log\xEDstica hospitalaria"}
            </tspan>
          </tspan>
        </text>
        <g transform="translate(227.463 -65.693)" onClick={() => {setOpenModal(true); setSelected(3)}}>
          <g className="o-2">
            <path
              className="b-2"
              d="M29.648,0a3.076,3.076,0,0,0-1.9,1.927,2.62,2.62,0,0,0,2.748,3.285c3.733.027,7.466.008,11.2.009h1.275V43.652H5.151c0-.47,0-.9,0-1.321,0-3.806.009-7.611-.021-11.416a2.45,2.45,0,0,0-1.793-2.433A2.44,2.44,0,0,0,.483,29.488a3.1,3.1,0,0,0-.455,1.52Q-.022,38.619.014,46.23a2.639,2.639,0,0,0,2.671,2.7c.217.011.435,0,.652,0H44.871c2.459,0,3.328-.868,3.328-3.337,0-14.1-.015-28.2.022-42.295A3.089,3.089,0,0,0,46.177,0Z"
              transform="translate(0)"
            />
            <path
              className="b-2"
              d="M100.965,10.271c3.558,0,6.854,0,10.149,0,1.791,0,2.984-1.039,3-2.58a2.664,2.664,0,0,0-2.963-2.617q-8.151-.016-16.3,0c-2.15,0-2.788.618-2.8,2.785q-.04,8.2-.01,16.41a2.6,2.6,0,0,0,2.551,2.9c1.548.017,2.59-1.155,2.6-2.961.01-3.321,0-6.641,0-9.962l.478-.394a3.8,3.8,0,0,0,.527,1.058q8.2,8.246,16.444,16.446a4.46,4.46,0,0,0,1.584,1.076,2.561,2.561,0,0,0,2.5-4.3c-2.23-2.278-4.5-4.519-6.751-6.773q-5.11-5.111-10.219-10.222c-.219-.22-.417-.46-.781-.863"
              transform="translate(-91.418 -3.958)"
            />
          </g>
        </g>
      </g>
      <g transform="translate(1180.07 746.383)">
        <g transform="translate(88.068 39.634)" onClick={() => {setOpenModal(true); setSelected(4)}}>
          <path
            className="i-2"
            d="M208.125.49H673.547V382.075H.729L88.043,105.227C108.026,41.868,155.464.49,208.125.49Z"
            transform="translate(-20.586 -88.619)"
          />
          <g className="v-2" transform="matrix(1, 0, 0, 1, -1276.93, -792.02)">
            <path
              className="t-2"
              d="M160.226.49H652.8V293.946H.729L67.878,81.037C83.245,32.312,119.727.49,160.226.49Z"
              transform="translate(1276.2 791.53)"
            />
          </g>
          <path
            className="q-2"
            d="M160.226.49H652.8V293.946H.729L67.878,81.037C83.245,32.312,119.727.49,160.226.49Z"
            transform="translate(-0.729 -0.49)"
            onClick={() => {setOpenModal(true); setSelected(4)}}
          />
          <text className="l-2" transform="translate(227.069 -37.129)">
            <tspan x={0} y={0}>
              {"+45600"}
            </tspan>
            <tspan className="m-2" y={0} />
            <tspan className="m-2">
              <tspan x={0} y={25}>
                {"pacientes atendidos"}
              </tspan>
            </tspan>
          </text>
          <g className="u-2" transform="translate(163.022 -61.19)" onClick={() => {setOpenModal(true); setSelected(4)}}>
            <path
              className="b-2"
              d="M29.648,0a3.076,3.076,0,0,0-1.9,1.927,2.62,2.62,0,0,0,2.748,3.285c3.733.027,7.466.008,11.2.009h1.275V43.652H5.151c0-.47,0-.9,0-1.321,0-3.806.009-7.611-.021-11.416a2.45,2.45,0,0,0-1.793-2.433A2.44,2.44,0,0,0,.483,29.488a3.1,3.1,0,0,0-.455,1.52Q-.022,38.619.014,46.23a2.639,2.639,0,0,0,2.671,2.7c.217.011.435,0,.652,0H44.871c2.459,0,3.328-.868,3.328-3.337,0-14.1-.015-28.2.022-42.295A3.089,3.089,0,0,0,46.177,0Z"
              transform="translate(0)"
            />
            <path
              className="b-2"
              d="M100.965,10.271c3.558,0,6.854,0,10.149,0,1.791,0,2.984-1.039,3-2.58a2.664,2.664,0,0,0-2.963-2.617q-8.151-.016-16.3,0c-2.15,0-2.788.618-2.8,2.785q-.04,8.2-.01,16.41a2.6,2.6,0,0,0,2.551,2.9c1.548.017,2.59-1.155,2.6-2.961.01-3.321,0-6.641,0-9.962l.478-.394a3.8,3.8,0,0,0,.527,1.058q8.2,8.246,16.444,16.446a4.46,4.46,0,0,0,1.584,1.076,2.561,2.561,0,0,0,2.5-4.3c-2.23-2.278-4.5-4.519-6.751-6.773q-5.11-5.111-10.219-10.222c-.219-.22-.417-.46-.781-.863"
              transform="translate(-91.418 -3.958)"
            />
          </g>
        </g>
      </g>
    </g>
      </svg>
      <CifrasVideo height={height} open={openModal} selected={selected} onClose={() => setOpenModal(false)}/>
    </div>
  );
};

export default Cifras;
