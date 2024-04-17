import React from 'react'
import './Navbar.css'
import SubmenuWay from './components/SubmenuWay'
import SubmenuSolution from './components/SubmenuSolution'
import SubmenuContact from './components/SubmenuContact'
import SubmenuEtic from './components/SubmenuEtic'
import SubmenuWorkUs from './components/SubmenuWorkUs'
import SubmenuActualidad from './components/SubmenuActualidad'

const Navbar: React.FC = () => {
	const [hover, setHover] = React.useState<string>('')
	const [showSearchable, setShowSearchable] = React.useState<boolean>(false)

	const subItemRef = React.useRef(null)

	return (
		<div className="navbar__container" id="navbar__container">
			<svg
				viewBox="0 0 1920 105"
				width="100%"
				height="100%"
				className="shadow-[rgba(0,0,0,0.25)_0px_0.0625em_0.0625em,rgba(0,0,0,0.25)_0px_0.125em_0.5em,rgba(255,255,255,0.1)_0px_0px_0px_1px_inset]"
				preserveAspectRatio="none">
				<defs>
					<filter
						id="a"
						x={0}
						y={0}
						width={1938}
						height={122.012}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="b" />
						<feFlood floodOpacity={0.302} />
						<feComposite operator="in" in2="b" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="c"
						x={1622}
						y={30}
						width={174}
						height={69}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="d" />
						<feFlood floodOpacity={0.302} />
						<feComposite operator="in" in2="d" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="e">
						<rect className="a" width={204.2} height={57.138} />
					</clipPath>
				</defs>
				<g>
					<g className="k" transform="matrix(1, 0, 0, 1, -9, -6)">
						<path
							className="b"
							d="M0,0H1920V104.012H0Z"
							transform="translate(9 6)"
						/>
					</g>
					<g transform="translate(1622 30)">
						<g
							className="j"
							transform="matrix(1, 0, 0, 1, -1631, -36)">
							<rect
								className="c"
								width={156}
								height={51}
								rx={25.5}
								transform="translate(1631 36)"
							/>
						</g>
						<text className="d" transform="translate(78 31)">
							<tspan x={-33.552} y={0}>
								{'UCITECH'}
							</tspan>
						</text>
					</g>
					<g
						transform="translate(1495.944 36.252)"
						onClick={() => setShowSearchable(!showSearchable)}>
						<path
							className="e"
							d="M16.508,0h-2.9a3.423,3.423,0,0,1-.48.136A14.924,14.924,0,0,0,3.742,5.109a15.105,15.105,0,0,0,1.748,21.6,14.644,14.644,0,0,0,16.611,1.5,1.154,1.154,0,0,1,1.633.246c1.456,1.516,2.96,2.986,4.45,4.469,1.045,1.04,2.062,2.11,3.157,3.094a3.509,3.509,0,0,0,3.606.929A3.749,3.749,0,0,0,37.1,34.661V33.355A7.887,7.887,0,0,0,34.908,30.2c-2.156-2.114-4.259-4.283-6.425-6.387a1.208,1.208,0,0,1-.263-1.748,13.324,13.324,0,0,0,1.753-5.326A14.867,14.867,0,0,0,19.927.853C18.82.472,17.649.279,16.508,0M15.045,26.175A11.123,11.123,0,1,1,26.151,15.061,11.132,11.132,0,0,1,15.045,26.175"
							transform="translate(0 0.001)"
						/>
						<path
							className="f"
							d="M92.652,44.056c.749-.171,1.561-.414,2.39-.535a6.577,6.577,0,0,1,6.512,3.285c.162.3.313.6.5.883a1.534,1.534,0,0,0,2.726-1.4,8.77,8.77,0,0,0-2.671-3.637A9.662,9.662,0,0,0,92.247,41,1.533,1.533,0,0,0,91.1,42.83a1.5,1.5,0,0,0,1.556,1.226"
							transform="translate(-81.429 -34.297)"
						/>
					</g>
					<g
						transform="translate(1238 27)"
						onClick={() => setHover(hover === 'contactenos' ? '' : 'contactenos')}
>
						<rect
							className="contactenos-a"
							width={137}
							height={76}
							style={{
								fill:
									hover === 'contactenos'
										? '#001F5F'
										: 'transparent',
							}}
						/>
						<text
							className="contactenos-b"
							transform="translate(69 29)"
							style={{
								fill:
									hover !== 'contactenos'
										? '#001F5F'
										: '#fff',
							}}>
							<tspan x={-58.905} y={0}>
								{'Cont\xE1ctenos'}
							</tspan>
						</text>
						{hover === 'contactenos' && (
							<line
								className="contactenos-c"
								x2={120}
								y1={1}
								y2={1}
								transform="translate(8.5 36.5)"
							/>
						)}
					</g>
					<g
						transform="translate(1086.982 27)"
						onClick={() => setHover(hover === 'trabaje' ? '' : 'trabaje')}>
						<path
							className="trabaje-a"
							d="M0,0H138.964V76H0Z"
							style={{
								fill:
									hover === 'trabaje'
										? '#001F5F'
										: 'transparent',
							}}
						/>
						<text
							className="trabaje-b"
							transform="translate(68.982 22)"
							style={{
								fill: hover === 'trabaje' ? '#fff' : '#001F5F',
							}}>
							<tspan x={-33.246} y={0}>
								{'Trabaje'}
							</tspan>
							<tspan x={-58.725} y={20}>
								{'con nosotros'}
							</tspan>
						</text>
						{hover === 'trabaje' && (
							<line
								className="trabaje-c"
								x2={80}
								transform="translate(28.982 47)"
							/>
						)}
					</g>
					<g
						transform="translate(951 27)"
						onClick={() => setHover(hover === 'etica' ? '' : 'etica')}>
						<rect
							className="etica-a"
							width={121}
							height={76}
							style={{
								fill:
									hover === 'etica'
										? '#001F5F'
										: 'transparent',
							}}
						/>
						<text
							className="etica-b"
							transform="translate(60 22)"
							style={{
								fill: hover !== 'etica' ? '#001F5F' : '#fff',
							}}>
							<tspan x={-30.114} y={0}>
								{'\xC9tica y'}
							</tspan>
							<tspan x={-51.912} y={20}>
								{'compliance\u200B'}
							</tspan>
						</text>
						{hover === 'etica' && (
							<path
								className="etica-c"
								d="M0,0H107.463"
								transform="translate(6.268 47)"
							/>
						)}
					</g>
					<g
						transform="translate(823 27)"
						onClick={() => setHover(hover === 'actualidad' ? '' : 'actualidad')}>
						<path
							className="actu-a"
							d="M0,0H117V76H0Z"
							style={{
								fill:
									hover === 'actualidad'
										? '#001F5F'
										: 'transparent',
							}}
						/>
						<text
							className="actu-b"
							transform="translate(68 29)"
							style={{
								fill:
									hover === 'actualidad' ? '#fff' : '#001F5F',
							}}>
							<tspan x={-57.555} y={0}>
								{'Actualidad\u200B'}
							</tspan>
						</text>
						{hover === 'actualidad' && (
							<line
								className="actualidad-c"
								x2={97}
								y1={1}
								y2={1}
								transform="translate(10.5 36.5)"
							/>
						)}
					</g>
					<g
						transform="translate(692 27)"
						onClick={() => setHover(hover === 'solucion' ? '' : 'solucion')}>
						<rect
							width={123}
							height={76}
							style={{
								fill:
									hover === 'solucion'
										? '#001F5F'
										: 'transparent',
							}}
						/>
						<text
							className="solucion-b"
							transform="translate(61 22)"
							style={{
								fill: hover === 'solucion' ? '#fff' : '#001F5F',
							}}>
							<tspan x={-47.772} y={0}>
								{'Soluciones'}
							</tspan>
							<tspan x={-37.935} y={20}>
								{'en salud\u200B'}
							</tspan>
						</text>
						{hover === 'solucion' && (
							<line
								className="solucion-c"
								x2={95}
								transform="translate(14.5 47)"
							/>
						)}
					</g>
					<g
						transform="translate(554 27)"
						onClick={() => setHover(hover === 'trayectoria' ? '' : 'trayectoria')}>
						<rect
							className="trayectoria-a"
							width={121}
							height={76}
							style={{
								fill:
									hover !== 'trayectoria'
										? 'transparent'
										: '#001F5F',
							}}
						/>
						<text
							className="trayectoria-b"
							transform="translate(60 29)"
							style={{
								fill:
									hover === 'trayectoria'
										? '#fff'
										: '#001F5F',
							}}>
							<tspan x={-50.697} y={0}>
								{'Trayectoria'}
							</tspan>
						</text>
						{hover === 'trayectoria' && (
							<line
								className="trayectoria-c"
								x2={101}
								y1={1}
								y2={1}
								transform="translate(10.5 35.5)"
							/>
						)}
					</g>
					<a href="/">
						<g
							transform="translate(468 27)"
							onClick={() => setHover(hover === 'home' ? '' : 'home')}>
							<rect
								className="a"
								width={78}
								height={76}
								style={{
									fill:
										hover === 'home'
											? '#001F5F'
											: 'transparent',
								}}
							/>
							<text
								className="home-menu-b"
								transform="translate(39 29)"
								style={{
									fill: hover === 'home' ? '#fff' : '#001F5F',
								}}>
								<tspan
									x={-26.262}
									y={0}
									style={{
										fill:
											hover === 'home'
												? '#fff'
												: '#001F5F',
									}}>
									{'Home'}
								</tspan>
							</text>
							{hover === 'home' && (
								<line
									className="home-menu-c"
									x2={52}
									y1={1}
									y2={1}
									transform="translate(13.5 36)"
									height={10}
									style={{ stroke: '#e40032' }}
								/>
							)}
						</g>
					</a>
					<a href="/">
						<g transform="translate(142 26.931)">
							<g className="h" transform="translate(0 0)">
								<path
									className="c"
									d="M34.052,36.752l8.073,10.989a.306.306,0,0,1,.057.177l.046,8.6a.3.3,0,0,1-.3.3l-1.2.006a.3.3,0,0,1-.3-.3l-.016-3.051-4.34.022.016,3.052a.3.3,0,0,1-.3.3l-1.2.006a.3.3,0,0,1-.3-.3l-.041-7.9a.3.3,0,0,1,.3-.3l1.2-.007a.3.3,0,0,1,.3.3l.016,3.051,4.34-.022-.017-3.264-7.33-9.98-6.236.032L19.592,48.524l.016,3.263,4.341-.023-.016-3.051a.3.3,0,0,1,.3-.3l1.2-.007a.3.3,0,0,1,.3.3l.041,7.9a.3.3,0,0,1-.3.3l-1.2.006a.3.3,0,0,1-.3-.3l-.016-3.052-4.34.023.016,3.052a.3.3,0,0,1-.3.3l-1.2.006a.3.3,0,0,1-.3-.3l-.045-8.6a.3.3,0,0,1,.056-.177L25.8,36.795a.3.3,0,0,1,.242-.125l7.765-.04a.3.3,0,0,1,.243.123m-12.5-8.985L8.559,23.623a.291.291,0,0,0-.185,0l-8.168,2.7a.3.3,0,0,0-.19.38l.376,1.14a.3.3,0,0,0,.38.19l2.9-.957L5.031,31.2l-2.9.957a.3.3,0,0,0-.19.38l.376,1.14a.3.3,0,0,0,.38.19l7.5-2.481a.3.3,0,0,0,.19-.38l-.376-1.14a.3.3,0,0,0-.38-.19l-2.9.959L5.379,26.511l3.1-1.025,11.8,3.765.964,2.915.994,3.005L15.006,45.228l-3.1,1.024-1.362-4.121,2.9-.957a.3.3,0,0,0,.19-.38l-.377-1.14a.3.3,0,0,0-.378-.19l-7.5,2.481a.3.3,0,0,0-.19.38l.376,1.14a.3.3,0,0,0,.38.19l2.9-.959L10.2,46.817l-2.9.959a.3.3,0,0,0-.191.38l.377,1.14a.3.3,0,0,0,.38.19l8.167-2.7a.3.3,0,0,0,.15-.11L24.14,35.6a.3.3,0,0,0,.041-.269L21.743,27.96a.3.3,0,0,0-.194-.193m16.018-2.03,12.946-4.281a.3.3,0,0,0,.149-.11l5.021-6.986a.3.3,0,0,0-.069-.419l-.975-.7a.3.3,0,0,0-.419.069L52.44,15.788l-3.525-2.533L50.7,10.777a.3.3,0,0,0-.068-.419l-.975-.7a.3.3,0,0,0-.419.069l-4.613,6.418a.3.3,0,0,0,.068.42l.976.7a.3.3,0,0,0,.419-.069l1.781-2.478,3.525,2.533-1.9,2.65L37.728,23.789l-5.065-3.639L32.6,7.766l1.9-2.65,3.525,2.533-1.781,2.478a.3.3,0,0,0,.069.419l.975.7a.3.3,0,0,0,.419-.069l4.613-6.419a.3.3,0,0,0-.069-.419l-.975-.7a.3.3,0,0,0-.419.069L39.079,6.186,35.555,3.654l1.781-2.479a.3.3,0,0,0-.069-.419l-.975-.7a.3.3,0,0,0-.419.069L30.853,7.111a.3.3,0,0,0-.056.177l.071,13.636a.3.3,0,0,0,.125.242L37.3,25.7a.3.3,0,0,0,.269.041m21.8,1.8.365-1.144a.3.3,0,0,0-.195-.377L51.342,23.4a.3.3,0,0,0-.186,0L38.21,27.682a.3.3,0,0,0-.191.194l-2.361,7.4a.3.3,0,0,0,.044.268l8.072,10.99a.306.306,0,0,0,.151.108l8.195,2.617a.3.3,0,0,0,.377-.195l.365-1.143a.3.3,0,0,0-.194-.377l-2.908-.929,1.32-4.135,2.908.928a.3.3,0,0,0,.377-.194l.365-1.144a.3.3,0,0,0-.195-.377L47,39.285a.3.3,0,0,0-.376.195l-.366,1.144a.3.3,0,0,0,.195.376l2.907.929-1.319,4.135-3.11-.992L37.6,35.091l1.9-5.941,11.757-3.888,3.108.993L53.048,30.39l-2.908-.929a.3.3,0,0,0-.377.195L49.4,30.8a.3.3,0,0,0,.195.376l7.529,2.4a.3.3,0,0,0,.377-.194l.366-1.144a.3.3,0,0,0-.195-.377l-2.908-.928,1.32-4.135,2.908.929a.3.3,0,0,0,.377-.195m-36.9-1.773,6.251-4.6a.3.3,0,0,0,.123-.244L28.747,7.279a.3.3,0,0,0-.058-.175L23.586.177a.3.3,0,0,0-.42-.064L22.2.825a.3.3,0,0,0-.063.42L23.947,3.7,20.452,6.275,18.642,3.818a.3.3,0,0,0-.42-.063l-.967.712a.3.3,0,0,0-.063.42l4.687,6.364a.3.3,0,0,0,.42.063l.967-.712a.3.3,0,0,0,.064-.42L21.52,7.725l3.495-2.574L26.95,7.779l.081,12.383-5.021,3.7-11.8-3.748L8.273,17.484l3.495-2.574,1.809,2.457a.3.3,0,0,0,.42.063l.967-.712a.3.3,0,0,0,.064-.42L10.339,9.935a.3.3,0,0,0-.42-.064l-.967.712A.3.3,0,0,0,8.89,11L10.7,13.46,7.205,16.034l-1.81-2.457a.3.3,0,0,0-.42-.064l-.967.712a.3.3,0,0,0-.063.42l5.1,6.927a.294.294,0,0,0,.15.108l13,4.129a.3.3,0,0,0,.269-.045"
									transform="translate(0 0)"
								/>
								<path
									className="i"
									d="M96.183,21.467H91.11a6.87,6.87,0,0,1-3.54-.949A7.06,7.06,0,0,1,85,17.938a7.154,7.154,0,0,1,0-7.123,7.159,7.159,0,0,1,2.568-2.59,6.946,6.946,0,0,1,6.357-.355,7.082,7.082,0,0,1,2.341,1.683l-.712.668A6.113,6.113,0,0,0,91.11,8.279a5.924,5.924,0,0,0-3.043.821,6.128,6.128,0,0,0-2.223,2.212,6.12,6.12,0,0,0,0,6.119,6.179,6.179,0,0,0,2.223,2.234,5.857,5.857,0,0,0,3.043.831h4.058V15.467H90.55V14.5h5.633Z"
									transform="translate(12.323 1.065)"
								/>
								<path
									className="i"
									d="M107.476,21.445l-5.828-7.079h1.727a6.883,6.883,0,0,0,2.59-.41,3.46,3.46,0,0,0,1.274-1.047,2.471,2.471,0,0,0,.539-1.543,2.545,2.545,0,0,0-.453-1.436,3.349,3.349,0,0,0-1.295-1.111,4.2,4.2,0,0,0-1.942-.432h-3.929V21.445h-.971V7.415h4.9a5.4,5.4,0,0,1,1.855.313,4.562,4.562,0,0,1,1.511.9,3.99,3.99,0,0,1,.961,1.274,3.468,3.468,0,0,1-.378,3.593,4.111,4.111,0,0,1-1.683,1.35,4.44,4.44,0,0,1-1.306.377,11.429,11.429,0,0,1-1.348.076l5.071,6.152Z"
									transform="translate(14.542 1.087)"
								/>
								<path
									className="i"
									d="M117.112,21.6a5.141,5.141,0,0,1-2.04-.421,5.33,5.33,0,0,1-1.737-1.2,4.94,4.94,0,0,1-1.155-1.727,5.54,5.54,0,0,1-.4-2.094V7.415h.971v8.742a4.519,4.519,0,0,0,.335,1.727,4.269,4.269,0,0,0,.939,1.424,4.382,4.382,0,0,0,1.424.961,4.255,4.255,0,0,0,1.663.335,4.3,4.3,0,0,0,1.683-.335,4.387,4.387,0,0,0,1.425-.961,4.268,4.268,0,0,0,.939-1.424,4.539,4.539,0,0,0,.334-1.727V7.415h.972v8.742a5.562,5.562,0,0,1-.4,2.094,4.955,4.955,0,0,1-1.155,1.727,5.36,5.36,0,0,1-1.727,1.2,5.169,5.169,0,0,1-2.072.421"
									transform="translate(16.388 1.087)"
								/>
								<path
									className="i"
									d="M125.507,21.445l-.022-14.03h5.007a4.892,4.892,0,0,1,2.277.54A4.406,4.406,0,0,1,134.432,9.4a3.5,3.5,0,0,1,0,3.962,4.372,4.372,0,0,1-1.663,1.456,4.892,4.892,0,0,1-2.277.54h-4.014v6.086Zm.971-7.1h4.014a4.042,4.042,0,0,0,1.792-.4,3.411,3.411,0,0,0,1.306-1.08,2.493,2.493,0,0,0,.485-1.478,2.524,2.524,0,0,0-.485-1.5,3.411,3.411,0,0,0-1.306-1.08,4.042,4.042,0,0,0-1.792-.4h-4.036Z"
									transform="translate(18.398 1.087)"
								/>
								<path
									className="i"
									d="M143.956,21.616a6.92,6.92,0,0,1-3.561-.961,7.152,7.152,0,0,1-3.54-6.205,7.152,7.152,0,0,1,3.54-6.205,7.08,7.08,0,0,1,7.123,0,7.153,7.153,0,0,1,3.54,6.205,7.153,7.153,0,0,1-3.54,6.205,6.92,6.92,0,0,1-3.561.961m0-13.34a5.906,5.906,0,0,0-3.065.831,6.25,6.25,0,0,0-2.235,2.245,6.192,6.192,0,0,0,0,6.194,6.241,6.241,0,0,0,2.235,2.245,6.065,6.065,0,0,0,6.13,0,6.148,6.148,0,0,0,2.223-2.245,6.259,6.259,0,0,0,0-6.194,6.157,6.157,0,0,0-2.223-2.245,5.909,5.909,0,0,0-3.065-.831"
									transform="translate(20.065 1.068)"
								/>
								<path
									className="i"
									d="M80.892,26.022h3.58a.47.47,0,0,1,.469.47v1.456a6.125,6.125,0,0,1,5.334-2.408,6.31,6.31,0,0,1,6.038,3.185,7.463,7.463,0,0,1,6.555-3.185c3.223,0,5.816,1.259,7.111,3.444a11.746,11.746,0,0,1,1.223,5.7V46.071a.47.47,0,0,1-.47.47h-3.987a.469.469,0,0,1-.47-.47V35.282c0-2.112-.3-3.26-1-4.037a3.63,3.63,0,0,0-2.852-1.186,3.736,3.736,0,0,0-3.519,2.074,9.694,9.694,0,0,0-.629,4.3v9.642a.47.47,0,0,1-.47.47H93.819a.47.47,0,0,1-.47-.47V35.282c0-2-.3-3.223-.925-4a3.957,3.957,0,0,0-3.037-1.222,3.534,3.534,0,0,0-3.556,2.222,12.138,12.138,0,0,0-.482,4.148v9.642a.47.47,0,0,1-.47.47H80.892a.47.47,0,0,1-.47-.47V26.492a.471.471,0,0,1,.47-.47"
									transform="translate(11.791 3.745)"
								/>
								<path
									className="i"
									d="M131.05,46.541h-3.579a.47.47,0,0,1-.47-.47v-2.2a8.159,8.159,0,0,1-6.815,3.149c-6,0-10.334-4.482-10.334-10.668,0-6.259,4.371-10.815,10.446-10.815a7.627,7.627,0,0,1,6.7,3.222V26.491a.469.469,0,0,1,.47-.469h3.579a.469.469,0,0,1,.47.469V46.071a.47.47,0,0,1-.47.47M114.815,36.466a5.765,5.765,0,0,0,6.075,6.038c3.556,0,5.964-2.482,5.964-6.149a5.944,5.944,0,0,0-6.111-6.3c-3.446,0-5.927,2.7-5.927,6.408"
									transform="translate(16.105 3.745)"
								/>
								<path
									className="i"
									d="M132.708,26.022h3.58a.47.47,0,0,1,.469.47v1.53c1.3-1.926,2.333-2.481,4.445-2.481h.37v4.741c-2.964.075-4.408,1.667-4.408,4.852V46.071a.47.47,0,0,1-.47.47h-3.987a.47.47,0,0,1-.47-.47V26.492a.471.471,0,0,1,.47-.47"
									transform="translate(19.388 3.745)"
								/>
								<path
									className="i"
									d="M146.682,38.467c.593,2.481,2.74,4.036,5.667,4.036a5.18,5.18,0,0,0,4.379-1.875.474.474,0,0,1,.352-.162h4.482a.468.468,0,0,1,.436.646,9.3,9.3,0,0,1-1.389,2.206,10.065,10.065,0,0,1-8.149,3.7c-6.321,0-11.208-4.762-11.11-10.848a10.908,10.908,0,0,1,11.873-10.588c5.563.507,9.534,4.993,9.534,10.99a7.935,7.935,0,0,1-.186,1.89Zm11.223-4.334c-.629-2.63-2.629-4.074-5.667-4.074-2.926,0-4.927,1.407-5.7,4.074Z"
									transform="translate(20.723 3.745)"
								/>
								<path
									className="i"
									d="M167.64,44.553l-7.258-17.948a.469.469,0,0,1,.436-.646h4.6a.468.468,0,0,1,.444.316l4.448,12.98,4.849-12.991a.47.47,0,0,1,.44-.3h4.625a.47.47,0,0,1,.431.656L169.207,53.049a.47.47,0,0,1-.431.283h-4.27a.47.47,0,0,1-.43-.659Z"
									transform="translate(23.509 3.806)"
								/>
								<path
									className="i"
									d="M70.377,19.983h-4L61.337,32.076a.47.47,0,0,0,.433.65h4.3a.47.47,0,0,0,.443-.314l1.863-5.28,2.925,8.3H63.179a4.858,4.858,0,0,0-4.486,2.99L55.24,46.7a.47.47,0,0,0,.433.65h4.58a.469.469,0,0,0,.431-.284L63.6,40.28H73.34l2.806,6.784a.469.469,0,0,0,.435.29h4.573a.47.47,0,0,0,.433-.651Z"
									transform="translate(8.093 2.93)"
								/>
							</g>
						</g>
					</a>
				</g>
			</svg>
			{showSearchable && (
				<svg style={{ position: 'absolute', width: '100%', transform: 'translate(620px, -6px)', maxWidth: 495 }}>
					<defs>
						<style>
							{
								'.a-item-1826{fill:#001f5f;}.b-item-1826{fill:#fff;}.c-item-1826{fill:#4d4d4d;}.d-item-1826{filter:url(#a-item-1826);}'
							}
						</style>
						<filter
							id="a-item-1826"
							x={0}
							y={0}
							width={502.806}
							height={69.876}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="b" />
							<feFlood floodOpacity={0.502} />
							<feComposite operator="in" in2="b" />
							<feComposite in="SourceGraphic" />
						</filter>
					</defs>
					<g transform="translate(-628.194 -836)">
						<g
							className="d-item-1826"
							transform="matrix(1, 0, 0, 1, 628.19, 836)">
							<path
								className="a-item-1826"
								d="M60.66,0A59.242,59.242,0,0,0,27.892,9.8,56.491,56.491,0,0,0,6.515,35.781L0,51.876H422.4a62.152,62.152,0,0,0,34.75-10.516,59.221,59.221,0,0,0,22.4-27.812L484.806,0Z"
								transform="translate(9 6)"
							/>
						</g>
						<path
							className="b-item-1826"
							d="M491.221,10H71.068c-22.735,0-43.15,13.483-51.452,33.982L14.663,56.209H433c24.222,0,45.909-14.537,54.441-36.493Z"
							transform="translate(626.685 834.833)"
						/>
						<rect
							className="c-item-1826"
							width={1.822}
							height={34.243}
							transform="translate(683.282 850.97)"
						/>
					</g>
				</svg>
			)}
			{hover === 'trayectoria' && <SubmenuWay ref={subItemRef} />}
			{hover === 'solucion' && <SubmenuSolution ref={subItemRef}/>}
			{hover === 'contactenos' && <SubmenuContact ref={subItemRef}/>}
			{hover === 'etica' && <SubmenuEtic ref={subItemRef}/>}
			{hover === 'trabaje' && <SubmenuWorkUs ref={subItemRef}/>}
			{hover === 'actualidad' && <SubmenuActualidad ref={subItemRef}/>}
		</div>
	)
}

export default Navbar
