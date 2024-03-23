import React from 'react'

const Medical: React.FC<{ height: string; onClose: () => void }> = ({
	height,
	onClose,
}) => {
	return (
		<div>
			<svg
				width="100%"
				height={'100%'}
				viewBox="0 16 1920 1010"
				preserveAspectRatio="none">
				<defs>
					<style>
						{
							'.a-devices{fill:none;}.b-devices{fill:url(#a-devices);}.c-devices{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-devices);}.d-devices,.e-devices,.f-devices{fill:#fff;}.d-devices,.l-devices,.n-devices{font-size:24px;}.d-devices,.l-devices,.o-devices{font-family:Silka-SemiBold, Silka;font-weight:600;}.e-devices{font-size:55px;font-family:"Kiona-Bold";font-weight:700;}.g-devices{clip-path:url(#c-devices);}.h-devices{fill:#001f5f;}.i-devices,.o-devices{fill:#e40032;}.j-devices{fill:#e7002a;}.k-devices{clip-path:url(#d-devices);}.l-devices,.n-devices{fill:#182856;}.m-devices,.n-devices{font-family:Silka-Regular, Silka;}.m-devices{font-weight:400;}.o-devices{font-size:32px;}.p-devices{opacity:0.7;}'
						}
					</style>
					<pattern
						id="a-devices"
						width={1}
						height={1}
						viewBox="126.717 566.943 1666.567 846.303">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1920}
							height={1279.875}
							xlinkHref="/images/quirurgicos.jpg"
						/>
					</pattern>
					<linearGradient
						id="b-devices"
						x1={0.5}
						x2={0.5}
						y2={0.549}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
						<stop offset={1} stopColor="#001f5f" />
					</linearGradient>
					<clipPath id="c-devices">
						<rect
							className="a-devices"
							width={1079.103}
							height={454.129}
						/>
					</clipPath>
					<clipPath id="d-devices">
						<rect
							className="a-devices"
							width={585.455}
							height={256.985}
							transform="translate(0 0)"
						/>
					</clipPath>
				</defs>
				<rect
					className="b-devices"
					width={1920}
					height={975}
					transform="translate(0 18)"
				/>
				<path className="c-devices" d="M0,0H1929V1005.452H0Z" />
				<text className="d-devices" transform="translate(1780 115)">
					<tspan x={-260.8} y={0}>
						{'SOLUCIONES EN SALUD'}
					</tspan>
				</text>
				<text className="e-devices" transform="translate(960 353)">
					<tspan x={-501.957} y={0}>
						{'Dispositivos m\xE9dico-quir\xFArgicos'}
					</tspan>
				</text>
				<path
					className="f-devices"
					d="M1689.406,0H274.517C122.905,0,0,124.426,0,277.912V639.8H1929V242.555C1929,108.6,1821.731,0,1689.406,0"
					transform="translate(0 384.196)"
				/>
				<g className="g-devices" transform="translate(958.897 569.871)">
					<path
						className="h-devices"
						d="M528.421,678.006l14.439-29.1c25.778-51.96,85.734-85.535,152.743-85.535h385.621v-1.406H695.6c-33.107,0-65.167,8.154-92.713,23.58s-48.84,37.149-61.576,62.82l-14.708,29.645Z"
						transform="translate(-44.797 -223.877)"
					/>
					<path
						className="i-devices"
						d="M1061.439,192.273l-92.313,186.1c-25.778,51.96-85.734,85.535-152.743,85.535H430.763v1.407H816.384c33.106,0,65.166-8.154,92.713-23.58s48.84-37.149,61.576-62.82l92.39-186.259-1.623-.385"
						transform="translate(-164.949 -76.599)"
					/>
					<path
						className="i-devices"
						d="M1416.436,0a185.729,185.729,0,0,0-62.685,21.306c-27.547,15.426-48.84,37.149-61.575,62.82l-103.768,209.2c.553.1,1.106.209,1.659.312L1293.722,84.667c21.852-44.047,68.265-74.876,122.714-83.247Z"
						transform="translate(-380.009)"
					/>
					<path
						className="j-devices"
						d="M1.956,710.6c29.869-40.338,82.5-65.41,140.4-65.41h278v-1.406h-278c-33.107,0-65.167,8.154-92.714,23.58C29.419,678.695,12.571,693.419,0,710.6Z"
						transform="translate(61.099 -256.476)"
					/>
				</g>
				<g transform="translate(206 244.362) rotate(90)">
					<g
						className="k-devices"
						transform="translate(194.183 -51.716)">
						<path
							className="h-devices"
							d="M.911,201.393,0,201.057,69.721,53.517c7.514-15.9,20.077-29.356,36.33-38.911A107.9,107.9,0,0,1,160.751,0H472.341V.871H160.751c-39.535,0-74.909,20.8-90.117,52.98Z"
							transform="translate(418.181 55.593)"
						/>
						<path
							className="j-devices"
							d="M645.281,0,551.042,199.458c-15.21,32.184-50.583,52.98-90.118,52.98H412.783v-.007H185.269a107.915,107.915,0,0,0-54.7,14.606c-16.253,9.555-28.815,23.01-36.329,38.911L0,505.407l.911.335L95.15,306.285c15.21-32.185,50.583-52.98,90.119-52.98h48.141v.006H460.924a107.9,107.9,0,0,0,54.7-14.606c16.253-9.555,28.815-23.01,36.329-38.911L646.192.336Z"
							transform="translate(187.791 -124.378)"
						/>
					</g>
				</g>
				<text className="l-devices" transform="translate(278 778)">
					<tspan x={0} y={23}>
						{
							'Todos productos de nuestro portafolio est\xE1n aprobados por la FDA y cuentan con altos est\xE1ndares de calidad. '
						}
					</tspan>
					<tspan className="m-devices">
						<tspan x={0} y={51} />
						<tspan x={0} y={79}>
							{
								'Contamos con un centro de lavado con la \xFAltima tecnolog\xEDa y est\xE1ndares, para permitirnos ofrecer un producto '
							}
						</tspan>
						<tspan x={0} y={107}>
							{
								'con la mejor calidad y garantizar las condiciones sanitarias de kits de cirug\xEDa utilizados. Adicionalmente, '
							}
						</tspan>
						<tspan x={0} y={135}>
							{
								'realizamos acompa\xF1amiento quir\xFArgico en cirug\xEDa. '
							}
						</tspan>
					</tspan>
				</text>
				<text className="n-devices" transform="translate(340 512)">
					<tspan x={0} y={23}>
						{'Equipos y dispositivos m\xE9dicos para cirug\xEDa '}
					</tspan>
					<tspan x={0} y={51}>
						{'laparosc\xF3pica '}
					</tspan>
					<tspan x={0} y={79}>
						{'Dispositivos para reparo de hernias inguinales '}
					</tspan>
					<tspan x={0} y={107}>
						{'y ventrales '}
					</tspan>
					<tspan x={0} y={135}>
						{'Ropa quir\xFArgica y barreras de protecci\xF3n '}
					</tspan>
					<tspan x={0} y={163}>
						{'especializadas '}
					</tspan>
					<tspan x={0} y={191}>
						{'Hemost\xE1ticos y sellantes para cirug\xEDa '}
					</tspan>
					<tspan x={0} y={219}>
						{'m\xEDnimamente invasiva'}
					</tspan>
				</text>
				<text className="n-devices" transform="translate(1047 512)">
					<tspan x={0} y={23}>
						{'Protecci\xF3n de la herida quir\xFArgica. '}
					</tspan>
					<tspan x={0} y={51}>
						{'Control del sangrado. '}
					</tspan>
					<tspan x={0} y={79}>
						{'Disminuci\xF3n de la infecci\xF3n en el sitio '}
					</tspan>
					<tspan x={0} y={107}>
						{'operatorio. '}
					</tspan>
					<tspan x={0} y={135}>
						{'Disminuci\xF3n de tiempos quir\xFArgicos. '}
					</tspan>
					<tspan x={0} y={163}>
						{'Disminuci\xF3n de estancias hospitalarias '}
					</tspan>
				</text>
				<g transform="translate(324.358 477)">
					<circle
						className="i-devices"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 48)"
					/>
					<circle
						className="i-devices"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 104)"
					/>
					<circle
						className="i-devices"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 159)"
					/>
					<circle
						className="i-devices"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 215)"
					/>
				</g>
				<g transform="translate(1026.358 495)">
					<circle
						className="i-devices"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 29)"
					/>
					<circle
						className="i-devices"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 57)"
					/>
					<circle
						className="i-devices"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 85)"
					/>
					<circle
						className="i-devices"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 141)"
					/>
					<circle
						className="i-devices"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.358 169)"
					/>
				</g>
				<text className="o-devices" transform="translate(1259 420)">
					<tspan x={-215.392} y={30}>
						{'Apoyamos la seguridad del '}
					</tspan>
					<tspan x={-109.328} y={64}>
						{'paciente con: '}
					</tspan>
				</text>
				<text className="o-devices" transform="translate(630 420)">
					<tspan x={-261.488} y={30}>
						{'Mejoramos los resultados en una '}
					</tspan>
					<tspan x={-138} y={64} xmlSpace="preserve">
						{'intervenci\xF3n con:  '}
					</tspan>
				</text>
				<g
					onClick={onClose}
					className="p-devices"
					transform="translate(1726 469.025) rotate(-90)">
					<circle
						className="h-devices"
						cx={27}
						cy={27}
						r={27}
						transform="translate(0.025)"
					/>
					<path
						className="f-devices"
						d="M0,0V21.7L18.792,10.851,9.816,5.668Z"
						transform="translate(33.112 37.851) rotate(180)"
					/>
				</g>
				<a href="/productos">
					<path
						className="f-devices"
						d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
						transform="translate(201.725 99.773) rotate(180)"
					/>
					<text
						className="d-devices"
						transform="translate(232.852 98.768)">
						<tspan x={-71.52} y={0}>
							{'Volver'}
						</tspan>
					</text>
				</a>
			</svg>
		</div>
	)
}

export default Medical
