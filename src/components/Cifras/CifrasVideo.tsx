import React from 'react'
import Mute from 'assets/images/mute.png'
import Mute2 from 'assets/images/Button.png'

interface IcifrasVideo {
	height: string
	open: boolean
	onClose: () => void
	selected: number
}

export const CifrasVideo: React.FC<IcifrasVideo> = ({
	height,
	open,
	selected,
	onClose,
}) => {
	const [mute, setMute] = React.useState(false)

	return (
		<div
			className={`absolute top-0 bg-[#ffffff50] ${
				open ? 'block' : 'hidden'
			}`}>
			<svg
				width="100%"
				height={height}
				viewBox="0 0 1920 1080"
				preserveAspectRatio="none">
				<defs>
					<style>
						{
							'.a-cifras-1{fill:#82898d;}.b-cifras-1{clip-path:url(#c);}.c-cifras-1{fill:url(#d);}.d-cifras-1,.e-cifras-1{fill:#fff;}.d-cifras-1{opacity:0.5;}.e-cifras-1{font-size:39px;font-family:Helvetica-Bold, Helvetica;font-weight:700;}.f-cifras-1{fill: #ffffff50 !important}.g-cifras-1{filter:url(#a);}'
						}
					</style>
					<filter
						id="a-cifras-1"
						x={-9}
						y={-6}
						width={1938}
						height={1097.473}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="b" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="b" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="c">
						<g
							className="g-cifras-1"
							transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								className="a-cifras-1"
								d="M490.238,0H1920V1079.473H0L222.185,296.292C266.792,117.055,372.685,0,490.238,0Z"
								transform="translate(1920 1079.47) rotate(180)"
							/>
						</g>
					</clipPath>
					<clipPath id="b-5-1">
						<path
							d="M490.238,0H1920V1079.473H0L222.185,296.292C266.792,117.055,372.685,0,490.238,0Z"
							transform="translate(1929 1085.47) rotate(180)"
						/>
					</clipPath>
					<pattern
						id="d"
						preserveAspectRatio="xMidYMid slice"
						width="100%"
						height="100%"
						viewBox="0 0 1920 1080">
						<image
							width={1920}
							height={1080}
							xlinkHref="/images/cifras1.jpg"
						/>
					</pattern>
					<filter
						id="e"
						x={1701.5}
						y={31.5}
						width={78}
						height={78}
						filterUnits="userSpaceOnUse">
						<feOffset dy={1} />
						<feGaussianBlur stdDeviation={0.5} result="f" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="f" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g className="b-cifras-1" transform="translate(-9 -6)">
					{/* <rect
            className="c-cifras-1"
            width={1920}
            height={1080}
            // transform=""
            style={{ clipPath: "url(#b-5)" }}
            transform="translate(0 -0.263)"
          /> */}
					<foreignObject
						width="1929"
						height="1089"
						style={{  }}>
						<div>
							{selected === 1 && (
								<video
									id="video"
									width="1929"
									height="1080"
									src="/images/video/capacitaciones.webm" 
									autoPlay
									muted={!mute}
									loop
								/>
							)}
							{selected === 2 && (
								<video
									id="video1"
									width="1929"
									height="1080"
									src="/images/video/Robotica.webm" 
									autoPlay
									muted={!mute}
									loop
								/>
							)}
							{selected === 3 && (
								<video
									id="video2"
									width="1929"
									height="1080"
									src="/images/video/Maxilo.webm"
									autoPlay
									muted={!mute}
									loop
								/>
							)}
							{selected === 4 && (
								<video
									id="video3"
									width="1929"
									height="1080"
									src="/images/video/logistica.webm"
									autoPlay
									muted={!mute}
									loop
								/>
							)}
						</div>
					</foreignObject>
				</g>
				<g transform="translate(1815.473 26.578)" onClick={onClose}>
					<g
						className="f-cifras-1"
						transform="matrix(1, 0, 0, 1, -1815.47, -26.58)">
						<circle
							className="d-cifras-1"
							cx={37.5}
							cy={37.5}
							r={37.5}
							transform="translate(1703 32)"
						/>
					</g>
					<text
						className="e-cifras-1"
						transform="translate(-87.973 56.922)">
						<tspan x={0} y={0}>
							{'X'}
						</tspan>
					</text>
				</g>
			</svg>
			<div>
				<img
					src={mute ? Mute : Mute2}
					className="absolute w-[3%] left-[1%] bottom-[3%]"
					alt="Mute"
					onClick={() => setMute(!mute)}
				/>
			</div>
		</div>
	)
}
