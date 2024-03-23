import React from 'react'
import useGeneral from 'hooks/general.hook'
import SelectedImage from './components/SelectedImage'

const Orthopedics: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()

	const [showModal, setShowModal] = React.useState(false)

	return (
		<React.Fragment>
			{width > 768 ? (
				<React.Fragment>
					{showModal ? (
						<SelectedImage
							height={height}
							onClose={() => setShowModal(false)}></SelectedImage>
					) : (
						<svg
							width="100%"
							height={height}
							viewBox="0 0 1920 1080"
							preserveAspectRatio="none">
							<defs>
								<style>
									{
										'.a-products-desktop,.e-products-desktop,.f-products-desktop,.h-products-desktop,.k-products-desktop tspan{fill:#fff;}.b-products-desktop{fill:none;}.c-products-desktop,.d-products-desktop{stroke:#707070;}.c-products-desktop{fill:url(#a-products-desktop);}.d-products-desktop,.i-products-desktop{opacity:0.7;}.d-products-desktop{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-products-desktop);}.e-products-desktop{font-size:55px;}.e-products-desktop,.h-products-desktop{font-family:"Kiona-Bold";font-weight:700;}.f-products-desktop,.k-products-desktop{font-size:24px;}.f-products-desktop{font-family:Silka-Regular, Silka;}.g-products-desktop{fill:rgba(67,67,67,0.09);}.h-products-desktop{font-size:42px;}.j-products-desktop{fill:rgba(255,255,255,0.5);}.k-products-desktop{font-family:Silka-SemiBold, Silka;font-weight:600;}.l-products-desktop{stroke:none;}.m-products-desktop{filter:url(#c-products-desktop);}'
									}
								</style>
								<pattern
									id="a-products-desktop"
									width={1}
									height={1}
									viewBox="185.397 47.431 1734.603 880.853">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={1920}
										height={1080}
										xlinkHref="/images/products/background-desktop.png"
									/>
								</pattern>
								<linearGradient
									id="b-products-desktop"
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
									id="c-products-desktop"
									x={0}
									y={0}
									width={1938}
									height={92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="d-products-desktop"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite
										operator="in"
										in2="d-products-desktop"
									/>
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<g className="c-products-desktop">
									<rect
										className="l-products-desktop"
										width={1920}
										height={1080}
									/>
									<rect
										className="b-products-desktop"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<g className="d-products-desktop">
									<rect
										className="l-products-desktop"
										width={1920}
										height={1080}
									/>
									<rect
										className="b-products-desktop"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<text
									className="e-products-desktop"
									transform="translate(292 883)">
									<tspan x={-151.635} y={0}>
										{'ORTOPEDIA'}
									</tspan>
								</text>
								<text
									className="f-products-desktop"
									transform="translate(968 817)">
									<tspan x={0} y={23}>
										{
											'Somos l\xEDderes con tecnolog\xEDa que aporta a los profesionales de la '
										}
									</tspan>
									<tspan x={0} y={51}>
										{
											'salud y sus pacientes las herramientas en cirug\xEDas que permiten '
										}
									</tspan>
									<tspan x={0} y={79}>
										{
											'alcanzar una calidad de vida m\xE1s activa y satisfactoria.'
										}
									</tspan>
								</text>
								<g
									className="m-products-desktop"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<rect
										className="g-products-desktop"
										width={1920}
										height={74}
										transform="translate(9 6)"
									/>
								</g>
								<text
									className="h-products-desktop"
									transform="translate(960 54)">
									<tspan x={-195.412} y={0}>
										{'SOLUCIONES EN SALUD'}
									</tspan>
								</text>
								<g
									onClick={() => setShowModal(true)}
									className="i-products-desktop"
									transform="translate(810 980.975)">
									<defs>
										<style>
											{
												'.a-ortope{fill:rgba(255,255,255,0.5);}.b-ortope{fill:#fff;font-size:28px;font-family:"Kiona-Bold";font-weight:700;}.c-ortope{filter:url(#a-ortope);}'
											}
										</style>
										<filter
											id="a-ortope"
											x={0}
											y={0}
											width={299.362}
											height={72.775}
											filterUnits="userSpaceOnUse">
											<feOffset dy={3} />
											<feGaussianBlur
												stdDeviation={3}
												result="b-ortope"
											/>
											<feFlood floodOpacity={0.4} />
											<feComposite
												operator="in"
												in2="b-ortope"
											/>
											<feComposite in="SourceGraphic" />
										</filter>
									</defs>
									<g transform="translate(-3778.748 -5819)">
										<g
											className="c-ortope"
											transform="matrix(1, 0, 0, 1, 3778.75, 5819)">
											<path
												className="a-ortope"
												d="M281.362,0H57.711C34.449,0,13.561,15.983,5.067,40.281L0,54.775H221.8c24.783,0,46.972-17.232,55.7-43.257Z"
												transform="translate(9 6)"
											/>
										</g>
										<text
											className="b-ortope"
											transform="translate(3835.929 5863.388)">
											<tspan x={0} y={0}>
												{'Conoce M\xE1s'}
											</tspan>
										</text>
									</g>
								</g>
								<a href="/productos">
									<g transform="translate(140 26.768)">
										<path
											className="a-products-desktop"
											d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
											transform="translate(61.725 24.005) rotate(180)"
										/>
										<text
											className="k-products-desktop"
											transform="translate(92.852 23)">
											<tspan x={-71.52} y={0}>
												{'Volver'}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</svg>
					)}
				</React.Fragment>
			) : (
				<React.Fragment></React.Fragment>
			)}
		</React.Fragment>
	)
}

export default Orthopedics
