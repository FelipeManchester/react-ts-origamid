import { useEffect, useRef } from "react";
import videoSrc from "./video.mp4";
import useLocalStorage from "./useLocalStorage";

function App() {
  const video = useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStorage("volume", "0");

  useEffect(() => {
    if (!video.current) return;
    const volumeToNumber = Number(volume);
    video.current.volume = volumeToNumber;
  }, [volume]);

  return (
    <div>
      <div className="flex">
        <p>Selecione o volume:</p>
        <button onClick={() => setVolume("0.1")}>10%</button>
        <button onClick={() => setVolume("0.3")}>30%</button>
        <button onClick={() => setVolume("0.6")}>60%</button>
        <button onClick={() => setVolume("1")}>100%</button>
      </div>
      <video src={videoSrc} ref={video} controls muted></video>
    </div>
  );
}

export default App;
