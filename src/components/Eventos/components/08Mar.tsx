import moment from 'moment'
import React from 'react'
import { daysMar } from '../mocks/calendar.mock'

export interface ICalendar {
	next: () => void
	today: number
	month: number
	prev: () => void
  onChangeMonth: () => void
	onLessMonth: () => void
}

const Mar08: React.FC<ICalendar> = ({ month, next, prev, today, onChangeMonth, onLessMonth }) => {
	const currentMonth = moment('02').month() + 1
	const events = Object.values(daysMar).filter(
		(item: any) => item.hasEvent === true
	)
	const currentTransform = daysMar[`${today}-${currentMonth}`]
		? daysMar[`${today}-${currentMonth}`].transform
		: 'translate(0px, 0px)'

	return (
		<svg viewBox="-150 0 1920 998.106">
    <defs>
      <style>
        {
          ".a-item-1813,.t-item-1813{fill:none;}.b-item-1813{fill:#c5dbf7;}.c-item-1813,.h-item-1813,.l-item-1813,.r-item-1813{fill:#001f5f;}.d-item-1813{fill:url(#a-item-1813);}.e-item-1813,.n-item-1813{fill:#fff;}.f-item-1813{fill:url(#b-item-1813);}.g-item-1813{fill:url(#c-item-1813);}.h-item-1813{font-size:70px;}.h-item-1813,.l-item-1813{font-family:Kiona-Bold, Kiona;font-weight:700;}.i-item-1813,.m-item-1813,.p-item-1813,.s-item-1813{fill:#182856;}.i-item-1813,.r-item-1813{font-size:24px;}.i-item-1813,.m-item-1813{font-family:Silka-Regular, Silka;}.j-item-1813{fill:#e40032;}.k-item-1813{fill:#c7c7cc;}.l-item-1813{font-size:25px;}.m-item-1813{font-size:18px;}.n-item-1813,.s-item-1813{font-size:42px;}.n-item-1813,.p-item-1813,.s-item-1813{font-family:Silka-SemiBold, Silka;font-weight:600;}.o-item-1813{clip-path:url(#h-item-1813);}.p-item-1813{font-size:32px;}.q-item-1813{clip-path:url(#i-item-1813);}.r-item-1813{font-family:Silka-Medium, Silka;font-weight:500;}.t-item-1813{stroke:#e40032;stroke-width:3px;}.u-item-1813{filter:url(#f-item-1813);}.v-item-1813{filter:url(#d-item-1813);}"
        }
      </style>
      <pattern
        id="a-item-1813"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 1500 1000"
      >
        <image
          width={1500}
          height={1000}
          xlinkHref="/images/eventos/9Feb.jpg"
        />
      </pattern>
      <pattern
        id="b-item-1813"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 6000 3363"
      >
        <image
          width={6000}
          height={3363}
          xlinkHref="/images/eventos/3Feb.jpg"
        />
      </pattern>
      <pattern
        id="c-item-1813"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 1500 841"
      >
        <image
          width={1500}
          height={841}
          xlinkHref="/images/eventos/29Feb.jpg"
        />
      </pattern>
      <filter
        id="d-item-1813"
        x={1220.857}
        y={858.904}
        width={145.48}
        height={78.473}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="e" />
        <feFlood floodOpacity={0.6} />
        <feComposite operator="in" in2="e" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="f-item-1813"
        x={1004.536}
        y={858.904}
        width={145.48}
        height={78.473}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="g" />
        <feFlood floodOpacity={0.6} />
        <feComposite operator="in" in2="g" />
        <feComposite in="SourceGraphic" />
      </filter>
      <clipPath id="h-item-1813">
        <rect className="a-item-1813" width={567} height={40} />
      </clipPath>
      <clipPath id="i-item-1813">
        <rect className="a-item-1813" width={567} height={284} />
      </clipPath>
    </defs>
    <circle
      className="b-item-1813"
      cx={22}
      cy={22}
      r={22}
      transform="translate(260 516.019)"
    />
    <path
      className="c-item-1813"
      d="M1136.187,0H50.372C18.5,0-5.357,24.843,1.043,51.375L39.612,842.591l5.914,121.316c4.8,19.905,25.417,34.2,49.329,34.2H1136.187Z"
      transform="translate(643.813 0.003)"
    />
    <circle
      className="b-item-1813"
      cx={22}
      cy={22}
      r={22}
      transform="translate(519 517.019)"
    />
    <circle
      className="b-item-1813"
      cx={22}
      cy={22}
      r={22}
      transform="translate(434 517.019)"
    />
    <circle
      className="b-item-1813"
      cx={22}
      cy={22}
      r={22}
      transform="translate(348 517.019)"
    />
    <circle
      className="b-item-1813"
      cx={22}
      cy={22}
      r={22}
      transform="translate(434 564.019)"
    />
    <g transform="translate(-130 -143.894)">
      <path
        className="d-item-1813"
        d="M798.067,14.53l26.614,192.437c.774,6.446,5.936,11.282,12.047,11.282h318.916c-6.112,0-11.273-4.836-12.041-11.282L1116.983,14.53c-.924-7.71,4.732-14.53,12.047-14.53H810.108c-7.309,0-12.965,6.821-12.041,14.53"
        transform="translate(104.988 303)"
      />
      <path
        className="e-item-1813"
        d="M.1,14.53l26.62,192.437c.768,6.446,5.929,11.282,12.041,11.282H518.541c6.1,0,11.247-4.808,12.041-11.232L558.022,14.58C558.979,6.854,553.316,0,545.981,0H12.146C4.831,0-.825,6.821.1,14.53"
        transform="translate(1221.873 303)"
      />
    </g>
    <g transform="translate(-130 92.106)">
      <path
        className="f-item-1813"
        d="M798.067,14.53l26.614,192.437c.774,6.446,5.936,11.282,12.047,11.282h318.916c-6.112,0-11.273-4.836-12.041-11.282L1116.983,14.53c-.924-7.71,4.732-14.53,12.047-14.53H810.108c-7.309,0-12.965,6.821-12.041,14.53"
        transform="translate(104.988 303)"
      />
      <path
        className="e-item-1813"
        d="M.1,14.53l26.62,192.437c.768,6.446,5.929,11.282,12.041,11.282H518.541c6.1,0,11.247-4.808,12.041-11.232L558.022,14.58C558.979,6.854,553.316,0,545.981,0H12.146C4.831,0-.825,6.821.1,14.53"
        transform="translate(1221.873 303)"
      />
    </g>
    <g transform="translate(-130 328.106)">
      <path
        className="g-item-1813"
        d="M798.067,14.53l26.614,192.437c.774,6.446,5.936,11.282,12.047,11.282h318.916c-6.112,0-11.273-4.836-12.041-11.282L1116.983,14.53c-.924-7.71,4.732-14.53,12.047-14.53H810.108c-7.309,0-12.965,6.821-12.041,14.53"
        transform="translate(104.988 303)"
      />
      <path
        className="e-item-1813"
        d="M.1,14.53l26.62,192.437c.768,6.446,5.929,11.282,12.041,11.282H518.541c6.1,0,11.247-4.808,12.041-11.232L558.022,14.58C558.979,6.854,553.316,0,545.981,0H12.146C4.831,0-.825,6.821.1,14.53"
        transform="translate(1221.873 303)"
      />
    </g>
    <text className="h-item-1813" transform="translate(0 214.019)">
      <tspan x={0} y={70}>
        {"EVENTOS "}
      </tspan>
    </text>
    <g transform="translate(-130 -79.981)">
      <circle
        className="b-item-1813"
        cx={17.5}
        cy={17.5}
        r={17.5}
        transform="translate(416 867)"
      />
      <text className="i-item-1813" transform="translate(458 893)">
        <tspan x={0} y={0}>
          {"Fecha evento"}
        </tspan>
      </text>
    </g>
    <g transform="translate(-130 -79.981)">
      <circle
        className="j-item-1813"
        cx={17.5}
        cy={17.5}
        r={17.5}
        transform="translate(140 867)"
      />
      <text className="i-item-1813" transform="translate(182 893)">
        <tspan x={0} y={0}>
          {"Fecha de hoy"}
        </tspan>
      </text>
    </g>
    <g transform="translate(-210.89 -41.981)">
      <g transform="translate(1440.747 906.884)" onClick={next}>
        <g className="v-item-1813" transform="matrix(1, 0, 0, 1, -1229.86, -864.9)">
          <path
            className="k-item-1813"
            d="M127.48,0H71.492A70.054,70.054,0,0,0,6.277,44.472L0,60.473H53.69a73.731,73.731,0,0,0,69-47.758Z"
            transform="translate(1229.86 864.9)"
          />
        </g>
        <path
          className="e-item-1813"
          d="M13.947,0,27.893,23.908H0Z"
          transform="translate(75.679 16.27) rotate(90)"
        />
      </g>
      <g transform="translate(1224.426 906.884)" onClick={prev}>
        <g className="u-item-1813" transform="matrix(1, 0, 0, 1, -1013.54, -864.9)">
          <path
            className="k-item-1813"
            d="M0,0H55.988A70.054,70.054,0,0,1,121.2,44.472l6.277,16H73.791a73.731,73.731,0,0,1-69-47.758Z"
            transform="translate(1013.54 864.9)"
          />
        </g>
        <path
          className="e-item-1813"
          d="M13.947,0,27.893,23.908H0Z"
          transform="translate(51.802 44.164) rotate(-90)"
        />
      </g>
    </g>
    <text className="l-item-1813" transform="translate(1578 226.106)">
      <tspan x={-390.875} y={0}>
        {"XV INTERNATIONAL SYMPOSIUM"}
      </tspan>
      <tspan x={-335.475} y={27}>
        {"ON BACTERIAL RESISTANCE:"}
      </tspan>
      <tspan x={-333.125} y={54}>
        {"AN HOLISTIC APPROACH TO"}
      </tspan>
      <tspan x={-367.675} y={81}>
        {"ANTIMICROBIAL STEWARDSHIp"}
      </tspan>
    </text>
    <text className="m-item-1813" transform="translate(1570 315.106)">
      <tspan x={-198} y={17}>
        {"Pereira 6 y 8 de marzo"}
      </tspan>
    </text>
    <text className="n-item-1813" transform="translate(1002 126.019)">
      <tspan x={0} y={0}>
        {"08 de marzo de 2024"}
      </tspan>
    </text>
    <rect
      className="j-item-1813"
      width={41}
      height={4}
      rx={2}
      transform="translate(436 558.019)"
    />
    <g transform="translate(-130 -133.981)">
      <g className="o-item-1813" transform="translate(140 557)">
        <g transform="translate(-130 -557)">
          <text className="p-item-1813" transform="translate(140 557)">
            <tspan x={0} y={30}>
              {"Do"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-54 -557)">
          <text className="p-item-1813" transform="translate(140 557)">
            <tspan x={0} y={30}>
              {"Lu"}
            </tspan>
          </text>
        </g>
        <g transform="translate(32 -557)">
          <text className="p-item-1813" transform="translate(140 557)">
            <tspan x={0} y={30}>
              {"Ma"}
            </tspan>
          </text>
        </g>
        <g transform="translate(118 -557)">
          <text className="p-item-1813" transform="translate(140 557)">
            <tspan x={0} y={30}>
              {"Mi"}
            </tspan>
          </text>
        </g>
        <g transform="translate(204 -557)">
          <text className="p-item-1813" transform="translate(140 557)">
            <tspan x={0} y={30}>
              {"Ju"}
            </tspan>
          </text>
        </g>
        <g transform="translate(290 -557)">
          <text className="p-item-1813" transform="translate(140 557)">
            <tspan x={0} y={30}>
              {"Vi"}
            </tspan>
          </text>
        </g>
        <g transform="translate(376 -557)">
          <text className="p-item-1813" transform="translate(140 557)">
            <tspan x={0} y={30}>
              {"Sa"}
            </tspan>
          </text>
        </g>
      </g>
      <g className="q-item-1813" transform="translate(140 610)">
        <g transform="translate(-130 -557)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"25"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-54 -557)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"26"}
            </tspan>
          </text>
        </g>
        <g transform="translate(32 -557)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"27"}
            </tspan>
          </text>
        </g>
        <g transform="translate(118 -557)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"28"}
            </tspan>
          </text>
        </g>
        <g transform="translate(204 -557)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={-0} y={23}>
              {"29"}
            </tspan>
          </text>
        </g>
        <g transform="translate(290 -557)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"01"}
            </tspan>
          </text>
        </g>
        <g transform="translate(376 -557)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"02"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-130 -509)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"03"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-54 -509)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"04"}
            </tspan>
          </text>
        </g>
        <g transform="translate(32 -509)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"05"}
            </tspan>
          </text>
        </g>
        <g transform="translate(118 -509)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"06"}
            </tspan>
          </text>
        </g>
        <g transform="translate(204 -509)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"07"}
            </tspan>
          </text>
        </g>
        <g transform="translate(290 -509)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"08"}
            </tspan>
          </text>
        </g>
        <g transform="translate(376 -509)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"09"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-130 -461)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"10"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-54 -461)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"11"}
            </tspan>
          </text>
        </g>
        <g transform="translate(32 -461)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"12"}
            </tspan>
          </text>
        </g>
        <g transform="translate(118 -461)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"13"}
            </tspan>
          </text>
        </g>
        <g transform="translate(204 -461)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"14"}
            </tspan>
          </text>
        </g>
        <g transform="translate(290 -461)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"15"}
            </tspan>
          </text>
        </g>
        <g transform="translate(376 -461)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"16"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-130 -413)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"17"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-54 -413)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"18"}
            </tspan>
          </text>
        </g>
        <g transform="translate(32 -413)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"19"}
            </tspan>
          </text>
        </g>
        <g transform="translate(118 -413)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"20"}
            </tspan>
          </text>
        </g>
        <g transform="translate(204 -413)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"21"}
            </tspan>
          </text>
        </g>
        <g transform="translate(290 -413)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"22"}
            </tspan>
          </text>
        </g>
        <g transform="translate(376 -413)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"23"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-130 -365)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"24"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-54 -365)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"25"}
            </tspan>
          </text>
        </g>
        <g transform="translate(32 -365)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"26"}
            </tspan>
          </text>
        </g>
        <g transform="translate(118 -365)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"27"}
            </tspan>
          </text>
        </g>
        <g transform="translate(204 -365)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"28"}
            </tspan>
          </text>
        </g>
        <g transform="translate(290 -365)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"29"}
            </tspan>
          </text>
        </g>
        <g transform="translate(376 -365)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"30"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-130 -317)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"31"}
            </tspan>
          </text>
        </g>
        <g transform="translate(-54 -317)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"01"}
            </tspan>
          </text>
        </g>
        <g transform="translate(32 -317)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"02"}
            </tspan>
          </text>
        </g>
        <g transform="translate(118 -317)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"03"}
            </tspan>
          </text>
        </g>
        <g transform="translate(204 -317)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"04"}
            </tspan>
          </text>
        </g>
        <g transform="translate(290 -317)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"05"}
            </tspan>
          </text>
        </g>
        <g transform="translate(376 -317)">
          <text className="r-item-1813" transform="translate(140 557)">
            <tspan x={0} y={23}>
              {"06"}
            </tspan>
          </text>
        </g>
      </g>
      <text className="s-item-1813" transform="translate(140 525)">
        <tspan x={0} y={0}>
          {"Marzo 2024"}
        </tspan>
      </text>
      <line className="t-item-1813" x2={567} transform="translate(140 546)" />
      <path
        className="c-item-1813"
        d="M13.947,0,27.893,23.908H0Z"
        transform="translate(616.338 532.048) rotate(-90)"
        onClick={onLessMonth}
      />
      <path
        className="c-item-1813"
        d="M13.947,0,27.893,23.908H0Z"
        transform="translate(698.246 504.155) rotate(90)"
        onClick={onChangeMonth}
      />
    </g>
    <text className="l-item-1813" transform="translate(1578 474.106)">
      <tspan x={-344.25} y={0}>
        {"XXIX CURSO DE POSTGRADO"}
      </tspan>
      <tspan x={-229.375} y={27}>
        {"EN REUMATOLOGIA"}
      </tspan>
      <tspan x={-253.025} y={54}>
        {"“Ruta Panlar 2024”"}
      </tspan>
    </text>
    <text className="m-item-1813" transform="translate(1570 539.106)">
      <tspan x={-367.65} y={17}>
        {"Barranquilla 8 de marzo Combarranquilla "}
      </tspan>
    </text>
    <text className="l-item-1813" transform="translate(1578 719.106)">
      <tspan x={-176.225} y={0}>
        {"XVI Simposio:"}
      </tspan>
      <tspan x={-458.275} y={27}>
        {'"Transformación de los modelos'}
      </tspan>
      <tspan x={-443.775} y={54}>
        {'integrados de gestión en salud"'}
      </tspan>
    </text>
    <text className="m-item-1813" transform="translate(1578 786.106)">
      <tspan x={-314.64} y={17}>
        {"Bogotá 7 y 8 de marzo Cosmos 100"}
      </tspan>
    </text>
  </svg>
	)
}

export default Mar08
