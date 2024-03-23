import React from 'react'

const Formulario: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	return (
		<div>
			<svg viewBox="0 0 1920 1080" className="fixed top-0 left-0 z-[1] bg-[#ffffffa1]">
				<defs>
					<style>
						{
							'.a-formu,.d-formu,.e-formu,.i-formu,.o-formu{fill:#fff;}.a-formu{opacity:0.5;}.b-formu{fill:#d9dae4;}.c-formu{fill:url(#a-formu);}.d-formu{opacity:0.36;}.e-formu{font-size:34px;font-family:Helvetica-Bold, Helvetica;}.e-formu,.f-formu,.o-formu{font-weight:700;}.f-formu,.j-formu{fill:#001f5f;}.f-formu{font-size:32px;font-family:Silka-Bold, Silka;}.g-formu,.h-formu{fill:#182856;}.g-formu{font-size:18px;}.g-formu,.h-formu,.k-formu{font-family:Silka-Regular, Silka;}.h-formu,.k-formu{font-size:12px;}.k-formu{fill:#e40032;}.l-formu{text-decoration:underline;}.m-formu{font-size:10px;}.n-formu,.q-formu{fill:none;}.n-formu{stroke:#001f5f;}.o-formu{font-size:16px;font-family:"Kiona-Bold";}.p-formu{stroke:none;}.r-formu{filter:url(#aa-formu);}.s-formu{filter:url(#y-formu);}.t-formu{filter:url(#v-formu);}.u-formu{filter:url(#s-formu);}.v-formu{filter:url(#p-formu);}.w-formu{filter:url(#m-formu);}.x-formu{filter:url(#j-formu);}.y-formu{filter:url(#g-formu);}.z-formu{filter:url(#d-formu);}.a-formua{filter:url(#b-formu);}'
						}
					</style>
					<pattern
						id="a-formu"
						width={1}
						height={1}
						patternTransform="matrix(-1, 0, 0, 1, 2113.552, 0)"
						viewBox="282.186 0 235 757.906">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1136.776}
							height={757.906}
							xlinkHref="/images/contactoformu.jpg"
						/>
					</pattern>
					<filter
						id="b-formu"
						x={1401.184}
						y={141.136}
						width={57.64}
						height={57.64}
						filterUnits="userSpaceOnUse">
						<feOffset dy={1} />
						<feGaussianBlur stdDeviation={0.5} result="c-formu" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="c-formu" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="d-formu"
						x={741.92}
						y={278.871}
						width={597.229}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="e-formu" />
						<feFlood floodOpacity={0.341} result="f-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="e-formu"
						/>
						<feComposite operator="in" in="f-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="g-formu"
						x={741.92}
						y={360.196}
						width={597.229}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="h-formu" />
						<feFlood floodOpacity={0.341} result="i-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="h-formu"
						/>
						<feComposite operator="in" in="i-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="j-formu"
						x={741.92}
						y={441.521}
						width={597.229}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="k-formu" />
						<feFlood floodOpacity={0.341} result="l-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="k-formu"
						/>
						<feComposite operator="in" in="l-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="m-formu"
						x={741.92}
						y={522.846}
						width={597.229}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="n-formu" />
						<feFlood floodOpacity={0.341} result="o-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="n-formu"
						/>
						<feComposite operator="in" in="o-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="p-formu"
						x={741.92}
						y={604.17}
						width={288.449}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="q-formu" />
						<feFlood floodOpacity={0.341} result="r-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="q-formu"
						/>
						<feComposite operator="in" in="r-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="s-formu"
						x={1050.7}
						y={604.17}
						width={288.449}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="t-formu" />
						<feFlood floodOpacity={0.341} result="u-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="t-formu"
						/>
						<feComposite operator="in" in="u-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="v-formu"
						x={741.92}
						y={685.495}
						width={597.229}
						height={99.115}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="w-formu" />
						<feFlood floodOpacity={0.341} result="x-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="w-formu"
						/>
						<feComposite operator="in" in="x-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="y-formu"
						x={1317.442}
						y={692.202}
						width={23.083}
						height={42.143}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="z-formu" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="z-formu" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="aa-formu"
						x={910.105}
						y={862.158}
						width={260.859}
						height={70.608}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="ab" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="ab" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g transform="translate(-5936.927 -14.083)">
					<g transform="translate(6379.139 138.262)">
						<path
							className="b-formu"
							d="M992.019,0H43.556C19.5,0,0,23.776,0,53.113V778.531c0,29.323,19.5,53.111,43.556,53.111H873.377c38.737,0,73.656-47.2,88.451-119.551L1035.165,60.33C1038.753,28.422,1018.42,0,992.019,0"
						/>
						<path
							className="c-formu"
							d="M235,120.191V757.906H47.383C21.217,757.906,0,734.938,0,706.619V6.079A53.386,53.386,0,0,1,.337,0L111.557,23.969C186.268,40.075,235,78.05,235,120.191"
							transform="translate(0 73.736)"
						/>
					</g>
					<g
						transform="translate(7339.611 155.719)"
						onClick={onClose}>
						<g
							className="aa-formu"
							transform="matrix(1, 0, 0, 1, -1402.68, -141.64)">
							<circle
								className="d-formu"
								cx={27.32}
								cy={27.32}
								r={27.32}
								transform="translate(1402.68 141.64)"
							/>
						</g>
						<text
							className="e-formu"
							transform="translate(15.248 39.354)">
							<tspan x={0} y={0}>
								{'x'}
							</tspan>
						</text>
					</g>
					<text
						className="f-formu"
						transform="translate(6702.991 183.674)">
						<tspan x={61.464} y={30}>
							{'Formulario de contacto'}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 270.458)">
						<tspan x={0} y={17}>
							{'Nombre completo '}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 351.782)">
						<tspan x={0} y={17}>
							{'Email '}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 433.107)">
						<tspan x={0} y={17}>
							{'Instituci\xF3n '}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 514.432)">
						<tspan x={0} y={17}>
							{'Asunto '}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 595.757)">
						<tspan x={0} y={17}>
							{'Pa\xEDs '}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6987.627 595.757)">
						<tspan x={0} y={17}>
							{'Tel\xE9fono '}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 677.082)">
						<tspan x={0} y={17}>
							{'Mensaje '}
						</tspan>
					</text>
					<text
						className="h-formu"
						transform="translate(6719.51 811.4)">
						<tspan x={0} y={11}>
							{
								'Al enviar este formulario, usted reconoce haber le\xEDdo y estar de acuerdo con nuestra pol\xEDtica '
							}
						</tspan>
						<tspan x={0} y={26}>
							{'de '}
						</tspan>
					</text>
					<g data-type="innerShadowGroup">
						<rect
							className="i-formu"
							width={597.229}
							height={44.474}
							rx={20}
							transform="translate(6678.848 292.954)"
						/>
						<g
							className="z-formu"
							transform="matrix(1, 0, 0, 1, 5936.93, 14.08)">
							<rect
								className="i-formu"
								width={597.229}
								height={44.474}
								rx={20}
								transform="translate(741.92 278.87)"
							/>
						</g>
					</g>
					<g data-type="innerShadowGroup">
						<rect
							className="i-formu"
							width={597.229}
							height={44.474}
							rx={20}
							transform="translate(6678.848 374.279)"
						/>
						<g
							className="y-formu"
							transform="matrix(1, 0, 0, 1, 5936.93, 14.08)">
							<rect
								className="i-formu"
								width={597.229}
								height={44.474}
								rx={20}
								transform="translate(741.92 360.2)"
							/>
						</g>
					</g>
					<g data-type="innerShadowGroup">
						<rect
							className="i-formu"
							width={597.229}
							height={44.474}
							rx={20}
							transform="translate(6678.848 455.604)"
						/>
						<g
							className="x-formu"
							transform="matrix(1, 0, 0, 1, 5936.93, 14.08)">
							<rect
								className="i-formu"
								width={597.229}
								height={44.474}
								rx={20}
								transform="translate(741.92 441.52)"
							/>
						</g>
					</g>
					<g data-type="innerShadowGroup">
						<rect
							className="i-formu"
							width={597.229}
							height={44.474}
							rx={20}
							transform="translate(6678.848 536.929)"
						/>
						<g
							className="w-formu"
							transform="matrix(1, 0, 0, 1, 5936.93, 14.08)">
							<rect
								className="i-formu"
								width={597.229}
								height={44.474}
								rx={20}
								transform="translate(741.92 522.85)"
							/>
						</g>
					</g>
					<g data-type="innerShadowGroup">
						<rect
							className="i-formu"
							width={288.449}
							height={44.474}
							rx={20}
							transform="translate(6678.848 618.254)"
						/>
						<g
							className="v-formu"
							transform="matrix(1, 0, 0, 1, 5936.93, 14.08)">
							<rect
								className="i-formu"
								width={288.449}
								height={44.474}
								rx={20}
								transform="translate(741.92 604.17)"
							/>
						</g>
					</g>
					<g data-type="innerShadowGroup">
						<rect
							className="i-formu"
							width={288.449}
							height={44.474}
							rx={20}
							transform="translate(6987.627 618.254)"
						/>
						<g
							className="u-formu"
							transform="matrix(1, 0, 0, 1, 5936.93, 14.08)">
							<rect
								className="i-formu"
								width={288.449}
								height={44.474}
								rx={20}
								transform="translate(1050.7 604.17)"
							/>
						</g>
					</g>
					<g transform="translate(6678.848 699.578)">
						<g data-type="innerShadowGroup">
							<rect
								className="i-formu"
								width={597.229}
								height={99.115}
								rx={11}
							/>
							<g
								className="t-formu"
								transform="matrix(1, 0, 0, 1, -741.92, -685.5)">
								<rect
									className="i-formu"
									width={597.229}
									height={99.115}
									rx={11}
									transform="translate(741.92 685.5)"
								/>
							</g>
						</g>
						<g
							className="s-formu"
							transform="matrix(1, 0, 0, 1, -741.92, -685.5)">
							<rect
								className="j-formu"
								width={5.083}
								height={24.143}
								rx={2}
								transform="translate(1326.44 698.2)"
							/>
						</g>
					</g>
					<g transform="translate(6697.45 826.919)">
						<text className="k-formu">
							<tspan className="l-formu" x={37.826} y={11}>
								{'Tratamiento de datos personales.'}
							</tspan>
							<tspan className="m-formu" y={11} />
						</text>
					</g>
					<g transform="translate(6694.096 808.859)">
						<g className="n-formu">
							<rect
								className="p-formu"
								width={19.06}
								height={19.06}
							/>
							<rect
								className="q-formu"
								x={0.5}
								y={0.5}
								width={18.06}
								height={18.06}
							/>
						</g>
					</g>
					<g transform="translate(6856.033 882.241)">
						<g
							className="r-formu"
							transform="matrix(1, 0, 0, 1, -919.11, -868.16)">
							<path
								className="j-formu"
								d="M242.859,0H49.813C29.735,0,11.706,15.351,4.373,38.688L0,52.608H191.444c21.391,0,40.544-16.55,48.08-41.546Z"
								transform="translate(919.11 868.16)"
							/>
						</g>
						<text
							className="o-formu"
							transform="translate(85.215 34.232)">
							<tspan x={0} y={0}>
								{'enviar'}
							</tspan>
						</text>
					</g>
				</g>
			</svg>
		</div>
	)
}

export default Formulario
