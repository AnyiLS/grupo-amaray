import React from 'react'
import useGeneral from 'hooks/general.hook'
import SelecImage from './components/SelecImage'

const InstrumentalStyrilation: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()

	const [showModal, setShowModal] = React.useState(false)

	return (
		<React.Fragment>
			{width > 768 ? (
				<React.Fragment>
					{showModal ? (
						<SelecImage
							height={height}
							onClose={() => setShowModal(false)}></SelecImage>
					) : (
						<svg
							width="100%"
							height={height}
							viewBox="0 0 1920 1080"
							
							preserveAspectRatio="none">
							<defs>
								<style>
									{
										'.a-products-instrumental-desktop,.e-products-instrumental-desktop,.f-products-instrumental-desktop,.h-products-instrumental-desktop,.k-products-instrumental-desktop{fill:#fff;}.b-products-instrumental-desktop{fill:none;}.c-products-instrumental-desktop,.d-products-instrumental-desktop{stroke:#707070;}.c-products-instrumental-desktop{fill:url(#a-products-instrumental-desktop);}.d-products-instrumental-desktop,.i-products-instrumental-desktop{opacity:0.7;}.d-products-instrumental-desktop{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-products-instrumental-desktop);}.e-products-instrumental-desktop{font-size:55px;}.e-products-instrumental-desktop,.h-products-instrumental-desktop{font-family:"Kiona-Bold";font-weight:700;}.f-products-instrumental-desktop,.k-products-instrumental-desktop{font-size:24px;}.f-products-instrumental-desktop{font-family:Silka-Regular, Silka;}.g-products-instrumental-desktop{fill:rgba(67,67,67,0.09);}.h-products-instrumental-desktop{font-size:42px;}.j-products-instrumental-desktop{fill:rgba(255,255,255,0.5);}.k-products-instrumental-desktop{font-family:Silka-SemiBold, Silka;font-weight:600;}.l-products-instrumental-desktop{stroke:none;}.m-products-instrumental-desktop{filter:url(#c-products-instrumental-desktop);}'
									}
								</style>
								<pattern
									id="a-products-instrumental-desktop"
									width={1}
									height={1}
									viewBox="0 365.361 1557.522 790.929">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={1920}
										height={1280}
										xlinkHref="/images/products/background-instrumental.jpg"
									/>
								</pattern>
								<linearGradient
									id="b-products-instrumental-desktop"
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
									id="c-products-instrumental-desktop"
									x={0}
									y={0}
									width={1938}
									height={92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="d-products-instrumental-desktop"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite
										operator="in"
										in2="d-products-instrumental-desktop"
									/>
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<g className="c-products-instrumental-desktop">
									<rect
										className="l-products-instrumental-desktop"
										width={1920}
										height={1080}
									/>
									<rect
										className="b-products-instrumental-desktop"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<g className="d-products-instrumental-desktop">
									<rect
										className="l-products-instrumental-desktop"
										width={1920}
										height={1080}
									/>
									<rect
										className="b-products-instrumental-desktop"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<text
									className="e-products-instrumental-desktop"
									transform="translate(140 847)">
									<tspan x={0} y={0}>
										{'INSTRUMENTAL Y'}
									</tspan>
									<tspan x={0} y={57}>
										{'ESTERILIZACI\xD3N '}
									</tspan>
								</text>
								<text
									className="f-products-instrumental-desktop"
									transform="translate(968 827)">
									<tspan x={0} y={23}>
										{
											'Con un completo portafolio de instrumentos para las diferentes '
										}
									</tspan>
									<tspan x={0} y={51}>
										{
											'especialidades quir\xFArgicas, y la interacci\xF3n entre los productos y '
										}
									</tspan>
									<tspan x={0} y={79}>
										{
											'los procesos de lavado y esterilizaci\xF3n.'
										}
									</tspan>
								</text>
								<g
									className="m-products-instrumental-desktop"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<rect
										className="g-products-instrumental-desktop"
										width={1920}
										height={74}
										transform="translate(9 6)"
									/>
								</g>
								<text
									className="h-products-instrumental-desktop"
									transform="translate(960 54)">
									<tspan x={-165.412} y={0}>
										{'SOLUCIONES EN SALUD'}
									</tspan>
								</text>
								<g
									onClick={() => setShowModal(true)}
									className="i-products-instrumental-desktop"
									transform="translate(847 997.975)">
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
									<g transform="translate(140 26.768)">
										<path
											className="a-products-instrumental-desktop"
											d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
											transform="translate(61.725 24.005) rotate(180)"
										/>
										<text
											className="k-products-instrumental-desktop"
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

export default InstrumentalStyrilation
