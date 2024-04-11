import React from 'react'

interface ISlider2Card3 {
	onMouseLeave: () => void
}

const Slider2Card3: React.FC<ISlider2Card3> = ({
	onMouseLeave,
}): JSX.Element => {
	return (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-item-1811{fill:#fff;}.b-item-1811{fill:#e40032;font-size:130px;}.b-item-1811,.c-item-1811{font-family:Silka-SemiBold, Silka;font-weight:600;}.c-item-1811{fill:#182856;font-size:70px;}.d-item-1811{font-size:32px;}.e-item-1811{filter:url(#a-item-1811);}'
					}
				</style>
				<filter
					id="a-item-1811"
					x={0}
					y={0}
					width={394.286}
					height={282.278}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="b" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="b" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<g transform="translate(987 611.765)">
				<g
					className="e-item-1811"
					transform="matrix(1, 0, 0, 1, -9, -6)">
					<path
						className="a-item-1811"
						d="M359.883,264.278H16.4c-9.878,0-17.515-8.131-16.27-17.324L36.084,13.447C37.124,5.761,44.095,0,52.353,0H322.817c8.235,0,15.193,5.728,16.262,13.388l37.065,233.507c1.287,9.212-6.358,17.383-16.262,17.383"
						transform="translate(9 6)"
					/>
				</g>
				<text
					className="b-item-1811"
					transform="translate(37.464 11.278)">
					<tspan x={31.175} y={123}>
						{'91%'}
					</tspan>
				</text>
				<text
					className="c-item-1811"
					transform="translate(55.143 137.278)">
					<tspan x={69.142} y={66}>
						{'NPS '}
					</tspan>
					<tspan className="d-item-1811" x={13.722} y={100}>
						{'administrativos'}
					</tspan>
				</text>
			</g>
		</React.Fragment>
	)
}

export default Slider2Card3
