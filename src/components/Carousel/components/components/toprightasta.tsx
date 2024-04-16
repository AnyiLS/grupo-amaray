import React from 'react'

const TopRightAsta: React.FC<{ onUnselected: () => void }> = ({
	onUnselected,
}): JSX.Element => {
	return (
		<React.Fragment>
			<g onClick={onUnselected} transform='translate(1020 160)'>
				<defs>
					<style>
						{
							'.a-tt-7{fill:#001f5f;}.b-tt-7{fill:url(#c-tt-7);}.c-tt-7{clip-path:url(#f-tt-7);}.d-tt-7{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.e-tt-7{fill:url(#g-tt-7);}.f-tt-7{fill:#fff;font-size:28px;font-family:"Kiona-Bold";font-weight:700;}.g-tt-7{filter:url(#d-tt-7);}.h-tt-7{filter:url(#a-tt-7);}'
						}
					</style>
					<filter
						id="a-tt-7"
						x={86.722}
						y={0}
						width={613.561}
						height={237.432}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="b" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="b" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="c-tt-7"
						preserveAspectRatio="none"
						width="100%"
						height="100%"
						viewBox="0 0 736 610">
						<image
							width={736}
							height={610}
							xlinkHref="/images/navbar/tt-7.png"
						/>
					</pattern>
					<filter
						id="d-tt-7"
						x={86.722}
						y={0}
						width={613.561}
						height={237.432}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="e" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="e" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="f-tt-7">
						<g
							className="h-tt-7"
							transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								className="a-tt-7"
								d="M488.811,219.432H106.75v-.044c-30.282-1.152-57.306-24.659-68.858-60.185L0,0H488.811V.044C519.092,1.2,546.118,24.7,557.669,60.229l37.893,159.2Z"
							/>
						</g>
					</clipPath>
					<pattern
						id="g-tt-7"
						width={1}
						height={1}
						viewBox="13.815 0 284.537 219.432">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={329.336}
							height={219.432}
							xlinkHref="/images/navbar/tt-8.jpg"
						/>
					</pattern>
				</defs>
				<a href="/historia">
				<g transform="translate(0 6)">
					<rect
						className="b-tt-7"
						width={247.824}
						height={205.74}
						transform="matrix(1, 0.017, -0.017, 1, 3.591, 114.415)"
					/>
					<g transform="translate(95.722 0)">
						<g
							className="g-tt-7"
							transform="matrix(1, 0, 0, 1, -95.72, -6)">
							<path
								className="a-tt-7"
								d="M488.811,219.432H106.75v-.044c-30.282-1.152-57.306-24.659-68.858-60.185L0,0H488.811V.044C519.092,1.2,546.118,24.7,557.669,60.229l37.893,159.2Z"
								transform="translate(95.72 6)"
							/>
						</g>
						<g className="c-tt-7" transform="translate(0 0)">
							<path
								className="d-tt-7"
								d="M488.811,219.432H106.75v-.044c-30.282-1.152-57.306-24.659-68.858-60.185L0,0H488.811V.044C519.092,1.2,546.118,24.7,557.669,60.229l37.893,159.2Z"
								transform="translate(-153.516 62.686)"
							/>
						</g>
						<path
							className="e-tt-7"
							d="M85.269,219.432H83.444v-.045C59.773,218.235,38.65,194.728,29.62,159.2L0,0H201.092V.045c23.67,1.151,44.8,24.659,53.824,60.184l29.62,159.2Z"
							transform="translate(0 0)"
						/>
					</g>
					<text
						className="f-tt-7"
						transform="translate(360.16 91.144)">
						<tspan x={19.949} y={28}>
							{'Nuestra historia '}
						</tspan>
					</text>
				</g>
				</a>
			</g>
		</React.Fragment>
	)
}

export default TopRightAsta
