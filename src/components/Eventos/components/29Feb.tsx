import moment from 'moment'
import React from 'react'
import { daysFeb } from '../mocks/calendar.mock'

export interface ICalendar {
	next: () => void
	today: number
	month: number
	prev: () => void
	onChangeDay: (day: number) => void
	onChangeMonth: () => void
	onLessMonth: () => void
}

const Feb29: React.FC<ICalendar> = ({ month, next, prev, today, onChangeDay, onChangeMonth, onLessMonth }) => {
	const currentMonth = moment('02').month() + 1
	const events = Object.values(daysFeb).filter(
		(item: any) => item.hasEvent === true
	)
	const currentTransform = daysFeb[`${today}-${currentMonth}`].transform

	return (
		<svg viewBox="-150 0 1920 998.106">
			<defs>
				<style>
					{
						'.a-item-1813,.j-item-1813{fill:none;}.b-item-1813{fill:#e40032;}.c-item-1813{fill:#c5dbf7;}.d-item-1813,.h-item-1813,.k-item-1813,.p-item-1813{fill:#001f5f;}.e-item-1813{clip-path:url(#a-item-1813);}.f-item-1813,.i-item-1813,.n-item-1813,.q-item-1813{fill:#182856;}.f-item-1813{font-size:32px;}.f-item-1813,.i-item-1813,.r-item-1813{font-family:Silka-SemiBold, Silka;font-weight:600;}.g-item-1813{clip-path:url(#b-item-1813);}.h-item-1813,.n-item-1813{font-size:24px;}.h-item-1813{font-family:Silka-Medium, Silka;font-weight:500;}.i-item-1813,.r-item-1813{font-size:42px;}.j-item-1813{stroke:#e40032;stroke-width:3px;}.k-item-1813{font-size:70px;}.k-item-1813,.p-item-1813{font-family:Kiona-Bold, Kiona;font-weight:700;}.l-item-1813{fill:url(#c-item-1813);}.m-item-1813,.r-item-1813{fill:#fff;}.n-item-1813,.q-item-1813{font-family:Silka-Regular, Silka;}.o-item-1813{fill:#c7c7cc;}.p-item-1813{font-size:28px;}.q-item-1813{font-size:18px;}.s-item-1813{filter:url(#j-item-1813);}.t-item-1813{filter:url(#h-item-1813);}.u-item-1813{filter:url(#f-item-1813);}.v-item-1813{filter:url(#d-item-1813);}'
					}
				</style>
				<clipPath id="a-item-1813">
					<rect className="a-item-1813" width={567} height={40} />
				</clipPath>
				<clipPath id="b-item-1813">
					<rect className="a-item-1813" width={567} height={233} />
				</clipPath>
				<pattern
					id="c-item-1813"
					preserveAspectRatio="xMidYMid slice"
					width="100%"
					height="100%"
					viewBox="0 0 1500 841">
					<image
						width={1500}
						height={841}
						xlinkHref="/images/eventos/29Feb.jpg"
					/>
				</pattern>
				<filter
					id="d-item-1813"
					x={819}
					y={154.356}
					width={732.874}
					height={677.978}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="e" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="e" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="f-item-1813"
					x={898.57}
					y={657.957}
					width={600.13}
					height={186.008}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="g" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="g" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="h-item-1813"
					x={1220.857}
					y={858.904}
					width={145.48}
					height={78.473}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="i" />
					<feFlood floodOpacity={0.6} />
					<feComposite operator="in" in2="i" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="j-item-1813"
					x={1004.536}
					y={858.904}
					width={145.48}
					height={78.473}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="k" />
					<feFlood floodOpacity={0.6} />
					<feComposite operator="in" in2="k" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<circle
				className="b-item-1813"
				cx={22}
				cy={22}
				r={22}
				style={{ transform: currentTransform }}
			/>
			{events.map((item: any, index: number) => (
				<React.Fragment>
					{currentTransform !== item.transform && (
						<circle
							key={index}
							className="c-item-1813"
							cx={22}
							cy={22}
							r={22}
							style={{ transform: item.transform }}
						/>
					)}
				</React.Fragment>
			))}
			<path
				className="d-item-1813"
				d="M1136.187,0H50.372C18.5,0-5.357,24.843,1.043,51.375L39.612,842.591l5.914,121.316c4.8,19.905,25.417,34.2,49.329,34.2H1136.187Z"
				transform="translate(643.813 0.003)"
			/>
			<g transform="translate(-140 -133.981)">
				<g className="e-item-1813" transform="translate(140 557)">
					<g transform="translate(-140 -557)">
						<text
							className="f-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={30}>
								{'Do'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -557)">
						<text
							className="f-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={30}>
								{'Lu'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -557)">
						<text
							className="f-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={30}>
								{'Ma'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -557)">
						<text
							className="f-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={30}>
								{'Mi'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -557)">
						<text
							className="f-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={30}>
								{'Ju'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -557)">
						<text
							className="f-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={30}>
								{'Vi'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -557)">
						<text
							className="f-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={30}>
								{'Sa'}
							</tspan>
						</text>
					</g>
				</g>
				<g className="g-item-1813" transform="translate(140 610)">
					<g transform="translate(-140 -557)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'28'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -557)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'29'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -557)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'30'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -557)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'31'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -557)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'01'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -557)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'02'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -557)" onClick={() => onChangeDay(3)}>
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'03'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-140 -509)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'04'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -509)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'05'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -509)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'06'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -509)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'07'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -509)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'08'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -509)" onClick={() => onChangeDay(90)}>
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'09'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -509)" onClick={() => onChangeDay(10)}>
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'10'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-140 -461)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'11'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -461)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'12'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -461)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'13'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -461)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'14'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -461)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'15'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -461)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'16'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -461)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'17'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-140 -413)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'18'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -413)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'19'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -413)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'20'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -413)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'21'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -413)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'22'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -413)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'23'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -413)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'24'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-140 -365)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'25'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -365)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'26'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -365)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'27'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -365)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'28'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -365)" onClick={() => onChangeDay(29)}>
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'29'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -365)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'01'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -365)">
						<text
							className="h-item-1813"
							transform="translate(140 557)">
							<tspan x={0} y={23}>
								{'02'}
							</tspan>
						</text>
					</g>
				</g>
				<text className="i-item-1813" transform="translate(140 525)">
					<tspan x={0} y={0}>
						{'Febrero 2024'}
					</tspan>
				</text>
				<line
					className="j-item-1813"
					x2={567}
					transform="translate(140 546)"
				/>
				<path
					className="d-item-1813"
					d="M13.947,0,27.893,23.908H0Z"
					transform="translate(616.338 532.048) rotate(-90)"
					onClick={onLessMonth}
				/>
				<path
					className="d-item-1813"
					d="M13.947,0,27.893,23.908H0Z"
					transform="translate(698.246 504.155) rotate(90)"
					onClick={onChangeMonth}
				/>
			</g>
			<text className="k-item-1813" transform="translate(0 214.019)">
				<tspan x={0} y={70}>
					{'EVENTOS '}
				</tspan>
			</text>
			<g className="v-item-1813" transform="matrix(1, 0, 0, 1, 0, 0)">
				<path
					className="l-item-1813"
					d="M714.62,44.719,661.7,503.6H267.94c-77.71,0-147.5,49.025-175.88,123.546L79.57,659.978a44.438,44.438,0,0,1-8.89-22.931L.27,44.873C-2.18,21.1,12.35,0,31.16,0H683.71c18.77,0,33.28,20.995,30.91,44.719"
					transform="translate(828 160.36)"
				/>
			</g>
			<g className="u-item-1813" transform="matrix(1, 0, 0, 1, 0, 0)">
				<path
					className="m-item-1813"
					d="M661.7,488.86,646.33,622.152c-1.98,19.841-15.22,34.716-30.92,34.716H101.58c-8.54,0-16.36-4.409-22.01-11.63l12.49-32.831c28.38-74.521,98.17-123.546,175.88-123.546Z"
					transform="translate(828 175.1)"
				/>
			</g>
			<g transform="translate(-140 -79.981)">
				<circle
					className="c-item-1813"
					cx={17.5}
					cy={17.5}
					r={17.5}
					transform="translate(416 867)"
				/>
				<text className="n-item-1813" transform="translate(458 893)">
					<tspan x={0} y={0}>
						{'Fecha evento'}
					</tspan>
				</text>
			</g>
			<g transform="translate(-140 -79.981)">
				<circle
					className="b-item-1813"
					cx={17.5}
					cy={17.5}
					r={17.5}
					transform="translate(140 867)"
				/>
				<text className="n-item-1813" transform="translate(182 893)">
					<tspan x={0} y={0}>
						{'Fecha de hoy'}
					</tspan>
				</text>
			</g>
			<g transform="translate(-210.89 -41.981)">
				<g transform="translate(1440.747 906.884)" onClick={next}>
					<g
						className="t-item-1813"
						transform="matrix(1, 0, 0, 1, -1229.86, -864.9)">
						<path
							className="o-item-1813"
							d="M127.48,0H71.492A70.054,70.054,0,0,0,6.277,44.472L0,60.473H53.69a73.731,73.731,0,0,0,69-47.758Z"
							transform="translate(1229.86 864.9)"
						/>
					</g>
					<path
						className="m-item-1813"
						d="M13.947,0,27.893,23.908H0Z"
						transform="translate(75.679 16.27) rotate(90)"
					/>
				</g>
				<g transform="translate(1224.426 906.884)" onClick={prev}>
					<g
						className="s-item-1813"
						transform="matrix(1, 0, 0, 1, -1013.54, -864.9)">
						<path
							className="o-item-1813"
							d="M0,0H55.988A70.054,70.054,0,0,1,121.2,44.472l6.277,16H73.791a73.731,73.731,0,0,1-69-47.758Z"
							transform="translate(1013.54 864.9)"
						/>
					</g>
					<path
						className="m-item-1813"
						d="M13.947,0,27.893,23.908H0Z"
						transform="translate(51.802 44.164) rotate(-90)"
					/>
				</g>
			</g>
			<text className="p-item-1813" transform="translate(1436 737.019)">
				<tspan x={-418.432} y={0}>
					{'XIII Curso de Actualización'}
				</tspan>
				<tspan x={-256.9} y={30}>
					{'en Reumatología'}
				</tspan>
			</text>
			<text className="q-item-1813" transform="translate(1435 786.019)">
				<tspan x={-360.81} y={17}>
					{'Cali 29 de febrero Hotel Intercontinental'}
				</tspan>
			</text>
			<text className="r-item-1813" transform="translate(950 126.019)">
				<tspan x={0} y={0}>
					{'29 de febrero de 2024'}
				</tspan>
			</text>
			{today !== 29 && (
				<rect
					className="b-item-1813"
					width={38}
					height={4}
					rx={2}
					transform="translate(338 700.019)"
				/>
			)}
		</svg>
	)
}

export default Feb29
