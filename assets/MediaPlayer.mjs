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
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.MediaElement,

            get muted() {
                return this.media.muted;
            },

            set muted(value) {
                this.media.muted = value;
            }
        }

        this.plugins.forEach(plugin => {
            plugin.run(player);
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

    mute(){
        this.MediaElement.muted = true;
    }

    unmute(){
        this.MediaElement.muted = false;
    }

    toggleMute(){
        this.MediaElement.muted ? this.unmute() : this.mute()
    }
}

export default MediaPlayer;