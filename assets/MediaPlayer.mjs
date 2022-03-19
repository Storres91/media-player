class MediaPlayer {
    constructor({
        MediaElement,
        plugins = []
    }) {
        this.MediaElement = MediaElement,
        this.plugins = plugins,
        this._initPlugins()
    }

    _initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
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

    mute(){
        this.MediaElement.muted = true;
    }

    unmute(){
        this.MediaElement.muted = false;
    }

    toggleMute(){
        this.MediaElement.muted ? this.MediaElement.muted = false : this.MediaElement.muted = true;
    }
}

export default MediaPlayer;