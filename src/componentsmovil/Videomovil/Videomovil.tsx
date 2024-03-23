import React from "react";
import BarraVideo from "/images/BarraAmareyMovil.png";
import Mute from '/images/mute.png'
import Mute2 from '/images/Button.png'

export const Videomovil: React.FC = () => {
  const [mute, setMute] = React.useState(false);

  return (
    <div className="relative">
      <img src={BarraVideo} className="w-[100%] absolute top-0 w-full h-full" alt="" />
      <video
        src="/images/videoBanner.mp4"
        className="w-[100%] h-[100vh] object-cover shadow-[rgba(0,0,0,0.25)_0px_0.0625em_0.0625em,rgba(0,0,0,0.25)_0px_0.125em_0.5em,rgba(255,255,255,0.1)_0px_0px_0px_1px_inset]"
        loop
        autoPlay
        muted={!mute}
      ></video>
      <div>
        <img
          src={mute ? Mute : Mute2}
          className="absolute w-[10%] left-[2%] bottom-[10px]"
          alt="Mute"
          onClick={() => setMute(!mute)}
        />
      </div>
    </div>
  );
};
