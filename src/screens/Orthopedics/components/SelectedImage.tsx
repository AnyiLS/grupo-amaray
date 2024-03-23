import React from 'react'

const SelectedImage: React.FC<{ height: string; onClose: () => void }> = ({
	height,
	onClose,
}) => {
	return (
		<div>
			<svg
				width="100%"
				height={height}
				viewBox="7 0 1927 1080"
				preserveAspectRatio="none">
				<defs>
					<style>
						{
							'.a-selected,.e-selected{fill:#fff;}.b-selected{fill:none;}.c-selected{fill:url(#a-selected);}.d-selected{opacity:0.8;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-selected);}.e-selected,.i-selected,.m-selected{font-size:24px;}.e-selected,.m-selected{font-family:Silka-SemiBold, Silka;font-weight:600;}.f-selected{clip-path:url(#c-selected);}.g-selected,.l-selected,.m-selected{fill:#001f5f;}.g-selected{font-size:55px;font-family:"Kiona-Bold";font-weight:700;}.h-selected{fill:#e40032;}.i-selected{fill:#182856;font-family:Silka-Regular, Silka;}.j-selected{clip-path:url(#d-selected);}.k-selected{fill:#e7002a;}'
						}
					</style>
					<pattern
						id="a-selected"
						width={1}
						height={1}
						viewBox="-163.111 48 1769.152 898.684">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1920.39}
							height={1079.657}
							xlinkHref="/images/user-products.png"
						/>
					</pattern>
					<linearGradient
						id="b-selected"
						x1={0.5}
						x2={0.51}
						y2={1}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
						<stop offset={1} stopColor="#001f5f" />
					</linearGradient>
					<clipPath id="c-selected">
						<rect
							className="a-selected"
							width={960}
							height={1089}
							transform="translate(0.39)"
						/>
					</clipPath>
					<clipPath id="d-selected">
						<rect
							className="b-selected"
							width={1521}
							height={821.88}
						/>
					</clipPath>
				</defs>
				<rect
					className="c-selected"
					width={1920.39}
					height={1080}
					transform="translate(7.897 0)"
				/>
				<path
					className="d-selected"
					d="M0,0H1919.39V1080.762H0Z"
					transform="translate(7.897 5.238)"
				/>
				<text className="e-selected" transform="translate(1787.287 97)">
					<tspan x={-208.8} y={20}>
						{'SOLUCIONES EN SALUD'}
					</tspan>
				</text>
				<g className="f-selected" transform="translate(7.897)">
					<path
						className="a-selected"
						d="M626.415,0H0V1080.1H960.343l-123.1-684.838C801.968,128,718.743,0,626.415,0"
						transform="translate(0)"
					/>
				</g>
				<text className="g-selected" transform="translate(333.287 277)">
					<tspan x={0} y={0}>
						{'ORTOPEDIA'}
					</tspan>
				</text>
				<path
					className="h-selected"
					d="M314.957,344.276,388.68,447.214a2.917,2.917,0,0,1,.524,1.654l.419,80.587a2.79,2.79,0,0,1-2.733,2.825l-10.963.054a2.772,2.772,0,0,1-2.754-2.793l-.147-28.581-39.631.2.147,28.592a2.776,2.776,0,0,1-2.733,2.825l-10.963.054a2.756,2.756,0,0,1-2.743-2.792l-.377-74.035a2.767,2.767,0,0,1,2.722-2.825l10.963-.064a2.788,2.788,0,0,1,2.754,2.8l.147,28.581,39.631-.2-.157-30.579-66.938-93.487c-4.47,5.083-15.741-.922-18.826,0-8.8,2.648,10-3.1,2.954,0-12.267,5.389-8.42,11.421-4.232,0,5.86-15.985-5.737-16.729,26.993-16.906a2.7,2.7,0,0,1,2.22,1.149m32.1-103.174L465.282,201a2.724,2.724,0,0,0,1.361-1.031l45.85-65.443a2.862,2.862,0,0,0-.628-3.92l-8.9-6.563a2.691,2.691,0,0,0-3.822.644l-16.271,23.211-32.187-23.726,16.261-23.211a2.85,2.85,0,0,0-.618-3.92l-8.9-6.563a2.681,2.681,0,0,0-3.822.644l-42.123,60.115a2.863,2.863,0,0,0,.618,3.931l8.911,6.563a2.7,2.7,0,0,0,3.822-.644L441.1,137.873,473.282,161.6,455.89,186.421,348.525,222.842l-46.248-34.091-.09-17.72-.5-98.279,17.392-24.822,32.186,23.726L335.008,94.868a2.852,2.852,0,0,0,.628,3.92l8.9,6.563a2.691,2.691,0,0,0,3.822-.644L390.481,44.58a2.852,2.852,0,0,0-.628-3.92l-8.9-6.563a2.7,2.7,0,0,0-3.822.644L360.86,57.952,328.684,34.237l16.261-23.221a2.862,2.862,0,0,0-.628-3.92l-8.9-6.563a2.681,2.681,0,0,0-3.822.644L285.744,66.62a2.907,2.907,0,0,0-.513,1.654L285.88,196a2.817,2.817,0,0,0,1.141,2.266L344.6,240.715a2.69,2.69,0,0,0,2.461.387m199.066,16.841,3.33-10.719a2.829,2.829,0,0,0-1.78-3.534l-74.833-24.5a2.694,2.694,0,0,0-1.7.011L352.923,259.307a2.744,2.744,0,0,0-1.748,1.815L329.616,330.41a2.856,2.856,0,0,0,.4,2.513l73.712,102.949a2.8,2.8,0,0,0,1.382,1.01l74.833,24.51a2.726,2.726,0,0,0,3.445-1.826l3.33-10.708a2.806,2.806,0,0,0-1.77-3.534l-26.553-8.7,12.052-38.731L497,406.582a2.732,2.732,0,0,0,3.445-1.815l3.33-10.719a2.829,2.829,0,0,0-1.78-3.534L433.232,368a2.715,2.715,0,0,0-3.434,1.826l-3.34,10.719a2.813,2.813,0,0,0,1.78,3.523l26.543,8.7L442.739,431.5l-28.4-9.291-66.949-93.5,17.318-55.647,107.365-36.421,28.386,9.3-12.041,38.731-26.553-8.7a2.742,2.742,0,0,0-3.445,1.826l-3.33,10.719a2.817,2.817,0,0,0,1.78,3.523l68.749,22.512a2.728,2.728,0,0,0,3.445-1.815l3.34-10.719a2.838,2.838,0,0,0-1.78-3.534L504.075,289.8l12.052-38.731,26.553,8.7a2.743,2.743,0,0,0,3.445-1.826"
					transform="translate(-281.688 259.629)"
				/>
				<text className="i-selected" transform="translate(333.287 306)">
					<tspan x={0} y={23} xmlSpace="preserve">
						{'Mediante las l\xEDneas de:  '}
					</tspan>
				</text>
				<text className="i-selected" transform="translate(333.287 536)">
					<tspan x={0} y={23}>
						{'Nuestro modelo integral de servicio de '}
					</tspan>
					<tspan x={0} y={51}>
						{'ortopedia ofrece disponibilidad 24/7 los '}
					</tspan>
					<tspan x={0} y={79}>
						{'365 d\xEDas del a\xF1o, con un servicio que '}
					</tspan>
					<tspan x={0} y={107}>
						{'ofrece acompa\xF1amiento en el quir\xF3fano '}
					</tspan>
					<tspan x={0} y={135}>
						{'y servicio posventa. '}
					</tspan>
					<tspan x={0} y={163} />
					<tspan x={0} y={191}>
						{'Contamos con una red log\xEDstica de '}
					</tspan>
					<tspan x={0} y={219}>
						{'ortopedia para atenci\xF3n de cirug\xEDas en '}
					</tspan>
					<tspan x={0} y={247}>
						{'ciudades principales e intermedias de '}
					</tspan>
					<tspan x={0} y={275}>
						{'Colombia y Costa Rica. '}
					</tspan>
				</text>
				<text className="i-selected" transform="translate(378.287 374)">
					<tspan x={0} y={23}>
						{'Trauma '}
					</tspan>
					<tspan x={0} y={51}>
						{'Reemplazo articular '}
					</tspan>
					<tspan x={0} y={79}>
						{'Artroscopia '}
					</tspan>
					<tspan x={0} y={107}>
						{'Cr\xE1neo y maxilofacial '}
					</tspan>
				</text>
				<circle
					className="h-selected"
					cx={3}
					cy={3}
					r={3}
					transform="translate(366.287 387)"
				/>
				<circle
					className="h-selected"
					cx={3}
					cy={3}
					r={3}
					transform="translate(366.287 415)"
				/>
				<circle
					className="h-selected"
					cx={3}
					cy={3}
					r={3}
					transform="translate(366.287 442)"
				/>
				<circle
					className="h-selected"
					cx={3}
					cy={3}
					r={3}
					transform="translate(366.287 470)"
				/>
				<g
					className="j-selected"
					transform="translate(461.287 259.629)">
					<path
						className="a-selected"
						d="M529.164,771.978l20.352-52.672c36.335-94.037,120.843-154.8,215.293-154.8h543.534v-2.544H764.808c-46.664,0-91.853,14.756-130.68,42.674s-68.84,67.231-86.791,113.69l-20.73,53.652Z"
						transform="translate(152.506 49.902)"
					/>
					<path
						className="h-selected"
						d="M1319.7,192.273,1189.589,529.081c-36.335,94.037-120.842,154.8-215.292,154.8H430.763v2.546H974.3c46.663,0,91.852-14.758,130.68-42.675s68.84-67.231,86.791-113.691l130.224-337.09q-1.145-.346-2.288-.7"
						transform="translate(-56.097 17.073)"
					/>
					<path
						className="h-selected"
						d="M1509.814,0a225.569,225.569,0,0,0-88.354,38.56c-38.828,27.918-68.84,67.231-86.791,113.691l-146.261,378.6c.779.188,1.559.379,2.339.564l146.1-378.188c30.8-79.715,96.22-135.511,172.966-150.66Z"
						transform="translate(-48.966)"
					/>
					<path
						className="k-selected"
						d="M2.757,764.712c42.1-73,116.284-118.378,197.9-118.378H592.5v-2.544H200.655c-46.664,0-91.852,14.756-130.681,42.674A245.887,245.887,0,0,0,0,764.712Z"
						transform="translate(86.12 57.168)"
					/>
				</g>
				<circle
					onClick={onClose}
					className="l-selected"
					cx={27}
					cy={27}
					r={27}
					transform="translate(891.287 875) rotate(180)"
				/>
				<path
					onClick={onClose}
					className="a-selected"
					d="M0,0V21.7L18.792,10.851,9.816,5.668Z"
					transform="translate(858.501 837.148)"
				/>
				<a href="/productos">
					<path
						className="l-selected"
						d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
						transform="translate(164.238 81.774) rotate(180)"
					/>
					<text
						className="m-selected"
						transform="translate(240.628 80.768)">
						<tspan x={-71.52} y={0}>
							{'Volver'}
						</tspan>
					</text>
				</a>
			</svg>
		</div>
	)
}

export default SelectedImage
