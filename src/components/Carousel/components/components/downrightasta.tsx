import React from 'react'

const DownRightAsta: React.FC<{ onUnselected: () => void }> = ({
	onUnselected,
}): JSX.Element => {
	return (
		<React.Fragment>
			<g onClick={onUnselected} transform="translate(1064 480)">
				<defs>
					<style>
						{
							'.a-tt-5{fill:#001f5f;}.b-tt-5{clip-path:url(#e-tt-5);}.c-tt-5{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.d-tt-5{fill:url(#f-tt-5);}.e-tt-5{fill:#fff;font-size:28px;font-family:"Kiona-Bold";font-weight:700;}.f-tt-5{filter:url(#c-tt-5);}.g-tt-5{filter:url(#a-tt-5);}'
						}
					</style>
					<filter
						id="a-tt-5"
						x={153.845}
						y={62.596}
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
						id="c-tt-5"
						x={153.845}
						y={62.596}
						width={613.561}
						height={237.432}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="d" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="d" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="e-tt-5">
						<g
							className="g-tt-5"
							transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								className="a-tt-5"
								d="M488.811,219.432H106.75v-.044c-30.282-1.152-57.306-24.659-68.858-60.185L0,0H488.811V.044C519.092,1.2,546.118,24.7,557.669,60.229l37.893,159.2Z"
							/>
						</g>
					</clipPath>
					<pattern
						id="f-tt-5"
						width={1}
						height={1}
						viewBox="90.659 0 238.131 183.644">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={328.79}
							height={219.432}
							xlinkHref="/images/navbar/tt-6.jpg"
						/>
					</pattern>
				</defs>
				<a href="/nuestros-aliados">
					<image
						width={236.061}
						height={242.582}
						transform="translate(12.696) rotate(3)"
						xlinkHref="/images/navbar/tt-5.png"
					/>
					<g transform="translate(162.845 68.596)">
						<g
							className="f-tt-5"
							transform="matrix(1, 0, 0, 1, -162.84, -68.6)">
							<path
								className="a-tt-5"
								d="M488.811,219.432H106.75v-.044c-30.282-1.152-57.306-24.659-68.858-60.185L0,0H488.811V.044C519.092,1.2,546.118,24.7,557.669,60.229l37.893,159.2Z"
								transform="translate(162.84 68.6)"
							/>
						</g>
						<g className="b-tt-5" transform="translate(0 0)">
							<path
								className="c-tt-5"
								d="M488.811,219.432H106.75v-.044c-30.282-1.152-57.306-24.659-68.858-60.185L0,0H488.811V.044C519.092,1.2,546.118,24.7,557.669,60.229l37.893,159.2Z"
								transform="translate(-153.516 62.686)"
							/>
						</g>
						<path
							className="d-tt-5"
							d="M85.269,219.432H83.444v-.045C59.773,218.235,38.65,194.728,29.62,159.2L0,0H201.092V.045c23.67,1.151,44.8,24.659,53.824,60.184l29.62,159.2Z"
							transform="translate(0 0)"
						/>
					</g>

					<text
						className="e-tt-5"
						transform="translate(439.064 170.05)">
						<tspan x={2.932} y={28}>
							{'Nuestros aliados '}
						</tspan>
					</text>
				</a>
			</g>
		</React.Fragment>
	)
}

export default DownRightAsta
