import React from 'react'

const NeuroImage: React.FC<{ height: string; onClose: () => void }> = ({
	height,
	onClose,
}) => {
	return (
		<div>
			<svg
				width="100%"
				height={"100%"}
				viewBox="0 16 1920 970"
				preserveAspectRatio="none">
				<defs>
					<style>
						{
							'.a-neuro{fill:none;}.b-neuro{fill:url(#a-neuro);}.c-neuro{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-neuro);}.d-neuro,.g-neuro,.h-neuro{fill:#fff;}.d-neuro,.i-neuro{font-size:24px;}.d-neuro{font-family:Silka-SemiBold, Silka;font-weight:600;}.e-neuro{clip-path:url(#c-neuro);}.f-neuro{fill:#e7002a;}.g-neuro{font-size:55px;font-family:"Kiona-Bold";font-weight:700;}.i-neuro,.l-neuro{fill:#001f5f;}.i-neuro{font-family:Silka-Regular, Silka;}.j-neuro{fill:#e40032;}.k-neuro{clip-path:url(#d-neuro);}.m-neuro{opacity:0.7;}'
						}
					</style>
					<pattern
						id="a-neuro"
						width={1}
						height={1}
						viewBox="449.444 135.659 1509.771 766.681">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1999.59}
          height={975}
							xlinkHref="/images/neuro.jpg"
						/>
					</pattern>
					<linearGradient
						id="b-neuro"
						x1={0.5}
						x2={0.5}
						y2={1}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
						<stop offset={1} stopColor="#001f5f" />
					</linearGradient>
					<clipPath id="c-neuro">
						<rect className="a-neuro" width={676} height={250.39} />
					</clipPath>
					<clipPath id="d-neuro">
						<rect
							className="a-neuro"
							width={783.915}
							height={278}
							transform="translate(0 0)"
						/>
					</clipPath>
				</defs>
				<rect
					className="b-neuro"
					width={1920}
					height={975}
					transform="translate(0 18)"
				/>
				<path
					className="c-neuro"
					d="M0,0H1920V1000.761H0Z"
					transform="translate(0)"
				/>
				<text className="d-neuro" transform="translate(1780 91.762)">
					<tspan x={-228.8} y={0}>
						{'SOLUCIONES EN SALUD'}
					</tspan>
				</text>
				<g transform="translate(1244 750.372)">
					<g className="e-neuro" transform="translate(0)">
						<path
							className="f-neuro"
							d="M724.127,0,689.583,83.543,618.373,255.759a109.27,109.27,0,0,1-101.13,67.935H463.22v-.008H207.906a109.728,109.728,0,0,0-61.385,18.728,110.993,110.993,0,0,0-40.768,49.895L0,648.068l1.023.429L106.776,392.739A109.268,109.268,0,0,1,207.906,324.8H261.93v.007H517.243a109.717,109.717,0,0,0,61.385-18.728A110.993,110.993,0,0,0,619.4,256.188L725.15.43Z"
							transform="translate(-66.586 -86.995)"
						/>
					</g>
				</g>
				<text className="g-neuro" transform="translate(960 597.762)">
					<tspan x={-358.188} y={0}>
						{'Neurointervencionismo'}
					</tspan>
				</text>
				<path
					className="h-neuro"
					d="M1681.524,0H273.236C122.332,0,0,94.791,0,211.721V374.6H1920V184.785C1920,82.731,1813.231,0,1681.524,0"
					transform="translate(0 626.162)"
				/>
				<text className="i-neuro" transform="translate(278 700.762)">
					<tspan x={0} y={23}>
						{
							'La ciencia viene evolucionando en forma r\xE1pida para identificar y tratar esta patolog\xEDa conocida como ictus, '
						}
					</tspan>
					<tspan x={0} y={51}>
						{
							'dividido entre isqu\xE9mico (trombo) y hemorr\xE1gico (aneurisma), donde el neurointervencionismo como disciplina '
						}
					</tspan>
					<tspan x={0} y={79}>
						{
							'joven se va consolidando como alternativa para determinados casos. '
						}
					</tspan>
					<tspan x={0} y={107} />
					<tspan x={0} y={135}>
						{
							'Nuestro portafolio es reconocido por su calidad y renombre, con fortalezas en opciones de ACCESO, una gran '
						}
					</tspan>
					<tspan x={0} y={163}>
						{
							'variedad de Coils y una tecnolog\xEDa \xFAnica para trombectom\xEDa, incluyendo una estructura de log\xEDstica inversa que '
						}
					</tspan>
					<tspan x={0} y={191}>
						{
							'nos permite asegurar un servicio de alta calidad para los requerimientos de tiempo y disponibilidad en las '
						}
					</tspan>
					<tspan x={0} y={219}>
						{'ventanas terap\xE9uticas. '}
					</tspan>
				</text>
				<path
					className="j-neuro"
					d="M124.432,178.485,90.9,225.148l.074,15.141,20.142-.106-.075-14.157a1.387,1.387,0,0,1,1.383-1.4l5.57-.032a1.392,1.392,0,0,1,1.4,1.389l.191,36.672a1.394,1.394,0,0,1-1.383,1.4l-5.57.027a1.391,1.391,0,0,1-1.4-1.383l-.074-14.162-20.137.106L91.1,262.8a1.4,1.4,0,0,1-1.389,1.4l-5.57.027a1.394,1.394,0,0,1-1.4-1.383l-.207-39.917a1.391,1.391,0,0,1,.261-.819l36.922-51.383a1.406,1.406,0,0,1,1.123-.58M99.986,128.842,39.713,109.609a1.348,1.348,0,0,0-.857.005L.956,122.144A1.394,1.394,0,0,0,.073,123.9l1.745,5.288a1.391,1.391,0,0,0,1.761.883l13.439-4.442,6.326,19.121L9.9,149.2a1.394,1.394,0,0,0-.883,1.761l1.745,5.288a1.4,1.4,0,0,0,1.761.883l34.821-11.513a1.389,1.389,0,0,0,.883-1.761l-1.745-5.288a1.4,1.4,0,0,0-1.761-.883l-13.444,4.448-6.32-19.121,14.375-4.756,54.74,17.472,4.471,13.524,4.61,13.945L69.624,209.858l-14.381,4.751-6.32-19.121,13.444-4.442a1.394,1.394,0,0,0,.883-1.761L61.5,184a1.39,1.39,0,0,0-1.756-.883L24.923,194.626a1.394,1.394,0,0,0-.883,1.761l1.745,5.288a1.394,1.394,0,0,0,1.761.883l13.444-4.448,6.326,19.121-13.444,4.448a1.392,1.392,0,0,0-.888,1.761l1.75,5.288a1.394,1.394,0,0,0,1.761.883l37.9-12.534a1.394,1.394,0,0,0,.7-.511L112,165.189a1.379,1.379,0,0,0,.192-1.25l-11.311-34.2a1.4,1.4,0,0,0-.9-.894m4.24-9.3,29.006-21.366a1.4,1.4,0,0,0,.569-1.133l-.42-63.268a1.372,1.372,0,0,0-.271-.814L109.435.822a1.388,1.388,0,0,0-1.947-.3L103,3.828a1.393,1.393,0,0,0-.293,1.947l8.4,11.4L94.895,29.12l-8.4-11.4a1.392,1.392,0,0,0-1.947-.293l-4.485,3.3a1.392,1.392,0,0,0-.293,1.947L101.518,52.2a1.393,1.393,0,0,0,1.947.293l4.485-3.3a1.394,1.394,0,0,0,.3-1.947l-8.4-11.4L116.064,23.9l8.981,12.194.378,57.458-23.3,17.158L47.364,93.319l-8.98-12.194L54.6,69.181l8.4,11.4a1.393,1.393,0,0,0,1.947.293l4.485-3.3a1.4,1.4,0,0,0,.3-1.947L47.97,46.1a1.389,1.389,0,0,0-1.947-.3l-4.485,3.3a1.393,1.393,0,0,0-.293,1.947l8.4,11.4L33.43,74.4,25.03,63a1.394,1.394,0,0,0-1.947-.3L18.6,66a1.393,1.393,0,0,0-.293,1.947L41.98,100.091a1.365,1.365,0,0,0,.7.5l60.3,19.158a1.4,1.4,0,0,0,1.25-.207"
					transform="translate(1781.392 728.764)"
				/>
				<g transform="translate(382.993 307.847) rotate(90)">
					<g className="k-neuro" transform="translate(-91 104.993)">
						<path
							className="l-neuro"
							d="M171.246,380.2l-1.22-.363,93.355-159.6c10.061-17.2,26.883-31.757,48.645-42.093s47.088-15.8,73.242-15.8H802.483v.942H385.268c-52.937,0-100.3,22.5-120.666,57.313Z"
							transform="translate(389.912 -102.203)"
						/>
						<path
							className="f-neuro"
							d="M864.021,0,737.837,215.769c-20.366,34.816-67.73,57.313-120.667,57.313h-64.46v-.007H248.072c-26.154,0-51.482,5.465-73.244,15.8s-38.582,24.892-48.644,42.093L0,546.737l1.22.362L127.4,331.331c20.366-34.817,67.73-57.313,120.667-57.313h64.46v.006H617.169c26.154,0,51.482-5.463,73.244-15.8S729,233.332,739.057,216.131L865.241.363Z"
							transform="translate(-25.145 -104.48)"
						/>
					</g>
				</g>
				<g
					className="m-neuro"
					transform="translate(1726 710.787) rotate(-90)">
					<circle
						onClick={onClose}
						className="l-neuro"
						cx={27}
						cy={27}
						r={27}
						transform="translate(0.025)"
					/>
					<path
						onClick={onClose}
						className="h-neuro"
						d="M0,0V21.7L18.792,10.851,9.816,5.668Z"
						transform="translate(33.112 37.851) rotate(180)"
					/>
				</g>
				<a href="/productos">
					<path
						className="h-neuro"
						d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
						transform="translate(201.725 76.535) rotate(180)"
					/>
					<text
						className="d-neuro"
						transform="translate(232.852 75.529)">
						<tspan x={-71.52} y={0}>
							{'Volver'}
						</tspan>
					</text>
				</a>
			</svg>
		</div>
	)
}

export default NeuroImage
