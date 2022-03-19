import MediaPlayer from "./MediaPlayer.mjs";
import AutoPlay from "./plugins/AutoPlay.mjs";

const video = document.querySelector('video');
const buttonPlayback = document.querySelector('#button-playback');
const buttonMute = document.querySelector('#button-mute')

const player = new MediaPlayer({ MediaElement: video, plugins: [new AutoPlay()] });

buttonPlayback.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
video.onclick = () => player.togglePlay();