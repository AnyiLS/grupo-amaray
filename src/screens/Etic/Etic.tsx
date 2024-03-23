import React from 'react'
import useGeneral from 'hooks/general.hook'
import Codigo from './Components/codigo'
import Lineacodigo from './Components/Lineacodigo'

const RoboticSurgery: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()

	const [view, setView] = React.useState(0)

	return (
		<React.Fragment>
			{width > 768 ? (
				<React.Fragment>
					{view === 1 && <Codigo onClose={() => setView(0)}/>}
					{view === 2 && <Lineacodigo onClose={() => setView(0)}/>}
					{view === 0 && (
						<svg
							width="100%"
							height={height}
							viewBox="0 0 1920 1080"
							preserveAspectRatio="none">
							<defs>
								<style>
									{
										'.a-etic{fill:url(#a-etic);}.b-etic{opacity:0.78;fill:url(#b-etic);}.c-etic,.m-etic{fill:#001f5f;}.c-etic,.g-etic{font-size:55px;}.c-etic,.g-etic,.i-etic{font-family:"Kiona-Bold";font-weight:700;}.d-etic{font-size:100px;}.e-etic{fill:url(#c-etic);}.f-etic{fill:url(#f-etic);}.g-etic,.i-etic,.l-etic{fill:#fff;}.h-etic{fill:rgba(67,67,67,0.09);}.i-etic{font-size:42px;}.j-etic{opacity:0.7;}.k-etic{fill:rgba(255,255,255,0.5);}.n-etic{filter:url(#i-etic);}.o-etic{filter:url(#g-etic);mix-blend-mode:multiply;isolation:isolate;}.p-etic{filter:url(#d-etic);}'
									}
								</style>
								<pattern
									id="a-etic"
									width={1}
									height={1}
									patternTransform="matrix(-1, 0, 0, 1, 2927.965, 0)"
									viewBox="0 41.2 1003.127 825.605">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={1463.982}
										height={1080}
										xlinkHref="/images/etic/etic-1.jpg"
									/>
								</pattern>
								<linearGradient
									id="b-etic"
									x1={0.5}
									x2={0.5}
									y2={1}
									gradientUnits="objectBoundingBox">
									<stop
										offset={0}
										stopColor="#fff"
										stopOpacity={0}
									/>
									<stop offset={1} stopColor="#fff" />
								</linearGradient>
								<pattern
									id="c-etic"
									width={1}
									height={1}
									viewBox="492.896 345.552 749.298 630.436">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={1735.09}
										height={1080}
										xlinkHref="/images/etic/etic-2.jpg"
									/>
								</pattern>
								<filter
									id="d-etic"
									x={0}
									y={0}
									width={1178}
									height={1100}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<linearGradient
									id="f-etic"
									x1={0.5}
									x2={0.5}
									y2={1}
									gradientUnits="objectBoundingBox">
									<stop
										offset={0}
										stopColor="#001f5f"
										stopOpacity={0}
									/>
									<stop offset={1} stopColor="#001f5f" />
								</linearGradient>
								<filter
									id="g-etic"
									x={0}
									y={0}
									width={1178}
									height={1100}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="h"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="h" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="i-etic"
									x={0}
									y={0}
									width={1938}
									height={92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="j"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite operator="in" in2="j" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<g transform="translate(734.154)">
									<path
										className="a-etic"
										d="M1919.046,0V1080H733.2c107.638,0,204.677-123.806,245.805-313.627L1122.522,0Z"
										transform="translate(-733.2)"
									/>
									<path
										className="b-etic"
										d="M1919.046,0V1080H733.2c107.638,0,204.677-123.806,245.805-313.627L1122.522,0Z"
										transform="translate(-733.2)"
									/>
									<text
										className="c-etic"
										transform="translate(572.846 732.688)">
										<tspan x={179.02} y={55}>
											{'L\xEDnea '}
										</tspan>
										<tspan
											className="d-etic"
											x={48.6}
											y={145}>
											{'\xE9tica'}
										</tspan>
									</text>
								</g>
								<g
									className="p-etic"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<path
										className="e-etic"
										d="M1160,0,1011.312,662.362C968.7,852.182,868.166,1080,756.65,1080H0V0Z"
										transform="translate(9 6)"
									/>
								</g>
								<g
									className="o-etic"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<path
										className="f-etic"
										d="M1160,0,1011.312,662.362C968.7,852.182,868.166,1080,756.65,1080H0V0Z"
										transform="translate(9 6)"
									/>
								</g>
								<text
									className="g-etic"
									transform="translate(278 735.688)">
									<tspan x={0} y={55}>
										{'C\xF3digo de'}
									</tspan>
									<tspan className="d-etic">
										<tspan x={0} y={145}>
											{'\xE9tica'}
										</tspan>
									</tspan>
								</text>
								<g
									className="n-etic"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<rect
										className="h-etic"
										width={1920}
										height={74}
										transform="translate(9 6)"
									/>
								</g>
								<text
									className="i-etic"
									transform="translate(692.789 10.566)">
									<tspan x={43.834} y={42}>
										{'\xC9TICA Y COMPLIANCE'}
									</tspan>
								</text>
								<g
									className="j-etic"
									transform="translate(814 871.163) rotate(180)"
									onClick={() => setView(1)}>
									<circle
										className="k-etic"
										cx={27}
										cy={27}
										r={27}
										transform="translate(0 0)"
									/>
									<path
										className="l-etic"
										d="M0,0V21.7L18.792,10.851,9.816,5.668Z"
										transform="translate(33.112 37.712) rotate(180)"
									/>
								</g>
								<g
									className="j-etic"
									transform="translate(1106 817.163)"
									onClick={() => setView(2)}>
									<circle
										className="m"
										cx={27}
										cy={27}
										r={27}
									/>
									<path
										className="l-etic"
										d="M0,21.7V0L18.792,10.852,9.816,16.035Z"
										transform="translate(33.112 37.991) rotate(180)"
									/>
								</g>
							</g>
						</svg>
					)}
				</React.Fragment>
			) : (
				<React.Fragment></React.Fragment>
			)}
		</React.Fragment>
	)
}

export default RoboticSurgery
