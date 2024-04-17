import React from 'react'
import useGeneral from 'hooks/general.hook'
import FilosofiaMobile from './FilosofiaMobile';

const Filosofia: React.FC = () => {
	/** Hooks */
	const { width } = useGeneral();

	return (
		<div>
			{width > 768 ? (
				<React.Fragment>
					<svg
				width="100%"
				height={'100%'}
				viewBox="0 0 1920 1474"
				preserveAspectRatio="none">
				<defs>
					<style>
						{
							'.a-filo{fill:#e7002a;stroke:#e40032;}.b-filo,.h-filo,.j-filo{fill:#001f5f;}.c-filo{fill:#fff;}.d-filo{fill:url(#e-filo);}.e-filo{fill:#e40032;}.f-filo{fill:url(#l-filo);}.g-filo{fill:#182856;font-size:24px;font-family:Silka-Regular, Silka;}.h-filo{font-size:70px;}.h-filo,.j-filo{font-family:Kiona-Bold, Kiona;font-weight:700;}.i-filo{fill:rgba(67,67,67,0.09);}.j-filo{font-size:42px;}.k-filo{filter:url(#m-filo);}.l-filo{filter:url(#j-filo);}.m-filo{filter:url(#h-filo);}.n-filo{filter:url(#f-filo);}.o-filo{filter:url(#c-filo);}.p-filo{filter:url(#a-filo);}'
						}
					</style>
					<filter
						id="a-filo"
						x={731}
						y={13.012}
						width={1246}
						height={663.275}
						filterUnits="userSpaceOnUse">
						<feOffset dx={4} dy={4} />
						<feGaussianBlur stdDeviation={4} result="b-filo" />
						<feFlood floodOpacity={0.251} />
						<feComposite operator="in" in2="b-filo" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="c-filo"
						x={32}
						y={15.27}
						width={855}
						height={801.232}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="d-filo" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="d-filo" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="e-filo"
						width={1}
						height={1}
						viewBox="175.069 0 718.525 671.002">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1163.175}
							height={773.86}
							xlinkHref="/images/filosofia1.jpg"
						/>
					</pattern>
					<filter
						id="f-filo"
						x={31.332}
						y={12.642}
						width={846.668}
						height={791.86}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="g-filo" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="g-filo" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="h-filo"
						x={24.332}
						y={837.725}
						width={1246}
						height={663.275}
						filterUnits="userSpaceOnUse">
						<feOffset dx={-4} dy={-4} />
						<feGaussianBlur stdDeviation={4} result="i-filo" />
						<feFlood floodOpacity={0.251} />
						<feComposite operator="in" in2="i-filo" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="j-filo"
						x={1083.029}
						y={697.509}
						width={886.303}
						height={801.232}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="k-filo" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="k-filo" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="l-filo"
						width={1}
						height={1}
						patternTransform="translate(1709.04 1542.465) rotate(-180)"
						viewBox="91.053 7.251 848.584 761.021">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1044.52}
							height={771.232}
							xlinkHref="/images/filo2.jpg"
						/>
					</pattern>
					<filter
						id="m-filo"
						x={32}
						y={0}
						width={1938}
						height={92}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="n-filo" />
						<feFlood floodOpacity={0.6} />
						<feComposite operator="in" in2="n-filo" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g transform="translate(-40 -16)">
					<path
						className="a-filo"
						d="M600.14,159.953v-1.974h43.821v.071h44.447c21.419,0,40.583-47.027,48.824-119.809l.016-.141L741.56,0h.58l-4.414,39c-.155,1.373-.315,2.732-.478,4.086-4.115,34.176-10.736,63.121-19.2,83.911-8.805,21.61-19.052,33.03-29.635,33.03H615.243v-.072Z"
						transform="translate(-559.14 791.583)"
					/>
					<path
						className="b-filo"
						d="M600.14,179.187v-2.211h698.193v.079h250.262c120.6,0,228.51-52.682,274.909-134.217l.089-.158L1847.874,0h3.266l-24.854,43.687q-1.307,2.308-2.693,4.577c-23.169,38.285-60.449,70.712-108.134,94-49.578,24.208-107.275,37-166.863,37H1136.632v-.08Z"
						transform="translate(-600.14 545.732)"
					/>
					<g className="p-filo" transform="matrix(1, 0, 0, 1, 0, -6)">
						<path
							className="c-filo"
							d="M1912.489,0,1809.395,433.854c-29.537,124.329-95.888,205.422-281.736,205.422H690.489L813.172,0Z"
							transform="translate(48.51 21.01)"
						/>
					</g>
					<g className="o-filo" transform="matrix(1, 0, 0, 1, 0, -6)">
						<path
							className="b-filo"
							d="M0,.286V783.518H640.728c27.291,0,50.335-17.363,53.794-40.5l29.387-170.822L837,.286Z"
							transform="translate(41 20.98)"
						/>
					</g>
					<g className="n-filo" transform="matrix(1, 0, 0, 1, 0, -6)">
						<path
							className="d-filo"
							d="M0,.286v773.86H634.349c27.019,0,50.316-11.871,53.259-40.02L716.7,565.349,828.668.286Z"
							transform="translate(40.33 18.36)"
						/>
					</g>
					<g className="m-filo" transform="matrix(1, 0, 0, 1, 0, -6)">
						<path
							className="c-filo"
							d="M1912.489,0,1809.395,433.854c-29.537,124.329-95.888,205.422-281.736,205.422H690.489L813.172,0Z"
							transform="translate(1952.82 1493) rotate(180)"
						/>
					</g>
					<g className="l-filo" transform="matrix(1, 0, 0, 1, 0, -6)">
						<path
							className="e-filo"
							d="M0,.286V783.518H664.691c28.312,0,52.217-17.363,55.806-40.5l30.486-170.822L868.3.286Z"
							transform="translate(1960.33 1493.03) rotate(180)"
						/>
					</g>
					<path
						className="f-filo"
						d="M0,.286V771.518H658.312c28.04,0,52.217-11.83,55.271-39.884l30.193-168.2L859.971.286Z"
						transform="translate(1961 1487.027) rotate(180)"
					/>
					<text className="g-filo" transform="translate(985 306)">
						<tspan x={0} y={23}>
							{
								'Somos un grupo empresarial orgullosamente colombiano '
							}
						</tspan>
						<tspan x={0} y={49}>
							{
								'que representa productos y servicios de\xA0calidad\xA0guiados '
							}
						</tspan>
						<tspan x={0} y={75}>
							{
								'por nuestra\xA0filosof\xEDa\xA0SER\xA0(Servicio, Educaci\xF3n, '
							}
						</tspan>
						<tspan x={0} y={101}>
							{'Relacionamiento).'}
						</tspan>
						<tspan x={0} y={127} />
						<tspan x={0} y={153}>
							{
								'Generamos valor a los pacientes, sus familias, instituciones '
							}
						</tspan>
						<tspan x={0} y={179}>
							{
								'de salud y accionistas con un talento humano excepcional, '
							}
						</tspan>
						<tspan x={0} y={205}>
							{
								'con sentido \xE9tico y altamente comprometido con la salud '
							}
						</tspan>
						<tspan x={0} y={231}>
							{'y la vida.'}
						</tspan>
					</text>
					<text
						className="g-filo"
						transform="translate(322 1129.866)">
						<tspan x={0} y={23}>
							{
								'En el 2025 el Grupo Amarey ser\xE1 el aliado\xA0preferido de '
							}
						</tspan>
						<tspan x={0} y={49}>
							{
								'las\xA0instituciones de salud y\xA0de los\xA0fabricantes de '
							}
						</tspan>
						<tspan x={0} y={75}>
							{
								'productos\xA0especializados,\xA0en\xA0Colombia y los pa\xEDses\xA0del '
							}
						</tspan>
						<tspan x={0} y={101}>
							{'\xE1rea andina y Centroam\xE9rica.'}
						</tspan>
						<tspan x={0} y={127} />
						<tspan x={0} y={153}>
							{
								'Esto ser\xE1 posible por nuestra trayectoria, reputaci\xF3n, por '
							}
						</tspan>
						<tspan x={0} y={179}>
							{
								'cumplir lo que prometemos y por la capacidad para '
							}
						</tspan>
						<tspan x={0} y={205}>
							{'ofrecer soluciones integrales innovadoras.'}
						</tspan>
					</text>
					<text className="h-filo" transform="translate(985 258)">
						<tspan x={0} y={0}>
							{'Misi\xF3n'}
						</tspan>
					</text>
					<text
						className="h-filo"
						transform="translate(322 1081.866)">
						<tspan x={0} y={0}>
							{'Visi\xF3n'}
						</tspan>
					</text>
					<g className="k-filo" transform="matrix(1, 0, 0, 1, 0, -6)">
						<rect
							className="i-filo"
							width={1920}
							height={74}
							transform="translate(41 6)"
						/>
					</g>
					<text className="j-filo" transform="translate(1001 60)">
						<tspan x={-106.722} y={0}>
							{'FILOSOF\xCDA'}
						</tspan>
					</text>
				</g>
			</svg>

			<svg viewBox="0 1435 1920 2206">
				<defs>
					<style>
						{
							'.a-filo1,.c-filo1,.g-filo1,.o-filo1,.q-filo1{fill:#001f5f;}.a-filo1{stroke:#001f5f;}.b-filo1{fill:#e7002a;stroke:#e40032;}.d-filo1{fill:#e40032;}.e-filo1{fill:none;}.f-filo1{fill:#182856;}.f-filo1,.q-filo1,.r-filo1{font-size:24px;font-family:Silka-Regular, Silka;}.g-filo1{font-size:70px;font-family:Kiona-Bold, Kiona;font-weight:700;}.h-filo1,.p-filo1,.r-filo1{fill:#fff;}.i-filo1{fill:url(#k-filo1);}.j-filo1{fill:url(#n-filo1);}.k-filo1{fill:url(#q-filo1);}.l-filo1{fill:url(#t-filo1);}.m-filo1{fill:url(#w-filo1);}.n-filo1{fill:url(#z-filo1);}.o-filo1,.p-filo1{font-size:32px;font-family:Silka-SemiBold, Silka;font-weight:600;}.s-filo1{filter:url(#x-filo1);}.t-filo1{filter:url(#u-filo1);}.u-filo1{filter:url(#r-filo1);}.v-filo1{filter:url(#o-filo1);}.w-filo1{filter:url(#l-filo1);}.x-filo1{filter:url(#i-filo1);}.y-filo1{filter:url(#g-filo1);}.z-filo1{filter:url(#e-filo1);}.aa-filo1{filter:url(#c-filo1);}.ab-filo1{filter:url(#a-filo1);}'
						}
					</style>
					<filter
						id="a-filo1"
						x={133.5}
						y={1690}
						width={542.363}
						height={330.139}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="b-filo1" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="b-filo1" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="c-filo1"
						x={133.5}
						y={2036.139}
						width={542.363}
						height={330.139}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="d-filo1" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="d-filo1" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="e-filo1"
						x={951.5}
						y={1690}
						width={542.363}
						height={330.139}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="f-filo1" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="f-filo1" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="g-filo1"
						x={509}
						y={2382.277}
						width={609.363}
						height={330.139}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="h-filo1" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="h-filo1" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="i-filo1"
						x={951.5}
						y={2036.139}
						width={542.363}
						height={330.139}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="j-filo1" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="j-filo1" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="k-filo1"
						width={1}
						height={1}
						viewBox="136.295 14.959 325.866 297.179">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={468.208}
							height={312.139}
							xlinkHref="/images/filoso2.jpg"
						/>
					</pattern>
					<filter
						id="l-filo1"
						x={609.231}
						y={1690}
						width={360.27}
						height={330.139}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="m-filo1" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="m-filo1" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="n-filo1"
						width={1}
						height={1}
						viewBox="99.125 49.14 288.386 262.999">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={468.208}
							height={312.139}
							xlinkHref="/images/filoso21.jpg"
						/>
					</pattern>
					<filter
						id="o-filo1"
						x={609.231}
						y={2036.139}
						width={360.27}
						height={330.139}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="p-filo1" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="p-filo1" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="q-filo1"
						width={1}
						height={1}
						viewBox="105.789 38.891 299.625 273.248">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={468.208}
							height={312.139}
							xlinkHref="/images/filoso23.jpg"
						/>
					</pattern>
					<filter
						id="r-filo1"
						x={1427.231}
						y={1690}
						width={360.27}
						height={330.139}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="s-filo1" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="s-filo1" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="t-filo1"
						width={1}
						height={1}
						viewBox="151.076 0 302.806 276.149">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={453.882}
							height={312.139}
							xlinkHref="/images/filoso24.jpg"
						/>
					</pattern>
					<filter
						id="u-filo1"
						x={1051.73}
						y={2382.277}
						width={360.27}
						height={330.139}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="v-filo1" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="v-filo1" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="w-filo1"
						width={1}
						height={1}
						viewBox="66.465 0 325.114 296.494">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={468.248}
							height={312.139}
							xlinkHref="/images/filoso25.jpg"
						/>
					</pattern>
					<filter
						id="x-filo1"
						x={1427.231}
						y={2036.139}
						width={360.27}
						height={330.139}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="y-filo1" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="y-filo1" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="z-filo1"
						width={1}
						height={1}
						viewBox="158.374 0 749.713 766.332">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1086.069}
							height={814.552}
							xlinkHref="/images/filoso26.jpg"
						/>
					</pattern>
				</defs>
				<g transform="translate(0.5)">
					<path
						className="a-filo1"
						d="M1316.14,179.187v-2.211H916.535v.079H773.3c-69.026,0-130.786-52.682-157.342-134.217l-.051-.158L602.01,0h-1.87l14.225,43.687c.5,1.538,1.014,3.06,1.541,4.577,13.26,38.286,34.6,70.712,61.89,94,28.376,24.208,61.4,37,95.5,37h235.784v-.08Z"
						transform="translate(603.86 1435.732)"
					/>
					<path
						className="b-filo1"
						d="M0,79.086V78.11H85.246v.035h86.463c41.667,0,78.948-23.252,94.978-59.238l.031-.07L275.105,0h1.129l-8.587,19.282c-.3.679-.612,1.351-.93,2.02-1.017,2.146-2.112,4.25-3.357,6.44a99.43,99.43,0,0,1-34,35.048,108.736,108.736,0,0,1-57.649,16.331H29.38v-.035Z"
						transform="translate(0 2349.814)"
					/>
					<path
						className="c-filo1"
						d="M1928,802.11l-33.267,11.244q-3.3,1.11-6.541,2.287c-54.718,19.674-101.061,51.328-134.344,91.818-34.6,42.1-52.883,91.087-52.883,141.683v349.8h3.161v-349.8c0-102.4,75.293-194.028,191.819-233.426l.228-.076L1928,804.884Z"
						transform="translate(1 2274.609)"
					/>
					<path
						className="c-filo1"
						d="M385.091,170.106V0H127.639C74.208,0,25.543,65.982,0,170.106Z"
						transform="translate(170.106 3257.973) rotate(90)"
					/>
					<path
						className="d-filo1"
						d="M385.091,0V170.106H127.639C74.208,170.106,25.543,104.123,0,0Z"
						transform="translate(1920 2562.973) rotate(90)"
					/>
					<rect className="e-filo1" width={1920} height={3643} />
					<text
						className="f-filo1"
						transform="translate(281 3037.866)">
						<tspan x={0} y={23}>
							{
								'Los colaboradores del Grupo Amarey trabajan bajo una \xFAnica '
							}
						</tspan>
						<tspan x={0} y={49}>
							{
								'premisa: la filosof\xEDa SER (Servicio, Educaci\xF3n y Relacionamiento), '
							}
						</tspan>
						<tspan x={0} y={75}>
							{
								'pilares que marcan la diferencia de la compa\xF1\xEDa en la industria.'
							}
						</tspan>
					</text>
					<text
						className="f-filo1"
						transform="translate(281 3152.866)">
						<tspan x={0} y={23}>
							{
								'Los colaboradores del Grupo Amarey trabajan bajo una \xFAnica '
							}
						</tspan>
						<tspan x={0} y={49}>
							{
								'premisa: la filosof\xEDa SER (Servicio, Educaci\xF3n y Relacionamiento), '
							}
						</tspan>
						<tspan x={0} y={75}>
							{
								'pilares que marcan la diferencia de la compa\xF1\xEDa en la industria.'
							}
						</tspan>
					</text>
					<text
						className="f-filo1"
						transform="translate(281 3278.866)">
						<tspan x={0} y={23}>
							{
								'Los colaboradores del Grupo Amarey trabajan bajo una \xFAnica '
							}
						</tspan>
						<tspan x={0} y={49}>
							{
								'premisa: la filosof\xEDa SER (Servicio, Educaci\xF3n y Relacionamiento), '
							}
						</tspan>
						<tspan x={0} y={75}>
							{
								'pilares que marcan la diferencia de la compa\xF1\xEDa en la industria.'
							}
						</tspan>
					</text>
					<text
						className="f-filo1"
						transform="translate(281 3393.866)">
						<tspan x={0} y={23}>
							{
								'Los colaboradores del Grupo Amarey trabajan bajo una \xFAnica '
							}
						</tspan>
						<tspan x={0} y={49}>
							{
								'premisa: la filosof\xEDa SER (Servicio, Educaci\xF3n y Relacionamiento), '
							}
						</tspan>
						<tspan x={0} y={75}>
							{
								'pilares que marcan la diferencia de la compa\xF1\xEDa en la industria.'
							}
						</tspan>
					</text>
					<text
						className="g-filo1"
						transform="translate(960.5 1607.866)">
						<tspan x={-151.27} y={0}>
							{'Valores'}
						</tspan>
					</text>
					<text
						className="g-filo1"
						transform="translate(533 2978.866)">
						<tspan x={-251.79} y={0}>
							{'Filosof\xEDa SER'}
						</tspan>
					</text>
					<g
						className="ab-filo1"
						transform="matrix(1, 0, 0, 1, -0.5, 0)">
						<path
							className="h-filo1"
							d="M524.363,0H48.632c-7.485,0-13.813,6.87-14.79,16.068L.128,291.286c-1.169,11.041,5.785,20.852,14.789,20.852H490.649c-9,0-15.959-9.812-14.789-20.852L509.573,16.068C510.549,6.87,516.877,0,524.363,0"
							transform="translate(142.5 1696)"
						/>
					</g>
					<g
						className="aa-filo1"
						transform="matrix(1, 0, 0, 1, -0.5, 0)">
						<path
							className="c-filo1"
							d="M524.363,312.139H48.632c-7.485,0-13.813-6.87-14.79-16.068L.128,20.852C-1.041,9.812,5.914,0,14.918,0H490.649c-9,0-15.959,9.812-14.789,20.852l33.714,275.219c.976,9.2,7.3,16.068,14.789,16.068"
							transform="translate(142.5 2042.14)"
						/>
					</g>
					<g
						className="z-filo1"
						transform="matrix(1, 0, 0, 1, -0.5, 0)">
						<path
							className="c-filo1"
							d="M524.363,312.139H48.632c-7.485,0-13.813-6.87-14.79-16.068L.128,20.852C-1.041,9.812,5.914,0,14.918,0H490.649c-9,0-15.959,9.812-14.789,20.852l33.714,275.219c.976,9.2,7.3,16.068,14.789,16.068"
							transform="translate(960.5 1696)"
						/>
					</g>
					<g
						className="y-filo1"
						transform="matrix(1, 0, 0, 1, -0.5, 0)">
						<path
							className="h-filo1"
							d="M524.363,312.139H-18.368c-7.485,0-13.813-6.87-14.79-16.068L-66.872,20.852C-68.041,9.812-61.086,0-52.082,0H490.649c-9,0-15.959,9.812-14.789,20.852l33.714,275.219c.976,9.2,7.3,16.068,14.789,16.068"
							transform="translate(585 2388.28)"
						/>
					</g>
					<g
						className="x-filo1"
						transform="matrix(1, 0, 0, 1, -0.5, 0)">
						<path
							className="h-filo1"
							d="M524.363,0H48.632c-7.485,0-13.813,6.87-14.79,16.068L.128,291.286c-1.169,11.041,5.785,20.852,14.789,20.852H490.649c-9,0-15.959-9.812-14.789-20.852L509.573,16.068C510.549,6.87,516.878,0,524.363,0"
							transform="translate(960.5 2042.14)"
						/>
					</g>
					<g
						className="w-filo1"
						transform="matrix(1, 0, 0, 1, -0.5, 0)">
						<path
							className="i-filo1"
							d="M927.558,291.359l-32.7-275.231C893.9,6.919,887.565,0,880.055,0H634.042c-7.485,0-13.813,6.871-14.789,16.068L585.538,291.286c-1.169,11.041,5.786,20.852,14.79,20.852H912.757c8.98,0,15.934-9.763,14.8-20.78"
							transform="translate(32.82 1696)"
						/>
					</g>
					<g
						className="v-filo1"
						transform="matrix(1, 0, 0, 1, -0.5, 0)">
						<path
							className="j-filo1"
							d="M927.558,20.78l-32.7,275.231c-.952,9.209-7.293,16.128-14.8,16.128H634.042c-7.485,0-13.813-6.871-14.789-16.068L585.538,20.852C584.369,9.811,591.324,0,600.329,0H912.757c8.98,0,15.934,9.763,14.8,20.78"
							transform="translate(32.82 2042.14)"
						/>
					</g>
					<g
						className="u-filo1"
						transform="matrix(1, 0, 0, 1, -0.5, 0)">
						<path
							className="k-filo1"
							d="M927.558,20.78l-32.7,275.231c-.952,9.209-7.293,16.128-14.8,16.128H634.042c-7.485,0-13.813-6.871-14.789-16.068L585.538,20.852C584.369,9.811,591.324,0,600.328,0H912.757c8.98,0,15.934,9.763,14.8,20.78"
							transform="translate(850.82 1696)"
						/>
					</g>
					<g
						className="t-filo1"
						transform="matrix(1, 0, 0, 1, -0.5, 0)">
						<path
							className="l-filo1"
							d="M927.558,20.78l-32.7,275.231c-.952,9.209-7.293,16.128-14.8,16.128H634.042c-7.485,0-13.813-6.871-14.789-16.068L585.538,20.852C584.369,9.811,591.324,0,600.328,0H912.757c8.98,0,15.934,9.763,14.8,20.78"
							transform="translate(475.32 2388.28)"
						/>
					</g>
					<g
						className="s-filo1"
						transform="matrix(1, 0, 0, 1, -0.5, 0)">
						<path
							className="m-filo1"
							d="M927.558,291.359l-32.7-275.231C893.905,6.919,887.565,0,880.055,0H634.042c-7.485,0-13.813,6.871-14.789,16.068L585.538,291.286c-1.169,11.041,5.786,20.852,14.79,20.852H912.757c8.98,0,15.934-9.763,14.8-20.78"
							transform="translate(850.82 2042.14)"
						/>
					</g>
					<g transform="translate(111 2758)">
						<g transform="translate(1004)">
							<path
								className="c-filo1"
								d="M804,1.723V822.732H238.142c-52.98-9.73-98.764-53.408-119.632-116.255L75.521,471.214.662,61.439C-5.106,29.854,27.569,1.723,70,1.723Z"
								transform="translate(0 -0.191)"
							/>
							<path
								className="n-filo1"
								d="M796.886,1.723V816.275H236.035c-52.511-9.653-97.89-52.988-118.573-115.341L74.853,467.521.656,60.969C-5.061,29.632,27.325,1.723,69.376,1.723Z"
								transform="translate(7.114 -1.723)"
							/>
						</g>
					</g>
					<text className="o-filo1" transform="translate(212 1793)">
						<tspan x={0} y={0}>
							{'Respeto y calidez'}
						</tspan>
					</text>
					<text className="o-filo1" transform="translate(1041 2128)">
						<tspan x={0} y={0}>
							{'Transparencia'}
						</tspan>
					</text>
					<text className="o-filo1" transform="translate(592.5 2490)">
						<tspan x={0} y={0}>
							{'Sentido de responsabilidad'}
						</tspan>
						<tspan x={0} y={34}>
							{'con otros'}
						</tspan>
					</text>
					<text className="p-filo1" transform="translate(1041 1783)">
						<tspan x={0} y={0}>
							{'Excelencia en calidad'}
						</tspan>
					</text>
					<text className="p-filo1" transform="translate(212 2139)">
						<tspan x={0} y={0}>
							{'Convicci\xF3n'}
						</tspan>
					</text>
					<text className="q-filo1" transform="translate(212 1816)">
						<tspan x={0} y={23}>
							{'Valoramos y respetamos el '}
						</tspan>
						<tspan x={0} y={49}>
							{'punto de vista, el saber y el '}
						</tspan>
						<tspan x={0} y={75}>
							{'quehacer de otros. Nos '}
						</tspan>
						<tspan x={0} y={101}>
							{'caracteriza el relacionamiento '}
						</tspan>
						<tspan x={0} y={127}>
							{'basado en las buenas maneras.'}
						</tspan>
					</text>
					<text className="q-filo1" transform="translate(1041 2151)">
						<tspan x={0} y={23}>
							{'Nuestras actuaciones siempre '}
						</tspan>
						<tspan x={0} y={49}>
							{'se realizan a la luz p\xFAblica y '}
						</tspan>
						<tspan x={0} y={75}>
							{'est\xE1n regidas siempre por la '}
						</tspan>
						<tspan x={0} y={101}>
							{'buena voluntad, la buena fe y '}
						</tspan>
						<tspan x={0} y={127}>
							{'la orientaci\xF3n a los resultados '}
						</tspan>
						<tspan x={0} y={153}>
							{'\xE9ticos y morales.'}
						</tspan>
					</text>
					<text className="q-filo1" transform="translate(592.5 2538)">
						<tspan x={0} y={23}>
							{'Somos sensibles a las necesidades '}
						</tspan>
						<tspan x={0} y={49}>
							{'de los dem\xE1s comprometi\xE9ndonos '}
						</tspan>
						<tspan x={0} y={75}>
							{'con el mejoramiento de su calidad '}
						</tspan>
						<tspan x={0} y={101}>
							{'de vida y bienestar.'}
						</tspan>
					</text>
					<text className="r-filo1" transform="translate(1041 1806)">
						<tspan x={0} y={23}>
							{'Realizamos las cosas con '}
						</tspan>
						<tspan x={0} y={49}>
							{'calidad, oportunidad y actitud '}
						</tspan>
						<tspan x={0} y={75}>
							{'desde el principio, cumpliendo '}
						</tspan>
						<tspan x={0} y={101}>
							{'con la promesa de valor a '}
						</tspan>
						<tspan x={0} y={127}>
							{'nuestros clientes y propendiendo '}
						</tspan>
						<tspan x={0} y={153}>
							{'con el mejoramiento continuo.'}
						</tspan>
					</text>
					<text className="r-filo1" transform="translate(212 2162)">
						<tspan x={0} y={23}>
							{'Actuamos con conocimiento '}
						</tspan>
						<tspan x={0} y={49}>
							{'profundo sobre los bienes y '}
						</tspan>
						<tspan x={0} y={75}>
							{'servicios que le brindamos a la '}
						</tspan>
						<tspan x={0} y={101}>
							{'comunidad, identific\xE1ndonos '}
						</tspan>
						<tspan x={0} y={127}>
							{'con la filosof\xEDa corporativa.'}
						</tspan>
					</text>
				</g>
			</svg>
				</React.Fragment>
			) : (
				<React.Fragment>
					<FilosofiaMobile/>
				</React.Fragment>
			)}
		</div>
	)
}

export default Filosofia
