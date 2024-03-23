import React from 'react'
import useGeneral from 'hooks/general.hook'
import NeuroImage from './components/NeuroImage'

const WoundCare: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()

	const [showModal, setShowModal] = React.useState(false)

	return (
		<React.Fragment>
			{width > 768 ? (
				<React.Fragment>
					{showModal ? (
						<NeuroImage
							height={height}
							onClose={() => setShowModal(false)}></NeuroImage>
					) : (
						<svg
							width="100%"
							height={height}
							viewBox="0 0 1920 1080"
							preserveAspectRatio="none">
							<defs>
								<style>
									{
										'g,rect{stroke: none;}.a-products-neuro-desktop,.b-products-neuro-desktop{stroke:#707070;}.a-products-neuro-desktop{fill:url(#a-products-neuro-desktop);}.b-products-neuro-desktop,.g-products-neuro-desktop{opacity:0.7;}.b-products-neuro-desktop{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-products-neuro-desktop);}.c-products-neuro-desktop,.d-products-neuro-desktop,.f-products-neuro-desktop,.i-products-neuro-desktop,.j-products-neuro-desktop{fill:#fff;}.c-products-neuro-desktop{font-size:55px;}.c-products-neuro-desktop,.f-products-neuro-desktop{font-family:"Kiona-Bold";font-weight:700;}.d-products-neuro-desktop,.j-products-neuro-desktop{font-size:24px;}.d-products-neuro-desktop{font-family:Silka-Regular, Silka;}.e-products-neuro-desktop{fill:rgba(67,67,67,0.09);}.f-products-neuro-desktop{font-size:42px;}.h-products-neuro-desktop{fill:rgba(255,255,255,0.5);}.j-products-neuro-desktop{font-family:Silka-SemiBold, Silka;font-weight:600;}.k-products-neuro-desktop{stroke:none;}.l-products-neuro-desktop{fill:none;}.m-products-neuro-desktop{filter:url(#c-products-neuro-desktop);}'
									}
								</style>
								<pattern
									id="a-products-neuro-desktop"
									width={1}
									height={1}
									viewBox="477.985 121.633 1440.953 731.734">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={1999.59}
										height={975}
										xlinkHref="/images/products/background-neuro.jpg"
									/>
								</pattern>
								<linearGradient
									id="b-products-neuro-desktop"
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
									id="c-products-neuro-desktop"
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
								<g className="a-products-neuro-desktop">
									<rect
										className="k-products-neuro-desktop"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-products-neuro-desktop"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<g className="b-products-neuro-desktop">
									<rect
										className="k-products-neuro-desktop"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-products-neuro-desktop"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<text
									className="c-products-neuro-desktop"
									transform="translate(506 833)">
									<tspan x={-366.438} y={0}>
										{'NEUROINTERVENCIONISMO '}
									</tspan>
								</text>
								<text
									className="d-products-neuro-desktop"
									transform="translate(968 754)">
									<tspan x={0} y={23}>
										{
											'El ACV - Accidente Cerebro Vascular es algo que le puede ocurrir a '
										}
									</tspan>
									<tspan x={0} y={51}>
										{
											'1 de cada 4 personas y menos del 5% de las personas que lo sufren '
										}
									</tspan>
									<tspan x={0} y={79}>
										{'son atendidas a tiempo.'}
									</tspan>
								</text>
								<g
									className="m-products-neuro-desktop"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<rect
										className="e-products-neuro-desktop"
										width={1920}
										height={74}
										transform="translate(9 6)"
									/>
								</g>
								<text
									className="f-products-neuro-desktop"
									transform="translate(960 54)">
									<tspan x={-251.412} y={0}>
										{'SOLUCIONES EN SALUD'}
									</tspan>
								</text>
								<g
									onClick={() => setShowModal(true)}
									className="g-products-neuro-desktop"
									transform="translate(857 987.975)">
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
											className="i-products-neuro-desktop"
											d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
											transform="translate(61.725 24.005) rotate(180)"
										/>
										<text
											className="j-products-neuro-desktop"
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

export default WoundCare
