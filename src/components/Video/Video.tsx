import React from 'react'
import BarraVideo from 'assets/images/Home/BarrainicialAmarey.png'
import Mute from 'assets/images/mute.png'
import Mute2 from 'assets/images/Button.png'

interface IVideo {
	onCloseVideo: () => void
}

const Video: React.FC<IVideo> = ({ onCloseVideo }): JSX.Element => {
	const [mute, setMute] = React.useState(false)

	return (
		<div className=" mb-[1.2px]">
			<div className="w-full absolute top-0 h-[74px]">
				<img src={BarraVideo} className="w-full absolute" alt="" />
				<span
					className="right-[50px] absolute text-[#001F5F] top-[32%] z-[1]"
					onClick={onCloseVideo}>
					X
				</span>
			</div>

			<video
				src="/images/videoBanner.mp4"
				className="w-full h-screen object-cover shadow-[rgba(0,0,0,0.25)_0px_0.0625em_0.0625em,rgba(0,0,0,0.25)_0px_0.125em_0.5em,rgba(255,255,255,0.1)_0px_0px_0px_1px_inset]"
				loop
				autoPlay
				muted={!mute}></video>
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

export default Video
