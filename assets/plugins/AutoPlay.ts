import MediaPlayer from "../MediaPlayer.js";

class AutoPlay {
    run(player: MediaPlayer){
        if (!player.MediaElement.muted){
            player.MediaElement.muted = true;
        }
        player.play();
    }
}

export default AutoPlay;