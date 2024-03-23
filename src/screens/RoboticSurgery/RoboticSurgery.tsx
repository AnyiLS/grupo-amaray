import React from 'react'
import useGeneral from 'hooks/general.hook'
import Robotica from './Components/Robotica'

const RoboticSurgery: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()
	const [showModal, setShowModal] = React.useState(false)

	return (
		<React.Fragment>
			{width > 768 ? (
				<React.Fragment>
					{showModal ? (
						<Robotica
							height={height}
							onClose={() => setShowModal(false)}></Robotica>
					) : (
						<svg
							width="100%"
							height={height}
							viewBox="0 0 1920 1080"
							preserveAspectRatio="none">
							<defs>
								<style>
									{
										'.a-robotic-surgery,.b-robotic-surgery{stroke:#707070;}.a-robotic-surgery{fill:url(#a-robotic-surgery);}.b-robotic-surgery{opacity:0.91;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-robotic-surgery);}.c-robotic-surgery,.d-robotic-surgery,.f-robotic-surgery,.i-robotic-surgery,.j-robotic-surgery{fill:#fff;}.c-robotic-surgery{font-size:55px;}.c-robotic-surgery,.f-robotic-surgery{font-family:"Kiona-Bold";font-weight:700;}.d-robotic-surgery,.j-robotic-surgery{font-size:24px;}.d-robotic-surgery{font-family:Silka-Regular, Silka;}.e-robotic-surgery{fill:rgba(67,67,67,0.09);}.f-robotic-surgery{font-size:42px;}.g-robotic-surgery{opacity:1;}.h-robotic-surgery{fill:rgba(255,255,255,0.5);}.j-robotic-surgery{font-family:Silka-SemiBold, Silka;font-weight:600;}.k-robotic-surgery{stroke:none;}.l-robotic-surgery{fill:none;}.m-robotic-surgery{filter:url(#c-robotic-surgery);}'
									}
								</style>
								<pattern
									id="a-robotic-surgery"
									preserveAspectRatio="xMidYMid slice"
									width="100%"
									height="100%"
									viewBox="0 0 1920 1280">
									<image
										width={1920}
										height={1280}
										xlinkHref="/images/products/background-robotic-surgery.jpg"
									/>
								</pattern>
								<linearGradient
									id="b-robotic-surgery"
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
									id="c-robotic-surgery"
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
								<g className="a-robotic-surgery">
									<rect
										className="k-robotic-surgery"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-robotic-surgery"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<g className="b-robotic-surgery">
									<rect
										className="k-robotic-surgery"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-robotic-surgery"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<text
									className="c-robotic-surgery"
									transform="translate(403 833)">
									<tspan x={-263.34} y={0}>
										{'CIRUG\xCDA ROB\xD3TICA '}
									</tspan>
								</text>
								<text
									className="d-robotic-surgery"
									transform="translate(968 421)">
									<tspan x={0} y={23}>
										{
											'Una extensi\xF3n natural de los ojos, a trav\xE9s de una visi\xF3n en 3D y '
										}
									</tspan>
									<tspan x={0} y={51}>
										{
											'magnificaci\xF3n hasta 10 veces. Movimientos intuitivos con mayor '
										}
									</tspan>
									<tspan x={0} y={79}>
										{
											'rango de movimiento que exceden las capacidades de la mano '
										}
									</tspan>
									<tspan x={0} y={107}>
										{'humana. '}
									</tspan>
									<tspan x={0} y={135} />
									<tspan x={0} y={163}>
										{
											'Somos el comercializador del sistema quir\xFArgico da Vinci, con una '
										}
									</tspan>
									<tspan x={0} y={191}>
										{
											'experiencia de m\xE1s de 3.000 cirug\xEDas en nuestro pa\xEDs, una '
										}
									</tspan>
									<tspan x={0} y={219}>
										{
											'sofisticada plataforma rob\xF3tica que permite potenciar las '
										}
									</tspan>
									<tspan x={0} y={247}>
										{
											'capacidades del cirujano y ofrecer una opci\xF3n m\xEDnimamente '
										}
									</tspan>
									<tspan x={0} y={275} xmlSpace="preserve">
										{
											'invasiva en procedimientos de cirug\xEDa compleja.  '
										}
									</tspan>
									<tspan x={0} y={303} />
									<tspan x={0} y={331}>
										{
											'El sistema da Vinci da tratamiento a cuatro de los cinco tipos de '
										}
									</tspan>
									<tspan x={0} y={359}>
										{
											'c\xE1ncer m\xE1s frecuente en Colombia: c\xE1ncer de pr\xF3stata, c\xE1ncer de '
										}
									</tspan>
									<tspan x={0} y={387}>
										{
											'est\xF3mago, c\xE1ncer de pulm\xF3n, c\xE1ncer colorrectal y muchas m\xE1s '
										}
									</tspan>
									<tspan x={0} y={415}>
										{'patolog\xEDas.'}
									</tspan>
								</text>
								<g
									className="m-robotic-surgery"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<rect
										className="e-robotic-surgery"
										width={1920}
										height={74}
										transform="translate(9 6)"
									/>
								</g>
								<text
									className="f-robotic-surgery"
									transform="translate(960 54)">
									<tspan x={-125.412} y={0}>
										{'SOLUCIONES EN SALUD'}
									</tspan>
								</text>
								<g
									onClick={() => setShowModal(true)}
									className="g-robotic-surgery"
									transform="translate(810 980.975)">
									<defs>
										<style>
											{
												'.a-proboctica{fill:rgba(255,255,255,0.5);}.b-proboctica{fill:#fff;font-size:28px;font-family:"Kiona-Bold";font-weight:700;}.c-proboctica{filter:url(#a-proboctica);}'
											}
										</style>
										<filter
											id="a-proboctica"
											x={0}
											y={0}
											width={299.362}
											height={72.775}
											filterUnits="userSpaceOnUse">
											<feOffset
												dy={3}
											/>
											<feGaussianBlur
												stdDeviation={3}
												result="b-proboctica"
											/>
											<feFlood floodOpacity={0.4} />
											<feComposite
												operator="in"
												in2="b-proboctica"
											/>
											<feComposite in="SourceGraphic" />
										</filter>
									</defs>
									<g transform="translate(-3778.748 -5819)">
										<g
											className="c-proboctica"
											transform="matrix(1, 0, 0, 1, 3778.75, 5819)">
											<path
												className="a-proboctica"
												d="M281.362,0H57.711C34.449,0,13.561,15.983,5.067,40.281L0,54.775H221.8c24.783,0,46.972-17.232,55.7-43.257Z"
												transform="translate(9 6)"
											/>
										</g>
										<text
											className="b-proboctica"
											transform="translate(3835.929 5863.388)">
											<tspan x={0} y={0}>
												{'Conoce M\xE1s'}
											</tspan>
										</text>
									</g>
								</g>
								<a href="/productos">
								<path
									className="i-robotic-surgery"
									d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
									transform="translate(201.725 50.773) rotate(180)"
								/>
								<text
									className="j-robotic-surgery"
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

export default RoboticSurgery
