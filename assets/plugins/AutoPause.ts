import MediaPlayer from "../MediaPlayer.js";

class AutoPause {
    private threshold:number;
    pausedByVisibility:boolean;
    player:MediaPlayer;

    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.pausedByVisibility = false;
    }

    run(player: MediaPlayer) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });

        observer.observe(this.player.MediaElement);
    }

    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            if (this.pausedByVisibility) this.player.play();
        } else {
            if (!this.player.MediaElement.paused) {
                this.player.pause();
                this.pausedByVisibility = true;
            } else {
                this.pausedByVisibility = false;
            }
        }
    }
}

export default AutoPause;
