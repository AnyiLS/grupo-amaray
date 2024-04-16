import React from 'react'

const SubmenuContact: React.FC<{ ref: any }> = ({ ref }): JSX.Element => {
	return (
		<svg
			viewBox="0 0 1920 354"
			className="absolute z-1 top-[97%]"
			style={{ zIndex: 1 }}
			ref={ref}>
			<defs>
				<style>
					{
						'.a-submenu-t{fill:none;}.b-submenu-t{fill:#001F5F;}.c-submenu-t{clip-path:url(#a-submenu-t);}.d-submenu-t,.h-submenu-t,.i-submenu-t{fill:#fff;}.e-submenu-t{fill:#E6002A;}.f-submenu-t{fill:url(#b-submenu-t);}.g-submenu-t{opacity:0.8;mix-blend-mode:multiply;isolation:isolate;fill:url(#c-submenu-t);}.h-submenu-t{font-size:42px;font-family:"Kiona-Bold";font-weight:700;}.i-submenu-t{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
				<clipPath id="a-submenu-t">
					<rect
						className="a-submenu-t"
						width={1427.387}
						height={206.155}
					/>
				</clipPath>
				<pattern
					id="b-submenu-t"
					width={1}
					height={1}
					patternTransform="matrix(-1, 0, 0, 1, 1159.222, 0)"
					viewBox="0 26.51 546.666 312.336">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={579.611}
						height={386.407}
						xlinkHref="/images/navbar/contact-image.jpg"
					/>
				</pattern>
				<linearGradient
					id="c-submenu-t"
					x1={0.5}
					x2={0.5}
					y2={1}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
					<stop offset={1} stopColor="#001f5f" />
				</linearGradient>
			</defs>
			<g transform="translate(0 -104)">
				<g transform="translate(492.612 -22.409)">
					<rect
						className="b-submenu-t"
						width={1427.387}
						height={206.155}
						transform="translate(0 126.409)"
					/>
					<g transform="translate(0 126.409)">
						<g className="c-submenu-t">
							<path
								className="d-submenu-t"
								d="M1188.983,343.709l-.471-.113,36.034-49.477c3.884-5.333,10.376-9.844,18.777-13.049a80.187,80.187,0,0,1,28.27-4.9h161.04v.292h-161.04c-20.433,0-38.714,6.974-46.575,17.767Z"
								transform="translate(-5.245 -137.554)"
							/>
							<path
								className="d-submenu-t"
								d="M369.429,0l.638.247L321.252,109.14a65.276,65.276,0,0,1-25.436,28.719,72.593,72.593,0,0,1-38.3,10.779H39.353V148H257.516c27.681,0,52.448-15.349,63.1-39.1Z"
								transform="translate(-0.174 -117.002)"
							/>
							<path
								className="e-submenu-t"
								d="M1429.074,155.049,1374.06,271.5c-8.879,18.79-29.526,30.931-52.606,30.931h-28.1v0H1160.54a62.99,62.99,0,0,0-31.932,8.527,52.612,52.612,0,0,0-21.208,22.717l.532.2c8.879-18.79,29.528-30.931,52.608-30.931h28.1v0h132.814a62.992,62.992,0,0,0,31.932-8.527,52.62,52.62,0,0,0,21.208-22.717l55.012-116.447Z"
								transform="translate(-2.218 -128.54)"
							/>
						</g>
					</g>
				</g>
				<a href="/contactenos">
					<path
						className="b-submenu-t"
						d="M367.709,339.246H0V0H586.714l-62.14,206.671a173.939,173.939,0,0,1-15.633,36.562c-36.385,63.36-89.124,96.013-141.232,96.013"
						transform="translate(0 104)"
					/>
					<path
						className="f-submenu-t"
						d="M366,457.568H0V126.409H579.611L519,328.153a169.849,169.849,0,0,1-15.248,35.69C468.267,425.694,416.828,457.568,366,457.568"
						transform="translate(0 -22.409)"
					/>
					<path
						className="g-submenu-t"
						d="M366,457.568H0V126.409H579.611L519,328.153a169.849,169.849,0,0,1-15.248,35.69C468.267,425.694,416.828,457.568,366,457.568"
						transform="translate(0 -22.409)"
					/>
				</a>

				<text className="h-submenu-t" transform="translate(292 395)">
					<tspan x={-152.166} y={0}>
						{'CONT\xC1CTENOS'}
					</tspan>
				</text>
			</g>
			<a href="/contactenos">
				<text className="i-submenu-t" transform="translate(692 133)">
					<tspan x={0} y={23}>
						{
							'Cont\xE1ctenos y descubra c\xF3mo podemos ayudarle.\u200B'
						}
					</tspan>
				</text>
				<text className="h-submenu-t" transform="translate(692 35)">
					<tspan x={0} y={42}>
						{'\xBFTiene alguna pregunta o necesita '}
					</tspan>
					<tspan x={0} y={84}>
						{'informaci\xF3n adicional?'}
					</tspan>
				</text>
			</a>
		</svg>
	)
}

export default SubmenuContact
