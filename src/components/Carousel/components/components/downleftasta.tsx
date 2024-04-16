import React from 'react'

const DownLeftAsta: React.FC<{ onUnselected: () => void }> = ({
	onUnselected,
}): JSX.Element => {
	return (
		<React.Fragment>
			<g transform="translate(181 480)" onClick={onUnselected}>
				<defs>
					<style>
						{
							'.a-tt-2{fill:#001f5f;}.b-tt-2{clip-path:url(#e-tt-2);}.c-tt-2{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.d-tt-2{fill:url(#f-tt-2);}.e-tt-2{fill:#fff;font-size:28px;font-family:"Kiona-Bold";font-weight:700;}.f-tt-2{filter:url(#c-tt-2);}.g-tt-2{filter:url(#a-tt-2);}'
						}
					</style>
					<filter
						id="a-tt-2"
						x={0}
						y={64.595}
						width={613.561}
						height={237.432}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="b" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="b" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="c-tt-2"
						x={0}
						y={64.595}
						width={613.561}
						height={237.432}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="d" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="d" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="e-tt-2">
						<g
							className="g-tt-2"
							transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								className="a-tt-2"
								d="M488.811,0H106.75V.044C76.468,1.2,49.445,24.7,37.893,60.229L0,219.432H488.811v-.044c30.281-1.152,57.307-24.659,68.858-60.185L595.561,0Z"
								transform="translate(595.56 219.43) rotate(180)"
							/>
						</g>
					</clipPath>
					<pattern
						id="f-tt-2"
						width={1}
						height={1}
						patternTransform="translate(658.295 438.863) rotate(-180)"
						viewBox="34.001 30.457 235.562 181.663">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={329.148}
							height={219.432}
							xlinkHref="/images/navbar/tt-4.jpg"
						/>
					</pattern>
				</defs>
				<a href='/filosofia'>
				<g transform="translate(9)">
					<image
						width={239.064}
						height={241.634}
						transform="matrix(0.999, 0.035, -0.035, 0.999, 494.139, 0)"
						xlinkHref="/images/navbar/tt-3.png"
					/>
					<g transform="translate(0 70.595)">
						<g
							className="f-tt-2"
							transform="matrix(1, 0, 0, 1, -9, -70.6)">
							<path
								className="a-tt-2"
								d="M488.811,0H106.75V.044C76.468,1.2,49.445,24.7,37.893,60.229L0,219.432H488.811v-.044c30.281-1.152,57.307-24.659,68.858-60.185L595.561,0Z"
								transform="translate(604.56 290.03) rotate(180)"
							/>
						</g>
						<g className="b-tt-2" transform="translate(0 0)">
							<path
								className="c-tt-2"
								d="M185.952,0H40.61V.017C29.09.455,18.81,9.393,14.415,22.9L0,83.432H185.952v-.017c11.52-.438,21.8-9.376,26.195-22.883L226.561,0Z"
								transform="translate(408.123 271.117) rotate(180)"
							/>
						</g>
						<path
							className="d-tt-2"
							d="M85.269,0H83.444V.045C59.773,1.2,38.65,24.7,29.62,60.229L0,219.432H201.092v-.045c23.67-1.151,44.8-24.659,53.824-60.184L284.537,0Z"
							transform="translate(595.561 219.432) rotate(180)"
						/>
						<text
							className="e-tt-2"
							transform="translate(33 101.454)">
							<tspan x={67.864} y={28}>
								{'Filosof\xEDa '}
							</tspan>
						</text>
					</g>
				</g>
				</a>
			</g>
		</React.Fragment>
	)
}

export default DownLeftAsta
