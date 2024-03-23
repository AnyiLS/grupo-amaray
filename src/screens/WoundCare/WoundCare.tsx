import React from 'react'
import useGeneral from 'hooks/general.hook'
import SelectImage from './components/SelectImage'

const WoundCare: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()
	const [showModal, setShowModal] = React.useState(false)

	return (
		<React.Fragment>
			{width > 768 ? (
				<React.Fragment>
					{
						showModal ? (
							<SelectImage height={height} onClose={() => setShowModal(false)}></SelectImage>
						) : (
							<svg width="100%"
						height={height}
						viewBox="0 0 1920 1080"
						preserveAspectRatio="none">
						<defs>
							<style>
								{
									'.a-products-heridas-desktop,.b-products-heridas-desktop{stroke:#707070;}.a-products-heridas-desktop{fill:url(#a-products-heridas-desktop);}.b-products-heridas-desktop,.g-products-heridas-desktop{opacity:0.7;}.b-products-heridas-desktop{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-products-heridas-desktop);}.c-products-heridas-desktop,.d-products-heridas-desktop,.f-products-heridas-desktop,.i-products-heridas-desktop,.j-products-heridas-desktop{fill:#fff;}.c-products-heridas-desktop{font-size:55px;}.c-products-heridas-desktop,.f-products-heridas-desktop{font-family:"Kiona-Bold";font-weight:700;}.d-products-heridas-desktop,.j-products-heridas-desktop{font-size:24px;}.d-products-heridas-desktop{font-family:Silka-Regular, Silka;}.e-products-heridas-desktop{fill:rgba(67,67,67,0.09);}.f-products-heridas-desktop{font-size:42px;}.h-products-heridas-desktop{fill:rgba(255,255,255,0.5);}.j-products-heridas-desktop{font-family:Silka-SemiBold, Silka;font-weight:600;}.k-products-heridas-desktop{stroke:none;}.l-products-heridas-desktop{fill:none;}.m-products-heridas-desktop{filter:url(#c-products-heridas-desktop);}'
								}
							</style>
							<pattern
								id="a-products-heridas-desktop"
								width={1}
								height={1}
								viewBox="0 0 1920 1080">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={1920}
									height={1080}
									xlinkHref="/images/products/background-heridas.jpg"
								/>
							</pattern>
							<linearGradient
								id="b-products-heridas-desktop"
								x1={0.5}
								x2={0.5}
								y2={1}
								gradientUnits="objectBoundingBox">
								<stop
									offset={0}
									stopColor="#001f5f"
									stopOpacity={0}
								/>
								<stop offset={1} stopColor="#001f5f" />
							</linearGradient>
							<filter
								id="c-products-heridas-desktop"
								x={0}
								y={0}
								width={1938}
								height={92}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="d" />
								<feFlood floodOpacity={0.302} />
								<feComposite operator="in" in2="d" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g>
							<g className="a-products-heridas-desktop">
								<rect className="k-products-heridas-desktop" width={1920} height={1080} />
								<rect
									className="l-products-heridas-desktop"
									x={0.5}
									y={0.5}
									width={1919}
									height={1080}
								/>
							</g>
							<g className="b-products-heridas-desktop">
								<rect className="k-products-heridas-desktop" width={1920} height={1080} />
								<rect
									className="l-products-heridas-desktop"
									x={0.5}
									y={0.5}
									width={1919}
									height={1080}
								/>
							</g>
							<text className="c-products-heridas-desktop" transform="translate(140 870)">
								<tspan x={0} y={0}>
									{'CUIDADO AVANZADO'}
								</tspan>
								<tspan x={0} y={57}>
									{'DE HERIDAS'}
								</tspan>
							</text>
							<text className="d-products-heridas-desktop" transform="translate(968 820)">
								<tspan x={0} y={23}>
									{
										'Ofrecemos una l\xEDnea de ap\xF3sitos avanzados y terapia de presi\xF3n '
									}
								</tspan>
								<tspan x={0} y={51}>
									{
										'negativa para el tratamiento integral de heridas agudas, cr\xF3nicas y '
									}
								</tspan>
								<tspan x={0} y={79}>
									{
										'complejas, como las ocasionadas por pie diab\xE9tico, lesiones por '
									}
								</tspan>
								<tspan x={0} y={107}>
									{
										'presi\xF3n y lesiones de origen vascular.'
									}
								</tspan>
							</text>
							<g
								className="m-products-heridas-desktop"
								transform="matrix(1, 0, 0, 1, -9, -6)">
								<rect
									className="e-products-heridas-desktop"
									width={1920}
									height={74}
									transform="translate(9 6)"
								/>
							</g>
							<text className="f-products-heridas-desktop" transform="translate(960 54)">
								<tspan x={-125.412} y={0}>
									{'SOLUCIONES EN SALUD'}
								</tspan>
							</text>
							<g
								onClick={() => setShowModal(true)}
								className="g-products-heridas-desktop"
								transform="translate(987 1010.975) rotate(90)">
								<circle
									className="h-products-heridas-desktop"
									cx={27}
									cy={27}
									r={27}
									transform="translate(0.025)"
								/>
								<path
									className="i-products-heridas-desktop"
									d="M0,0V21.7L18.792,10.851,9.816,5.668Z"
									transform="translate(33.112 37.851) rotate(180)"
								/>
							</g>
							<a href="/productos">
							<path
								className="i-products-heridas-desktop"
								d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
								transform="translate(201.725 50.773) rotate(180)"
							/>
							<text
								className="j-products-heridas-desktop"
								transform="translate(232.852 49.768)">
								<tspan x={-71.52} y={0}>
									{'Volver'}
								</tspan>
							</text>
							</a>
							
						</g>
					</svg>
						)
					}
				</React.Fragment>
			) : (
				<React.Fragment></React.Fragment>
			)}
		</React.Fragment>
	)
}

export default WoundCare
