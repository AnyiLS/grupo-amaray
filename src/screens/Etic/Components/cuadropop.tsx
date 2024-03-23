import React from 'react'
import Popups from './popups'

const Cuadropop: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	/** States */
	const [openModal, setOpenModal] = React.useState<boolean>(false)
	const [selected, setSelected] = React.useState<string>('')

	return (
		<div className='relative'>
			<svg viewBox="0 0 1938 975.988">
				<defs>
					<style>
						{
							'.a-pop{fill:url(#a-pop);}.b-pop,.c-pop,.h-pop{fill:#fff;}.c-pop,.e-pop,.h-pop{font-size:24px;}.c-pop{font-family:Silka-SemiBold, Silka;font-weight:600;}.d-pop,.f-pop{fill:#e40032;}.e-pop{fill:#182856;}.e-pop,.h-pop{font-family:Silka-Regular, Silka;}.f-pop{font-size:32px;font-family:Silka-Bold, Silka;}.f-pop,.j-pop{font-weight:700;}.g-pop,.j-pop{fill:#001f5f;}.i-pop{fill:rgba(67,67,67,0.09);}.j-pop{font-size:42px;font-family:"Kiona-Bold";}.k-pop{filter:url(#p-pop);}.l-pop{filter:url(#n-pop);}.m-pop{filter:url(#l-pop);}.n-pop{filter:url(#j-pop);}.o-pop{filter:url(#h-pop);}.p-pop{filter:url(#f-pop);}.q-pop{filter:url(#d-pop);}.r-pop{filter:url(#b-pop);}'
						}
					</style>
					<pattern
						id="a-pop"
						width={1}
						height={1}
						viewBox="358.387 0 798.177 975.988">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1463.982}
							height={975.988}
							xlinkHref="/images/eticapop.jpg"
						/>
					</pattern>
					<filter
						id="b-pop"
						x={340.588}
						y={416.566}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="c-pop" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="c-pop" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="d-pop"
						x={340.588}
						y={559.066}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="e-pop" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="e-pop" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="f-pop"
						x={340.588}
						y={701.566}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="g-pop" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="g-pop" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="h-pop"
						x={792.294}
						y={416.566}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="i-pop" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="i-pop" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="j-pop"
						x={792.294}
						y={559.066}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3}/>
						<feGaussianBlur stdDeviation={3} result="k-pop" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="k-pop" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="l-pop"
						x={1244}
						y={416.566}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="m-pop" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="m-pop" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="n-pop"
						x={1244}
						y={559.066}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="o-pop" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="o-pop" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="p-pop"
						x={0}
						y={0}
						width={1938}
						height={92}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="q-pop" />
						<feFlood floodOpacity={0.302} />
						<feComposite operator="in" in2="q-pop" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g>
					<g transform="translate(0 1.14)" onClick={onClose}>
						<path
							className="a-pop"
							d="M798.177,0,695.867,662.362c-29.32,189.821-98.5,313.627-175.229,313.627H0V0Z"
						/>
						<path
							className="b-pop"
							d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
							transform="translate(201.725 115.762) rotate(180)"
						/>
						<text
							className="c-pop"
							transform="translate(232.852 114.756)">
							<tspan x={-71.52} y={0}>
								{'Volver'}
							</tspan>
						</text>
					</g>
					<path
						className="b-pop"
						d="M2653.2-1.14V974.375l-1920,1.613c115.262,0,219.175-123.746,263.217-313.474L1150.1.473Z"
						transform="translate(-733.2 1.14)"
					/>
					<g transform="translate(1723.588 1.09)">
						<path
							className="d-pop"
							d="M948.612-.05V975.917l-215.412.071c54.671,0,103.958-123.8,124.848-313.62L930.943.021Z"
							transform="translate(-733.2 0.05)"
						/>
					</g>
					<text className="e-pop" transform="translate(600 293.14)">
						<tspan x={-130} y={23}>
							{
								'Cuando identifique situaciones no \xE9ticas que puedan afectar los intereses del Grupo '
							}
						</tspan>
						<tspan x={260} y={51}>
							{'Amarey como:'}
						</tspan>
					</text>
					<text className="f-pop" transform="translate(370 210.14)">
						<tspan x={280} y={30}>
							{
								'\xBFCu\xE1ndo debo utilizar la l\xEDnea \xE9tica?'
							}
						</tspan>
					</text>
					<g transform="translate(340.588 417.706)" onClick={() => {setOpenModal(true); setSelected('uno')}}>
						<g
							className="r-pop"
							transform="matrix(1, 0, 0, 1, -349.59, -422.57)">
							<path
								className="g-pop"
								d="M326.638,97.5H15.5C6.941,97.5,0,90.92,0,82.8V14.7C0,6.58,6.941,0,15.5,0H398.494C407.058,0,414,6.58,414,14.7c0,45.731-39.113,82.8-87.362,82.8"
								transform="translate(349.59 422.57)"
							/>
						</g>
						<text
							className="h-pop"
							transform="translate(40.5 34.25)">
							<tspan x={40} y={23}>
								{'Conflicto de inter\xE9s'}
							</tspan>
						</text>
					</g>
					<g transform="translate(340.588 560.206)" onClick={() => {setOpenModal(true); setSelected('cuatro')}}>
						<g
							className="q-pop"
							transform="matrix(1, 0, 0, 1, -349.59, -565.07)">
							<path
								className="g-pop"
								d="M326.638,97.5H15.5C6.941,97.5,0,90.92,0,82.8V14.7C0,6.58,6.941,0,15.5,0H398.494C407.058,0,414,6.58,414,14.7c0,45.731-39.113,82.8-87.362,82.8"
								transform="translate(349.59 565.07)"
							/>
						</g>
						<text
							className="h-pop"
							transform="translate(40.5 34.25)">
							<tspan x={40} y={23}>
								{'Lavado de activos'}
							</tspan>
						</text>
					</g>
					<g transform="translate(340.588 702.706)" onClick={() => {setOpenModal(true); setSelected('siete')}}>
						<g
							className="p-pop"
							transform="matrix(1, 0, 0, 1, -349.59, -707.57)">
							<path
								className="g-pop"
								d="M326.638,97.5H15.5C6.941,97.5,0,90.92,0,82.8V14.7C0,6.58,6.941,0,15.5,0H398.494C407.058,0,414,6.58,414,14.7c0,45.731-39.113,82.8-87.362,82.8"
								transform="translate(349.59 707.57)"
							/>
						</g>
						<text
							className="h-pop"
							transform="translate(40.5 34.25)">
							<tspan x={40} y={23}>
								{'D\xE1divas o prebendas'}
							</tspan>
						</text>
					</g>
					<g transform="translate(792.294 417.706)" onClick={() => {setOpenModal(true); setSelected('dos')}}>
						<g
							className="o-pop"
							transform="matrix(1, 0, 0, 1, -801.29, -422.57)">
							<path
								className="g-pop"
								d="M326.638,97.5H15.5C6.941,97.5,0,90.92,0,82.8V14.7C0,6.58,6.941,0,15.5,0H398.494C407.058,0,414,6.58,414,14.7c0,45.731-39.113,82.8-87.362,82.8"
								transform="translate(801.29 422.57)"
							/>
						</g>
						<text
							className="h-pop"
							transform="translate(58.5 20.25)">
							<tspan x={0} y={23}>
								{'Incumplimiento de leyes '}
							</tspan>
							<tspan x={50} y={51}>
								{'y regulaciones'}
							</tspan>
						</text>
					</g>
					<g transform="translate(792.294 560.206)" onClick={() => {setOpenModal(true); setSelected('cinco')}}>
						<g
							className="n-pop"
							transform="matrix(1, 0, 0, 1, -801.29, -565.07)">
							<path
								className="g-pop"
								d="M326.638,97.5H15.5C6.941,97.5,0,90.92,0,82.8V14.7C0,6.58,6.941,0,15.5,0H398.494C407.058,0,414,6.58,414,14.7c0,45.731-39.113,82.8-87.362,82.8"
								transform="translate(801.29 565.07)"
							/>
						</g>
						<text
							className="h-pop"
							transform="translate(40.5 34.25)">
							<tspan x={10} y={23}>
								{'Actividades inapropiadas'}
							</tspan>
						</text>
					</g>
					<g transform="translate(1244 417.706)" onClick={() => {setOpenModal(true); setSelected('tres')}}>
						<g
							className="m-pop"
							transform="matrix(1, 0, 0, 1, -1253, -422.57)">
							<path
								className="g-pop"
								d="M326.638,97.5H15.5C6.941,97.5,0,90.92,0,82.8V14.7C0,6.58,6.941,0,15.5,0H398.494C407.058,0,414,6.58,414,14.7c0,45.731-39.113,82.8-87.362,82.8"
								transform="translate(1253 422.57)"
							/>
						</g>
						<text
							className="h-pop"
							transform="translate(40.5 34.25)">
							<tspan x={60} y={23}>
								{'Confidencialidad'}
							</tspan>
						</text>
					</g>
					<g transform="translate(1244 560.206)" onClick={() => {setOpenModal(true); setSelected('seis')}}>
						<g
							className="l-pop"
							transform="matrix(1, 0, 0, 1, -1253, -565.07)">
							<path
								className="g-pop"
								d="M326.638,97.5H15.5C6.941,97.5,0,90.92,0,82.8V14.7C0,6.58,6.941,0,15.5,0H398.494C407.058,0,414,6.58,414,14.7c0,45.731-39.113,82.8-87.362,82.8"
								transform="translate(1253 565.07)"
							/>
						</g>
						<text
							className="h-pop"
							transform="translate(40.5 20.25)">
							<tspan x={30} y={23}>
								{'Pr\xE1cticas comerciales '}
							</tspan>
							<tspan x={80} y={51}>
								{'inadecuadas'}
							</tspan>
						</text>
					</g>
					<g transform="translate(0 1.14)">
						<g
							className="k-pop"
							transform="matrix(1, 0, 0, 1, -9, -6)">
							<rect
								className="i-pop"
								width={1920}
								height={74}
								transform="translate(9 6)"
							/>
						</g>
					</g>
					<text
						className="j-pop"
						transform="translate(693.578 11.706)">
						<tspan x={43.834} y={42}>
							{'\xC9TICA Y COMPLIANCE'}
						</tspan>
					</text>
				</g>
			</svg>
			{openModal && <Popups selected={selected} onClose={() => setOpenModal(false)}/>}
		</div>
	)
}

export default Cuadropop
