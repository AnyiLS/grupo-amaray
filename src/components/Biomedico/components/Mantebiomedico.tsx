import React from 'react'

export interface IMantenimiento {
	onClick: () => void
}

const Mantebiomedico: React.FC<IMantenimiento> = ({ onClick }): JSX.Element => {
	return (
		<div>
			<svg  width="100%"
				height={'100%'}
				viewBox="0 0 1920 977"
				preserveAspectRatio="none" 
				onClick={onClick}>
				<defs>
					<style>
						{
							'.a-biomante{fill:none;}.b-biomante{clip-path:url(#a-biomante);}.c-biomante{fill:#e7002a;}.d-biomante,.f-biomante,.i-biomante{fill:#001f5f;}.e-biomante{fill:#fff;}.f-biomante,.g-biomante{font-size:24px;}.f-biomante,.h-biomante,.i-biomante{font-family:Silka-SemiBold, Silka;font-weight:600;}.g-biomante{fill:#182856;font-family:Silka-Regular, Silka;}.h-biomante,.j-biomante{fill:#e40032;}.h-biomante{font-size:38px;}.i-biomante{font-size:42px;}.k-biomante{fill:url(#b-biomante);}.l-biomante{fill:url(#e-biomante);}.m-biomante{filter:url(#f-biomante);}.n-biomante{filter:url(#c-biomante);}'
						}
					</style>
					<clipPath id="a-biomante">
						<rect
							className="a-biomante"
							width={1920}
							height={1718}
						/>
					</clipPath>
					<pattern
						id="b-biomante"
						width={1}
						height={1}
						viewBox="0 391.98 905.161 476.776">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1014.025}
							height={1482.002}
							xlinkHref="/images/bio1.jpg"
						/>
					</pattern>
					<filter
						id="c-biomante"
						x={0}
						y={439.306}
						width={1032.025}
						height={552.118}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3}  />
						<feGaussianBlur stdDeviation={3} result="d-biomante" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="d-biomante" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="e-biomante"
						width={1}
						height={1}
						viewBox="78.106 60.673 935.918 492.977">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1014.025}
							height={570.389}
							xlinkHref="/images/bio2.jpg"
						/>
					</pattern>
					<filter
						id="f-biomante"
						x={992.948}
						y={433.306}
						width={1032.025}
						height={552.118}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="g-biomante" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="g-biomante" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g transform="translate(9)">
					<g className="b-biomante" transform="translate(43.349)">
						<path
							className="c-biomante"
							d="M600.14,90.971V89.849H698.2v.04h99.456c47.929,0,90.812-26.746,109.251-68.14l.035-.08L916.589,0h1.3L908.01,22.18c-.346.781-.7,1.554-1.07,2.324a113.754,113.754,0,0,1-42.974,47.723,125.077,125.077,0,0,1-66.313,18.786H633.935v-.041Z"
							transform="translate(1337.887 985.571) rotate(180)"
						/>
						<path
							className="c-biomante"
							d="M276.234.035v.976H190.988V.977H104.526C62.859.977,25.578,24.228,9.548,60.215l-.031.07L1.129,79.122H0L8.587,59.84c.3-.679.612-1.351.93-2.02,1.017-2.146,2.112-4.25,3.357-6.44a99.43,99.43,0,0,1,34-35.048A108.736,108.736,0,0,1,104.526,0H246.854V.035Z"
							transform="translate(1643.766 905.814)"
						/>
						<path
							className="d-biomante"
							d="M1700.965,802.11l23.877,8.07q2.366.8,4.694,1.641c39.274,14.121,72.536,36.84,96.425,65.9,24.833,30.214,37.957,65.377,37.957,101.692v251.066h-2.269V979.416c0-73.5-54.041-139.263-137.677-167.54l-.164-.054-22.843-7.721Z"
							transform="translate(1214.043 -1749.347) rotate(90)"
						/>
						<path
							className="d-biomante"
							d="M385.091,170.105V0H127.639C74.208,0,25.543,65.982,0,170.105Z"
							transform="translate(682.402 815.466)"
						/>
						<path
							className="d-biomante"
							d="M321.465,107.3V0H106.55C61.947,0,21.323,41.62,0,107.3Z"
							transform="translate(1812.701 225.465) rotate(-90)"
						/>
					</g>
					<rect
						className="e-biomante"
						width={448}
						height={81}
						transform="translate(343.349 695)"
					/>
					<text
						className="f-biomante"
						transform="translate(1823.349 75)">
						<tspan x={-351.48} y={0}>
							{'MANTENIMIENTO BIOM\xC9DICO '}
						</tspan>
					</text>
					<text
						className="g-biomante"
						transform="translate(324.349 177)">
						<tspan x={34.588} y={23}>
							{
								'Nuestras manos expertas pueden entender y cuidar la tecnolog\xEDa para la tranquilidad de nuestros clientes y '
							}
						</tspan>
						<tspan x={176.908} y={49}>
							{
								'proveedores, todo para crear soluciones para el cuidado de la salud y los pacientes. '
							}
						</tspan>
					</text>
					<text
						className="h-biomante"
						transform="translate(146.349 341)">
						<tspan x={41.052} y={36}>
							{'12.000 equipos'}
						</tspan>
						<tspan
							className="d-biomante"
							y={36}
							xmlSpace="preserve">
							{' de marcas representadas '}
						</tspan>
					</text>
					<text
						className="g-biomante"
						transform="translate(243.349 314)">
						<tspan x={26.964} y={23}>
							{'Atendemos una capacidad instalada cercana a los '}
						</tspan>
					</text>
					<text
						className="g-biomante"
						transform="translate(1097.349 342)">
						<tspan x={25.896} y={23}>
							{
								'dedicados al cuidado de la tecnolog\xEDa biom\xE9dica y '
							}
						</tspan>
						<tspan x={32.016} y={49}>
							{'comprometidos con la seguridad de los pacientes '}
						</tspan>
					</text>
					<text
						className="i-biomante"
						transform="translate(1019.349 287)">
						<tspan x={67.851} y={40}>
							{'Contamos con '}
						</tspan>
						<tspan className="j-biomante" y={40}>
							{'130 profesionales'}
						</tspan>
					</text>
					<g
						className="n-biomante"
						transform="matrix(1, 0, 0, 1, -9, 0)">
						<path
							className="k-biomante"
							d="M933.261,534.118H22.241C9.958,534.118,0,523.867,0,511.222V22.9C0,10.252,9.958,0,22.241,0H991.776c14.079,0,24.615,13.3,21.788,27.494L955.049,515.819a22.409,22.409,0,0,1-21.788,18.3"
							transform="translate(9 445.31)"
						/>
					</g>
					<g
						className="m-biomante"
						transform="matrix(1, 0, 0, 1, -9, 0)">
						<path
							className="l-biomante"
							d="M1143.621,0h911.021c12.281,0,22.239,10.252,22.239,22.9V511.222c0,12.645-9.958,22.9-22.239,22.9H1085.106c-14.079,0-24.615-13.3-21.788-27.494L1121.833,18.3A22.409,22.409,0,0,1,1143.621,0"
							transform="translate(-60.91 445.31)"
						/>
					</g>
				</g>
			</svg>
		</div>
	)
}

export default Mantebiomedico
