import React from 'react'
import Slider2Card4 from './components/Slider2Card4'
import Slider2Card1 from './components/Slider2Card1'
import Slider2Card2 from './components/Slider2Card2'
import Slider2Card3 from './components/Slider2Card3'
interface ISlider {
	height: string
	index: number
	handleChangeSlide: (position: number) => void
}

export const Slider2: React.FC<ISlider> = ({ height, index }) => {
	const [grandImage, setGrandImage] = React.useState<boolean>(false)
	const [hoverCard, setHoverCard] = React.useState<number | null>(null)

	React.useEffect(() => {
		if (index === 1) setTimeout(() => setGrandImage(true), 2000)
		else setTimeout(() => setGrandImage(false), 1000)
	}, [index])

	return (
		<svg
			width="100%"
			height={height}
			viewBox="0 30 1920 1080"
			preserveAspectRatio="none">
			<defs>
				<style>
					{
						'.a-item-1802,.f-item-1802{fill:#fff;}.a-item-1802{stroke:#707070;}.b-item-1802,.c-item-1802{fill:none;stroke-miterlimit:10;stroke-width:3.044px;}.b-item-1802{stroke:#001f5f;}.c-item-1802{stroke:#e40032;}.d-item-1802{clip-path:url(#a-item-1802);}.e-item-1802{fill:#e40032;}.g-item-1802,.m-item-1802{fill:#001f5f;}.g-item-1802{font-size:100px;}.g-item-1802,.i-item-1802,.l-item-1802,.m-item-1802{font-family:Silka-SemiBold, Silka;font-weight:600;}.h-item-1802,.j-item-1802,.l-item-1802{fill:#182856;}.h-item-1802{font-size:23px;opacity:0;}.h-item-1802,.j-item-1802{font-family:Silka-Regular, Silka;}.j-item-1802{font-size:32px;}.k-item-1802{font-family:Silka-Bold, Silka;font-weight:700;}.l-item-1802{font-size:24px;}.m-item-1802{font-size:70px;}.n-item-1802{filter:url(#h-item-1802);}.o-item-1802{filter:url(#f-item-1802);}.p-item-1802{filter:url(#d-item-1802);}.q-item-1802{filter:url(#b-item-1802);}'
					}
				</style>
				<style>
					{
						'.a-item-1812{fill:none;}.b-item-1812{clip-path:url(#a-item-1812);}.c-item-1812{fill:url(#b-item-1812);}'
					}
				</style>
				<style>
					{
						'.a-item-1813{fill:#001f5f;}.b-item-1813{fill:none;}.c-item-1813{clip-path:url(#a-item-1813);}.d-item-1813{clip-path:url(#b-item-1813);}.e-item-1813{fill:url(#c-item-1813);}'
					}
				</style>
				<clipPath id="a-item-1802">
					<rect
						className="a-item-1802"
						width={718.679}
						height={651.976}
					/>
				</clipPath>
				<filter
					id="b-item-1802"
					x={186.459}
					y={608.671}
					width={361.393}
					height={282.278}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="c" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="c" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="d-item-1802"
					x={582.459}
					y={721.296}
					width={361.393}
					height={282.278}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="e" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="e" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="f-item-1802"
					x={979.459}
					y={606.296}
					width={361.393}
					height={282.278}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="g" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="g" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="h-item-1802"
					x={1375.459}
					y={706.296}
					width={361.393}
					height={282.278}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="i" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="i" />
					<feComposite in="SourceGraphic" />
				</filter>

				<clipPath id="a-item-1812">
					<rect
						className="a-item-1812"
						width={420}
						height={191.862}
					/>
				</clipPath>
				<pattern
					id="b-item-1812"
					width={1}
					height={1}
					viewBox="0 24.157 420 191.862">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={420}
						height={279.837}
						xlinkHref="/images/servicios_2.webp"
					/>
				</pattern>
				<clipPath id="a-item-1812">
					<rect
						className="a-item-1812"
						width={765.574}
						height={481.598}
					/>
				</clipPath>
				<clipPath id="b-item-1812">
					<rect
						className="b-item-1812"
						width={757.124}
						height={488.355}
					/>
				</clipPath>
				<pattern
					id="c-item-1812"
					width={1}
					height={1}
					viewBox="0 -27.698 757.124 488.355">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={757.124}
						height={504.456}
						xlinkHref="/images/servicios_2.webp"
					/>
				</pattern>
				<clipPath id="a-item-1813">
					<rect
						className="a-item-1813"
						width={765.574}
						height={481.598}
					/>
				</clipPath>
				<clipPath id="b-item-1813">
					<rect
						className="b-item-1813"
						width={757.124}
						height={488.355}
					/>
				</clipPath>
				<pattern
					id="c-item-1813"
					width={1}
					height={1}
					viewBox="0 -27.698 757.124 488.355">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={757.124}
						height={504.456}
						xlinkHref="/images/servicios_2.webp"
					/>
				</pattern>
			</defs>
			<g transform="translate(1.459 0.531)">
				{grandImage ? (
					<React.Fragment>
						<g transform='translate(0 -39)' onClick={() => setGrandImage(false)}>
							<g
								transform="translate(0 17.322)"
								>
								<g className="c-item-1813">
									<path
										className="a-item-1813"
										d="M499.371,481.6H0V0H765.574L667.443,326.841C639.32,420.508,572.973,481.6,499.371,481.6"
									/>
								</g>
							</g>
							<g className="d-item-1813">
								<path
									className="e-item-1813"
									d="M493.859,488.355H0V0H757.124L660.076,331.427c-27.812,94.981-93.426,156.928-166.217,156.928"
								/>
							</g>
						</g>
					</React.Fragment>
				) : (
					<g
						className="b-item-1812"
						onClick={() => setGrandImage(true)}>
						<path
							className="c-item-1812"
							d="M273.959,191.862H0V0H420L366.164,130.209a99.776,99.776,0,0,1-92.206,61.653"
						/>
					</g>
				)}
				<path
					className="b-item-1802"
					d="M1239.687,1052.676h-295.9c-51.516,0-97.979,9.733-117.8,24.675l-90.678,68.37"
					transform="translate(680.314 -38.03)"
				/>
				<path
					className="b-item-1802"
					d="M1930.082,812.332h497.363c71.706,0,136.381-48.228,163.966-122.268l126.216-338.779"
					transform="translate(-1930.082 -351.285)"
				/>
				<path
					className="c-item-1802"
					d="M0,0H231.748c40.347,0,76.738,34.049,92.259,86.321l26.777,90.2L420,409.664"
					transform="translate(420 986.818) rotate(180)"
				/>
				<path
					className="c-item-1802"
					d="M0,0H254.985c44.393,0,84.432,10.046,101.51,25.47l29.462,26.613,76.156,68.791"
					transform="translate(249 986.818)"
				/>
				<g
					className="d-item-1802"
					transform="translate(1920 1.583) rotate(90)">
					<path
						className="e-item-1802"
						d="M350.434,379.534l83.38,113.207a3.205,3.205,0,0,1,.6,1.81L436,582.362a2.976,2.976,0,0,1-3,3.039l-12.186-.1a3.146,3.146,0,0,1-3.1-3.082l-.559-31.143-44.053-.341.559,31.155a2.961,2.961,0,0,1-3,3.039l-12.186-.1a3.128,3.128,0,0,1-3.088-3.082l-1.445-80.672a2.952,2.952,0,0,1,2.987-3.039l12.186.086a3.165,3.165,0,0,1,3.1,3.093l.559,31.143,44.053.341-.6-33.32L340.526,396.572l-63.3-.482L205.175,497.8l.586,33.308,44.064.329-.559-31.143a2.952,2.952,0,0,1,2.987-3.039l12.186.086a3.149,3.149,0,0,1,3.1,3.094l1.445,80.672A2.966,2.966,0,0,1,266,584.143l-12.186-.1a3.146,3.146,0,0,1-3.1-3.082l-.559-31.155L206.1,549.48l.559,31.155a2.976,2.976,0,0,1-3,3.039l-12.186-.1a3.154,3.154,0,0,1-3.1-3.082l-1.57-87.811a3.007,3.007,0,0,1,.547-1.795L266.693,378.9a2.984,2.984,0,0,1,2.44-1.244l78.817.6a3.11,3.11,0,0,1,2.484,1.284M222.351,286.209l-132.4-43.991a2.934,2.934,0,0,0-1.874-.012l-82.569,26.5a3,3,0,0,0-1.883,3.849l3.966,11.681a3.117,3.117,0,0,0,3.877,1.992l29.277-9.4,14.374,42.237-29.289,9.4a3,3,0,0,0-1.883,3.849l3.966,11.681a3.132,3.132,0,0,0,3.877,1.992l75.858-24.351a2.986,2.986,0,0,0,1.883-3.849L105.564,306.1a3.132,3.132,0,0,0-3.877-1.992L72.4,313.52,58.036,271.284l31.317-10.06L209.6,301.186l10.16,29.873,10.477,30.8L158.19,463.569l-31.329,10.048L112.5,431.381l29.289-9.4a3,3,0,0,0,1.883-3.849l-3.977-11.681a3.114,3.114,0,0,0-3.866-1.992L59.969,428.814a3,3,0,0,0-1.883,3.849l3.966,11.682a3.122,3.122,0,0,0,3.877,1.992l29.289-9.408,14.374,42.237L80.3,488.572a2.992,2.992,0,0,0-1.895,3.849L82.386,504.1a3.122,3.122,0,0,0,3.877,1.992l82.558-26.512a2.945,2.945,0,0,0,1.51-1.1L249.661,366.5a3.017,3.017,0,0,0,.384-2.745l-25.7-75.553a3.17,3.17,0,0,0-1.992-1.991m162.34-18.635,130.866-42.018a2.916,2.916,0,0,0,1.5-1.1L567.118,153.8a3.109,3.109,0,0,0-.753-4.28l-9.984-7.277a3,3,0,0,0-4.24.648l-17.766,25.058-36.109-26.309,17.755-25.059a3.1,3.1,0,0,0-.741-4.28l-9.984-7.277a2.989,2.989,0,0,0-4.24.648l-45.993,64.9a3.11,3.11,0,0,0,.741,4.292l10,7.277a3.011,3.011,0,0,0,4.24-.648L487.8,156.435,523.9,182.743l-18.989,26.8L386.068,247.7l-51.884-37.8L331.925,83.5l18.989-26.8,36.108,26.309-17.755,25.059a3.1,3.1,0,0,0,.753,4.28l9.984,7.277a3,3,0,0,0,4.239-.648l45.993-64.913a3.1,3.1,0,0,0-.753-4.28L419.5,42.508a3.011,3.011,0,0,0-4.24.648L397.495,68.214l-36.1-26.3,17.754-25.07a3.109,3.109,0,0,0-.753-4.28L368.415,5.29a2.989,2.989,0,0,0-4.239.648L314.113,76.591a3.059,3.059,0,0,0-.547,1.795l2.491,139.178a3.139,3.139,0,0,0,1.3,2.485l64.593,47.067a3.073,3.073,0,0,0,2.741.456m221.523,21.179,3.553-11.632a3.148,3.148,0,0,0-2.028-3.876l-83.527-27.757a3.052,3.052,0,0,0-1.885-.012L391.461,287.493a2.913,2.913,0,0,0-1.919,1.953l-23.006,75.188a3.1,3.1,0,0,0,.477,2.744L450.382,480.6a3.219,3.219,0,0,0,1.551,1.12l83.527,27.769a2.967,2.967,0,0,0,3.8-1.941l3.553-11.62a3.121,3.121,0,0,0-2.016-3.875l-29.638-9.857,12.861-42.029,29.638,9.845a2.974,2.974,0,0,0,3.8-1.929l3.553-11.632a3.148,3.148,0,0,0-2.028-3.875l-76.748-25.506a2.954,2.954,0,0,0-3.793,1.941l-3.564,11.632a3.13,3.13,0,0,0,2.027,3.864l29.627,9.856L493.69,476.387,462,465.861,386.277,363.037l18.481-60.386L523.6,264.493l31.683,10.538L542.439,317.06,512.8,307.2a2.984,2.984,0,0,0-3.8,1.941l-3.553,11.632a3.135,3.135,0,0,0,2.027,3.864l76.737,25.506a2.969,2.969,0,0,0,3.8-1.929l3.564-11.632a3.157,3.157,0,0,0-2.028-3.875l-29.638-9.845,12.861-42.029,29.638,9.857a2.984,2.984,0,0,0,3.8-1.941M231.367,265.871l62.861-46.187a3,3,0,0,0,1.214-2.477L292.753,78.026a3.1,3.1,0,0,0-.616-1.8L239.442,4.87a3.055,3.055,0,0,0-4.268-.71l-9.72,7.142a3.049,3.049,0,0,0-.586,4.275l18.7,25.314L208.423,66.71,189.725,41.4a3.063,3.063,0,0,0-4.268-.7l-9.72,7.142a3.045,3.045,0,0,0-.586,4.275l48.408,65.558a3.066,3.066,0,0,0,4.268.7l9.72-7.142a3.049,3.049,0,0,0,.6-4.275l-18.7-25.314L254.59,55.822,274.579,82.9l2.433,126.4-50.49,37.09L106.231,206.6,86.243,179.524,121.386,153.7l18.686,25.314a3.066,3.066,0,0,0,4.268.7l9.72-7.142a3.057,3.057,0,0,0,.6-4.275l-48.42-65.547a3.058,3.058,0,0,0-4.268-.71l-9.72,7.142a3.047,3.047,0,0,0-.586,4.275l18.686,25.314L75.218,164.593l-18.7-25.314a3.068,3.068,0,0,0-4.268-.71l-9.72,7.142a3.049,3.049,0,0,0-.586,4.275l52.695,71.358a3.1,3.1,0,0,0,1.539,1.12l132.458,43.828a3.011,3.011,0,0,0,2.729-.421"
						transform="translate(-328.443 166.967) rotate(-51)"
					/>
				</g>
				{hoverCard === 1 ? (
					<Slider2Card1 onMouseLeave={() => setHoverCard(null)} />
				) : (
					<g
						transform="translate(194 614.14)"
						onMouseOver={() => setHoverCard(1)}>
						<g
							className="q-item-1802"
							transform="matrix(1, 0, 0, 1, -195.46, -614.67)">
							<path
								className="f-item-1802"
								d="M328.424,264.278H14.97c-9.014,0-15.984-8.131-14.848-17.324L32.93,13.447A15.115,15.115,0,0,1,47.777,0H294.6a15.114,15.114,0,0,1,14.841,13.388l33.825,233.507c1.174,9.212-5.8,17.383-14.84,17.383"
								transform="translate(195.46 614.67)"
							/>
						</g>
						<text
							className="g-item-1802"
							transform="translate(37.018 75.278)">
							<tspan x={45.55} y={94}>
								{'71%'}
							</tspan>
						</text>
						<text
							className="h-item-1802"
							transform="translate(82.696 137.278)">
							<tspan x={9.659} y={22}>
								{'Experiencia de'}
							</tspan>
							<tspan className="i-item-1802" y={22} />
							<tspan className="i-item-1802" x={41.756} y={47}>
								{'servicios '}
							</tspan>
							<tspan className="i-item-1802" x={4.484} y={72}>
								{'administrativos'}
							</tspan>
						</text>
					</g>
				)}
				<text
					className="j-item-1802"
					transform="translate(420 502.043)">
					<tspan x={80.416} y={30}>
						{'Resultados medición de'}
					</tspan>
					<tspan className="k-item-1802" y={30} xmlSpace="preserve">
						{' experiencia y lealtad (NPS) 2023:'}
					</tspan>
					<tspan y={30} />
				</text>
				<text
					className="l-item-1802"
					transform="translate(798 1020.043)">
					<tspan x={20.92} y={23}>
						{'NPS: Net Promoter Score '}
					</tspan>
				</text>
				<text
					className="m-item-1802"
					transform="translate(698 326.669)">
					<tspan x={0} y={66}>
						{'LO QUE OPINAN '}
					</tspan>
					<tspan x={0} y={138}>
						{'NUESTROS CLIENTES'}
					</tspan>
				</text>
				{hoverCard === 2 ? (
					<Slider2Card2 onMouseLeave={() => setHoverCard(null)} />
				) : (
					<g
						transform="translate(590 726.765)"
						onMouseOver={() => setHoverCard(2)}>
						<g
							className="p-item-1802"
							transform="matrix(1, 0, 0, 1, -591.46, -727.3)">
							<path
								className="f-item-1802"
								d="M328.424,264.278H14.97c-9.014,0-15.984-8.131-14.848-17.324L32.93,13.447A15.115,15.115,0,0,1,47.777,0H294.6a15.114,15.114,0,0,1,14.841,13.388l33.825,233.507c1.174,9.212-5.8,17.383-14.84,17.383"
								transform="translate(591.46 727.3)"
							/>
						</g>
						<text
							className="g-item-1802"
							transform="translate(37.018 75.278)">
							<tspan x={36.55} y={94}>
								{'83%'}
							</tspan>
						</text>
						<text
							className="h-item-1802"
							transform="translate(82.696 137.278)">
							<tspan x={9.659} y={22}>
								{'Experiencia de'}
							</tspan>
							<tspan className="i-item-1802" y={22} />
							<tspan className="i-item-1802" x={41.756} y={47}>
								{'servicios '}
							</tspan>
							<tspan className="i-item-1802" x={4.484} y={72}>
								{'administrativos'}
							</tspan>
						</text>
					</g>
				)}
				{hoverCard === 3 ? (
					<Slider2Card3 onMouseLeave={() => setHoverCard(null)} />
				) : (
					<g
						transform="translate(987 611.765)"
						onMouseOver={() => setHoverCard(3)}>
						<g
							className="o-item-1802"
							transform="matrix(1, 0, 0, 1, -988.46, -612.3)">
							<path
								className="f-item-1802"
								d="M328.424,264.278H14.97c-9.014,0-15.984-8.131-14.848-17.324L32.93,13.447A15.115,15.115,0,0,1,47.777,0H294.6a15.114,15.114,0,0,1,14.841,13.388l33.825,233.507c1.174,9.212-5.8,17.383-14.84,17.383"
								transform="translate(988.46 612.3)"
							/>
						</g>
						<text
							className="g-item-1802"
							transform="translate(37.018 75.278)">
							<tspan x={43.75} y={94}>
								{'91%'}
							</tspan>
						</text>
						<text
							className="h-item-1802"
							transform="translate(82.696 137.278)">
							<tspan x={9.659} y={22}>
								{'Experiencia de'}
							</tspan>
							<tspan className="i-item-1802" y={22} />
							<tspan className="i-item-1802" x={41.756} y={47}>
								{'servicios '}
							</tspan>
							<tspan className="i-item-1802" x={4.484} y={72}>
								{'administrativos'}
							</tspan>
						</text>
					</g>
				)}
				{hoverCard === 4 ? (
					<Slider2Card4 onMouseLeave={() => setHoverCard(null)} />
				) : (
					<g
						transform="translate(1383 711.765)"
						onMouseOver={() => setHoverCard(4)}>
						<g
							className="n-item-1802"
							transform="matrix(1, 0, 0, 1, -1384.46, -712.3)">
							<path
								className="f-item-1802"
								d="M328.424,264.278H14.97c-9.014,0-15.984-8.131-14.848-17.324L32.93,13.447A15.115,15.115,0,0,1,47.777,0H294.6a15.114,15.114,0,0,1,14.841,13.388l33.825,233.507c1.174,9.212-5.8,17.383-14.84,17.383"
								transform="translate(1384.46 712.3)"
							/>
						</g>
						<text
							className="g-item-1802"
							transform="translate(37.018 75.278)"
							onMouseOver={() => setHoverCard(4)}>
							<tspan x={36.9} y={94}>
								{'85%'}
							</tspan>
						</text>
						<text
							className="h-item-1802"
							transform="translate(82.696 137.278)"
							onMouseOver={() => setHoverCard(4)}>
							<tspan x={9.659} y={22}>
								{'Experiencia de'}
							</tspan>
							<tspan className="i-item-1802" y={22} />
							<tspan className="i-item-1802" x={41.756} y={47}>
								{'servicios '}
							</tspan>
							<tspan className="i-item-1802" x={4.484} y={72}>
								{'administrativos'}
							</tspan>
						</text>
					</g>
				)}
			</g>
		</svg>
	)
}
