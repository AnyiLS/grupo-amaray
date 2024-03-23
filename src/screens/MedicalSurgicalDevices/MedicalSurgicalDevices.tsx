import React from 'react'
import useGeneral from 'hooks/general.hook'
import Medical from './Components/Medical'

const MedicalSurgicalDevices: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()
	const [ShowModal, setShowModal] = React.useState(false)

	return (
		<React.Fragment>
			{width > 768 ? (
				<React.Fragment>
					{ShowModal ? (
						<Medical
							height={height}
							onClose={() => setShowModal(false)}></Medical>
					) : (
						<svg
							width="100%"
							height={height}
							viewBox="0 0 1920 1080"
							preserveAspectRatio="none">
							<defs>
								<style>
									{
										'.a-medical-survery,.b-medical-survery{stroke:#707070;}.a-medical-survery{fill:url(#a-medical-survery);}.b-medical-survery{opacity:0.91;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-medical-survery);}.c-medical-survery,.d-medical-survery,.f-medical-survery,.i-medical-survery,.j-medical-survery{fill:#fff;}.c-medical-survery{font-size:55px;}.c-medical-survery,.f-medical-survery{font-family:"Kiona-Bold";font-weight:700;}.d-medical-survery,.j-medical-survery{font-size:24px;}.d-medical-survery{font-family:Silka-Regular, Silka;}.e-medical-survery{fill:rgba(67,67,67,0.09);}.f-medical-survery{font-size:42px;}.g-medical-survery{opacity:1;}.h-medical-survery{fill:rgba(255,255,255,0.5);}.j-medical-survery{font-family:Silka-SemiBold, Silka;font-weight:600;}.k-medical-survery{stroke:none;}.l-medical-survery{fill:none;}.m-medical-survery{filter:url(#c-medical-survery);}'
									}
								</style>
								<pattern
									id="a-medical-survery"
									preserveAspectRatio="xMidYMid slice"
									width="100%"
									height="100%"
									viewBox="238.241 500.763 1426.301 724.293">
									<image
										  width={1920}
										  height={1279.875}
										xlinkHref="/images/products/background-medical.jpg"
									/>
								</pattern>
								<linearGradient
									id="b-medical-survery"
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
									id="c-medical-survery"
									x={0}
									y={0}
									width={1938}
									height={92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="d-medical-survery"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite
										operator="in"
										in2="d-medical-survery"
									/>
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<g className="a-medical-survery">
									<rect
										className="k-medical-survery"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-medical-survery"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<g className="b-medical-survery">
									<rect
										className="k-medical-survery"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-medical-survery"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<text
									className="c-medical-survery"
									transform="translate(140 776)">
									<tspan x={0} y={0}>
										{'Dispositivos'}
									</tspan>
									<tspan x={0} y={57}>
										{'m\xE9dico-quir\xFArgicos'}
									</tspan>
								</text>
								<text
									className="d-medical-survery"
									transform="translate(968 757)">
									<tspan x={0} y={23}>
										{
											'Somos un aliado estrat\xE9gico para los profesionales que realizan '
										}
									</tspan>
									<tspan x={0} y={51}>
										{
											'procedimientos quir\xFArgicos con equipos y dispositivos m\xE9dicos que '
										}
									</tspan>
									<tspan x={0} y={79}>
										{
											'mejoran los resultados del paciente en una intervenci\xF3n.'
										}
									</tspan>
								</text>
								<g
									className="m-medical-survery"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<rect
										className="e-medical-survery"
										width={1920}
										height={74}
										transform="translate(9 6)"
									/>
								</g>
								<text
									className="f-medical-survery"
									transform="translate(960 54)">
									<tspan x={-125.412} y={0}>
										{'SOLUCIONES EN SALUD'}
									</tspan>
								</text>
								<g
									onClick={() => setShowModal(true)}
									className="g-medical-survery"
									transform="translate(807 1007.975)">
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
									<g transform="translate(-3778.748 -5832)">
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
										className="i-medical-survery"
										d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
										transform="translate(201.725 50.773) rotate(180)"
									/>
									<text
										className="j-medical-survery"
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

export default MedicalSurgicalDevices
