import React from 'react'
import { carouselPortfolio } from 'mocks/portfolio.mocks'
import type { CarouselPortfolio } from 'mocks/portfolio.mocks'
import LeftCard from './components/LeftCard'
import CenterCard from './components/CenterCard'
import Elipses from './components/Elipses'
import './Carousel.css'

const Portafolio: React.FC = () => {
	const [height, setHeight] = React.useState<string>('100vh')
	const [openState, setOpenState] = React.useState<boolean>(false)
	const [page, setPage] = React.useState<number>(0)
	const [items, setItems] = React.useState<CarouselPortfolio[]>([])
	const [over, setOver] = React.useState(false)

	React.useEffect(() => {
		window.addEventListener('resize', () =>
			setHeight(
				window.innerHeight > 800
					? '110vh'
					: window.innerHeight < 700
					? '100%'
					: '100vh'
			)
		)

		setHeight(
			window.innerHeight > 800
				? '110vh'
				: window.innerHeight < 700
				? '100%'
				: '100vh'
		)

		return () =>
			window.removeEventListener('resize', () =>
				setHeight(
					window.innerHeight > 800
						? '110vh'
						: window.innerHeight < 700
						? '100%'
						: '100vh'
				)
			)
	}, [])

	const filterdata = () => {
		const subsetSize = 3
		let startIndex = (page % carouselPortfolio.length) - subsetSize
		if (startIndex < 0) {
			const length = carouselPortfolio.length
			startIndex = length + startIndex
		}
		const endIndex = startIndex + subsetSize
		const subset = carouselPortfolio.slice(startIndex, endIndex)

		if (subset.length < subsetSize) {
			const remainingItems = carouselPortfolio
				.slice(0, startIndex)
				.concat(carouselPortfolio.slice(0, subsetSize - subset.length))
			return subset.concat(remainingItems)
		}

		return subset
	}

	React.useEffect(() => {
		setItems(filterdata())
	}, [page])

	return (
		<div>
			{!openState ? (
				<svg
					width="100%"
					height={height}
					viewBox="0 0 1920 1080"
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								'g,rect,path  {stroke: none;}.a-4{fill:#001f5f;}.b-4{fill:none;}.c-4{fill:#E40032;}.d-4{clip-path:url(#a-4);}.e-4{clip-path:url(#b-4);}.f-4{fill:#fff;}.g-4{clip-path:url(#c-4);}.h-4{fill:url(#d-4);}.i-4,.j-4{fill:#fff;}.i-4{font-size:70px;font-family:Silka-SemiBold, Silka;font-weight:600;}.j-4{font-size:24px;font-family:Silka-Regular, Silka;}.k-4{filter:url(#e-4);}'
							}
						</style>
						<clipPath id="a-4">
							<path className="a-4" d="M0,0H1920V1079.473H0Z" />
						</clipPath>
						<clipPath id="b-4">
							<rect
								className="b-4"
								width={1681.297}
								height={988.811}
							/>
						</clipPath>
						<clipPath id="c-4">
							<rect
								className="c-4"
								width={699}
								height={153.683}
							/>
						</clipPath>
						<pattern
							id="d-4"
							width={1}
							height={1}
							viewBox="359.445 174.865 908.599 837.429">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1544.558}
								height={1027.662}
								xlinkHref="/images/maquinas.png "
							/>
						</pattern>
						<filter
							id="e-4"
							x={0}
							y={0}
							width={1133}
							height={1045.663}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="f-4" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="f-4" />
							<feComposite in="SourceGraphic" />
						</filter>
					</defs>
					<g>
						<path className="a-4" d="M0,0H1920V1079.473H0Z" />
						<g className="d-4">
							<g transform="translate(1965.221 424.48) rotate(180)">
								<g className="e-4">
									<path
										className="f-4"
										d="M3.95,988.811,0,987.164,301.914,262.759A427.049,427.049,0,0,1,696.1,0h985.2V4.277H696.1A421.661,421.661,0,0,0,305.863,264.4Z"
									/>
								</g>
							</g>
							<g transform="translate(1920 1079.473) rotate(180)">
								<g className="g-4" transform="translate(0 0)">
									<path
										className="c-4"
										d="M455.945,307.365H0V0H699L609.4,208.6c-25.677,59.78-86.254,98.769-153.456,98.769"
										transform="translate(0 -153.683)"
									/>
								</g>
							</g>
						</g>
						<g
							className="k-4"
							transform="matrix(1, 0, 0, 1, -9, -4.13)">
							<path
								className="h-4"
								d="M727.295,1027.662H0V0H1115L972.078,697.434C931.12,897.3,834.491,1027.662,727.295,1027.662"
								transform="translate(9 6)"
								onClick={() => setOpenState(true)}
							/>
						</g>
						<text
							className="i-4"
							transform="translate(1115 500.068)">
							<tspan x={0} y={66}>
								{'PORTAFOLIO '}
							</tspan>
						</text>
						<text
							className="j-4"
							transform="translate(1115 600.52)">
							<tspan x={0} y={23}>
								{'Somos un grupo empresarial con una clara '}
							</tspan>
							<tspan x={0} y={51}>
								{
									'inspiraci\xF3n profesional y humana; ofrecemos '
								}
							</tspan>
							<tspan x={0} y={79}>
								{
									'un portafolio de soluciones en salud de la m\xE1s '
								}
							</tspan>
							<tspan x={0} y={107}>
								{
									'alta calidad para el cuidado de los pacientes. '
								}
							</tspan>
						</text>
					</g>
					<g
						transform="translate(1164 779)"
						onClick={() => setOpenState(true)}>
						<defs>
							<style>
								{
									'.a-button-32{fill:#fff;}.b-button-32,.c-button-32{fill:#001f5f;}.b-button-32{font-size:28px;font-family:"Kiona-Bold";font-weight:700;}.d-button-32{filter:url(#a-button-32);}'
								}
							</style>
							<filter
								id="a-button-32"
								x={0}
								y={0}
								width={403}
								height={98.849}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="b" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="b" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g transform="translate(9 6)">
							<g
								className="d-button-32"
								transform="matrix(1, 0, 0, 1, -9, -6)">
								<path
									className="a-button-32"
									d="M385,0H78.968C47.139,0,18.557,23.591,6.933,59.456L0,80.849H303.493c33.911,0,64.274-25.435,76.22-63.849Z"
									transform="translate(9 6)"
								/>
							</g>
							<text
								className="b-button-32"
								transform="translate(71 51.424)">
								<tspan x={0} y={0}>
									{'Conoce M\xE1s'}
								</tspan>
							</text>
							<path
								className="c-button-32"
								d="M45.263,0V24.412L66.419,12.2,56.314,6.375Z"
								transform="translate(235.737 28.219)"
							/>
						</g>
					</g>
				</svg>
			) : (
				<svg
					width="100%"
					height={height}
					viewBox="0 0 1920 1080"
					preserveAspectRatio="none">
					<defs>
						<clipPath id="a-portfolio-3">
							<rect
								className="a-portfolio-3"
								width={962}
								height={309}
							/>
						</clipPath>
						<clipPath id="b-portfolio-3">
							<rect
								className="b-portfolio-3"
								width={898}
								height={464.12}
							/>
						</clipPath>
						<clipPath id="d-portfolio-3">
							<path
								className="c-portfolio-3"
								d="M0,0H1920V1080H0Z"
							/>
						</clipPath>
						<clipPath id="e-portfolio-3">
							<rect
								className="b-portfolio-3"
								width={994.777}
								height={585.338}
							/>
						</clipPath>
						<clipPath id="f-portfolio-3">
							<rect
								className="d-portfolio-3"
								width={562.17}
								height={123.599}
							/>
						</clipPath>
						<clipPath id="g-portfolio-3">
							<rect
								className="c-portfolio-3"
								width={562.17}
								height={123.599}
							/>
						</clipPath>
						<radialGradient
							id="h"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
						<pattern
							id="n-portfolio-3"
							width={1}
							height={1}
							patternTransform="translate(0 572.845) rotate(-180)"
							viewBox="0 0 306 342">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={306}
								height={342}
								xlinkHref={
									items.length > 0 ? items[0].images : ''
								}
							/>
						</pattern>
						<clipPath id="k-portfolio-3">
							<rect
								className="e-portfolio-3"
								width={1088.563}
								height={835.788}
								transform="translate(0 0)"
							/>
						</clipPath>
						<filter
							id="l-portfolio-3"
							x={505.926}
							y={346.847}
							width={274.573}
							height={492.955}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="m" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="m" />
							<feComposite in="SourceGraphic" />
						</filter>

						<filter
							id="o-portfolio-3"
							x={1141.94}
							y={346.847}
							width={274.573}
							height={492.955}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="q-portfolio-3"
							width={1}
							height={1}
							patternTransform="translate(0 860.314) rotate(-180)"
							viewBox="0 0 306 342">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={306}
								height={342}
								xlinkHref={
									items.length > 0 ? items[2].images : ''
								}
							/>
						</pattern>
						<filter
							id="r-portfolio-3"
							x={797.489}
							y={337.847}
							width={324.729}
							height={585.799}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="s" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="s" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="t-portfolio-3"
							width={1}
							height={1}
							patternTransform="translate(0 1026.314) rotate(-180)"
							viewBox="101.554 6.532 241.811 269.735">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={429.685}
								height={286.423}
								xlinkHref={
									items.length > 0 ? items[1].images : ''
								}
							/>
						</pattern>
						<filter
							id="u-portfolio-3"
							x={272}
							y={565.895}
							width={209.953}
							height={109.057}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="v" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="v" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="w-portfolio-3"
							x={1470.047}
							y={565.895}
							width={209.953}
							height={109.057}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="x" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="x" />
							<feComposite in="SourceGraphic" />
						</filter>
					</defs>
					<path className="e-portfolio-3" d="M0,0H1920V1080H0Z" />
					<g
						className="f-portfolio-3"
						transform="translate(479.366 770.502)">
						<g transform="translate(31.644 46.498)">
							<g className="g-portfolio-3">
								<g className="h-portfolio-3">
									<g className="g-portfolio-3">
										<path
											className="i-portfolio-3"
											d="M162.312,167.555l.654,273.317L.653,322.947,0,49.631Z"
											transform="translate(0 23.249)"
										/>
										<path
											className="j-portfolio-3"
											d="M696.881,129.937l.654,273.317H142.946l-.654-273.317Z"
											transform="translate(20.019 60.866)"
										/>
										<path
											className="k-portfolio-3"
											d="M808.925,49.631l.654,273.317L629.133,440.871l-.654-273.317Z"
											transform="translate(88.422 23.249)"
										/>
										<path
											className="l-portfolio-3"
											d="M454.271,0,897.347,72.88,716.9,190.8H162.312L0,72.88Z"
											transform="translate(0 0)"
										/>
									</g>
								</g>
							</g>
						</g>
					</g>
					<g className="m-portfolio-3">
						<g transform="translate(937.511 1690.645) rotate(180)">
							<g
								className="n-portfolio-3"
								transform="translate(216.457 1438.404)">
								<path
									className="o"
									d="M2.337,585.338,0,584.363l178.634-428.82A252.671,252.671,0,0,1,411.862,0H994.777V2.532H411.862A249.484,249.484,0,0,0,180.971,156.517Z"
									transform="translate(0 0)"
								/>
							</g>
							<path
								className="p-portfolio-3"
								d="M0,0H562.969a242.805,242.805,0,0,1,224.12,149.469l233.188,559.88"
								transform="translate(1020.277 709.349) rotate(180)"
							/>
						</g>
						<g transform="translate(1664.339 777.599) rotate(180)">
							<g
								className="q-portfolio-3"
								transform="translate(-290.83 -302)">
								<path
									className="d-portfolio-3"
									d="M366.693,247.2H0V0H562.17L490.111,167.764c-20.651,48.078-69.37,79.435-123.417,79.435"
									transform="translate(0 -123.599)"
								/>
							</g>
							<g
								className="r-portfolio-3"
								transform="translate(1664.339 777.599) rotate(180)">
								<path
									className="c-portfolio-3"
									d="M366.693,247.2H0V0H562.17L490.111,167.764c-20.651,48.078-69.37,79.435-123.417,79.435"
									transform="translate(0 -123.599)"
								/>
							</g>
						</g>
					</g>
					<ellipse
						className="s-portfolio-3"
						cx={132.5}
						cy={11}
						rx={132.5}
						ry={11}
						transform="translate(827.5 931)"
					/>
					<ellipse
						className="s-portfolio-3"
						cx={92}
						cy={8.5}
						rx={92}
						ry={8.5}
						transform="translate(559 836)"
					/>
					<ellipse
						className="s-portfolio-3"
						cx={92}
						cy={8.5}
						rx={92}
						ry={8.5}
						transform="translate(1184.992 836)"
					/>
					<g transform="translate(281 297)">
						<g
							className="t-portfolio-3"
							transform="translate(122.488 0)">
							<g transform="translate(111.438 55.847)">
								{items.map(
									(
										item: CarouselPortfolio,
										index: number
									) => (
										<React.Fragment key={index}>
											{index === 0 && (
												<LeftCard {...item} />
											)}
											{index === 1 && (
												<a href={item.to}>
													<CenterCard
														{...item}
														selected={over}
														onOver={() =>
															setOver(true)
														}
														onLeave={() =>
															setOver(false)
														}
													/>
												</a>
											)}
											{index === 2 && (
												<g
													className="u-portfolio-3"
													transform="translate(636.014)">
													<g transform="translate(0)">
														<g
															className="af-portfolio-3"
															transform="matrix(1, 0, 0, 1, -1150.94, -352.85)">
															<rect
																className="e-portfolio-3"
																width={256.573}
																height={474.955}
																rx={21}
																transform="translate(1150.94 352.85)"
															/>
														</g>
														<path
															className="x-portfolio-3"
															d="M0,0V149.62H0q0,.055,0,.11V258.48a27.943,27.943,0,0,0,27.943,27.943H228.829a27.943,27.943,0,0,0,27.943-27.943V149.73l-.05-.11h.05L223.858,48.078C214.426,18.979,192.173,0,167.487,0Z"
															transform="translate(256.771 286.423) rotate(180)"
														/>
													</g>
													<text
														className="w-portfolio-3"
														transform={`translate(${item.x_selected} 379.825)`}>
														<tspan x={item.x} y={0}>
															{item.title}
														</tspan>
													</text>
												</g>
											)}
										</React.Fragment>
									)
								)}
							</g>
						</g>
						<g
							transform="translate(0 274.895)"
							onClick={() =>
								setPage(page - 1 < 0 ? 7 : page - 1)
							}>
							<g
								className="ad-portfolio-3"
								transform="matrix(1, 0, 0, 1, -281, -571.9)">
								<path
									className="aa-portfolio-3"
									d="M0,0H84.3a105.483,105.483,0,0,1,98.2,66.963l9.451,24.094H111.11A111.021,111.021,0,0,1,7.206,19.146Z"
									transform="translate(281 571.9)"
								/>
							</g>
							<path
								className="e-portfolio-3"
								d="M21,0,42,36H0Z"
								transform="translate(78 66.499) rotate(-90)"
							/>
						</g>
						<g
							transform="translate(1198.047 274.895)"
							onClick={() =>
								setPage(page + 1 > 8 ? 0 : page + 1)
							}>
							<g
								className="ac-portfolio-3"
								transform="matrix(1, 0, 0, 1, -1479.05, -571.9)">
								<path
									className="aa-portfolio-3"
									d="M191.953,0h-84.3a105.483,105.483,0,0,0-98.2,66.963L0,91.057H80.843a111.021,111.021,0,0,0,103.9-71.911Z"
									transform="translate(1479.05 571.9)"
								/>
							</g>
							<path
								className="e-portfolio-3"
								d="M21,0,42,36H0Z"
								transform="translate(113.953 24.499) rotate(90)"
							/>
						</g>
					</g>
					<text
						className="ab-portfolio-3"
						transform="translate(699 116)">
						<tspan x={42.715} y={66}>
							{'PORTAFOLIO '}
						</tspan>
					</text>
					<Elipses />
				</svg>
			)}
		</div>
	)
}

export default Portafolio
