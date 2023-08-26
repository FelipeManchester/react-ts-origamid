import { useRef, useState } from "react";
import videoSrc from "./video.mp4";

function App() {
  const video = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (video.current?.paused) {
      video.current.play();
      setIsPlaying(true);
    } else {
      video.current?.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (video.current) {
      video.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const rewindVideo = () => {
    if (video.current) {
      video.current.currentTime = 0;
      video.current.play();
    }
  };

  const addTwoSeconds = () => {
    if (!video.current) return;
    video.current.currentTime += 2;
  };

  const doubleSpeed = () => {
    if (!video.current) return;
    video.current.playbackRate = 2;
  };

  const normalSpeed = () => {
    if (!video.current) return;
    video.current.playbackRate = 1;
  };

  async function pictureInPicture() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }
    await video.current.requestPictureInPicture();
  }

  return (
    <div>
      <div className="flex">
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <button onClick={toggleMute}>
          {muted ? "Ativar som" : "Desativar som"}
        </button>
        <button onClick={rewindVideo}>Rewind</button>
        <button onClick={addTwoSeconds}>+ 2s</button>
        <button onClick={normalSpeed}>1x</button>
        <button onClick={doubleSpeed}>2x</button>
        <button onClick={pictureInPicture}>Picture in Picture</button>
      </div>
      <video ref={video} src={videoSrc} muted controls></video>
    </div>
  );
}

export default App;
