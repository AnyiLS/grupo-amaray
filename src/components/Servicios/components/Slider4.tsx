import React from 'react'

interface ISlider {
	height: string
	index: number
	handleChangeSlide: (position: number) => void
}

export const Slider4: React.FC<ISlider> = ({ height, index }) => {
	const [selectedImage, setSelectedImage] = React.useState<boolean>(false)

	React.useEffect(() => {
		if (index === 3) setTimeout(() => setSelectedImage(true), 800)
	}, [index])

	return (
		<svg
			width="100%"
			height={height}
			viewBox="0 0 1920 1080"
			preserveAspectRatio="none">
			<defs>
				<style>
					{
						'.hover:hover .y-item-1820 .c-item-1820, .hover:hover .z-item-1820 .c-item-1820, .hover:hover .w-item-1820 .c-item-1820, .hover:hover .x-item-1820 .c-item-1820, .hover:hover .u-item-1820 .c-item-1820, .hover:hover .v-item-1820 .c-item-1820{fill:#001f5f;}.hover:hover .m-item-1820, .hover:hover .p-item-1820, .hover:hover .o-item-1820{fill: #fff}.a-item-1820,.e-item-1820,.f-item-1820{fill:none;}.b-item-1820,.c-item-1820{fill:#fff;}.b-item-1820{stroke:#707070;}.d-item-1820{clip-path:url(#c-item-1820);}.e-item-1820{stroke:#001f5f;}.e-item-1820,.f-item-1820{stroke-miterlimit:10;stroke-width:3.044px;}.f-item-1820{stroke:#e7002a;}.g-item-1820,.p-item-1820,.q-item-1820{fill:#001f5f;}.g-item-1820{font-size:65px;font-family:Kiona-Bold, Kiona;font-weight:700;}.h-item-1820{clip-path:url(#d-item-1820);}.i-item-1820{fill:#e40032;}.j-item-1820{mix-blend-mode:multiply;isolation:isolate;}.k-item-1820{fill:#eeebeb;}.l-item-1820{fill:#d6d6d6;}.m-item-1820,.o-item-1820{fill:#182856;}.m-item-1820,.o-item-1820,.p-item-1820{font-size:24px;}.m-item-1820,.p-item-1820{font-family:Silka-Regular, Silka;}.n-item-1820,.o-item-1820{font-family:Silka-SemiBold, Silka;font-weight:600;}.r-item-1820{clip-path:url(#s-item-1820);}.s-item-1820{fill:url(#t-item-1820);}.t-item-1820{filter:url(#q-item-1820);}.u-item-1820{filter:url(#o-item-1820);}.v-item-1820{filter:url(#m-item-1820);}.w-item-1820{filter:url(#k-item-1820);}.x-item-1820{filter:url(#i-item-1820);}.y-item-1820{filter:url(#g-item-1820);}.z-item-1820{filter:url(#e-item-1820);}.aa-item-1820{filter:url(#a-item-1820);}'
					}
				</style>
				<filter
					id="a-item-1820"
					x={618.644}
					y={0}
					width={1310.356}
					height={735.584}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="b" />
					<feFlood floodOpacity={0.451} />
					<feComposite operator="in" in2="b" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="c-item-1820">
					<rect
						className="a-item-1820"
						width={1920}
						height={1101.143}
						transform="translate(0 0)"
					/>
				</clipPath>
				<clipPath id="d-item-1820">
					<path className="b-item-1820" d="M0,0H281V132.757H0Z" />
				</clipPath>
				<filter
					id="e-item-1820"
					x={184.027}
					y={411.902}
					width={382.473}
					height={186.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={5} />
					<feGaussianBlur stdDeviation={2.5} result="f" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="f" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="g-item-1820"
					x={1032.413}
					y={838.734}
					width={385.473}
					height={189.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="h" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="h" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="i-item-1820"
					x={272}
					y={812.663}
					width={385.473}
					height={189.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="j" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="j" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="k-item-1820"
					x={240}
					y={610.533}
					width={387.114}
					height={189.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="l" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="l" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="m-item-1820"
					x={1399.886}
					y={838.735}
					width={387.114}
					height={189.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="n" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="n" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="o-item-1820"
					x={639.473}
					y={838.735}
					width={387.114}
					height={189.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="p" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="p" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="q-item-1820"
					x={609.114}
					y={0}
					width={1319.886}
					height={747.449}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="r" />
					<feFlood floodOpacity={0.451} />
					<feComposite operator="in" in2="r" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="s-item-1820">
					<g
						className="aa-item-1820"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="c-item-1820"
							d="M0,0,82.966,486.99C106.742,626.553,160.131,717.58,309.7,717.58h982.652V0Z"
							transform="translate(627.64 0.3)"
						/>
					</g>
				</clipPath>
				<pattern
					id="t-item-1820"
					preserveAspectRatio="xMidYMid slice"
					width="100%"
					height="100%"
					viewBox="0 0 1920 1080">
					<image
						width={1920}
						height={1080}
						xlinkHref="ComponentTMP_0-image.jpg-item-1820"
					/>
				</pattern>
				<clipPath id="b-5">
					<path
						d="M0,0,83.578,495.042c23.951,141.871,77.734,234.4,228.41,234.4h989.9V0Z"
					/>
				</clipPath>
			</defs>
			<g transform="translate(0 5.702)">
				<path
					className="c-item-1820"
					d="M0,0H1920V1079.993H0Z"
					transform="translate(0 10.575)"
				/>
				<g transform="translate(0 21.299)">
					<g transform="translate(0 -21.299)">
						<g className="d-item-1820" transform="translate(0 0)">
							<path
								className="e-item-1820"
								d="M1929.985,1052.676H1229.113c-122.021,0-232.076,74.836-279.017,189.725L735.314,1768.089"
								transform="translate(-5760.839 -444.132)"
							/>
							<path
								className="e-item-1820"
								d="M1930.082,1066.7h846.359c122.021,0,232.077-74.837,279.018-189.725L3270.24,351.285"
								transform="translate(-5760.936 -458.154)"
							/>
							<path
								className="e-item-1820"
								d="M6360.507,1238.021H5434.89c-100.6,0-191.336-61.7-230.037-156.418l-170-416.093"
								transform="translate(-4266.207 -462.146)"
							/>
							<path
								className="e-item-1820"
								d="M6437.908,482.59h846.359c122.021,0,233.687,72.527,280.629,187.415l205.121,502.558"
								transform="translate(-6827.134 -427.53)"
							/>
							<path
								className="f-item-1820"
								d="M797.214,1325.979h700.871c122.022,0,232.077-74.837,279.018-189.725l290.308-710.67"
								transform="translate(-5760.844 -456.669)"
							/>
							<path
								className="f-item-1820"
								d="M1000.473,1308.334H495.2c-122.022,0-232.077,74.837-279.018,189.725L1.4,2023.747"
								transform="translate(-5760.779 -439.021)"
							/>
							<path
								className="f-item-1820"
								d="M4588.606,1022.545h-469.52c-122.021,0-232.076-74.837-279.018-189.725L3549.76,122.15"
								transform="translate(-5761.068 -462.735)"
							/>
							<path
								className="f-item-1820"
								d="M4184.911,1004.9H4690.18c122.021,0,232.077,74.837,279.02,189.724l214.779,525.689"
								transform="translate(-5761.12 -445.088)"
							/>
							<path
								className="f-item-1820"
								d="M7406.781,1288.515H7117.369c-69.894,0-132.932,42.866-159.819,108.673L6834.526,1698.3"
								transform="translate(-5486.781 -258.925)"
							/>
							<path
								className="f-item-1820"
								d="M6836.567,716h505.269c122.022,0,232.077-74.837,279.019-189.725L7835.635.589"
								transform="translate(-7291.907 -582.166)"
							/>
						</g>
					</g>
				</g>
				<text
					className="g-item-1820"
					transform="translate(142 162.191)">
					<tspan x={0} y={65}>
						{'Servicio '}
					</tspan>
					<tspan x={0} y={132}>
						{'logístico de '}
					</tspan>
					<tspan x={0} y={199}>
						{'clase mundial'}
					</tspan>
				</text>
				<g className="h-item-1820" transform="translate(0 970.394)">
					<path
						className="i-item-1820"
						d="M142.986,162.714l33.9,48.651a1.405,1.405,0,0,1,.241.782l.193,38.087a1.3,1.3,0,0,1-1.257,1.335l-5.041.025a1.293,1.293,0,0,1-1.266-1.32l-.067-13.508-18.224.1.067,13.513a1.3,1.3,0,0,1-1.257,1.335l-5.041.025a1.286,1.286,0,0,1-1.262-1.32l-.173-34.991a1.292,1.292,0,0,1,1.252-1.335l5.041-.03a1.3,1.3,0,0,1,1.266,1.325l.067,13.508,18.224-.1-.072-14.452L138.8,170.16l-26.187.142L82.267,214.827l.067,14.447,18.229-.1-.067-13.508a1.292,1.292,0,0,1,1.252-1.335l5.041-.03a1.3,1.3,0,0,1,1.266,1.325l.173,34.991a1.3,1.3,0,0,1-1.252,1.335l-5.041.025a1.293,1.293,0,0,1-1.266-1.32l-.067-13.513-18.224.1.067,13.513a1.3,1.3,0,0,1-1.257,1.335l-5.041.025a1.3,1.3,0,0,1-1.266-1.32l-.188-38.087a1.377,1.377,0,0,1,.236-.782L108.344,162.9a1.254,1.254,0,0,1,1.016-.553l32.605-.178a1.233,1.233,0,0,1,1.021.543m-52.5-39.778L35.94,104.585a1.161,1.161,0,0,0-.775.005L.864,116.545a1.347,1.347,0,0,0-.8,1.68l1.579,5.046a1.246,1.246,0,0,0,1.594.843L15.4,119.875l5.725,18.244L8.958,142.358a1.347,1.347,0,0,0-.8,1.68l1.579,5.046a1.252,1.252,0,0,0,1.594.843l31.512-10.985a1.343,1.343,0,0,0,.8-1.68l-1.579-5.046a1.252,1.252,0,0,0-1.594-.843L28.3,135.616l-5.72-18.244,13.009-4.538L85.132,129.5l4.046,12.9,4.172,13.305L63.008,200.238l-13.014,4.533-5.72-18.244,12.167-4.239a1.347,1.347,0,0,0,.8-1.68l-1.584-5.046a1.245,1.245,0,0,0-1.589-.843L22.555,185.7a1.347,1.347,0,0,0-.8,1.68l1.579,5.046a1.248,1.248,0,0,0,1.594.843L37.1,189.029l5.725,18.244-12.167,4.244a1.345,1.345,0,0,0-.8,1.68l1.584,5.046a1.248,1.248,0,0,0,1.594.843l34.3-11.96a1.268,1.268,0,0,0,.631-.487l33.41-49.022a1.376,1.376,0,0,0,.173-1.193L91.3,123.789a1.3,1.3,0,0,0-.814-.853m67.262-8.985L212.111,95a1.257,1.257,0,0,0,.626-.487l21.084-30.93a1.378,1.378,0,0,0-.289-1.853l-4.092-3.1a1.217,1.217,0,0,0-1.757.3L220.2,69.9,205.4,58.685l7.477-10.97a1.372,1.372,0,0,0-.284-1.853l-4.092-3.1a1.212,1.212,0,0,0-1.757.3l-19.37,28.412a1.378,1.378,0,0,0,.284,1.858l4.1,3.1a1.221,1.221,0,0,0,1.757-.3l7.477-10.97,14.8,11.214-8,11.731-49.37,17.214L137.156,89.209l-.27-54.824,8-11.731,14.8,11.214-7.477,10.97a1.373,1.373,0,0,0,.289,1.853l4.093,3.1a1.217,1.217,0,0,0,1.757-.3l19.37-28.417a1.373,1.373,0,0,0-.289-1.853l-4.093-3.1a1.221,1.221,0,0,0-1.757.3l-7.482,10.97L149.3,16.181l7.477-10.975a1.378,1.378,0,0,0-.289-1.853l-4.093-3.1a1.212,1.212,0,0,0-1.757.3l-21.084,30.93a1.4,1.4,0,0,0-.236.782l.3,60.367a1.344,1.344,0,0,0,.525,1.071l26.476,20.062a1.209,1.209,0,0,0,1.132.183m91.538,7.96,1.531-5.066a1.346,1.346,0,0,0-.818-1.67L215.588,103.6a1.207,1.207,0,0,0-.78.005l-54.363,18.955a1.282,1.282,0,0,0-.8.858l-9.914,32.747a1.381,1.381,0,0,0,.183,1.188L183.806,206a1.289,1.289,0,0,0,.636.477l34.411,11.584a1.248,1.248,0,0,0,1.584-.863l1.531-5.061a1.334,1.334,0,0,0-.814-1.67l-12.21-4.112,5.542-18.305,12.21,4.107a1.25,1.25,0,0,0,1.584-.858l1.531-5.066a1.346,1.346,0,0,0-.819-1.67l-31.618-10.64a1.243,1.243,0,0,0-1.579.863l-1.536,5.066a1.338,1.338,0,0,0,.818,1.665l12.205,4.112-5.537,18.305-13.058-4.391L157.9,155.358l7.964-26.3,49.37-17.214,13.053,4.4-5.537,18.305-12.21-4.112a1.255,1.255,0,0,0-1.584.863l-1.531,5.066a1.34,1.34,0,0,0,.819,1.665l31.614,10.64a1.249,1.249,0,0,0,1.584-.858l1.536-5.066a1.35,1.35,0,0,0-.818-1.67l-12.21-4.107,5.542-18.305,12.21,4.112a1.255,1.255,0,0,0,1.584-.863M94.324,114.062l26.25-20.386a1.362,1.362,0,0,0,.515-1.081l-.38-60.367a1.357,1.357,0,0,0-.246-.777L99.037.785A1.215,1.215,0,0,0,97.275.5L93.216,3.653a1.377,1.377,0,0,0-.265,1.858l7.6,10.878-14.675,11.4-7.6-10.878a1.218,1.218,0,0,0-1.762-.279L72.455,19.78a1.376,1.376,0,0,0-.265,1.858L91.873,49.812a1.219,1.219,0,0,0,1.762.279l4.059-3.152a1.377,1.377,0,0,0,.27-1.858L90.361,34.2l14.675-11.4,8.127,11.635.342,54.824L92.422,105.636,42.864,89.041,34.736,77.406l14.675-11.4,7.6,10.879a1.219,1.219,0,0,0,1.762.279l4.059-3.152a1.381,1.381,0,0,0,.27-1.858L43.412,43.989A1.216,1.216,0,0,0,41.65,43.7l-4.059,3.152a1.376,1.376,0,0,0-.265,1.858l7.6,10.879L30.254,70.99l-7.6-10.878a1.22,1.22,0,0,0-1.762-.284L16.83,62.98a1.377,1.377,0,0,0-.265,1.858L37.991,95.5a1.24,1.24,0,0,0,.631.477l54.57,18.28a1.212,1.212,0,0,0,1.131-.2"
						transform="matrix(0.259, -0.966, 0.966, 0.259, -16.498, 216.987)"
					/>
				</g>
				<g transform="translate(191.527 408.7)" className="hover">
					<g
						className="z-item-1820"
						transform="matrix(1, 0, 0, 1, -191.53, -414.4)">
						<path
							className="c-item-1820"
							d="M329.653,171.87H10.415C4.663,171.87,0,168.571,0,164.5V7.367C0,3.3,4.663,0,10.415,0H357.054c6.593,0,11.527,4.278,10.2,8.847l-27.4,157.136c-.993,3.428-5.257,5.889-10.2,5.889"
							transform="translate(191.53 414.4)"
						/>
					</g>
					<text
						className="m-item-1820"
						transform="translate(178.236 15.436)">
						<tspan x={-87.576} y={23}>
							{'Nuestra red en '}
						</tspan>
						<tspan x={-131.352} y={49}>
							{'distribución incluye '}
						</tspan>
						<tspan className="n-item-1820" y={49}>
							{'18 '}
						</tspan>
						<tspan className="n-item-1820" x={-124.812} y={75}>
							{'transportadoras'}
						</tspan>
						<tspan y={75} xmlSpace="preserve">
							{' que '}
						</tspan>
						<tspan x={-126.996} y={101}>
							{'nos permiten llegar a '}
						</tspan>
						<tspan className="n-item-1820" x={-142.632} y={127}>
							{'cualquier parte del país'}
						</tspan>
					</text>
				</g>
				<g className="hover" transform="translate(1041.413 839.033)">
					<g
						className="y-item-1820"
						transform="matrix(1, 0, 0, 1, -1041.41, -844.73)">
						<path
							className="c-item-1820"
							d="M329.653,1255.3H10.415C4.663,1255.3,0,1252,0,1247.93V1090.795c0-4.069,4.663-7.368,10.415-7.368H357.054c6.593,0,11.527,4.278,10.2,8.847l-27.4,157.135c-.993,3.428-5.257,5.889-10.2,5.889"
							transform="translate(1041.41 -238.69)"
						/>
					</g>
					<text
						className="m-item-1820"
						transform="translate(175 43.436)">
						<tspan x={-97.74} y={23}>
							{'Seguimiento por '}
						</tspan>
						<tspan className="n-item-1820" x={-120.852} y={49}>
							{'GPS para garantizar '}
						</tspan>
						<tspan className="n-item-1820" x={-61.476} y={75}>
							{'la entrega'}
						</tspan>
					</text>
				</g>
				<g transform="translate(281 812.961)" className="hover">
					<g transform="translate(691 -3262.43)">
						<g
							className="x-item-1820"
							transform="matrix(1, 0, 0, 1, -972, 2443.77)">
							<path
								className="c-item-1820"
								d="M329.653,713.584H10.415c-5.752,0-10.415-3.3-10.415-7.368V549.081c0-4.069,4.663-7.368,10.415-7.368H357.054c6.593,0,11.527,4.278,10.2,8.847L339.856,707.7c-.993,3.428-5.257,5.888-10.2,5.888"
								transform="translate(281 276.95)"
							/>
						</g>
						<text
							className="o-item-1820"
							transform="translate(-513.764 3303.307)">
							<tspan x={-124.26} y={23}>
								{'Pedidos electrónicos '}
							</tspan>
						</text>
						<text
							className="m-item-1820"
							transform="translate(-601 3340.469)">
							<tspan x={0} y={23}>
								{'CRM Salesforce '}
							</tspan>
							<tspan x={0} y={49}>
								{'SAP S/4HANA '}
							</tspan>
						</text>
						<circle
							className="i-item-1820"
							cx={4}
							cy={4}
							r={4}
							transform="translate(-614 3350.697)"
						/>
						<circle
							className="i-item-1820"
							cx={4}
							cy={4}
							r={4}
							transform="translate(-614 3379.697)"
						/>
					</g>
				</g>
				<g transform="translate(249 610.831)" className="hover">
					<g
						className="w-item-1820"
						transform="matrix(1, 0, 0, 1, -249, -616.53)">
						<path
							className="c-item-1820"
							d="M37.989,171.871H358.653c5.778,0,10.461-3.3,10.461-7.368V7.368C369.114,3.3,364.43,0,358.653,0H10.465C3.843,0-1.113,4.278.217,8.847L27.741,165.983c1,3.428,5.28,5.889,10.249,5.889"
							transform="translate(618.11 788.4) rotate(180)"
						/>
					</g>
					<text
						className="p-item-1820"
						transform="translate(188.057 43.435)">
						<tspan x={-132.384} y={23}>
							{'Entregas urgencias en '}
						</tspan>
						<tspan className="n-item-1820" x={-133.452} y={51}>
							{'máximo 4 horas'}
						</tspan>
						<tspan y={51} xmlSpace="preserve">
							{' en las '}
						</tspan>
						<tspan className="n-item-1820" x={-124.26} y={79}>
							{'principales ciudades'}
						</tspan>
					</text>
				</g>
				<g transform="translate(1408.886 839.033)" className="hover">
					<g
						className="v-item-1820"
						transform="matrix(1, 0, 0, 1, -1408.89, -844.73)">
						<path
							className="c-item-1820"
							d="M917.418,1106.96h320.663c5.778,0,10.461,3.3,10.461,7.368v157.136c0,4.069-4.684,7.368-10.461,7.368H889.894c-6.622,0-11.578-4.278-10.248-8.847l27.524-157.136c1-3.428,5.28-5.888,10.249-5.888"
							transform="translate(529.46 -262.23)"
						/>
					</g>
					<text
						className="m-item-1820"
						transform="translate(188.557 29.436)">
						<tspan x={-113.208} y={23} xmlSpace="preserve">
							{'Equipo logístico de      '}
						</tspan>
						<tspan className="n-item-1820" x={-89.484} y={49}>
							{'91 personas en '}
						</tspan>
						<tspan className="n-item-1820" x={-122.352} y={75}>
							{'Colombia, Panamá y '}
						</tspan>
						<tspan className="n-item-1820" x={-65.712} y={101}>
							{'Costa Rica '}
						</tspan>
					</text>
				</g>
				<g transform="translate(648.473 839.033)" className="hover">
					<g transform="translate(328.939 -3270.703)">
						<g
							className="u-item-1820"
							transform="matrix(1, 0, 0, 1, -977.41, 2425.97)">
							<path
								className="c-item-1820"
								d="M917.418,565.246h320.663c5.778,0,10.461,3.3,10.461,7.368V729.749c0,4.069-4.684,7.368-10.461,7.368H889.894c-6.622,0-11.578-4.278-10.248-8.847l27.524-157.136c1-3.428,5.28-5.889,10.249-5.889"
								transform="translate(-230.96 279.49)"
							/>
						</g>
						<text
							className="m-item-1820"
							transform="translate(-130.382 3316.197)">
							<tspan x={-82.476} y={23}>
								{'Trazabilidad y '}
							</tspan>
							<tspan x={-93.984} y={49}>
								{'monitoreo de la '}
							</tspan>
							<tspan className="n-item-1820" x={-87.492} y={75}>
								{'cadena de frío'}
							</tspan>
						</text>
					</g>
				</g>
				<g
					className="t-item-1820"
					transform="matrix(1, 0, 0, 1, 0, -5.7)">
					<path
						className="q-item-1820"
						d="M0,0,83.578,495.042c23.951,141.871,77.734,234.4,228.41,234.4h989.9V0Z"
						transform="translate(618.11 6)"
					/>
				</g>
				<g transform='translate(634 -6)'>
					<foreignObject
						x="0"
						y="0"
						width="1290px"
						height="722"
						style={{ clipPath: 'url(#b-5)' }}>
						<video
							src="/images/video/Robotica.webm"
							autoPlay
							muted
							loop></video>
					</foreignObject>
				</g>
				<g className="r-item-1820">
					<rect
						className="s-item-1820"
						width={1292.356}
						height={726.95}
						transform="translate(627.644 -4.385)"
					/>
				</g>
			</g>
		</svg>
	)
}
