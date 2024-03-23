import React from 'react'

const DevicesMedical: React.FC<{ height: string; onClose: () => void }> = ({
	height,
	onClose,
}) => {
	return (
		<div>
			<svg
				width="100%"
				height={"100%"}
				viewBox="1 15 1920 1010"
				preserveAspectRatio="none">
				<defs>
					<style>
						{
							'.a-medical{fill:none;}.b-medical{fill:url(#a-medical);}.c-medical{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-medical);}.d-medical,.e-medical,.f-medical{fill:#fff;}.d-medical,.g-medical{font-size:24px;}.d-medical{font-family:Silka-SemiBold, Silka;font-weight:600;}.e-medical{font-size:55px;font-family:"Kiona-Bold";font-weight:700;}.g-medical{fill:#182856;font-family:Silka-Regular, Silka;}.h-medical{fill:#e40032;}.i-medical{clip-path:url(#c-medical);}.j-medical{fill:#001f5f;}.k-medical{fill:#e7002a;}.l-medical{opacity:0.7;}'
						}
					</style>
					<pattern
						id="a-medical"
						width={1}
						height={1}
						viewBox="191.129 298.671 1728.871 877.942">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1920}
          height={1077.895}
							xlinkHref="/images/equiposM.jpg"
						/>
					</pattern>
					<linearGradient
						id="b-medical"
						x1={0.5}
						x2={0.5}
						y2={0.556}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
						<stop offset={1} stopColor="#001f5f" />
					</linearGradient>
					<clipPath id="c-medical">
						<rect
							className="a-medical"
							width={587.454}
							height={336.675}
							transform="translate(0 0)"
						/>
					</clipPath>
				</defs>
				<rect
					className="b-medical"
					width={1920}
					height={975}
					transform="translate(2.864 18)"
				/>
				<path
					className="c-medical"
					d="M0,0H1920V1024H0Z"
					transform="translate(2.864)"
				/>
				<text className="d-medical" transform="translate(1782.864 115)">
					<tspan x={-266.8} y={0}>
						{'SOLUCIONES EN SALUD'}
					</tspan>
				</text>
				<text className="e-medical" transform="translate(962.864 399)">
					<tspan x={-259.27} y={0}>
						{'EQUIPOS M\xC9DICOS '}
					</tspan>
				</text>
				<path
					className="f-medical"
					d="M1689.406,0H274.517C122.905,0,0,114.245,0,255.172V587.454H1929V222.709C1929,99.71,1821.731,0,1689.406,0"
					transform="translate(2.864 436.546)"
				/>
				<text className="g-medical" transform="translate(264.864 729)">
					<tspan x={0} y={23}>
						{
							'Con una variada gama de soluciones para \xE1reas especializadas, UCIs, quir\xF3fanos, urgencias y hospitalizaci\xF3n. '
						}
					</tspan>
					<tspan x={0} y={51} />
					<tspan x={0} y={79}>
						{
							'En cumplimiento de la Ley 1672 del 19 de julio de 2013, Decreto 284 de 2018 y Resoluci\xF3n 851 del 2022. Amarey Nova '
						}
					</tspan>
					<tspan x={0} y={107}>
						{
							'Medical S.a-medical, Ucipharma S.a-medical. y Novat\xE9cnica S.a-medical.S., ponen a su disposici\xF3n nuestro proceso '
						}
					</tspan>
					<tspan x={0} y={135}>
						{
							'de disposici\xF3n y gesti\xF3n de los residuos de aparatos el\xE9ctricos y electr\xF3nicos (RAEE) relacionados espec\xEDficamente con los equipos '
						}
					</tspan>
					<tspan x={0} y={163}>
						{
							'biom\xE9dicos el\xE9ctricos o electr\xF3nicos (con excepci\xF3n de todos los productos implantados e infectados) que '
						}
					</tspan>
					<tspan x={0} y={191}>
						{
							'distribuye nuestras compa\xF1\xEDas. Para este fin, solicitamos comunicarse directamente con nuestro representante de '
						}
					</tspan>
					<tspan x={0} y={219}>
						{
							'ventas asignado a su instituci\xF3n con el objetivo de programar su recolecci\xF3n. Para la disposici\xF3n final de los RAEE '
						}
					</tspan>
					<tspan x={0} y={247} xmlSpace="preserve">
						{
							'realizamos la gesti\xF3n a trav\xE9s de una empresa autorizada por la Autoridad Ambiental.  '
						}
					</tspan>
				</text>
				<text className="g-medical" transform="translate(441.864 476)">
					<tspan x={0} y={23}>
						{'Monitores de signos vitales '}
					</tspan>
					<tspan x={0} y={51}>
						{'Centrales de monitoreo '}
					</tspan>
					<tspan x={0} y={79}>
						{'Electrocardiograf\xEDa '}
					</tspan>
					<tspan x={0} y={107} xmlSpace="preserve">
						{'Ventilaci\xF3n  '}
					</tspan>
					<tspan x={0} y={135}>
						{'Equipos para neurolog\xEDa: '}
					</tspan>
					<tspan x={0} y={163}>
						{'electroencefalograf\xEDa, polisomnograf\xEDa '}
					</tspan>
					<tspan x={0} y={191}>
						{'y electromiograf\xEDa. '}
					</tspan>
					<tspan x={0} y={219}>
						{'Camas y camillas hospitalarias '}
					</tspan>
					<tspan x={0} y={247} />
				</text>
				<text className="g-medical" transform="translate(1089.864 476)">
					<tspan x={0} y={23}>
						{'Mesas de cirug\xEDa '}
					</tspan>
					<tspan x={0} y={51}>
						{'Incubadora neonatal y l\xE1mparas de '}
					</tspan>
					<tspan x={0} y={79}>
						{'fototerapia '}
					</tspan>
					<tspan x={0} y={107}>
						{'Desfibrilador Externo Autom\xE1tico (DEA) '}
					</tspan>
					<tspan x={0} y={135}>
						{'L\xE1mparas para quir\xF3fano, '}
					</tspan>
					<tspan x={0} y={163}>
						{'procedimientos y exploraci\xF3n '}
					</tspan>
					<tspan x={0} y={191}>
						{'Unidades de suministro medicinales '}
					</tspan>
				</text>
				<g transform="translate(419.175 491.072)">
					<circle
						className="h-medical"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.31 -2.072)"
					/>
					<circle
						className="h-medical"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.31 25.928)"
					/>
					<circle
						className="h-medical"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.31 53.928)"
					/>
					<circle
						className="h-medical"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.31 81.928)"
					/>
					<circle
						className="h-medical"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.31 109.928)"
					/>
					<circle
						className="h-medical"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.31 192.928)"
					/>
				</g>
				<g transform="translate(1075.175 491.072)">
					<circle
						className="h-medical"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.31 -2.072)"
					/>
					<circle
						className="h-medical"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.31 25.928)"
					/>
					<circle
						className="h-medical"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.31 81.928)"
					/>
					<circle
						className="h-medical"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.31 109.928)"
					/>
					<circle
						className="h-medical"
						cx={3}
						cy={3}
						r={3}
						transform="translate(-0.31 164.928)"
					/>
				</g>
				<g transform="translate(1922.864 436.546) rotate(90)">
					<g className="i-medical" transform="translate(0 0)">
						<path
							className="j-medical"
							d="M.915,0,0,.44,69.959,193.731c7.54,20.832,20.146,38.459,36.454,50.978S141.7,263.844,161.3,263.844H473.954V262.7H161.3c-39.67,0-75.164-27.246-90.425-69.409Z"
							transform="translate(419.609 0)"
						/>
						<path
							className="k-medical"
							d="M647.484,662.57l-94.56-261.309c-15.262-42.164-50.756-69.409-90.426-69.409H414.192v.009H185.9c-19.6,0-38.58-6.618-54.888-19.135S102.1,282.579,94.56,261.748L0,.438.915,0l94.56,261.308c15.262,42.165,50.756,69.41,90.426,69.41h48.305v-.007H462.5c19.6,0,38.58,6.616,54.888,19.135s28.913,30.146,36.453,50.978L648.4,662.131Z"
							transform="translate(188.432 -162.948)"
						/>
					</g>
				</g>
				<path
					className="h-medical"
					d="M237.533,256.378l56.317,76.657a2.135,2.135,0,0,1,.4,1.232l.32,60.012a2.1,2.1,0,0,1-2.088,2.1l-8.374.04a2.091,2.091,0,0,1-2.1-2.08l-.112-21.284-30.274.152.112,21.292a2.092,2.092,0,0,1-2.088,2.1l-8.374.04a2.079,2.079,0,0,1-2.1-2.08l-.288-55.133a2.086,2.086,0,0,1,2.08-2.1l8.374-.048a2.1,2.1,0,0,1,2.1,2.088l.112,21.284,30.274-.152-.12-22.771-51.134-69.618c-24.245,26.875-11.855,38.137-15.749,33.313-5.893-7.264-12.927-45.725,21.012-45.9a2.081,2.081,0,0,1,1.7.856m24.523-76.833,90.31-29.866a2.075,2.075,0,0,0,1.04-.768l35.025-48.734a2.1,2.1,0,0,0-.48-2.919l-6.8-4.887a2.089,2.089,0,0,0-2.919.48L365.8,110.135,341.217,92.466l12.422-17.285a2.088,2.088,0,0,0-.472-2.919l-6.8-4.887a2.081,2.081,0,0,0-2.919.48l-32.178,44.767a2.1,2.1,0,0,0,.472,2.927l6.807,4.887a2.1,2.1,0,0,0,2.919-.48l12.422-17.285,24.587,17.669-13.285,18.484-82.016,27.123-35.329-25.387-.068-13.2-.38-73.187,13.285-18.484,24.587,17.669L252.85,70.647a2.089,2.089,0,0,0,.48,2.919l6.8,4.887a2.089,2.089,0,0,0,2.919-.48L295.226,33.2a2.089,2.089,0,0,0-.48-2.919l-6.8-4.887a2.1,2.1,0,0,0-2.919.48L272.6,43.156,248.019,25.5,260.441,8.2a2.1,2.1,0,0,0-.48-2.919L253.162.4a2.081,2.081,0,0,0-2.919.48L215.218,49.611a2.127,2.127,0,0,0-.392,1.232l.5,95.117a2.081,2.081,0,0,0,.872,1.688l43.983,31.61a2.1,2.1,0,0,0,1.88.288m152.066,12.541,2.544-7.982a2.1,2.1,0,0,0-1.36-2.632l-57.165-18.244a2.108,2.108,0,0,0-1.3.008L266.536,193.1a2.068,2.068,0,0,0-1.336,1.352l-16.469,51.6a2.083,2.083,0,0,0,.3,1.872l56.309,76.665a2.136,2.136,0,0,0,1.056.752l57.165,18.252a2.092,2.092,0,0,0,2.632-1.36l2.543-7.974a2.078,2.078,0,0,0-1.352-2.632L347.1,325.149l9.206-28.842,20.284,6.471a2.1,2.1,0,0,0,2.631-1.352l2.544-7.982a2.1,2.1,0,0,0-1.36-2.632l-52.526-16.765a2.084,2.084,0,0,0-2.624,1.36l-2.551,7.982a2.084,2.084,0,0,0,1.36,2.623l20.276,6.479-9.2,28.842-21.692-6.919-51.142-69.626,13.229-41.44,82.016-27.123,21.684,6.927-9.2,28.842-20.284-6.479a2.105,2.105,0,0,0-2.631,1.36l-2.543,7.982a2.087,2.087,0,0,0,1.36,2.623l52.518,16.765a2.094,2.094,0,0,0,2.631-1.352l2.551-7.982a2.1,2.1,0,0,0-1.36-2.631L382,215.81l9.206-28.842,20.284,6.479a2.105,2.105,0,0,0,2.631-1.36"
					transform="translate(-209.901 626.753)"
				/>
				<g
					onClick={onClose}
					className="l-medical"
					transform="translate(1728.864 511.025) rotate(-90)">
					<circle
						className="j-medical"
						cx={27}
						cy={27}
						r={27}
						transform="translate(0.025)"
					/>
					<path
						className="f-medical"
						d="M0,0V21.7L18.792,10.851,9.816,5.668Z"
						transform="translate(33.112 37.851) rotate(180)"
					/>
				</g>
				<g transform="translate(142.864 75.768)">
					<a href="/productos">
						<path
							className="f-medical"
							d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
							transform="translate(61.725 24.005) rotate(180)"
						/>
						<text
							className="d-medical"
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

export default DevicesMedical
