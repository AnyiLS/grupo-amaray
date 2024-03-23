import { dataEtic } from 'mocks/etic.mock'
import React from 'react'

const Popups: React.FC<{ selected: string; onClose: () => void }> = ({
	selected,
	onClose,
}) => {
	const Component: () => JSX.Element = dataEtic[selected]

	return (
		<div>
			<svg
				viewBox="0 0 1938 981.988"
				className="absolute top-0 left-0 bg-[#ffffffb8]">
				<defs>
					<style>
						{
							'.a-cuadro{fill:url(#a-cuadro);}.b-cuadro,.c-cuadro,.h-cuadro,.k-cuadro,.l-cuadro,.m-cuadro{fill:#fff;}.c-cuadro,.e-cuadro,.h-cuadro{font-size:24px;}.c-cuadro{font-family:Silka-SemiBold, Silka;font-weight:600;}.d-cuadro,.f-cuadro{fill:#e40032;}.e-cuadro{fill:#182856;}.e-cuadro,.h-cuadro{font-family:Silka-Regular, Silka;}.f-cuadro{font-size:32px;font-family:Silka-Bold, Silka;}.f-cuadro,.j-cuadro,.m-cuadro{font-weight:700;}.g-cuadro,.j-cuadro{fill:#001f5f;}.i-cuadro{fill:rgba(67,67,67,0.09);}.j-cuadro{font-size:42px;font-family:"Kiona-Bold";}.k-cuadro{stroke:#707070;opacity:0.56;}.l-cuadro{opacity:0.36;}.m-cuadro{font-size:28px;font-family:Helvetica-Bold, Helvetica;}.n-cuadro{stroke:none;}.o-cuadro{fill:none;}.p-cuadro{filter:url(#r-cuadro);}.q-cuadro{filter:url(#p-cuadro);}.r-cuadro{filter:url(#n-cuadro);}.s-cuadro{filter:url(#l-cuadro);}.t-cuadro{filter:url(#j-cuadro);}.u-cuadro{filter:url(#h-cuadro);}.v-cuadro{filter:url(#f-cuadro);}.w-cuadro{filter:url(#d-cuadro);}.x-cuadro{filter:url(#b-cuadro);}'
						}
					</style>
					<pattern
						id="a-cuadro"
						width={1}
						height={1}
						viewBox="358.387 0 798.177 975.988">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1463.982}
							height={975.988}
							xlinkHref="/images/eticalinea.jpg"
						/>
					</pattern>
					<filter
						id="b-cuadro"
						x={340.588}
						y={416.566}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="c-cuadro" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="c-cuadro" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="d-cuadro"
						x={340.588}
						y={559.066}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="e-cuadro" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="e-cuadro" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="f-cuadro"
						x={340.588}
						y={701.566}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="g-cuadro" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="g-cuadro" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="h-cuadro"
						x={792.294}
						y={416.566}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="i-cuadro" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="i-cuadro" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="j-cuadro"
						x={792.294}
						y={559.066}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="k-cuadro" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="k-cuadro" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="l-cuadro"
						x={1244}
						y={416.566}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="m-cuadro" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="m-cuadro" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="n-cuadro"
						x={1244}
						y={559.066}
						width={432}
						height={115.5}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="o-cuadro" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="o-cuadro" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="p-cuadro"
						x={0}
						y={0}
						width={1938}
						height={92}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="q-cuadro" />
						<feFlood floodOpacity={0.302} />
						<feComposite operator="in" in2="q-cuadro" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="r-cuadro"
						x={1451.5}
						y={244.5}
						width={46}
						height={46}
						filterUnits="userSpaceOnUse">
						<feOffset dy={1} />
						<feGaussianBlur stdDeviation={0.5} result="s-cuadro" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="s-cuadro" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g transform="translate(9 4.86)">
					<path
						className="g-cuadro"
						d="M-228.939,457.44c0,14.767,29.627,26.737,29.627,26.737H628.616c78.85,0,149.926-71.08,180.053-180.064l24.566-270.9C834.133,15.675,823.758,0,804.49,0h-1003.8c-16.363,0-29.627,11.97-29.627,26.737"
						transform="translate(670.711 224.367)"
					/>
					{Component && <Component />}
					<g transform="translate(921.176 -831.86)" onClick={onClose}>
						<g
							className="p-cuadro"
							transform="matrix(1, 0, 0, 1, -930.18, 827)">
							<circle
								className="l-cuadro"
								cx={21.5}
								cy={21.5}
								r={21.5}
								transform="translate(1453 245)"
							/>
						</g>
						<text
							className="m-cuadro"
							transform="translate(534.824 1104)">
							<tspan x={0} y={0}>
								{'X'}
							</tspan>
						</text>
					</g>
				</g>
			</svg>
		</div>
	)
}

export default Popups
