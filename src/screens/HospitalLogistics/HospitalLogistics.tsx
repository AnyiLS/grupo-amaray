import React from 'react'
import useGeneral from 'hooks/general.hook'
import HospitalLogic from './Components/HospitalLogic'

const HospitalLogistics: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()
	const [showModal, setShowModal] = React.useState(false)

	return (
		<React.Fragment>
			{width > 768 ? (
				<React.Fragment>
					{showModal ? (
						<HospitalLogic
							height={height}
							onClose={() => setShowModal(false)}></HospitalLogic>
					) : (
						<svg
							width="100%"
							height={height}
							viewBox="0 0 1920 1080"
							preserveAspectRatio="none">
							<defs>
								<style>
									{
										'.a-products-hl-desktop,.b-products-hl-desktop{stroke:#707070;}.a-products-hl-desktop{fill:url(#a-products-hl-desktop);}.b-products-hl-desktop{opacity:0.91;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-products-hl-desktop);}.c-products-hl-desktop,.d-products-hl-desktop,.f-products-hl-desktop,.i-products-hl-desktop,.j-products-hl-desktop{fill:#fff;}.c-products-hl-desktop{font-size:55px;}.c-products-hl-desktop,.f-products-hl-desktop{font-family:"Kiona-Bold";font-weight:700;}.d-products-hl-desktop,.j-products-hl-desktop{font-size:24px;}.d-products-hl-desktop{font-family:Silka-Regular, Silka;}.e-products-hl-desktop{fill:rgba(67,67,67,0.09);}.f-products-hl-desktop{font-size:42px;}.g-products-hl-desktop{opacity:1;}.h-products-hl-desktop{fill:rgba(255,255,255,0.5);}.j-products-hl-desktop{font-family:Silka-SemiBold, Silka;font-weight:600;}.k-products-hl-desktop{stroke:none;}.l-products-hl-desktop{fill:none;}.m-products-hl-desktop{filter:url(#c-products-hl-desktop);}'
									}
								</style>
								<pattern
									id="a-products-hl-desktop"
									preserveAspectRatio="xMidYMid slice"
									width="100%"
									height="100%"
									viewBox="0 0 4032 3024">
									<image
										width={4032}
										height={3024}
										xlinkHref="/images/products/background-hl.jpg"
									/>
								</pattern>
								<linearGradient
									id="b-products-hl-desktop"
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
									id="c-products-hl-desktop"
									x={0}
									y={0}
									width={1938}
									height={92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="d-products-hl-desktop"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite
										operator="in"
										in2="d-products-hl-desktop"
									/>
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<g className="a-products-hl-desktop">
									<rect
										className="k-products-hl-desktop"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-products-hl-desktop"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<g className="b-products-hl-desktop">
									<rect
										className="k-products-hl-desktop"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-products-hl-desktop"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<text
									className="c-products-hl-desktop"
									transform="translate(140 776)">
									<tspan x={0} y={0}>
										{'LOG\xCDSTICA'}
									</tspan>
									<tspan x={0} y={57}>
										{'HOSPITALARIA'}
									</tspan>
								</text>
								<text
									className="d-products-hl-desktop"
									transform="translate(968 700)">
									<tspan x={0} y={23}>
										{
											'Nuestro portafolio de soluciones tecnol\xF3gicas est\xE1 enfocado en la '
										}
									</tspan>
									<tspan x={0} y={51}>
										{
											'automatizaci\xF3n de procesos intrahospitalarios para el '
										}
									</tspan>
									<tspan x={0} y={79}>
										{
											'almacenamiento y la dispensaci\xF3n de medicamentos y material '
										}
									</tspan>
									<tspan x={0} y={107}>
										{
											'm\xE9dico-quir\xFArgico, aumentando la seguridad del paciente y la '
										}
									</tspan>
									<tspan x={0} y={135}>
										{'eficiencia en los procesos. '}
									</tspan>
								</text>
								<g
									className="m-products-hl-desktop"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<rect
										className="e-products-hl-desktop"
										width={1920}
										height={74}
										transform="translate(9 6)"
									/>
								</g>
								<text
									className="f-products-hl-desktop"
									transform="translate(960 54)">
									<tspan x={-125.412} y={0}>
										{'SOLUCIONES EN SALUD'}
									</tspan>
								</text>
								<g
									onClick={() => setShowModal(true)}
									className="g-products-hl-desktop"
									transform="translate(870 997.975)">
									<defs>
										<style>
											{
												'.a-boton-pequena{fill:rgba(255,255,255,0.5);}.b-boton-pequena{fill:#fff;font-size:28px;font-family:"Kiona-Bold";font-weight:700;}.c-boton-pequena{filter:url(#a-boton-pequena);}'
											}
										</style>
										<filter
											id="a-boton-pequena"
											x={0}
											y={0}
											width={299.362}
											height={72.775}
											filterUnits="userSpaceOnUse">
											<feOffset dy={3} />
											<feGaussianBlur
												stdDeviation={3}
												result="b-boton-pequena"
											/>
											<feFlood floodOpacity={0.4} />
											<feComposite
												operator="in"
												in2="b-boton-pequena"
											/>
											<feComposite in="SourceGraphic" />
										</filter>
									</defs>
									<g transform="translate(-3778.748 -5819)">
										<g
											className="c-boton-pequena"
											transform="matrix(1, 0, 0, 1, 3778.75, 5819)">
											<path
												className="a-boton-pequena"
												d="M281.362,0H57.711C34.449,0,13.561,15.983,5.067,40.281L0,54.775H221.8c24.783,0,46.972-17.232,55.7-43.257Z"
												transform="translate(9 6)"
											/>
										</g>
										<text
											className="b-boton-pequena"
											transform="translate(3835.929 5863.388)">
											<tspan x={0} y={0}>
												{'Conoce M\xE1s'}
											</tspan>
										</text>
									</g>
								</g>
								<a href="/productos">
									<path
										className="i-products-hl-desktop"
										d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
										transform="translate(201.725 50.773) rotate(180)"
									/>
									<text
										className="j-products-hl-desktop"
										transform="translate(232.852 49.768)">
										<tspan x={-71.52} y={0}>
											{'Volver'}
										</tspan>
									</text>
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

export default HospitalLogistics
