import React from 'react'

const Tooltip: React.FC = (): JSX.Element => {
	return (
		<svg viewBox="0 0 232.321 279.885" width={200} height={247}>
			<defs>
				<style>
					{
						'.a-item-100{opacity:0.8;}.b-item-100{fill:#e7002a;}.c-item-100{fill:#001f5f;}.d-item-100{fill:#182856;font-size:24px;font-family:Silka-SemiBold, Silka;font-weight:600;}.e-item-100{filter:url(#c-item-100);}.f-item-100{filter:url(#a-item-100);}'
					}
				</style>
				<filter
					id="a-item-100"
					x={33.074}
					y={0}
					width={192.606}
					height={198.277}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="b" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="b" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="c-item-100"
					x={0}
					y={60.627}
					width={112.741}
					height={142.903}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="d" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="d" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<g className="a-item-100" transform="translate(1161.321 -1915.115)">
				<g transform="translate(-1157 1921.115)">
					<g
						className="f-item-100"
						transform="matrix(1, 0, 0, 1, -4.32, -6)">
						<path
							className="b-item-100"
							d="M66.284,180.172,156.91,150.2a2.1,2.1,0,0,0,1.047-.769L193.1,100.527a2.1,2.1,0,0,0-.478-2.931l-6.823-4.9a2.1,2.1,0,0,0-2.931.48L170.4,110.523l-24.672-17.73,12.464-17.349a2.1,2.1,0,0,0-.48-2.931l-6.819-4.9a2.1,2.1,0,0,0-2.933.481l-32.288,44.927a2.1,2.1,0,0,0,.478,2.933l6.826,4.9a2.1,2.1,0,0,0,2.931-.481l12.466-17.347,24.674,17.732-13.332,18.55-82.3,27.218L31.962,141.053,31.51,54.368,44.84,35.816l24.674,17.73L57.049,70.892a2.1,2.1,0,0,0,.478,2.933l6.826,4.906a2.1,2.1,0,0,0,2.931-.481L99.571,33.318a2.1,2.1,0,0,0-.48-2.933l-6.825-4.9a2.1,2.1,0,0,0-2.931.48L76.87,43.309,52.2,25.579,64.665,8.232A2.1,2.1,0,0,0,64.183,5.3L57.36.4a2.1,2.1,0,0,0-2.933.48L19.284,49.784a2.1,2.1,0,0,0-.394,1.236l.5,95.449a2.1,2.1,0,0,0,.875,1.695L64.4,179.883a2.1,2.1,0,0,0,1.886.289"
							transform="translate(23.18 6)"
						/>
					</g>
					<g
						className="e-item-100"
						transform="matrix(1, 0, 0, 1, -4.32, -6)">
						<path
							className="c-item-100"
							d="M92.441,108.793a9.533,9.533,0,0,0-10.421-2.652l.6-.6a9.808,9.808,0,0,0,.487-13.567,9.54,9.54,0,0,0-13.7-.212l1.644-1.644a9.808,9.808,0,0,0,.488-13.567,9.543,9.543,0,0,0-13.7-.212L82.98,51.2a9.806,9.806,0,0,0,.488-13.567,9.543,9.543,0,0,0-13.7-.21L31.66,75.533a58.154,58.154,0,0,0-1.933-21.847A8.972,8.972,0,0,0,16.475,48.47a9.289,9.289,0,0,0-3.89,10.554c4.515,16.339-3.5,33.505-9.826,48.261-3.046,7.094-6.516,21.647,7.283,35.447l8.122,8.122c18.464,18.464,42.518,2.339,46.522-1.667l1.565-1.565L86,127.877l5.769-5.771a9.786,9.786,0,0,0,.674-13.313"
							transform="translate(9 32)"
						/>
					</g>
					<text
						className="d-item-100"
						transform="translate(0 215.885)">
						<tspan x={0} y={0}>
							{'Conoce m\xE1s de '}
						</tspan>
						<tspan x={0} y={26}>
							{'Amarey dando clic '}
						</tspan>
						<tspan x={0} y={52}>
							{'en cada uno '}
						</tspan>
					</text>
				</g>
			</g>
		</svg>
	)
}

export default Tooltip
