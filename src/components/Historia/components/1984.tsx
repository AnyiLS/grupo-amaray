import React from 'react'

interface ILifeLine1984 {
    onClick: () => void
	handleChangeStepForce: (index: number) => void
}

const LifeLine1984: React.FC<ILifeLine1984> = ({ onClick, handleChangeStepForce }): JSX.Element => {
	return (
		<svg viewBox="0 0 1920 834.49">
			<defs>
				<style>
					{
						'.a-lineat,.m-lineat{fill:#fff;}.b-lineat{fill:#e7002a;}.c-lineat,.i-lineat,.o-lineat,.q-lineat{fill:#001f5f;}.d-lineat{opacity:0.5;fill:url(#a-lineat);}.e-lineat{opacity:0.75;fill:url(#b-lineat);}.f-lineat{fill:none;stroke:#fff;stroke-width:3px;}.f-lineat,.g-lineat{opacity:0.6;}.h-lineat{fill:url(#c-lineat);}.i-lineat{font-size:32px;}.i-lineat,.m-lineat,.o-lineat{font-family:Silka-Bold, Silka;font-weight:700;}.j-lineat{clip-path:url(#h-lineat);}.k-lineat{fill:#182856;font-size:24px;font-family:Silka-Regular, Silka;}.l-lineat{fill:#e40032;}.m-lineat{font-size:40px;}.n-lineat{fill:url(#k-lineat);}.o-lineat{font-size:60px;}.p-lineat{opacity:0.7;}.q-lineat{font-size:18px;font-family:Silka-SemiBold, Silka;font-weight:600;}.r-lineat{filter:url(#p-lineat);}.s-lineat{filter:url(#n-lineat);}.t-lineat{filter:url(#l-lineat);}.u-lineat{filter:url(#i-lineat);}.v-lineat{filter:url(#f-lineat);}.w-lineat{filter:url(#d-lineat);}'
					}
				</style>
				<linearGradient
					id="a-lineat"
					x1={0.5}
					x2={0.5}
					y2={0.624}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
					<stop
						offset={0.085}
						stopColor="#001f5f"
						stopOpacity={0.016}
					/>
					<stop offset={1} stopColor="#001f5f" />
				</linearGradient>
				<linearGradient
					id="b-lineat"
					x1={0.5}
					y1={0.053}
					x2={0.5}
					y2={0.376}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
					<stop offset={1} stopColor="#001f5f" />
				</linearGradient>
				<pattern
					id="c-lineat"
					width={1}
					height={1}
					viewBox="0 47.274 302.286 150.046">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={302.286}
						height={201.545}
						xlinkHref="/images/bebe.jpg"
					/>
				</pattern>
				<filter
					id="d-lineat"
					x={931.954}
					y={0}
					width={320.286}
					height={168.046}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="e-lineat" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="e-lineat" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="f-lineat"
					x={948.694}
					y={109.355}
					width={281.522}
					height={133.735}
					filterUnits="userSpaceOnUse">
					<feOffset dy={-3} />
					<feGaussianBlur stdDeviation={3} result="g-lineat" />
					<feFlood floodOpacity={0.2} />
					<feComposite operator="in" in2="g-lineat" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="h-lineat">
					<rect
						className="a-lineat"
						width={479.319}
						height={236.689}
					/>
				</clipPath>
				<filter
					id="i-lineat"
					x={1489}
					y={649.861}
					width={298}
					height={98.849}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="j-lineat" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="j-lineat" />
					<feComposite in="SourceGraphic" />
				</filter>
				<pattern
					id="k-lineat"
					width={1}
					height={1}
					viewBox="42.96 39.858 389.366 193.27">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={475.286}
						height={272.985}
						xlinkHref="/images/logo.png"
					/>
				</pattern>
				<filter
					id="l-lineat"
					x={491.714}
					y={212.614}
					width={493.286}
					height={253.918}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="m-lineat" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="m-lineat" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="n-lineat"
					x={518.034}
					y={387.987}
					width={432.338}
					height={199.971}
					filterUnits="userSpaceOnUse">
					<feOffset dy={-3} />
					<feGaussianBlur stdDeviation={3} result="o-lineat" />
					<feFlood floodOpacity={0.2} />
					<feComposite operator="in" in2="o-lineat" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="p-lineat"
					x={229}
					y={737.49}
					width={1424}
					height={97}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="q-lineat" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="q-lineat" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<g transform="translate(0 6)">
				<path
					className="b-lineat"
					d="M600.14.055V1.563H741.7V1.509H885.271c69.19,0,131.1,35.928,157.716,91.533l.051.108,13.93,29.107h1.874l-14.259-29.794c-.5-1.049-1.016-2.087-1.545-3.121-1.688-3.316-3.507-6.567-5.575-9.951C1024.217,57.715,1004.884,39.1,981,25.235,952.558,8.725,919.457,0,885.271,0H648.927V.055Z"
					transform="translate(-600.14 237.198)"
				/>
				<path
					className="c-lineat"
					d="M1928,802.11l-33.267,10.463q-3.3,1.033-6.541,2.128c-54.718,18.307-101.061,47.762-134.344,85.439-34.6,39.172-52.883,84.758-52.883,131.839v325.495h3.161V1031.979c0-95.288,75.293-180.547,191.819-217.207l.228-.07L1928,804.691Z"
					transform="translate(-8 -766.48)"
				/>
				<g transform="translate(0)">
					<g transform="translate(0 36)">
						<path
							className="d-lineat"
							d="M761.857,0,0,792.286H1920L1158.142,0Z"
							transform="translate(0)"
						/>
						<path
							className="e-lineat"
							d="M864.554,0,497.566,792.286h924.867L1055.446,0Z"
							transform="translate(0)"
						/>
					</g>
					<line
						className="f-lineat"
						x2={1465}
						transform="translate(227.5 591.786)"
					/>
					<path
						className="f-lineat"
						d="M0,0H802"
						transform="translate(559 243.786)"
					/>
					<g className="g-lineat" transform="translate(940.954)">
						<g
							className="w-lineat"
							transform="matrix(1, 0, 0, 1, -940.95, -6)">
							<path
								className="h-lineat"
								d="M302.18,18.354,280.263,150.046H74.386c-33.232,0-53.4-24.047-57.646-34.691L.115,18.415C-.925,8.662,5.223,0,13.177,0H289.109c7.936,0,14.066,8.618,13.071,18.354"
								transform="translate(940.95 6)"
							/>
						</g>
						<g
							className="v-lineat"
							transform="matrix(1, 0, 0, 1, -940.95, -6)">
							<path
								className="a-lineat"
								d="M76.818,166.8c-33.233,0-53.4-24.047-57.646-34.691l13.149,76.638c.856,8.12,6.444,14.189,13.063,14.189h91.66l6.193,10.728,7.113,12.32a3.723,3.723,0,0,0,6.447,0l7.113-12.32,6.193-10.728h92.551c6.636,0,12.233-6.1,13.071-14.25l6.968-41.886Z"
								transform="translate(938.52 -10.76)"
							/>
						</g>
						<text
							className="i-lineat"
							transform="translate(116.046 189.286)">
							<tspan x={0} y={0}>
								{'1999'}
							</tspan>
						</text>
					</g>
					<g className="j-lineat" transform="translate(960 261.521)">
						<path
							className="a-lineat"
							d="M448.414,236.689H30.913A30.9,30.9,0,0,1,.384,200.977L27.924,26.1A30.9,30.9,0,0,1,58.452,0H448.414a30.9,30.9,0,0,1,30.9,30.906V205.785a30.9,30.9,0,0,1-30.9,30.9"
							transform="translate(0)"
						/>
					</g>
					<text
						className="k-lineat"
						transform="translate(1026 298.286)">
						<tspan x={0} y={23}>
							{'Nace Amarey Nova Medical al '}
						</tspan>
						<tspan x={0} y={49}>
							{'obtener la distribuci\xF3n de la '}
						</tspan>
						<tspan x={0} y={75}>
							{'inmunoglobulina humana IgG '}
						</tspan>
						<tspan x={0} y={101}>
							{'enriquecida, que le dio vida al '}
						</tspan>
						<tspan x={0} y={127}>
							{'pent\xE1mero que ha sido el '}
						</tspan>
						<tspan x={0} y={153}>
							{'s\xEDmbolo de la compa\xF1\xEDa'}
						</tspan>
					</text>
					<g transform="translate(1498 649.861)" onClick={onClick}>
						<g
							className="u-lineat"
							transform="matrix(1, 0, 0, 1, -1498, -655.86)">
							<path
								className="l-lineat"
								d="M280,0H57.432C34.283,0,13.5,23.591,5.042,59.456L0,80.849H220.722c24.663,0,46.745-25.435,55.433-63.849Z"
								transform="translate(1498 655.86)"
							/>
						</g>
						<path
							className="a-lineat"
							d="M45.263,0V24.412L66.419,12.2,56.314,6.375Z"
							transform="translate(175.737 28.219)"
						/>
						<text
							className="m-lineat"
							transform="translate(51 52.425)">
							<tspan x={0} y={0}>
								{'Avanzar'}
							</tspan>
						</text>
					</g>
					<g transform="translate(500.714 212.614)">
						<g
							className="t-lineat"
							transform="matrix(1, 0, 0, 1, -500.71, -218.61)">
							<path
								className="n-lineat"
								d="M475.12,28.858l-34.461,207.06h-323.7c-52.251,0-83.966-37.809-90.637-54.545L.181,28.954C-1.454,13.619,8.213,0,20.718,0h433.85c12.478,0,22.116,13.55,20.552,28.858"
								transform="translate(500.71 218.61)"
							/>
						</g>
						<g
							className="s-lineat"
							transform="matrix(1, 0, 0, 1, -500.71, -218.61)">
							<path
								className="a-lineat"
								d="M109.809,186.655c-52.252,0-83.966-37.809-90.637-54.545l20.674,120.5c1.345,12.768,10.132,22.31,20.538,22.31H204.5l9.738,16.867,11.184,19.37a5.854,5.854,0,0,0,10.137,0l11.184-19.37,9.738-16.867H402c10.434,0,19.234-9.6,20.552-22.406l10.956-65.858Z"
								transform="translate(507.86 267.88)"
							/>
						</g>
						<text
							className="o-lineat"
							transform="translate(168.286 303.672)"
							onClick={() => handleChangeStepForce(0)}>
							<tspan x={0} y={0}>
								{'1984'}
							</tspan>
						</text>
					</g>
					<g transform="translate(238 737.49)">
						<g
							className="r-lineat"
							transform="matrix(1, 0, 0, 1, -238, -743.49)">
							<rect
								className="a-lineat"
								width={1406}
								height={79}
								rx={39.5}
								transform="translate(238 743.49)"
							/>
						</g>
						<g
							className="p-lineat"
							transform="translate(67.7 39.554)">
							<path
								className="c-lineat"
								d="M4.29,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6C0,.717,1.921,0,4.29,0S8.58.717,8.58,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							/>
							<path
								className="c-lineat"
								d="M0,18.663H0a4.071,4.071,0,0,1,3.809-4.29H1262.286a4.071,4.071,0,0,1,3.809,4.29,4.071,4.071,0,0,1-3.809,4.29H3.809A4.071,4.071,0,0,1,0,18.663"
								transform="translate(0 -9.02)"
							/>
							<path
								className="c-lineat"
								d="M83.153,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							/>
							<path
								className="c-lineat"
								d="M162.016,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							/>
							<path
								className="c-lineat"
								d="M240.879,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							/>
							<path
								className="c-lineat"
								d="M319.742,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							/>
							<path
								className="c-lineat"
								d="M398.6,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							/>
							<path
								className="c-lineat"
								d="M477.467,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							/>
							<path
								className="c-lineat"
								d="M556.33,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
								transform="translate(0)"
							/>
							<path
								className="c-lineat"
								d="M635.193,13.933h0c-2.37,0-4.29-.717-4.29-1.6V1.6c0-.885,1.92-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
								transform="translate(0)"
							/>
							<path
								className="c-lineat"
								d="M714.056,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
								transform="translate(0)"
							/>
							<path
								className="c-lineat"
								d="M792.919,13.933h0c-2.37,0-4.29-.717-4.29-1.6V1.6c0-.885,1.92-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
								transform="translate(0)"
							/>
							<path
								className="c-lineat"
								d="M871.781,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
								transform="translate(0)"
							/>
							<path
								className="c-lineat"
								d="M950.644,13.933h0c-2.37,0-4.29-.717-4.29-1.6V1.6c0-.885,1.92-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
								transform="translate(0)"
							/>
							<path
								className="c-lineat"
								d="M1029.507,13.933h0c-2.37,0-4.29-.717-4.29-1.6V1.6c0-.885,1.92-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
								transform="translate(0)"
							/>
							<path
								className="c-lineat"
								d="M1108.37,13.933h0c-2.37,0-4.29-.717-4.29-1.6V1.6c0-.885,1.92-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.92,1.6-4.29,1.6"
								transform="translate(0)"
							/>
							<path
								className="c-lineat"
								d="M1187.233,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.92,1.6-4.29,1.6"
								transform="translate(0)"
							/>
							<path
								className="c-lineat"
								d="M1266.095,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.92,1.6-4.29,1.6"
								transform="translate(0)"
							/>
						</g>
						<path
							className="l-lineat"
							d="M20.632,22.269l4.892,6.658a.185.185,0,0,1,.035.107l.028,5.213a.183.183,0,0,1-.181.183l-.727,0a.182.182,0,0,1-.183-.181l-.01-1.849-2.63.013.01,1.849a.182.182,0,0,1-.181.183l-.727,0a.181.181,0,0,1-.182-.181l-.025-4.789a.181.181,0,0,1,.181-.183l.727,0a.183.183,0,0,1,.183.181l.01,1.849,2.63-.013-.01-1.978-4.442-6.047-3.779.019L11.871,29.4l.01,1.977,2.63-.014-.01-1.849a.181.181,0,0,1,.181-.183l.727,0a.182.182,0,0,1,.183.181l.025,4.789a.182.182,0,0,1-.181.183l-.727,0a.182.182,0,0,1-.183-.181l-.01-1.849-2.63.014.01,1.849a.183.183,0,0,1-.181.183l-.727,0a.182.182,0,0,1-.183-.181l-.027-5.213A.182.182,0,0,1,10.812,29l4.822-6.71a.184.184,0,0,1,.147-.076l4.7-.024a.181.181,0,0,1,.147.074m-7.576-5.444L5.186,14.314a.176.176,0,0,0-.112,0L.125,15.95a.182.182,0,0,0-.115.23l.228.691a.182.182,0,0,0,.23.115l1.755-.58.826,2.5-1.756.58a.182.182,0,0,0-.115.23l.228.691a.183.183,0,0,0,.23.115l4.547-1.5a.181.181,0,0,0,.115-.23L6.07,18.1a.183.183,0,0,0-.23-.115l-1.756.581-.825-2.5,1.877-.621,7.148,2.282.584,1.766.6,1.821L9.092,27.4l-1.878.62-.825-2.5,1.756-.58a.182.182,0,0,0,.115-.23l-.229-.691a.182.182,0,0,0-.229-.115l-4.547,1.5a.182.182,0,0,0-.115.23l.228.691a.182.182,0,0,0,.23.115l1.756-.581.826,2.5-1.756.581a.182.182,0,0,0-.116.23l.229.691a.182.182,0,0,0,.23.115l4.949-1.637a.182.182,0,0,0,.091-.067l4.821-6.709a.18.18,0,0,0,.025-.163l-1.477-4.467a.182.182,0,0,0-.117-.117m9.706-1.23L30.607,13a.18.18,0,0,0,.09-.067L33.739,8.7a.182.182,0,0,0-.042-.254l-.591-.424a.181.181,0,0,0-.254.042l-1.08,1.5L29.638,8.032l1.079-1.5a.181.181,0,0,0-.041-.254l-.591-.424a.181.181,0,0,0-.254.042L27.037,9.782a.182.182,0,0,0,.041.254l.591.424a.182.182,0,0,0,.254-.042L29,8.918l2.136,1.535-1.154,1.606L22.86,14.414l-3.069-2.205-.039-7.5L20.906,3.1l2.136,1.535-1.079,1.5A.181.181,0,0,0,22,6.39l.591.424a.181.181,0,0,0,.254-.042l2.795-3.889A.181.181,0,0,0,25.6,2.63l-.591-.424a.182.182,0,0,0-.254.042l-1.08,1.5L21.543,2.215l1.079-1.5A.182.182,0,0,0,22.58.459L21.99.034a.181.181,0,0,0-.254.042L18.694,4.309a.185.185,0,0,0-.034.107l.043,8.262a.181.181,0,0,0,.076.147L22.6,15.57a.182.182,0,0,0,.163.025m13.209,1.089.221-.693a.182.182,0,0,0-.118-.229l-4.965-1.585a.183.183,0,0,0-.113,0l-7.844,2.594a.18.18,0,0,0-.116.117L21.6,21.372a.181.181,0,0,0,.026.163l4.891,6.659a.185.185,0,0,0,.092.065l4.965,1.585a.182.182,0,0,0,.229-.118l.221-.693a.181.181,0,0,0-.117-.229l-1.762-.563.8-2.505,1.762.562a.182.182,0,0,0,.229-.117l.221-.693a.182.182,0,0,0-.118-.229L28.48,23.8a.181.181,0,0,0-.228.118l-.222.693a.181.181,0,0,0,.118.228l1.761.563-.8,2.505-1.884-.6-4.442-6.048,1.149-3.6,7.124-2.356,1.883.6-.8,2.505-1.762-.563a.183.183,0,0,0-.229.118l-.221.693a.181.181,0,0,0,.118.228l4.562,1.456a.182.182,0,0,0,.229-.117l.222-.693a.183.183,0,0,0-.118-.229l-1.762-.562.8-2.505,1.762.563a.183.183,0,0,0,.229-.118m-22.36-1.074,3.788-2.79a.183.183,0,0,0,.074-.148l-.055-8.262a.179.179,0,0,0-.035-.106L14.291.107a.181.181,0,0,0-.254-.039L13.451.5a.182.182,0,0,0-.038.254l1.1,1.489L12.392,3.8l-1.1-1.489a.182.182,0,0,0-.254-.038l-.586.431a.182.182,0,0,0-.038.254l2.84,3.856a.182.182,0,0,0,.254.038l.586-.431a.182.182,0,0,0,.039-.254l-1.1-1.489,2.118-1.56,1.173,1.592.049,7.5-3.042,2.241L6.185,12.186,5.012,10.594,7.13,9.034l1.1,1.489a.182.182,0,0,0,.254.038l.586-.431a.182.182,0,0,0,.039-.254L6.264,6.02a.181.181,0,0,0-.254-.039l-.586.431a.182.182,0,0,0-.038.254l1.1,1.489L4.365,9.716l-1.1-1.489a.182.182,0,0,0-.254-.039l-.586.431a.182.182,0,0,0-.038.254l3.092,4.2a.178.178,0,0,0,.091.065l7.874,2.5a.183.183,0,0,0,.163-.027"
							transform="translate(53.415 5.049)"
						/>
						<text
							className="q-lineat"
							transform="translate(51.016 72.16)"
							onClick={() => handleChangeStepForce(0)}>
							<tspan x={0} y={0}>
								{'1984'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(131.016 72.16)"  onClick={() => handleChangeStepForce(1)}>
							<tspan x={0} y={0}>
								{'1999'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(210.016 72.16)"  onClick={() => handleChangeStepForce(2)}>
							<tspan x={0} y={0}>
								{'2000'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(293.016 72.16)"  onClick={() => handleChangeStepForce(3)}>
							<tspan x={0} y={0}>
								{'2007'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(374.016 72.16)"  onClick={() => handleChangeStepForce(4)}>
							<tspan x={0} y={0}>
								{'2009'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(457.016 72.16)"  onClick={() => handleChangeStepForce(5)}>
							<tspan x={0} y={0}>
								{'2011'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(533.016 72.16)"  onClick={() => handleChangeStepForce(6)}>
							<tspan x={0} y={0}>
								{'2011'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(610.016 72.16)"  onClick={() => handleChangeStepForce(7)}>
							<tspan x={0} y={0}>
								{'2012'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(688.016 72.16)"  onClick={() => handleChangeStepForce(8)}>
							<tspan x={0} y={0}>
								{'2012'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(767.016 72.16)"  onClick={() => handleChangeStepForce(9)}>
							<tspan x={0} y={0}>
								{'2014'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(845.016 72.16)"  onClick={() => handleChangeStepForce(10)}>
							<tspan x={0} y={0}>
								{'2014'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(925.016 72.16)"  onClick={() => handleChangeStepForce(11)}>
							<tspan x={0} y={0}>
								{'2016'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(1002.016 72.16)"  onClick={() => handleChangeStepForce(12)}>
							<tspan x={0} y={0}>
								{'2017'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(1081.016 72.16)"  onClick={() => handleChangeStepForce(13)}>
							<tspan x={0} y={0}>
								{'2023'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(1159.016 72.16)"  onClick={() => handleChangeStepForce(14)}>
							<tspan x={0} y={0}>
								{'2023'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(1238.016 72.16)"  onClick={() => handleChangeStepForce(15)}>
							<tspan x={0} y={0}>
								{'2023'}
							</tspan>
						</text>
						<text
							className="q-lineat"
							transform="translate(1316.016 72.16)"  onClick={() => handleChangeStepForce(16)}>
							<tspan x={0} y={0}>
								{'2023'}
							</tspan>
						</text>
					</g>
				</g>
			</g>
		</svg>
	)
}

export default LifeLine1984