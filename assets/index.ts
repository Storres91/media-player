import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause"
import AdsPlugin from "./plugins/Ads/Index";

const video:HTMLElement = document.querySelector('video');
const buttonPlayback:HTMLElement = document.querySelector('#button-playback');
const buttonMute:HTMLElement = document.querySelector('#button-mute')

const player = new MediaPlayer({ MediaElement: video, plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()] });

buttonPlayback.onclick = () => player.togglePlay();
video.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();