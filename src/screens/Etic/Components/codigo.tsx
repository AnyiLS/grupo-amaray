import React from 'react'

const Codigo: React.FC<{onClose: () => void}> = ({ onClose }) => {
	/** States */
	const [hover, setHover] = React.useState<boolean>(false)
	const [hover2, setHover2] = React.useState<boolean>(false)

	return (
		<div>
			<svg viewBox="0 0 1938 975">
				<defs>
					<style>
						{
							'.h-codigo:hover {fill: #e40032;} .code:hover {fill: #fff} .code:hover .h-codigo {fill:#e40032} .a-codigo{fill:none;}.b-codigo{fill:#e40032;}.c-codigo{fill:url(#a-codigo);}.d-codigo,.h-codigo,.i-codigo{fill:#fff;}.e-codigo,.g-codigo,.m-codigo,.n-codigo{fill:#001f5f;}.e-codigo{font-size:55px;}.e-codigo,.h-codigo,.m-codigo{font-family:"Kiona-Bold";font-weight:700;}.f-codigo{fill:#182856;font-family:Silka-Regular, Silka;}.f-codigo,.h-codigo,.i-codigo,.n-codigo{font-size:24px;}.i-codigo,.n-codigo{font-family:Silka-SemiBold, Silka;font-weight:600;}.j-codigo{clip-path:url(#f-codigo);}.k-codigo{fill:#e7002a;}.l-codigo{fill:rgba(67,67,67,0.09);}.m-codigo{font-size:42px;}.o-codigo{filter:url(#g-codigo);}.p-codigo{filter:url(#d-codigo);}.q-codigo{filter:url(#b-codigo);}'
						}
					</style>
					<pattern
						id="a-codigo"
						width={1}
						height={1}
						viewBox="439.805 276.947 594.479 699.042">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1735.09}
							height={975.988}
							xlinkHref="/images/codigoetica.jpg"
						/>
					</pattern>
					<filter
						id="b-codigo"
						x={416}
						y={658.656}
						width={334}
						height={80.849}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="c-codigo" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="c-codigo" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="d-codigo"
						x={774}
						y={658.656}
						width={334}
						height={80.849}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="e-codigo" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="e-codigo" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="f-codigo">
						<rect
							className="a-codigo"
							width={1106}
							height={711.947}
						/>
					</clipPath>
					<filter
						id="g-codigo"
						x={0}
						y={0}
						width={1938}
						height={92}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="h-codigo" />
						<feFlood floodOpacity={0.302} />
						<feComposite operator="in" in2="h-codigo" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g transform="translate(8.364 5.673)">
					<g transform="translate(563.636 -4.673)">
						<path
							className="b-codigo"
							d="M0,0H1920V975.988H0Z"
							transform="translate(-554)"
						/>
						<path
							className="c-codigo"
							d="M1563.2,0V975.988h-830c109.061,0,207.383-123.806,249.056-313.627L1127.67,0Z"
							transform="translate(-197.2)"
						/>
					</g>
					<g transform="translate(-6 -8)">
						<path
							className="d-codigo"
							d="M1247.14.136,1099.921,662.405C1057.732,852.2,958.19,975.988,847.776,975.988l-1072.412-.463V-.327Z"
							transform="translate(224.637 0.327)"
						/>
						<text
							className="e-codigo"
							transform="translate(278.637 273.483)">
							<tspan x={0} y={55}>
								{'C\xF3digo de \xE9tica'}
							</tspan>
						</text>
						<text
							className="f-codigo"
							transform="translate(278.637 361.515)">
							<tspan x={0} y={23}>
								{
									'En el Grupo Amarey estamos comprometidos en mantener relaciones honestas, '
								}
							</tspan>
							<tspan x={0} y={51}>
								{
									'constructivas e id\xF3neas con nuestros grupos de inter\xE9s. Guiados por nuestros '
								}
							</tspan>
							<tspan x={0} y={79}>
								{
									'valores corporativos hemos creado el presente C\xF3digo de \xE9tica, a trav\xE9s del '
								}
							</tspan>
							<tspan x={0} y={107}>
								{
									'cual establecemos las reglas de conducta \xE9tica que deben ser seguidas y '
								}
							</tspan>
							<tspan x={0} y={135}>
								{
									'observadas en su comportamiento diario por todas las personas vinculadas a '
								}
							</tspan>
							<tspan x={0} y={163}>
								{
									'la empresa, tanto los miembros de la junta directiva, directores, empleados de '
								}
							</tspan>
							<tspan x={0} y={191}>
								{
									'todos los niveles, proveedores, asesores y contratistas, as\xED como para los '
								}
							</tspan>
							<tspan x={0} y={219}>
								{'empleados indirectos.'}
							</tspan>
						</text>
						<g transform="translate(416.637 658.983)" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
							<g
								className="q-codigo "
								transform="matrix(1, 0, 0, 1, -425, -664.66)">
								<path
									className={`g-codigo`}
									style={{ fill: hover ? '#fff' : '#001f5f'}}
									d="M316,0H64.816C38.69,0,15.231,18.339,5.69,46.219L0,62.849H249.1c27.834,0,52.755-19.772,62.56-49.634Z"
									transform="translate(425 664.66)"
								/>
							</g>
							<text
								className={`h-codigo`}
								style={{ fill: !hover ? '#fff' : '#e40032'}}
								transform="translate(158 30.925)">
								<tspan x={-72.612} y={0}>
									{'Ver C\xF3digo'}
								</tspan>
								<tspan x={-52.848} y={20}>
									{'de \xE9tica'}
								</tspan>
							</text>
						</g>
						<g transform="translate(774.637 658.983)" onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
							<g
								className={`p-codigo`}
								transform="matrix(1, 0, 0, 1, -783, -664.66)">
								<path
									className="g-codigo"
									style={{ fill: hover2 ? '#fff' : '#001f5f'}}
									d="M316,0H64.816C38.69,0,15.231,18.339,5.69,46.219L0,62.849H249.1c27.834,0,52.755-19.772,62.56-49.634Z"
									transform="translate(783 664.66)"
								/>
							</g>
							<text
								className={`h-codigo`}
								style={{ fill: !hover2 ? '#fff' : '#e40032'}}
								transform="translate(158 29.425)">
								<tspan x={-93.84} y={0}>
									{'Ver Manual de'}
								</tspan>
								<tspan x={-77.088} y={20}>
									{'Compliance'}
								</tspan>
							</text>
						</g>
						<g transform="translate(140.637 28.083)">
							<path
								className="d-codigo"
								d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
								transform="translate(61.725 24.005) rotate(180)"
							/>
							<text
								className="i-codigo"
								transform="translate(92.852 23)">
								<tspan x={-71.52} y={0}>
									{'Volver'}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0.636 264.369)">
						<g className="j-codigo">
							<path
								className="g-codigo"
								d="M1188.511,750.229l-17.289-47.217c-30.866-84.3-102.655-138.769-182.889-138.769H526.607v-2.281H988.334c39.641,0,78.028,13.228,111.011,38.255s58.479,60.269,73.728,101.917l17.61,48.1Z"
								transform="translate(-536.241 -13.462)"
							/>
							<path
								className="b-codigo"
								d="M432.707,192.273,543.239,494.2C574.1,578.5,645.893,632.971,726.126,632.971h461.727v2.282H726.126c-39.64,0-78.027-13.229-111.011-38.256s-58.479-60.269-73.728-101.918L430.763,192.9q.972-.31,1.944-.625"
								transform="translate(-451.226 -4.606)"
							/>
							<path
								className="k-codigo"
								d="M1188.408,0a186.7,186.7,0,0,1,75.056,34.567c32.984,25.027,58.479,60.269,73.728,101.918l124.247,339.4c-.662.169-1.324.34-1.987.506L1335.341,137.362C1309.175,65.9,1253.6,15.884,1188.408,2.3Z"
								transform="translate(-1374.482)"
							/>
							<path
								className="k-codigo"
								d="M500.978,752.189C465.214,686.746,402.2,646.07,332.866,646.07H0v-2.281H332.866c39.641,0,78.028,13.228,111.012,38.255a216.918,216.918,0,0,1,59.443,70.146Z"
								transform="translate(602.68 -15.422)"
							/>
						</g>
					</g>
					<g transform="translate(-9.364 -4.673)">
						<g
							className="o-codigo"
							transform="matrix(1, 0, 0, 1, -9, -6)">
							<rect
								className="l-codigo"
								width={1942}						height={74}
								transform="translate(9 6)"
							/>
						</g>
					</g>
					<text
						className="m-codigo"
						transform="translate(694.214 10.893)">
						<tspan x={43.834} y={42}>
							{'\xC9TICA Y COMPLIANCE'}
						</tspan>
					</text>
					<g transform="translate(0)" onClick={onClose}>
						<path
							className="g-codigo"
							d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
							transform="translate(202.361 116.089) rotate(180)"
						/>
						<text
							className="n-codigo"
							transform="translate(233.488 115.083)">
							<tspan x={-71.52} y={0}>
								{'Volver'}
							</tspan>
						</text>
					</g>
				</g>
			</svg>
		</div>
	)
}

export default Codigo
