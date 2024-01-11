import { AudioClip } from "./types";

interface DrumProps {
    audioClip: AudioClip;
}

const Drum = ({audioClip}: DrumProps) => {
    const playSound = (clip: AudioClip) => {
        (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
            .play()
            .catch(console.error);
        document.getElementById('display')!.innerText = clip.id;
    }

    return (
    <button 
    className="drum-pad" 
    id={`drum-${audioClip.keyTrigger}`}
    onClick={() => playSound(audioClip)}>
        {audioClip.keyTrigger}
        <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
    </button>
    );
}

export default Drum;