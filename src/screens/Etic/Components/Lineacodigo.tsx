import React from 'react'
import Cuadropop from './cuadropop'

const Lineacodigo: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	/** States */
	const [showPop, setShowPop] = React.useState<boolean>(false)

	return (
		<div>
			{
				!showPop ? (
					<svg viewBox="0 0 1938 975">
				<defs>
					<style>
						{
							'.a-linea,.d-linea,.e-linea,.n-linea{fill:#fff;}.a-linea{stroke:#707070;}.b-linea{fill:none;}.c-linea{fill:url(#a-linea);}.e-linea,.l-linea,.n-linea{font-size:24px;}.e-linea{font-family:Silka-SemiBold, Silka;font-weight:600;}.f-linea{fill:#e7002a;}.g-linea{clip-path:url(#b-linea);}.h-linea,.m-linea{fill:#e40032;}.i-linea{clip-path:url(#c-linea);}.j-linea,.k-linea,.p-linea{fill:#001f5f;}.k-linea{font-size:55px;}.k-linea,.n-linea,.p-linea{font-family:"Kiona-Bold";}.k-linea,.m-linea,.n-linea,.p-linea{font-weight:700;}.l-linea{fill:#182856;font-family:Silka-Regular, Silka;}.m-linea{font-size:32px;font-family:Silka-Bold, Silka;}.o-linea{fill:rgba(67,67,67,0.09);}.p-linea{font-size:42px;}.q-linea{filter:url(#f-linea);}.r-linea{filter:url(#d-linea);}'
						}
					</style>
					<pattern
						id="a-linea"
						width={1}
						height={1}
						viewBox="250.125 0 798.177 975.988">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1463.982}
							height={975.988}
							xlinkHref="/images/eticalinea.jpg"
						/>
					</pattern>
					<clipPath id="b-linea">
						<rect className="a-linea" width={432} height={267} />
					</clipPath>
					<clipPath id="c-linea">
						<rect
							className="b-linea"
							width={272.39}
							height={138.127}
						/>
					</clipPath>
					<filter
						id="d-linea"
						x={830}
						y={755.566}
						width={643.1}
						height={80.849}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="e-linea" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="e-linea" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="f-linea"
						x={0}
						y={0}
						width={1938}
						height={92}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="g-linea" />
						<feFlood floodOpacity={0.302} />
						<feComposite operator="in" in2="g-linea" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g>
					<g transform="translate(-36 1)" onClick={onClose}>
						<path
							className="c-linea"
							d="M798.177,0,695.867,662.362c-29.32,189.821-98.5,313.627-175.229,313.627H0V0Z"
							transform="translate(36)"
						/>
						<path
							className="d-linea"
							d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
							transform="translate(237.725 115.762) rotate(180)"
						/>
						<text
							className="e-linea"
							transform="translate(268.852 114.756)">
							<tspan x={-71.52} y={0}>
								{'Volver'}
							</tspan>
						</text>
					</g>
					<g transform="translate(229 -0.14)">
						<path
							className="f-linea"
							d="M2400.879.03l-.467,975.959H733.2c105.766,0,201.118-123.746,241.531-313.474L1115.753.473Z"
							transform="translate(-647.2 1.14)"
						/>
					</g>
					<g transform="translate(641.021)">
						<path
							className="d-linea"
							d="M2375.2,0V975.988H733.2c102.1,0,194.155-123.806,233.169-313.627L1102.508,0Z"
							transform="translate(-1031.222 1)"
						/>
						<g
							className="g-linea"
							transform="translate(1278.978 976.988) rotate(180)">
							<path
								className="h-linea"
								d="M229.59,247.8,284.024,321.9a2.064,2.064,0,0,1,.387,1.191l.309,58.005a2.033,2.033,0,0,1-2.018,2.033l-8.094.039a2.021,2.021,0,0,1-2.033-2.01l-.108-20.572-29.262.147.108,20.58a2.022,2.022,0,0,1-2.018,2.033l-8.094.039a2.009,2.009,0,0,1-2.026-2.01l-.278-53.289a2.016,2.016,0,0,1,2.01-2.033L241,326a2.032,2.032,0,0,1,2.033,2.018l.108,20.572,29.262-.147-.116-22.01-49.424-67.29-42.049.216L132.1,327.171l.108,22,29.269-.155-.108-20.572a2.016,2.016,0,0,1,2.01-2.033l8.094-.046a2.023,2.023,0,0,1,2.033,2.018l.278,53.289a2.026,2.026,0,0,1-2.01,2.033l-8.094.039a2.021,2.021,0,0,1-2.033-2.01l-.108-20.58-29.262.155.108,20.58a2.033,2.033,0,0,1-2.018,2.033l-8.094.039a2.026,2.026,0,0,1-2.033-2.01l-.3-58.005a2.022,2.022,0,0,1,.379-1.191l53.653-74.666a2.044,2.044,0,0,1,1.631-.843l52.354-.271a2.011,2.011,0,0,1,1.639.827m-84.3-60.58L57.708,159.278a1.959,1.959,0,0,0-1.245.008L1.388,177.492A2.025,2.025,0,0,0,.1,180.051l2.536,7.685A2.022,2.022,0,0,0,5.2,189.019l19.528-6.455,9.192,27.785L14.384,216.8a2.025,2.025,0,0,0-1.283,2.559l2.536,7.685A2.032,2.032,0,0,0,18.2,228.33l50.6-16.73a2.019,2.019,0,0,0,1.283-2.559l-2.536-7.685a2.031,2.031,0,0,0-2.559-1.283l-19.536,6.463-9.184-27.785,20.889-6.911L136.7,197.229l6.5,19.652,6.7,20.263-48.72,67.808-20.9,6.9L71.09,284.071l19.536-6.455a2.025,2.025,0,0,0,1.283-2.559l-2.543-7.685a2.02,2.02,0,0,0-2.551-1.283l-50.6,16.73a2.025,2.025,0,0,0-1.283,2.559l2.536,7.685a2.025,2.025,0,0,0,2.559,1.283l19.536-6.463,9.192,27.785L49.219,322.13a2.023,2.023,0,0,0-1.291,2.559l2.543,7.685a2.025,2.025,0,0,0,2.559,1.283L108.1,315.443a2.026,2.026,0,0,0,1.013-.742l53.645-74.658a2,2,0,0,0,.278-1.817l-16.436-49.7a2.027,2.027,0,0,0-1.307-1.3m95.122,50.6a2.013,2.013,0,0,0,.294,1.809l54.426,74.1a2.064,2.064,0,0,0,1.021.727L351.407,332.1c1.067.34-3.681-1.239-3.341-2.306,1.263-3.949-3.411-3.244-5.242-5.529-1.269-1.6-3.1-4.223-5.715-7.057-.787-.87,1.73-1.87-1.613-2.936.977-.7-3.172-1.68-2.777-2.484,1.2-2.214.032-2.56-4.066-5.021-4.129-2.482-5.339-7.475-8.648-11.624-5.826-7.307-15.432-17.886-19.183-23.688-3.166-4.9-.668-5.432-1.513-2.781a2.014,2.014,0,0,0,1.314,2.536l23.314,39.375L302.972,303.9l-49.432-67.3M151.454,173.711,193.6,142.664a2.036,2.036,0,0,0,.827-1.647c-.025-3.716-4.9-5.952-7.3-9.018-4.407-5.64-8.788-11.075-13.44-16.6-12.694-15.07-23.795-28.761-31.9-40.343-12.733-18.187-8.338-10.642,5.756,8.053,9.187,12.186,24.971,26.213,34.714,52.833L148.4,160.878,68.825,135.605l-13.05-17.719L79.339,100.53l12.2,16.567a2.025,2.025,0,0,0,2.83.425l6.517-4.8a2.031,2.031,0,0,0,.433-2.83l-31.612-42.9a2.019,2.019,0,0,0-2.83-.433l-6.517,4.8a2.024,2.024,0,0,0-.425,2.83l12.2,16.567L48.578,108.114,36.371,91.547a2.026,2.026,0,0,0-2.83-.433l-6.517,4.8a2.025,2.025,0,0,0-.425,2.83l34.4,46.7a1.984,1.984,0,0,0,1.013.727l87.623,27.839a2.031,2.031,0,0,0,1.817-.3"
								transform="translate(-82.986 62.373) rotate(-51)"
							/>
						</g>
						<g transform="translate(1024.564)">
							<g className="i-linea">
								<path
									className="j-linea"
									d="M104.943,138.127A72.539,72.539,0,0,1,37.81,93.377L0,2.657V0L38.753,92.984a71.521,71.521,0,0,0,66.19,44.121H272.39v1.023Z"
								/>
							</g>
						</g>
					</g>
					<text
						className="k-linea"
						transform="translate(692 219.271)">
						<tspan x={0} y={55}>
							{'L\xEDnea \xE9tica'}
						</tspan>
					</text>
					<text
						className="l-linea"
						transform="translate(692 335.868)">
						<tspan x={0} y={23}>
							{
								'La l\xEDnea \xE9tica es un canal dise\xF1ado para que empleados, proveedores, aliados '
							}
						</tspan>
						<tspan x={0} y={51}>
							{
								'estrat\xE9gicos y clientes puedan reportar de forma an\xF3nima y confidencial '
							}
						</tspan>
						<tspan x={0} y={79}>
							{
								'presuntas violaciones a nuestro C\xF3digo de \xE9tica, as\xED como posibles actos '
							}
						</tspan>
						<tspan x={0} y={107}>
							{
								'incorrectos, fraudes, corrupci\xF3n, acoso y otros aspectos que afecten la '
							}
						</tspan>
						<tspan x={0} y={135}>
							{'imagen y buen nombre de la compa\xF1\xEDa.'}
						</tspan>
						<tspan x={0} y={163} />
						<tspan x={0} y={191}>
							{
								'Las denuncias pueden realizarse a trav\xE9s del correo electr\xF3nico los 7 d\xEDas de la '
							}
						</tspan>
						<tspan x={0} y={219}>
							{'semana, las 24 horas del d\xEDa.'}
						</tspan>
					</text>
					<text
						className="m-linea"
						transform="translate(692 607.434)">
						<tspan x={0} y={30}>
							{
								'\xBFC\xF3mo puedo comunicarme con la l\xEDnea \xE9tica?'
							}
						</tspan>
					</text>
					<text className="l-linea" transform="translate(692 670)">
						<tspan x={0} y={23}>
							{
								'A trav\xE9s del correo electr\xF3nico: linea.e-lineatica@grupoamarey.c-lineaom'
							}
						</tspan>
					</text>
					<g transform="translate(60.899 117.86)" onClick={() => setShowPop(true)}>
						<g
							className="r-linea"
							transform="matrix(1, 0, 0, 1, -69.9, -122.86)">
							<path
								className="j-linea"
								d="M625.1,0H79.3C47.339,0,18.636,18.339,6.962,46.219L0,62.849H543.247c34.055,0,64.547-19.772,76.544-49.634Z"
								transform="translate(839 761.57)"
							/>
						</g>
						<text
							className="n-linea"
							transform="translate(1081.651 679.63)">
							<tspan x={-248.568} y={0}>
								{
									'\xBFCu\xE1ndo debo utilizar la l\xEDnea \xE9tica?'
								}
							</tspan>
						</text>
					</g>
					<g transform="translate(8 1)">
						<g
							className="q-linea"
							transform="matrix(1, 0, 0, 1, -9, -6)">
							<rect
								className="o-linea"
								width={1945}
								height={74}
								transform="translate(9 6)"
							/>
						</g>
					</g>
					<text
						className="p-linea"
						transform="translate(693.578 11.566)">
						<tspan x={43.834} y={42}>
							{'\xC9TICA Y COMPLIANCE'}
						</tspan>
					</text>
				</g>
			</svg>
				) : (
					<Cuadropop onClose={() => setShowPop(false)} />
				)
			}
		</div>
	)
}

export default Lineacodigo
