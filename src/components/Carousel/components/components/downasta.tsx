import React from 'react'

const DownAsta: React.FC<{onUnselected: () => void}> = ({ onUnselected }): JSX.Element => {
	return (
		<React.Fragment>
			<g transform='translate(695 620)' onClick={onUnselected}>
      <defs>
				<style>
					{
						'.a-subitem-3{fill:#001f5f;}.b-subitem-3{clip-path:url(#e-subitem-3);}.c-subitem-3{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.d-subitem-3{fill:url(#f-subitem-3);}.e-subitem-3{fill:#fff;font-size:28px;font-family:"Kiona-Bold";font-weight:700;}.f-subitem-3{filter:url(#c-subitem-3);}.g-subitem-3{filter:url(#a-subitem-3);}'
					}
				</style>
				<filter
					id="a-subitem-3"
					x={0}
					y={197.196}
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
					id="c-subitem-3"
					x={0}
					y={197.196}
					width={613.561}
					height={237.432}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="d" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="d" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="e-subitem-3">
					<g
						className="g-subitem-3"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="a-subitem-3"
							d="M488.811,0H106.75V.044C76.468,1.2,49.445,24.7,37.893,60.229L0,219.432H488.811v-.044c30.281-1.152,57.307-24.659,68.858-60.185L595.561,0Z"
							transform="translate(595.56 219.43) rotate(180)"
						/>
					</g>
				</clipPath>
				<pattern
					id="f-subitem-3"
					width={1}
					height={1}
					patternTransform="translate(658.295 438.863) rotate(-180)"
					viewBox="73.122 23.467 163.91 126.406">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={329.148}
						height={219.432}
						xlinkHref="/images/navbar/tt-2.jpg"
					/>
				</pattern>
			</defs>
			<g transform="translate(9)">
				<image
					width={284.225}
					height={213.833}
					transform="matrix(1, 0.017, -0.017, 1, 157.556, 0)"
					xlinkHref="/images/navbar/tt-1.png"
				/>
				<a href='/responsabilidad'>
				<g transform="translate(0 203.196)">
					<g
						className="f-subitem-3"
						transform="matrix(1, 0, 0, 1, -9, -203.2)">
						<path
							className="a-subitem-3"
							d="M488.811,0H106.75V.044C76.468,1.2,49.445,24.7,37.893,60.229L0,219.432H488.811v-.044c30.281-1.152,57.307-24.659,68.858-60.185L595.561,0Z"
							transform="translate(604.56 422.63) rotate(180)"
						/>
					</g>
					<g className="b-subitem-3" transform="translate(0 0)">
						<path
							className="c-subitem-3"
							d="M185.952,0H40.61V.017C29.09.455,18.81,9.393,14.415,22.9L0,83.432H185.952v-.017c11.52-.438,21.8-9.376,26.195-22.883L226.561,0Z"
							transform="translate(408.123 271.117) rotate(180)"
						/>
					</g>
					<path
						className="d-subitem-3"
						d="M85.269,0H83.444V.045C59.773,1.2,38.65,24.7,29.62,60.229L0,219.432H201.092v-.045c23.67-1.151,44.8-24.659,53.824-60.184L284.537,0Z"
						transform="translate(595.561 219.432) rotate(180)"
					/>
					<text
						className="e-subitem-3"
						transform="translate(33 101.454)">
						<tspan x={113.574} y={28}>
							{'RSE'}
						</tspan>
					</text>
				</g>
				</a>
			</g>
      </g>
		</React.Fragment>
	)
}

export default DownAsta
