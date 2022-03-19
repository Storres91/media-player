const video = document.querySelector('video');
const button = document.querySelector('button');

class MediaPlayer {
    constructor({
    MediaElement
    }) {
    this.MediaElement = MediaElement
    }

    play() {
    this.MediaElement.play();
    }

    pause() {
    this.MediaElement.pause();
    }

    togglePlay() {
    this.MediaElement.paused ? this.MediaElement.play() : this.MediaElement.pause()
    }
}

const player = new MediaPlayer({ MediaElement: video });

button.onclick = () => player.togglePlay();