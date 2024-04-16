

const SubmenuEtic: React.FC<{ref: any}> = ({ ref }) => {
	return (
		<svg
			viewBox="0 0 1920 354"
			className="absolute z-1"
			style={{ zIndex: 1 }}
			ref={ref}>
			<defs>
				<style>
					{
						'.a-submenu-o{fill:none;}.b-submenu-o{fill:#001f5f;}.c-submenu-o{clip-path:url(#a-submenu-o);}.d-submenu-o,.h-submenu-o,.i-submenu-o{fill:#fff;}.e-submenu-o{fill:#e7002a;}.f-submenu-o{fill:url(#b-submenu-o);}.g-submenu-o{opacity:0.8;mix-blend-mode:multiply;isolation:isolate;fill:url(#c-submenu-o);}.h-submenu-o{font-size:42px;font-family:"Kiona-Bold";font-weight:700;}.i-submenu-o{font-size:40px;font-family:Silka-Regular, Silka;}.j-submenu-o{font-family:Silka-SemiBold, Silka;font-weight:600;}'
					}
				</style>
				<clipPath id="a-submenu-o">
					<rect
						className="a-submenu-o"
						width={1427.387}
						height={206.155}
					/>
				</clipPath>
				<pattern
					id="b-submenu-o"
					preserveAspectRatio="xMidYMid slice"
					width="100%"
					height="100%"
					viewBox="0 0 7952 5304">
					<image
						width={7952}
						height={5304}
						xlinkHref="/images/navbar/etic-1.jpg"
					/>
				</pattern>
				<linearGradient
					id="c-submenu-o"
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
						className="b-submenu-o"
						width={1427.387}
						height={206.155}
						transform="translate(0 126.409)"
					/>
					<g transform="translate(0 126.409)">
						<g className="c-submenu-o">
							<path
								className="d-submenu-o"
								d="M1189.053,402.13l-.541-.21,41.367-92.276a55.308,55.308,0,0,1,21.556-24.336,61.508,61.508,0,0,1,32.454-9.135h184.873v.544H1283.888c-23.457,0-44.444,13.007-53.468,33.136Z"
								transform="translate(-5.245 -137.554)"
							/>
							<path
								className="d-submenu-o"
								d="M369.429,0l.638.247L321.252,109.14a65.276,65.276,0,0,1-25.436,28.719,72.593,72.593,0,0,1-38.3,10.779H39.353V148H257.516c27.681,0,52.448-15.349,63.1-39.1Z"
								transform="translate(-0.174 -117.002)"
							/>
							<path
								className="e-submenu-o"
								d="M1442.394,155.049,1386.479,279.8c-9.024,20.13-30.01,33.136-53.468,33.136h-28.562v0H1169.46A61.52,61.52,0,0,0,1137,322.063a55.312,55.312,0,0,0-21.555,24.336L581.086,471.147l.541.21L1115.99,346.61c9.025-20.13,30.012-33.136,53.47-33.136h28.562v0h134.99a61.522,61.522,0,0,0,32.455-9.135,55.319,55.319,0,0,0,21.556-24.336l55.913-124.748Z"
								transform="translate(-2.564 -128.54)"
							/>
						</g>
					</g>
				</g>
				<a href="/codigo-linea-etica">
					<path
						className="b-submenu-o"
						d="M367.709,339.246H0V0H586.714l-62.14,206.671a173.939,173.939,0,0,1-15.633,36.562c-36.385,63.36-89.124,96.013-141.232,96.013"
						transform="translate(0 104)"
					/>
					<path
						className="f-submenu-o"
						d="M366,457.568H0V126.409H579.611L519,328.153a169.849,169.849,0,0,1-15.248,35.69C468.267,425.694,416.828,457.568,366,457.568"
						transform="translate(0 -22.409)"
					/>
					<path
						className="g-submenu-o"
						d="M366,457.568H0V126.409H579.611L519,328.153a169.849,169.849,0,0,1-15.248,35.69C468.267,425.694,416.828,457.568,366,457.568"
						transform="translate(0 -22.409)"
					/>
					<text
						className="h-submenu-o"
						transform="translate(146 360)">
						<tspan x={0} y={0}>
							{'\xC9TICA Y'}
						</tspan>
						<tspan x={0} y={37}>
							{'COMPLIANCE'}
						</tspan>
					</text>
				</a>
			</g>
			<a href="/codigo-linea-etica">
				<text className="i-submenu-o" transform="translate(692 57)">
					<tspan x={0} y={38}>
						{'Descubra '}
					</tspan>
					<tspan className="j-submenu-o" y={38}>
						{'nuestro compromiso inquebrantable '}
					</tspan>
					<tspan x={0} y={80}>
						{'con la \xE9tica y el cumplimiento normativo.'}
					</tspan>
				</text>
			</a>
		</svg>
	)
}

export default SubmenuEtic
