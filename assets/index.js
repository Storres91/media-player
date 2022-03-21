import MediaPlayer from "./MediaPlayer.mjs";
import AutoPlay from "./plugins/AutoPlay.mjs";
import AutoPause from "./plugins/AutoPause.mjs"

const video = document.querySelector('video');
const buttonPlayback = document.querySelector('#button-playback');
const buttonMute = document.querySelector('#button-mute')

const player = new MediaPlayer({ MediaElement: video, plugins: [new AutoPlay(), new AutoPause()] });

buttonPlayback.onclick = () => player.togglePlay();
video.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();