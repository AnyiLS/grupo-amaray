import React from 'react'
import useGeneral from 'hooks/general.hook'
import Genetica from './Components/Genetica'
import Gemonica from './Components/Gemonica'

const GenomicsGenetics: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()

	const [selected, setSelected] = React.useState(0)

	return (
		<React.Fragment>
			{width > 768 ? (
				<React.Fragment>
					{selected === 0 ? (
						<svg
							width="100%"
							height={height}
							viewBox="0 0 1920 1080"
							preserveAspectRatio="none">
							<defs>
								<style>
									{
										'g,rect{stroke: none;}.a-products-gg-desktop,.b-products-gg-desktop{stroke:#707070;}.a-products-gg-desktop{fill:url(#a-products-gg-desktop);}.b-products-gg-desktop{opacity:0.91;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-products-gg-desktop);}.c-products-gg-desktop,.d-products-gg-desktop,.f-products-gg-desktop,.i-products-gg-desktop,.j-products-gg-desktop{fill:#fff;}.c-products-gg-desktop{font-size:55px;}.c-products-gg-desktop,.f-products-gg-desktop{font-family:"Kiona-Bold";font-weight:700;}.d-products-gg-desktop,.j-products-gg-desktop{font-size:24px;}.d-products-gg-desktop{font-family:Silka-Regular, Silka;}.e-products-gg-desktop{fill:rgba(67,67,67,0.09);}.f-products-gg-desktop{font-size:42px;}.g-products-gg-desktop{opacity:1;}.h-products-gg-desktop{fill:rgba(255,255,255,0.5);}.j-products-gg-desktop{font-family:Silka-SemiBold, Silka;font-weight:600;}.k-products-gg-desktop{stroke:none;}.l-products-gg-desktop{fill:none;}.m-products-gg-desktop{filter:url(#c-products-gg-desktop);}'
									}
								</style>
								<pattern
									id="a-products-gg-desktop"
									width={1}
									height={1}
									viewBox="0 0 1920 1080">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={1920}
										height={1080}
										xlinkHref="/images/clave.jpg"
									/>
								</pattern>
								<linearGradient
									id="b-products-gg-desktop"
									x1={0.5}
									x2={0.5}
									y2={1}
									gradientUnits="objectBoundingBox">
									<stop
										offset={0}
										stopColor="#001f5f"
										stopOpacity={0}
									/>
									<stop
										offset={0.41}
										stopColor="#001f5f"
										stopOpacity={0.655}
									/>
									<stop offset={1} stopColor="#001f5f" />
								</linearGradient>
								<filter
									id="c-products-gg-desktop"
									x={0}
									y={0}
									width={1938}
									height={92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="d-products-gg-desktop"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite
										operator="in"
										in2="d-products-gg-desktop"
									/>
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<g className="a-products-gg-desktop">
									<rect
										className="k-products-gg-desktop"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-products-gg-desktop"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<g className="b-products-gg-desktop">
									<rect
										className="k-products-gg-desktop"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-products-gg-desktop"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<text
									className="c-products-gg-desktop"
									transform="translate(646 510)">
									<tspan x={0} y={0}>
										{'Gen\xF3mica Y Gen\xE9ticA'}
									</tspan>
								</text>
								<text
									className="d-products-gg-desktop"
									transform="translate(1026 738)">
									<tspan x={0} y={23}>
										{
											'La gen\xE9tica es el estudio de rasgos y genes heredados que '
										}
									</tspan>
									<tspan x={0} y={51}>
										{
											'pueden predisponer a una persona a una condici\xF3n de salud '
										}
									</tspan>
									<tspan x={0} y={79}>
										{'particular.'}
									</tspan>
								</text>
								<text
									className="d-products-gg-desktop"
									transform="translate(140 738)">
									<tspan x={0} y={23}>
										{
											'La gen\xF3mica analiza la forma en que se comporta un conjunto '
										}
									</tspan>
									<tspan x={0} y={51}>
										{'de genes. '}
									</tspan>
								</text>
								<g
									className="m-products-gg-desktop"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<rect
										className="e-products-gg-desktop"
										width={1920}
										height={74}
										transform="translate(9 6)"
									/>
								</g>
								<text
									className="f-products-gg-desktop"
									transform="translate(960 54)">
									<tspan x={-245.412} y={0}>
										{'SOLUCIONES EN SALUD'}
									</tspan>
								</text>
								<g
									className="g-products-gg-desktop"
									transform="translate(349.025 848)"
									onClick={() => setSelected(2)}>
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
								<g
									className="g-products-gg-desktop"
									transform="translate(1257.976 844)"
									onClick={() => setSelected(1)}>
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
								<text
									className="f-products-gg-desktop"
									transform="translate(1025 718)">
									<tspan x={0} y={0}>
										{'Gen\xE9ticA'}
									</tspan>
								</text>
								<text
									className="f-products-gg-desktop"
									transform="translate(140 718)">
									<tspan x={0} y={0}>
										{'Gen\xF3mica'}
									</tspan>
								</text>
								<a href="/productos">
									<path
										className="i-products-gg-desktop"
										d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
										transform="translate(201.725 50.773) rotate(180)"
									/>
									<text
										className="j-products-gg-desktop"
										transform="translate(232.852 49.768)">
										<tspan x={-71.52} y={0}>
											{'Volver'}
										</tspan>
									</text>
								</a>
							</g>
						</svg>
					) : selected === 1 ? (
						<Genetica onChangeClick={() => setSelected(0)}/>
					) : (
						<Gemonica onChangeClick={() => setSelected(0)}/>
					)}
				</React.Fragment>
			) : (
				<React.Fragment></React.Fragment>
			)}
		</React.Fragment>
	)
}

export default GenomicsGenetics
