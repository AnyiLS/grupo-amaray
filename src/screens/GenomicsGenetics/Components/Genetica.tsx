import React from 'react'

const Genetica: React.FC<{ onChangeClick: () => void }> = ({
	onChangeClick,
}) => {
	return (
		<div>
			<svg viewBox="0 25 1920 975.515">
				<defs>
					<style>
						{
							'.a-genetica,.m-genetica{fill:#fff;}.b-genetica{fill:url(#a-genetica);}.c-genetica{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-genetica);}.d-genetica{clip-path:url(#c-genetica);}.e-genetica,.h-genetica{fill:#e40032;}.f-genetica{fill:#e7002a;}.g-genetica{clip-path:url(#d-genetica);}.h-genetica,.l-genetica,.m-genetica{font-size:24px;}.h-genetica,.m-genetica{font-family:Silka-SemiBold, Silka;font-weight:600;}.i-genetica{opacity:0.7;}.j-genetica,.k-genetica{fill:#001f5f;}.k-genetica{font-size:55px;font-family:"Kiona-Bold";font-weight:700;}.l-genetica{fill:#182856;font-family:Silka-Regular, Silka;}'
						}
					</style>
					<pattern
						id="a-genetica"
						width={1}
						height={1}
						viewBox="145.174 39.317 2363.344 1201.367">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1920}
							height={1280}
							xlinkHref="/images/gentica.jpg"
						/>
					</pattern>
					<linearGradient
						id="b-genetica"
						x1={0.5}
						x2={0.51}
						y2={1}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
						<stop offset={1} stopColor="#001f5f" />
					</linearGradient>
					<clipPath id="c-genetica">
						<rect
							className="a-genetica"
							width={1017.753}
							height={595.286}
						/>
					</clipPath>
					<clipPath id="d-genetica">
						<rect
							className="a-genetica"
							width={1078}
							height={975}
							transform="translate(0 -0.001)"
						/>
					</clipPath>
				</defs>
				<rect
					className="b-genetica"
					width={1920}
					height={976}
					transform="translate(0 24.762)"
				/>
				<path className="c-genetica" d="M0,0H1920V1000.761H0Z" />
				<g transform="translate(220.777 207.984)">
					<g
						className="d-genetica"
						transform="translate(374.509 -182.222) rotate(90)">
						<path
							className="a-genetica"
							d="M1.711,152.114l13.618-38.15C39.642,45.853,96.189,1.843,159.388,1.843h363.7V0h-363.7C128.164,0,97.927,10.688,71.946,30.909S25.883,79.6,13.871,113.255L0,152.114Z"
							transform="translate(454.417 443.172)"
						/>
						<path
							className="e-genetica"
							d="M594.821,0,507.756,243.949C483.443,312.061,426.9,356.071,363.7,356.071H0v1.844H363.7c31.224,0,61.461-10.689,87.442-30.91s46.063-48.7,58.075-82.346L596.352.5q-.766-.251-1.531-.5"
							transform="translate(250.702 151.629)"
						/>
						<path
							className="e-genetica"
							d="M215.064,0a145.386,145.386,0,0,0-59.121,27.929c-25.981,20.221-46.063,48.7-58.075,82.346L0,384.5c.521.136,1.043.274,1.565.409L99.326,110.984c20.61-57.738,64.384-98.15,115.737-109.123Z"
							transform="translate(762.44)"
						/>
						<path
							className="f-genetica"
							d="M1.845,87.584C30.016,34.708,79.654,1.843,134.265,1.843H396.46V0H134.265C103.041,0,72.8,10.688,46.822,30.909A174.187,174.187,0,0,0,0,87.584Z"
							transform="translate(57.626 507.702)"
						/>
					</g>
				</g>
				<g transform="translate(1788.797 836.761) rotate(180)">
					<g
						className="g-genetica"
						transform="translate(-130.203 -164)">
						<path
							className="a-genetica"
							d="M702.871,975H0V0H1077.557L939.434,661.694C899.851,851.321,806.468,975,702.871,975"
						/>
					</g>
				</g>
				<text className="h-genetica" transform="translate(1780 91.762)">
					<tspan x={-238.8} y={0}>
						{'SOLUCIONES EN SALUD'}
					</tspan>
				</text>
				<g
					className="i-genetica"
					transform="translate(897.976 869.762)"
					onClick={onChangeClick}>
					<circle
						className="j-genetica"
						cx={27}
						cy={27}
						r={27}
						transform="translate(0.025)"
					/>
					<path
						className="a-genetica"
						d="M0,0V21.7L18.792,10.851,9.816,5.668Z"
						transform="translate(33.112 37.851) rotate(180)"
					/>
				</g>
				<text
					className="k-genetica"
					transform="translate(1106 304.762)">
					<tspan x={0} y={0}>
						{'Gen\xE9tica '}
					</tspan>
				</text>
				<text
					className="l-genetica"
					transform="translate(1106 332.762)">
					<tspan x={0} y={23}>
						{
							'Esto significa que si usted tiene un historial familiar '
						}
					</tspan>
					<tspan x={0} y={51}>
						{'marcado de c\xE1ncer de mama, es probable que haya '}
					</tspan>
					<tspan x={0} y={79}>
						{'heredado un gen anormal vinculado a un mayor riesgo '}
					</tspan>
					<tspan x={0} y={107}>
						{
							'de sufrir c\xE1ncer de mama (como las mutaciones de los '
						}
					</tspan>
					<tspan x={0} y={135}>
						{'genes BRCA 1 o 2). '}
					</tspan>
				</text>
				<text
					className="l-genetica"
					transform="translate(1162 510.762)">
					<tspan x={0} y={23}>
						{'Son las pruebas base de medicina de precisi\xF3n o '}
					</tspan>
					<tspan x={0} y={51}>
						{'medicina personalizada, ya que cada individuo es '}
					</tspan>
					<tspan x={0} y={79}>
						{'diferente '}
					</tspan>
					<tspan x={0} y={107}>
						{
							'Gu\xEDan al profesional en la elecci\xF3n del tratamiento '
						}
					</tspan>
					<tspan x={0} y={135}>
						{'m\xE1s adecuado para el paciente. '}
					</tspan>
					<tspan x={0} y={163}>
						{'Permite calcular el riesgo de recurrencia. '}
					</tspan>
					<tspan x={0} y={191}>
						{'Muestra un beneficio real para el paciente y su '}
					</tspan>
					<tspan x={0} y={219}>
						{'familia. '}
					</tspan>
					<tspan x={0} y={247}>
						{'Se pueden analizar m\xE1s de 3.800 enfermedades. '}
					</tspan>
					<tspan x={0} y={275}>
						{'Determinan calidad de vida del paciente.'}
					</tspan>
				</text>
				<g transform="translate(1141.358 499.762)">
					<circle
						className="e-genetica"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 24)"
					/>
					<circle
						className="e-genetica"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 274)"
					/>
					<circle
						className="e-genetica"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 106)"
					/>
					<circle
						className="e-genetica"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 163)"
					/>
					<circle
						className="e-genetica"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 192)"
					/>
					<circle
						className="e-genetica"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 249)"
					/>
				</g>
				<path
					className="e-genetica"
					d="M161.893,208.616,64.3,177.475a2.183,2.183,0,0,0-1.387.009L1.547,197.77a2.257,2.257,0,0,0-1.43,2.851l2.825,8.563a2.253,2.253,0,0,0,2.851,1.43l21.76-7.193L37.8,234.381l-21.768,7.193a2.256,2.256,0,0,0-1.43,2.851l2.825,8.563a2.264,2.264,0,0,0,2.851,1.43l56.38-18.641a2.25,2.25,0,0,0,1.43-2.851l-2.825-8.563a2.264,2.264,0,0,0-2.851-1.43l-21.768,7.2-10.234-30.96,23.276-7.7,88.632,28.289,7.24,21.9,7.465,22.579c-42.676,29.418-17.541,11.252.508,3.23,8.979-3.987-6.714,28.583,13.826,0a2.233,2.233,0,0,0,.31-2.024l-18.314-55.381a2.259,2.259,0,0,0-1.456-1.447m6.866-15.058,46.965-34.595a2.269,2.269,0,0,0,.922-1.835l-.681-102.441a2.222,2.222,0,0,0-.439-1.318L177.192,1.331a2.247,2.247,0,0,0-3.153-.482L166.777,6.2a2.256,2.256,0,0,0-.474,3.153l13.6,18.46L153.649,47.15l-13.6-18.46a2.254,2.254,0,0,0-3.153-.474l-7.262,5.349a2.254,2.254,0,0,0-.474,3.153l35.215,47.809a2.256,2.256,0,0,0,3.153.474l7.262-5.349a2.256,2.256,0,0,0,.482-3.153l-13.6-18.46L187.925,38.7l14.541,19.744.612,93.034-37.722,27.781L76.689,151.1,62.148,131.354,88.4,112.016,102,130.476a2.256,2.256,0,0,0,3.153.474l7.262-5.35a2.263,2.263,0,0,0,.482-3.153l-35.224-47.8a2.25,2.25,0,0,0-3.153-.482l-7.262,5.349a2.255,2.255,0,0,0-.474,3.153l13.593,18.46L54.128,120.466l-13.6-18.46a2.257,2.257,0,0,0-3.153-.482l-7.262,5.349a2.256,2.256,0,0,0-.474,3.153l38.333,52.039a2.211,2.211,0,0,0,1.128.81l97.634,31.02a2.264,2.264,0,0,0,2.024-.336"
					transform="translate(1691 731.033)"
				/>
				<g transform="translate(140 52.529)">
					<a href="/productos">
						<path
							className="a-genetica"
							d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
							transform="translate(61.725 24.005) rotate(180)"
						/>
						<text
							className="m-genetica"
							transform="translate(92.852 23)">
							<tspan x={-71.52} y={0}>
								{'Volver'}
							</tspan>
						</text>
					</a>
				</g>
			</svg>
		</div>
	)
}

export default Genetica
