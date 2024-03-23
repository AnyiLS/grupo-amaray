import React from 'react'

interface ISlider {
	height: string
	index: number
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
						'.a-cifras-4,.f-cifras-4,.g-cifras-4{fill:none;}.b-cifras-4,.d-cifras-4{fill:#fff;}.card-cifras-4:hover .b-cifras-4,.card-cifras-4:hover .d-cifras-4{fill:#001f5f}.card-cifras-4:hover .k-cifras-4, .card-cifras-4:hover .n-cifras-4, .card-cifras-4:hover .m-cifras-4  {fill: #fff}.b-cifras-4{stroke:#707070;}.c-cifras-4{fill:#e40032;}.e-cifras-4{clip-path:url(#aa-cifras-4);}.f-cifras-4{stroke:#001f5f;}.f-cifras-4,.g-cifras-4{stroke-miterlimit:10;stroke-width:3.044px;}.g-cifras-4{stroke:#e7002a;}.h-cifras-4{fill:url(#ab-cifras-4); stroke: #001f5f; stroke-width: 10px}.i-cifras-4,.n-cifras-4{fill:#001f5f;}.i-cifras-4{font-size:70px;}.i-cifras-4,.l-cifras-4,.m-cifras-4{font-family:Silka-SemiBold, Silka;font-weight:600;}.j-cifras-4{clip-path:url(#ac);}.k-cifras-4,.m-cifras-4{fill:#182856;}.k-cifras-4,.m-cifras-4,.n-cifras-4{font-size:24px;}.k-cifras-4,.n-cifras-4{font-family:Silka-Regular, Silka;}.o-cifras-4{filter:url(#an-cifras-4);}.p-cifras-4{filter:url(#al-cifras-4);}.q-cifras-4{filter:url(#aj-cifras-4);}.r-cifras-4{filter:url(#ah-cifras-4);}.s-cifras-4{filter:url(#af-cifras-4);}.t-cifras-4{filter:url(#ad-cifras-4);}'
					}
				</style>
				<filter
					id="a-cifras-4"
					x={1275.641}
					y={-2927.452}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="b" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="b" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="c-cifras-4"
					x={454.781}
					y={-3095.43}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="d" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="d" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="e-cifras-4"
					x={590.735}
					y={-2879.43}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="f" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="f" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="g-cifras-4"
					x={334.735}
					y={-3210.43}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="h" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="h" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="i-cifras-4"
					x={446.735}
					y={-3200.43}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="j" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="j" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="k-cifras-4"
					x={296.781}
					y={-3185.43}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="l" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="l" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="m-cifras-4"
					x={281.781}
					y={-3095.43}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="n" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="n" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="o-cifras-4"
					x={1257.641}
					y={-2858.646}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="p" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="p" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="q-cifras-4"
					x={1379.781}
					y={-2604.431}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="r" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="r" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="s-cifras-4"
					x={1430.305}
					y={-2673.431}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="t" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="t" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="u-cifras-4"
					x={418.781}
					y={-2852.431}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="v" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="v" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="w-cifras-4"
					x={321.305}
					y={-2789.431}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="x" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="x" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="y-cifras-4"
					x={192.781}
					y={-2691.431}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="z" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="z" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="aa-cifras-4">
					<rect
						className="a-cifras-4"
						width={1920}
						height={1101.143}
						transform="translate(0 0)"
					/>
				</clipPath>
				{selectedImage ? (
					<pattern
						id="ab-cifras-4"
						width={1}
						height={1}
						patternTransform="matrix(-1, 0, 0, 1, 2918.341, 0)"
						viewBox="400.03 7.726 956.617 878.317">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1344.17}
							height={896.114}
							xlinkHref="/images/services-image-4.jpg"
						/>
					</pattern>
				) : (
					<pattern
						id="ab-cifras-4"
						width={1}
						height={1}
						patternTransform="matrix(-1, 0, 0, 1, 1260.868, 0)"
						viewBox="170 6.909 404.951 371.805">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={578.434}
							height={385.623}
							xlinkHref="/images/services-image-4.jpg"
						/>
					</pattern>
				)}
				<clipPath id="ac-cifras-4">
					<path className="b" d="M0,0H346.284V163.6H0Z" />
				</clipPath>
				<filter
					id="ad-cifras-4"
					x={936.5}
					y={437.847}
					width={382.473}
					height={186.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={5} />
					<feGaussianBlur stdDeviation={2.5} result="ae" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="ae" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="af-cifras-4"
					x={935}
					y={815.207}
					width={385.473}
					height={189.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ag" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="ag" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="ah-cifras-4"
					x={935}
					y={624.777}
					width={385.473}
					height={189.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ai" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="ai" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="aj-cifras-4"
					x={1297.061}
					y={442.619}
					width={387.114}
					height={189.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ak" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="ak" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="al-cifras-4"
					x={1297.061}
					y={823.479}
					width={387.114}
					height={189.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="am" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="am" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="an-cifras-4"
					x={1297.061}
					y={633.049}
					width={387.114}
					height={189.871}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ao" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="ao" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<path
				className="d-cifras-4"
				d="M0,0H1920V1079.993H0Z"
				transform="translate(0 23.306)"
			/>
			<g transform="translate(0 21.299)">
				<g transform="translate(0 -21.299)">
					<g className="e-cifras-4" transform="translate(0 0)">
						<path
							className="f-cifras-4"
							d="M1929.985,1052.676H1229.113c-122.021,0-232.076,74.836-279.017,189.725L735.314,1768.089"
							transform="translate(-5760.839 -444.132)"
						/>
						<path
							className="f-cifras-4"
							d="M1930.082,1066.7h846.359c122.021,0,232.077-74.837,279.018-189.725L3270.24,351.285"
							transform="translate(-5760.936 -458.154)"
						/>
						<path
							className="f-cifras-4"
							d="M5034.849,1359.926H6157.558c122.023,0,232.077-74.837,279.019-189.725l206.2-504.692"
							transform="translate(-5761.188 -462.146)"
						/>
						<path
							className="f-cifras-4"
							d="M7770.018,482.59H6923.658c-122.021,0-233.687,72.527-280.629,187.415l-205.121,502.558"
							transform="translate(-5761.832 -467.529)"
						/>
						<path
							className="g-cifras-4"
							d="M797.214,1325.979h700.871c122.022,0,232.077-74.837,279.018-189.725l290.308-710.67"
							transform="translate(-5760.844 -456.669)"
						/>
						<path
							className="g-cifras-4"
							d="M1000.473,1308.334H495.2c-122.022,0-232.077,74.837-279.018,189.725L1.4,2023.747"
							transform="translate(-5760.779 -439.021)"
						/>
						<path
							className="g-cifras-4"
							d="M4588.606,1022.545h-469.52c-122.021,0-232.076-74.837-279.018-189.725L3549.76,122.15"
							transform="translate(-5761.068 -462.735)"
						/>
						<path
							className="g-cifras-4"
							d="M4184.911,1004.9H4690.18c122.021,0,232.077,74.837,279.02,189.724l214.779,525.689"
							transform="translate(-5761.12 -445.088)"
						/>
						<path
							className="g-cifras-4"
							d="M7406.781,1288.515H7117.369c-69.894,0-132.932,42.866-159.819,108.673L6834.526,1698.3"
							transform="translate(-5486.781 -258.925)"
						/>
						<path
							className="g-cifras-4"
							d="M7835.635,716H7330.367c-122.022,0-232.077-74.837-279.019-189.725L6836.567.589"
							transform="translate(-5761.335 -582.166)"
						/>
					</g>
				</g>
				<g transform="translate(0 -21.299)">
					{selectedImage ? (
						<path
							className="h-cifras-4"
							d="M396.684,896.114H0V0H976L682.322,703.089C634.528,819.917,521.771,896.114,396.684,896.114"
						/>
					) : (
						<path
							className="h-cifras-4"
							d="M170.7,385.623H0V0H420L293.622,302.559c-20.567,50.274-69.089,83.064-122.918,83.064"
						/>
					)}
				</g>
			</g>
			<text className="i-cifras-4" transform="translate(944 260.837)">
				<tspan x={0} y={66}>
					{'SERVICIO LOG\xCDSTICO '}
				</tspan>
				<tspan x={0} y={138}>
					{'DE CLASE MUNDIAL'}
				</tspan>
			</text>
			<g className="j-cifras-4" transform="translate(319.716 939.551)">
				<path
					className="c-cifras-4"
					d="M176.206,200.516l41.777,59.954a1.732,1.732,0,0,1,.3.963l.237,46.936a1.6,1.6,0,0,1-1.549,1.645l-6.212.031a1.594,1.594,0,0,1-1.56-1.627l-.083-16.646-22.458.119.083,16.653a1.6,1.6,0,0,1-1.549,1.645l-6.212.031a1.585,1.585,0,0,1-1.555-1.626l-.214-43.12a1.592,1.592,0,0,1,1.543-1.645l6.212-.038a1.6,1.6,0,0,1,1.56,1.633l.083,16.646,22.458-.119-.089-17.81-37.932-54.449-32.271.175L101.38,264.737l.083,17.8,22.464-.125-.083-16.646a1.592,1.592,0,0,1,1.543-1.645l6.212-.038a1.6,1.6,0,0,1,1.56,1.633l.214,43.12a1.6,1.6,0,0,1-1.543,1.645l-6.212.031a1.594,1.594,0,0,1-1.56-1.627l-.083-16.653-22.458.125.083,16.653a1.6,1.6,0,0,1-1.549,1.645l-6.212.031a1.6,1.6,0,0,1-1.56-1.627l-.231-46.936a1.7,1.7,0,0,1,.291-.963l41.177-60.417a1.545,1.545,0,0,1,1.252-.682l40.181-.219a1.519,1.519,0,0,1,1.258.669m-64.7-49.019L44.29,128.883a1.43,1.43,0,0,0-.955.006L1.065,143.621a1.66,1.66,0,0,0-.985,2.071l1.946,6.218a1.536,1.536,0,0,0,1.964,1.038l14.988-5.223,7.055,22.483-14.994,5.223a1.66,1.66,0,0,0-.985,2.071L12,183.72a1.543,1.543,0,0,0,1.964,1.038L52.8,171.221a1.655,1.655,0,0,0,.985-2.071l-1.946-6.218a1.543,1.543,0,0,0-1.964-1.038l-14.994,5.23-7.049-22.483,16.032-5.593,61.048,20.544,4.986,15.9,5.142,16.4L77.647,246.758l-16.038,5.586L54.56,229.862l14.994-5.223a1.66,1.66,0,0,0,.985-2.071l-1.952-6.218a1.534,1.534,0,0,0-1.958-1.038L27.8,228.848a1.66,1.66,0,0,0-.985,2.071l1.946,6.218a1.538,1.538,0,0,0,1.964,1.038l14.994-5.23,7.055,22.483-14.994,5.23a1.658,1.658,0,0,0-.991,2.071l1.952,6.218a1.538,1.538,0,0,0,1.964,1.038l42.263-14.738a1.563,1.563,0,0,0,.777-.6l41.171-60.411a1.7,1.7,0,0,0,.214-1.47l-12.614-40.218a1.6,1.6,0,0,0-1-1.051M194.4,140.425l66.993-23.359a1.548,1.548,0,0,0,.771-.6L288.144,78.35a1.7,1.7,0,0,0-.356-2.283l-5.043-3.822a1.5,1.5,0,0,0-2.166.375l-9.22,13.518L253.12,72.319,262.334,58.8a1.691,1.691,0,0,0-.35-2.283L256.941,52.7a1.494,1.494,0,0,0-2.166.375l-23.87,35.013a1.7,1.7,0,0,0,.35,2.29L236.3,94.2a1.5,1.5,0,0,0,2.166-.375L247.685,80.3,265.924,94.12l-9.855,14.457L195.228,129.79l-26.208-19.855-.332-67.561,9.855-14.457,18.239,13.819-9.215,13.518a1.692,1.692,0,0,0,.356,2.283l5.043,3.822a1.5,1.5,0,0,0,2.166-.375L219,25.965a1.692,1.692,0,0,0-.356-2.283L213.6,19.859a1.5,1.5,0,0,0-2.166.375l-9.22,13.518L183.984,19.941,193.2,6.416a1.7,1.7,0,0,0-.356-2.283L187.8.31a1.493,1.493,0,0,0-2.166.375L159.652,38.8a1.726,1.726,0,0,0-.291.963l.368,74.392a1.656,1.656,0,0,0,.647,1.32L193,140.2a1.49,1.49,0,0,0,1.394.225m112.8,9.809,1.887-6.243a1.658,1.658,0,0,0-1.009-2.058l-42.406-14.269a1.488,1.488,0,0,0-.961.006L197.72,151.028a1.579,1.579,0,0,0-.991,1.057L184.512,192.44a1.7,1.7,0,0,0,.225,1.464l41.771,59.961a1.589,1.589,0,0,0,.783.588L269.7,268.728a1.538,1.538,0,0,0,1.952-1.064l1.887-6.237a1.644,1.644,0,0,0-1-2.058L257.487,254.3l6.829-22.558,15.047,5.061a1.541,1.541,0,0,0,1.952-1.057l1.887-6.243a1.658,1.658,0,0,0-1.009-2.058l-38.964-13.112a1.532,1.532,0,0,0-1.946,1.064l-1.893,6.243a1.648,1.648,0,0,0,1.009,2.052l15.041,5.067-6.823,22.558-16.091-5.411-37.938-54.456,9.814-32.411,60.841-21.213,16.085,5.417L274.5,165.8l-15.047-5.067A1.547,1.547,0,0,0,257.5,161.8l-1.887,6.243a1.651,1.651,0,0,0,1.009,2.052l38.958,13.112a1.539,1.539,0,0,0,1.952-1.057l1.893-6.243a1.663,1.663,0,0,0-1.009-2.058l-15.047-5.061L290.2,146.23,305.25,151.3a1.547,1.547,0,0,0,1.952-1.063m-190.965-9.671,32.349-25.123a1.679,1.679,0,0,0,.635-1.332l-.469-74.392a1.672,1.672,0,0,0-.3-.957L122.046.967a1.5,1.5,0,0,0-2.172-.35l-5,3.885a1.7,1.7,0,0,0-.326,2.29L123.915,20.2,105.83,34.241,96.462,20.835a1.5,1.5,0,0,0-2.172-.344l-5,3.885a1.7,1.7,0,0,0-.326,2.29l24.256,34.719a1.5,1.5,0,0,0,2.172.344l5-3.885a1.7,1.7,0,0,0,.332-2.29l-9.369-13.406L129.439,28.1l10.016,14.338L139.876,110l-25.982,20.175-61.072-20.45L42.806,95.39,60.891,81.346l9.363,13.406a1.5,1.5,0,0,0,2.172.344l5-3.885a1.7,1.7,0,0,0,.332-2.29L53.5,54.209a1.5,1.5,0,0,0-2.172-.35l-5,3.885A1.7,1.7,0,0,0,46,60.033l9.363,13.406L37.282,87.483,27.914,74.077a1.5,1.5,0,0,0-2.172-.35l-5,3.885a1.7,1.7,0,0,0-.326,2.29l26.4,37.79a1.528,1.528,0,0,0,.777.588l67.249,22.527a1.494,1.494,0,0,0,1.394-.244"
					transform="matrix(0.259, -0.966, 0.966, 0.259, -20.331, 267.4)"
				/>
			</g>
			<g transform="translate(944 440.347)" className="card-cifras-4">
				<g
					className="t-cifras-4"
					transform="matrix(1, 0, 0, 1, -944, -440.35)">
					<path
						className="d-cifras-4"
						d="M329.653,171.87H10.415C4.663,171.87,0,168.571,0,164.5V7.367C0,3.3,4.663,0,10.415,0H357.054c6.593,0,11.527,4.278,10.2,8.847l-27.4,157.136c-.993,3.428-5.257,5.889-10.2,5.889"
						transform="translate(944 440.35)"
					/>
				</g>
				<text className="k-cifras-4" transform="translate(173 15.436)">
					<tspan x={-87.576} y={23}>
						{'Nuestra red en '}
					</tspan>
					<tspan x={-131.352} y={51}>
						{'distribuci\xF3n incluye '}
					</tspan>
					<tspan className="l-cifras-4" y={51}>
						{'18 '}
					</tspan>
					<tspan className="l-cifras-4" x={-124.812} y={79}>
						{'transportadoras'}
					</tspan>
					<tspan y={79} xmlSpace="preserve">
						{' que '}
					</tspan>
					<tspan x={-126.996} y={107}>
						{'nos permiten llegar a '}
					</tspan>
					<tspan className="l" x={-142.632} y={135}>
						{'cualquier parte del pa\xEDs'}
					</tspan>
				</text>
			</g>
			<g transform="translate(944 821.207)" className="card-cifras-4">
				<g
					className="s-cifras-4"
					transform="matrix(1, 0, 0, 1, -944, -821.21)">
					<path
						className="d-cifras-4"
						d="M329.653,1255.3H10.415C4.663,1255.3,0,1252,0,1247.93V1090.795c0-4.069,4.663-7.368,10.415-7.368H357.054c6.593,0,11.527,4.278,10.2,8.847l-27.4,157.135c-.993,3.428-5.257,5.889-10.2,5.889"
						transform="translate(944 -262.22)"
					/>
				</g>
				<text className="k-cifras-4" transform="translate(176 43.436)">
					<tspan x={-97.74} y={23}>
						{'Seguimiento por '}
					</tspan>
					<tspan className="l-cifras-4" x={-120.852} y={51}>
						{'GPS para garantizar '}
					</tspan>
					<tspan className="l-cifras-4" x={-61.476} y={79}>
						{'la entrega'}
					</tspan>
				</text>
			</g>
			<g transform="translate(944 630.777)" className="card-cifras-4">
				<g transform="translate(691 -3262.43)">
					<g
						className="r-cifras-4"
						transform="matrix(1, 0, 0, 1, -1635, 2631.65)">
						<path
							className="d-cifras-4"
							d="M329.653,713.584H10.415c-5.752,0-10.415-3.3-10.415-7.368V549.081c0-4.069,4.663-7.368,10.415-7.368H357.054c6.593,0,11.527,4.278,10.2,8.847L339.856,707.7c-.993,3.428-5.257,5.888-10.2,5.888"
							transform="translate(944 89.06)"
						/>
					</g>
					<text
						className="m-cifras-4"
						transform="translate(-503.764 3303.307)">
						<tspan x={-124.26} y={23}>
							{'Pedidos electr\xF3nicos '}
						</tspan>
					</text>
					<text
						className="k-cifras-4"
						transform="translate(-601 3340.469)">
						<tspan x={0} y={23}>
							{'CRM Salesforce '}
						</tspan>
						<tspan x={0} y={51}>
							{'SAP S/4HANA '}
						</tspan>
					</text>
					<circle
						className="c-cifras-4"
						cx={4}
						cy={4}
						r={4}
						transform="translate(-614 3350.697)"
					/>
					<circle
						className="c-cifras-4"
						cx={4}
						cy={4}
						r={4}
						transform="translate(-614 3379.697)"
					/>
				</g>
			</g>
			<g
				transform="translate(1306.061 448.619)"
				className="card-cifras-4">
				<g
					className="q-cifras-4"
					transform="matrix(1, 0, 0, 1, -1306.06, -448.62)">
					<path
						className="d-cifras-4"
						d="M917.418,23.531h320.663c5.778,0,10.461,3.3,10.461,7.368V188.034c0,4.069-4.684,7.368-10.461,7.368H889.894c-6.622,0-11.578-4.278-10.248-8.847L907.169,29.42c1-3.428,5.28-5.889,10.249-5.889"
						transform="translate(426.63 425.09)"
					/>
				</g>
				<text
					className="n-cifras-4"
					transform="translate(193.057 43.436)">
					<tspan x={-114.444} y={23}>
						{'Entregas urgencias '}
					</tspan>
					<tspan x={-100.872} y={51}>
						{'en '}
					</tspan>
					<tspan className="l-cifras-4" y={51}>
						{'4 horas'}
					</tspan>
					<tspan y={51} xmlSpace="preserve">
						{' en las '}
					</tspan>
					<tspan className="l-cifras-4" x={-124.26} y={79}>
						{'principales ciudades'}
					</tspan>
				</text>
			</g>
			<g
				transform="translate(1306.061 829.479)"
				className="card-cifras-4">
				<g
					className="p-cifras-4"
					transform="matrix(1, 0, 0, 1, -1306.06, -829.48)">
					<path
						className="d-cifras-4"
						d="M917.418,1106.96h320.663c5.778,0,10.461,3.3,10.461,7.368v157.136c0,4.069-4.684,7.368-10.461,7.368H889.894c-6.622,0-11.578-4.278-10.248-8.847l27.524-157.136c1-3.428,5.28-5.888,10.249-5.888"
						transform="translate(426.63 -277.48)"
					/>
				</g>
				<text
					className="k-cifras-4"
					transform="translate(187.557 29.436)">
					<tspan x={-113.208} y={23} xmlSpace="preserve">
						{'Equipo log\xEDstico de      '}
					</tspan>
					<tspan className="l-cifras-4" x={-89.484} y={51}>
						{'91 personas en '}
					</tspan>
					<tspan className="l-cifras-4" x={-122.352} y={79}>
						{'Colombia, Panam\xE1 y '}
					</tspan>
					<tspan className="l-cifras-4" x={-65.712} y={107}>
						{'Costa Rica '}
					</tspan>
				</text>
			</g>
			<g transform="translate(1306.061 639.05)" className="card-cifras-4">
				<g transform="translate(328.939 -3270.703)">
					<g
						className="o-cifras-4"
						transform="matrix(1, 0, 0, 1, -1635, 2631.65)">
						<path
							className="d-cifras-4"
							d="M917.418,565.246h320.663c5.778,0,10.461,3.3,10.461,7.368V729.749c0,4.069-4.684,7.368-10.461,7.368H889.894c-6.622,0-11.578-4.278-10.248-8.847l27.524-157.136c1-3.428,5.28-5.889,10.249-5.889"
							transform="translate(426.63 73.8)"
						/>
					</g>
					<text
						className="k-cifras-4"
						transform="translate(-141.382 3316.197)">
						<tspan x={-82.476} y={23}>
							{'Trazabilidad y '}
						</tspan>
						<tspan x={-93.984} y={51}>
							{'monitoreo de la '}
						</tspan>
						<tspan className="l-cifras-4" x={-87.492} y={79}>
							{'cadena de fr\xEDo'}
						</tspan>
					</text>
				</g>
			</g>
		</svg>
	)
}
