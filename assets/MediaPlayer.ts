class MediaPlayer {
    MediaElement: HTMLMediaElement;
    plugins: Array<any>
    container: HTMLElement;

    constructor({
        MediaElement,
        plugins = []
    }) {
        this.MediaElement = MediaElement,
        this.plugins = plugins,
        this.initPlayer();
        this.initPlugins();
    }

    private initPlayer() {
        this.container = document.createElement('div')
        this.container.style.position = 'relative';
        this.MediaElement.parentNode.insertBefore(this.container, this.MediaElement);
        this.container.appendChild(this.MediaElement)
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