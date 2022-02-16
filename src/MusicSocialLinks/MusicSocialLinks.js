import './MusicSocialLinks.css';
import spotify from './images/spotify.svg';
import applePodcast from './images/apple-podcast.svg';
import googlePodcast from './images/google-podcasts.svg';
import pocketCast from './images/pocket-casts.svg';

function socialLinks(){
    return(
        <div className="social-links">
            <img src={spotify} alt="Spotify link" id="spotify" />
            <img src={applePodcast} alt="Apple podcast link" id="apple" />
            <img src={googlePodcast} alt="Google podcast link" id="google" />
            <img src={pocketCast} alt="Pocket cast link" id="pocket" />
        </div>
    )
}

export default socialLinks;