import React from 'react'

const SelecImage: React.FC<{ height: string; onClose: () => void }> = ({
	height,
	onClose,
}) => {
	return (
		<div>
			<svg
				width="100%"
				height={"100%"}
				viewBox="14 31 1927 975"
				preserveAspectRatio="none">
				<defs>
					<style>
						{
							'.a-instru,.e-instru{fill:#fff;}.b-instru{fill:none;}.c-instru{fill:url(#a-instru);}.d-instru{opacity:0.8;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-instru);}.e-instru,.k-instru,.m-instru{font-size:24px;}.e-instru,.k-instru{font-family:Silka-SemiBold, Silka;font-weight:600;}.f-instru{clip-path:url(#c-instru);}.g-instru{fill:#e40032;}.h-instru{clip-path:url(#d-instru);}.i-instru{fill:#e7002a;}.j-instru,.k-instru,.l-instru{fill:#001f5f;}.l-instru{font-size:55px;font-family:"Kiona-Bold";font-weight:700;}.m-instru{fill:#182856;font-family:Silka-Regular, Silka;}'
						}
					</style>
					<pattern
						id="a-instru"
						width={1}
						height={1}
						viewBox="-251.761 287.163 1920 975">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1920}
							height={1280}
							xlinkHref="/images/instrumental.jpg"
						/>
					</pattern>
					<linearGradient
						id="b-instru"
						x1={0.5}
						x2={0.51}
						y2={1}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
						<stop offset={1} stopColor="#001f5f" />
					</linearGradient>
					<clipPath id="c-instru">
						<rect className="a-instru" width={1106} height={1009} />
					</clipPath>
					<clipPath id="d-instru">
						<rect
							className="b-instru"
							width={1521}
							height={761.955}
						/>
					</clipPath>
				</defs>
				<rect
					className="c-instru"
					width={1934}
					height={975}
					transform="translate(14.247 31)"
				/>
				<path
					className="d-instru"
					d="M0,0H1920V1000.761H0Z"
					transform="translate(20.247 5.238)"
				/>
				<text className="e-instru" transform="translate(1794.247 97)">
					<tspan x={-268.8} y={0}>
						{'SOLUCIONES EN SALUD'}
					</tspan>
				</text>
				<g className="f-instru" transform="translate(14.247)">
					<path
						className="a-instru"
						d="M721.682,0H0V1009.1H1106.4L964.576,324.264C923.934,128,828.051,0,721.682,0"
						transform="translate(0)"
					/>
				</g>
				<path
					className="g-instru"
					d="M320.906,390.514V374.123l24.382,2.377,18.363,28.267,30.179,44.09v80.6a2.8,2.8,0,0,1-2.748,2.825l-11.024.054a2.78,2.78,0,0,1-2.769-2.793l-.147-28.581-39.852.2.147,28.592a2.783,2.783,0,0,1-2.748,2.825l-11.024.054a2.764,2.764,0,0,1-2.759-2.792c-.39-75.593.832-76.849,2.358-76.86l11.024-.064a2.8,2.8,0,0,1,2.769,2.8l.147,28.581,39.852-.2.232-38.774M351.03,241.1,469.912,201a2.737,2.737,0,0,0,1.369-1.031l46.106-65.443a2.852,2.852,0,0,0-.632-3.92l-8.95-6.563a2.716,2.716,0,0,0-3.843.644L487.6,147.894l-32.366-23.726,16.352-23.211a2.84,2.84,0,0,0-.621-3.92l-8.95-6.563a2.705,2.705,0,0,0-3.843.644l-42.358,60.115a2.853,2.853,0,0,0,.621,3.931l8.96,6.563a2.725,2.725,0,0,0,3.843-.644l16.352-23.211L477.957,161.6l-17.489,24.822-108.133,44.71L328.738,201,322.9,47.931l32.366,23.726L338.911,94.868a2.842,2.842,0,0,0,.632,3.92l8.95,6.563a2.715,2.715,0,0,0,3.843-.644L394.693,44.58a2.842,2.842,0,0,0-.632-3.92l-8.95-6.563a2.725,2.725,0,0,0-3.843.644L364.907,57.952,332.552,34.237,348.9,11.016a2.852,2.852,0,0,0-.632-3.92L339.322.533a2.705,2.705,0,0,0-3.843.644c-20.992,29.8-44.334,186.44-12.214,209.989.716.526,26.923,30.214,27.765,29.935m200.177,16.841,3.348-10.719a2.826,2.826,0,0,0-1.79-3.534l-75.25-24.5a2.723,2.723,0,0,0-1.706.011L356.926,259.307a2.751,2.751,0,0,0-1.758,1.815L333.489,330.41a2.843,2.843,0,0,0,.4,2.513l74.124,102.949a2.813,2.813,0,0,0,1.39,1.01l75.25,24.51a2.744,2.744,0,0,0,3.464-1.826l3.348-10.708a2.8,2.8,0,0,0-1.78-3.534l-26.7-8.7L475.1,397.893l26.7,8.689a2.75,2.75,0,0,0,3.464-1.815l3.348-10.719a2.826,2.826,0,0,0-1.79-3.534L437.683,368a2.733,2.733,0,0,0-3.454,1.826l-3.359,10.719a2.809,2.809,0,0,0,1.79,3.523l26.691,8.7L447.243,431.5l-28.554-9.291-67.322-93.5,17.415-55.647,107.964-36.421,28.544,9.3-12.108,38.731-26.7-8.7a2.76,2.76,0,0,0-3.464,1.826l-3.348,10.719a2.814,2.814,0,0,0,1.79,3.523l69.133,22.512a2.746,2.746,0,0,0,3.464-1.815l3.359-10.719a2.834,2.834,0,0,0-1.79-3.534l-26.7-8.689,12.119-38.731,26.7,8.7a2.761,2.761,0,0,0,3.464-1.826"
					transform="translate(-307.439 244)"
				/>
				<g className="h-instru" transform="translate(478.247 259.629)">
					<path
						className="a-instru"
						d="M529.164,756.666l20.352-48.831A232.631,232.631,0,0,1,764.808,564.321h543.534v-2.359H764.808A235.6,235.6,0,0,0,547.337,706.926l-20.73,49.74Z"
						transform="translate(152.506 5.289)"
					/>
					<path
						className="g-instru"
						d="M1319.7,192.273,1189.589,504.524A232.63,232.63,0,0,1,974.3,648.037H430.763v2.36H974.3a235.605,235.605,0,0,0,217.471-144.966l130.224-312.512q-1.145-.321-2.288-.646"
						transform="translate(-56.097 1.809)"
					/>
					<path
						className="g-instru"
						d="M1509.814,0a235.692,235.692,0,0,0-175.145,141.15l-146.261,351c.779.175,1.559.351,2.339.523l146.1-350.613A232.543,232.543,0,0,1,1509.814,2.382Z"
						transform="translate(-48.966)"
					/>
					<path
						className="i-instru"
						d="M2.757,755.9a232.54,232.54,0,0,1,197.9-109.747H592.5v-2.359H200.655A235.647,235.647,0,0,0,0,755.9Z"
						transform="translate(86.12 6.06)"
					/>
				</g>
				<circle
					onClick={onClose}
					className="j-instru"
					cx={27}
					cy={27}
					r={27}
					transform="translate(1028.247 901) rotate(180)"
				/>
				<path
					onClick={onClose}
					className="a-instru"
					d="M0,0V21.7L18.792,10.851,9.816,5.668Z"
					transform="translate(995.16 863.148)"
				/>
				<a href='/productos'>
					<path
						className="j-instru"
						d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
						transform="translate(215.972 81.773) rotate(180)"
					/>
					<text
						className="k-instru"
						transform="translate(247.099 80.768)">
						<tspan x={-71.52} y={0}>
							{'Volver'}
						</tspan>
					</text>
				</a>
				<text className="l-instru" transform="translate(351.247 306)">
					<tspan x={0} y={0}>
						{'INSTRUMENTAL'}
					</tspan>
					<tspan x={0} y={57}>
						{'Y ESTERILIZACI\xD3N'}
					</tspan>
				</text>
				<text className="m-instru" transform="translate(351.247 433)">
					<tspan x={0} y={23}>
						{'nuestro equipo profesional est\xE1 presto a '}
					</tspan>
					<tspan x={0} y={51}>
						{'brindar informaci\xF3n, asesor\xEDa, '}
					</tspan>
					<tspan x={0} y={79}>
						{'acompa\xF1amiento, sugerencias y soluciones '}
					</tspan>
					<tspan x={0} y={107}>
						{'a sus planes y proyectos con:'}
					</tspan>
				</text>
				<text className="m-instru" transform="translate(351.247 796)">
					<tspan x={0} y={23}>
						{'Siempre enfocados en optimizar y preservar '}
					</tspan>
					<tspan x={0} y={51}>
						{'su inversi\xF3n. '}
					</tspan>
				</text>
				<text className="m-instru" transform="translate(398.247 579)">
					<tspan x={0} y={23}>
						{'Instrumental quir\xFArgico y su '}
					</tspan>
					<tspan x={0} y={51}>
						{'mantenimiento '}
					</tspan>
					<tspan x={0} y={79}>
						{'Contenedores ecol\xF3gicos '}
					</tspan>
					<tspan x={0} y={107}>
						{'Equipos para lavado y '}
					</tspan>
					<tspan x={0} y={135}>
						{'termodesinfecci\xF3n '}
					</tspan>
					<tspan x={0} y={163}>
						{'Equipos para esterilizaci\xF3n '}
					</tspan>
				</text>
				<circle
					className="g-instru"
					cx={3}
					cy={3}
					r={3}
					transform="translate(385.247 592)"
				/>
				<circle
					className="g-instru"
					cx={3}
					cy={3}
					r={3}
					transform="translate(385.247 646)"
				/>
				<circle
					className="g-instru"
					cx={3}
					cy={3}
					r={3}
					transform="translate(385.247 675)"
				/>
				<circle
					className="g-instru"
					cx={3}
					cy={3}
					r={3}
					transform="translate(385.247 731)"
				/>
			</svg>
		</div>
	)
}

export default SelecImage
