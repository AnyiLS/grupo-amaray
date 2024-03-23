import React from 'react'
import useGeneral from 'hooks/general.hook'
import Medicinesone from './Components/Medicinesone'

const Medicines: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()
	const [ShowModal, setShowModal] = React.useState(false)

	return (
		<React.Fragment>
			{width > 768 ? (
				<React.Fragment>
					{ShowModal ? (
						<Medicinesone
							height={height}
							onClose={() => setShowModal(false)}></Medicinesone>
					) : (
						<svg
							width="100%"
							height={height}
							viewBox="0 0 1920 1080"
							preserveAspectRatio="none">
							<defs>
								<style>
									{
										'.a-medicines,.b-medicines{stroke:#707070;}.a-medicines{fill:url(#a-medicines);}.b-medicines{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-medicines);}.c-medicines,.d-medicines,.f-medicines,.i-medicines,.j-medicines{fill:#fff;}.c-medicines{font-size:55px;}.c-medicines,.f-medicines{font-family:"Kiona-Bold";font-weight:700;}.d-medicines,.j-medicines{font-size:24px;}.d{font-family:Silka-Regular, Silka;}.e-medicines{fill:rgba(67,67,67,0.09);}.f-medicines{font-size:42px;}.g-medicines{opacity:1;}.h-medicines{fill:rgba(255,255,255,0.5);}.j-medicines{font-family:Silka-SemiBold, Silka;font-weight:600;}.k-medicines{stroke:none;}.l-medicines{fill:none;}.m-medicines{filter:url(#c-medicines);}'
									}
								</style>
								<pattern
									id="a-medicines"
									width={1}
									height={1}
									viewBox="0 83.169 1920 975">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={1920}
										height={1280}
										xlinkHref="/images/products/background-medicines.jpg"
									/>
								</pattern>
								<linearGradient
									id="b-medicines"
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
									id="c-medicines"
									x={0}
									y={0}
									width={1938}
									height={92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="d"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite operator="in" in2="d" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<g className="a-medicines">
									<rect
										className="k-medicines"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-medicines"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<g className="b-medicines">
									<rect
										className="k-medicines"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-medicines"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<text
									className="c-medicines"
									transform="translate(363 842)">
									<tspan x={-223.273} y={0}>
										{'MEDICAMENTOS '}
									</tspan>
								</text>
								<text
									className="d-medicines"
									transform="translate(968 756)">
									<tspan x={0} y={23}>
										{
											'Con medicamentos de la m\xE1s alta tecnolog\xEDa para el cuidado de la '
										}
									</tspan>
									<tspan x={0} y={51}>
										{
											'salud de los pacientes, ya sea adultos, ni\xF1os o neonatos, '
										}
									</tspan>
									<tspan x={0} y={79}>
										{
											'ofrecemos mayor eficacia y tolerabilidad al paciente en productos.'
										}
									</tspan>
								</text>
								<g
									className="m-medicines"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<rect
										className="e-medicines"
										width={1920}
										height={74}
										transform="translate(9 6)"
									/>
								</g>
								<text
									className="f-medicines"
									transform="translate(960 54)">
									<tspan x={-125.412} y={0}>
										{'SOLUCIONES EN SALUD'}
									</tspan>
								</text>
								<g
									onClick={() => setShowModal(true)}
									className="g-medicines"
									transform="translate(810 990.975)">
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
										className="i-medicines"
										d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
										transform="translate(201.725 50.773) rotate(180)"
									/>
									<text
										className="j-medicines"
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

export default Medicines
