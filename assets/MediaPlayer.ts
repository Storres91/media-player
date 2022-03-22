class MediaPlayer {
    MediaElement: HTMLMediaElement;
    plugins: Array<any>

    constructor({
        MediaElement,
        plugins = []
    }) {
        this.MediaElement = MediaElement,
        this.plugins = plugins,
        this.initPlugins()
    }

    private initPlugins() {
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
        this.MediaElement.paused ? this.play() : this.pause()
    }

    mute() {
        this.MediaElement.muted = true;
    }

    unmute() {
        this.MediaElement.muted = false;
    }

    toggleMute() {
        this.MediaElement.muted ? this.unmute() : this.mute();
    }
}

export default MediaPlayer;