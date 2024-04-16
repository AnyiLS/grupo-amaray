import React from 'react'
import { IMantenimiento } from './Mantebiomedico'

const Mantenimiento: React.FC<IMantenimiento> = ({ onClick }): JSX.Element => {
	return (
		<div>
			<svg
				width="100%"
				height={'100%'}
				viewBox="0 0 1920 1080"
				preserveAspectRatio="none"
				onClick={onClick}>
				<defs>
					<style>
						{
							'.a-mante{fill:none;}.b-mante{clip-path:url(#a-mante);}.c-mante{fill:#e7002a;}.d-mante,.k-mante{fill:#001f5f;}.e-mante,.f-mante{fill:#fff;}.f-mante{font-size:28px;font-family:Kiona-Bold, Kiona;font-weight:700;}.g-mante{fill:#182856;}.g-mante,.k-mante{font-size:24px;}.g-mante,.i-mante,.k-mante{font-family:Silka-SemiBold, Silka;font-weight:600;}.h-mante{font-family:Silka-Regular, Silka;font-weight:400;}.j-mante{fill:url(#d-mante);}.l-mante{filter:url(#b-mante);}'
						}
					</style>
					<clipPath id="a-mante">
						<rect className="a-mante" width={1920} height={1718} />
					</clipPath>
					<filter
						id="b-mante"
						x={1316.264}
						y={846}
						width={296}
						height={84.849}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="c-mante" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="c-mante" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="d-mante"
						width={1}
						height={1}
						patternTransform="translate(4496.389 2151.781) rotate(-180)"
						viewBox="17.573 226.867 1088.118 1042.227">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1123.264}
							height={1495.96}
							xlinkHref="/images/mantenimiento.jpg"
						/>
					</pattern>
				</defs>
				<g className="b-mante" transform="translate(0 91)">
					<path
						className="c-mante"
						d="M600.14,90.971V89.849H698.2v.04h99.456c47.929,0,90.812-26.746,109.251-68.14l.035-.08L916.589,0h1.3L908.01,22.18c-.346.781-.7,1.554-1.07,2.324a113.754,113.754,0,0,1-42.974,47.723,125.077,125.077,0,0,1-66.313,18.786H633.935v-.041Z"
						transform="translate(1337.887 985.571) rotate(180)"
					/>
					<path
						className="c-mante"
						d="M276.234.035v.976H190.988V.977H104.526C62.859.977,25.578,24.228,9.548,60.215l-.031.07L1.129,79.122H0L8.587,59.84c.3-.679.612-1.351.93-2.02,1.017-2.146,2.112-4.25,3.357-6.44a99.43,99.43,0,0,1,34-35.048A108.736,108.736,0,0,1,104.526,0H246.854V.035Z"
						transform="translate(1643.766 905.814)"
					/>
					<path
						className="d-mante"
						d="M1700.965,802.11l23.877,8.07q2.366.8,4.694,1.641c39.274,14.121,72.536,36.84,96.425,65.9,24.833,30.214,37.957,65.377,37.957,101.692v251.066h-2.269V979.416c0-73.5-54.041-139.263-137.677-167.54l-.164-.054-22.843-7.721Z"
						transform="translate(1214.043 -1749.347) rotate(90)"
					/>
					<path
						className="d-mante"
						d="M385.091,170.105V0H127.639C74.208,0,25.543,65.982,0,170.105Z"
						transform="translate(682.402 815.466)"
					/>
					<path
						className="d-mante"
						d="M321.465,107.3V0H106.55C61.947,0,21.323,41.62,0,107.3Z"
						transform="translate(1812.701 225.465) rotate(-90)"
					/>
				</g>
				<rect
					className="e-mante"
					width={363}
					height={81}
					transform="translate(1285 845)"
				/>
				<rect
					className="e-mante"
					width={448}
					height={81}
					transform="translate(331 786)"
				/>
				<g transform="translate(1325.264 852)" onClick={onClick}>
					<g
						className="l"
						transform="matrix(1, 0, 0, 1, -1325.26, -852)">
						<path
							className="d-mante"
							d="M278,0H57.021C34.038,0,13.4,19.506,5.006,49.161L0,66.849H219.146c24.487,0,46.411-21.03,55.037-52.793Z"
							transform="translate(1325.26 852)"
						/>
					</g>
					<text
						className="f-mante"
						transform="translate(93.172 44.424)">
						<tspan x={0} y={0}>
							{'M\xE1s'}
						</tspan>
					</text>
					<path
						className="e-mante"
						d="M45.263,0V20.184L66.419,10.091,56.314,5.271Z"
						transform="translate(118.409 23.332)"
					/>
				</g>
				<text className="g-mante" transform="translate(1202 405)">
					<tspan x={0} y={23}>
						{'Ofrecemos soluciones de mantenimiento '}
					</tspan>
					<tspan x={0} y={49}>
						{'biom\xE9dico'}
					</tspan>
					<tspan className="h-mante" y={49} xmlSpace="preserve">
						{' para todos los actores del '}
					</tspan>
					<tspan className="h-mante" x={0} y={75}>
						{'sector salud. Nuestro apoyo es '}
					</tspan>
					<tspan className="h-mante" x={0} y={101}>
						{'ejecutado con entrenamiento, '}
					</tspan>
					<tspan className="h-mante" x={0} y={127}>
						{'experiencia e innovaci\xF3n en los procesos '}
					</tspan>
					<tspan
						className="h-mante"
						x={0}
						y={153}
						xmlSpace="preserve">
						{'humanos y t\xE9cnicos.  '}
					</tspan>
					<tspan className="h-mante">
						<tspan x={0} y={179} />
						<tspan x={0} y={205}>
							{'Nuestro modelo de '}
						</tspan>
						<tspan className="i-mante" y={205}>
							{'mantenimiento '}
						</tspan>
						<tspan className="i-mante" x={0} y={231}>
							{'inhouse y mantenimiento posventa'}
						</tspan>
						<tspan y={231} xmlSpace="preserve">
							{' nos '}
						</tspan>
						<tspan x={0} y={257}>
							{'permiten construir soluciones '}
						</tspan>
						<tspan x={0} y={283}>
							{'personalizadas para cada cliente, '}
						</tspan>
						<tspan x={0} y={309}>
							{'asegurando los m\xE1s altos est\xE1ndares de '}
						</tspan>
						<tspan x={0} y={335}>
							{'calidad y un plan de mantenimiento '}
						</tspan>
						<tspan x={0} y={361}>
							{'eficiente para toda la '}
						</tspan>
						<tspan className="i-mante" y={361}>
							{'tecnolog\xEDa '}
						</tspan>
						<tspan className="i-mante" x={0} y={387}>
							{'biom\xE9dica involucrada. '}
						</tspan>
					</tspan>
				</text>
				<path
					className="d-mante"
					d="M1123.264,0H52.929C19.437,0-5.629,26.782,1.1,55.382L55.575,440.327l84.73,598.7c5.045,21.457,26.707,36.862,51.834,36.862h931.125Z"
					transform="translate(1128.264 1078.891) rotate(180)"
				/>
				<path
					className="j-mante"
					d="M1123.264,0H52.929C19.437,0-5.629,26.782,1.1,55.382l139.209,983.648c5.045,21.457,26.707,36.862,51.834,36.862h931.125Z"
					transform="translate(1123.264 1075.891) rotate(180)"
				/>
				<text className="k-mante" transform="translate(1811 166)">
					<tspan x={-351.48} y={0}>
						{'MANTENIMIENTO BIOM\xC9DICO '}
					</tspan>
				</text>
			</svg>
		</div>
	)
}

export default Mantenimiento
