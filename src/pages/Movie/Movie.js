import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import classes from './Movie.module.css';
import MasterLayout from '../../layout/MasterLayout/MasterLayout';

const movieObj = {
	'word-world': {
		url: 'https://www.youtube.com/watch?v=hWnDE_W-hcY',
	},
	'handy-manny-a-stiky-fix': {
		url: 'https://www.youtube.com/watch?v=acVnE7HD5e8&list=PLJATv1N_YfsEco5N4JoNpKyOGWHI5FnoI',
	},
	'baby-einstein-music-fes': {
		url: 'https://www.youtube.com/watch?v=_HbEejSqE9Y',
	},
	'our-planet-deserts': {
		url: 'https://www.youtube.com/watch?v=XmtXC_n6X6Q',
	},
	'our-planet-forest': {
		url: 'https://www.youtube.com/watch?v=JkaxUblCGz0',
	},
	'barney': {
		url: 'https://www.youtube.com/watch?v=xWdPmK9B2pA',
	},
	'higglytown-heroes': {
		url: 'https://www.youtube.com/watch?v=OkwwSS5JcGI',
	},
	'little-einsteins': {
		url: 'https://www.youtube.com/watch?v=uquqOTNAUjU',
	},
	'timmy-time': {
		url: 'https://www.youtube.com/watch?v=zEN5eyIHhwU',
	},
	'winnie-the-pooh-part01': {
		url: 'https://www.youtube.com/watch?v=HwCewzY9OU4&list=PLJATv1N_YfsH8b0QegaKbVBZJ11VsSRMi',
	},
	'big-red-dog01': {
		url: 'https://www.youtube.com/watch?v=p6t20VoqJ90',
	},
	'barney-a-game': {
		url: 'https://www.youtube.com/watch?v=FuX7swmiYRA',
	},
	'mickey-mouse-club': {
		url: 'https://www.youtube.com/watch?v=DayPXeonH3Y',
	},
	'animal-mechanical': {
		url: 'https://www.youtube.com/watch?v=QMGHHBRcaKs',
	},
	'madeline-s1-ep1': {
		url: 'https://www.youtube.com/watch?v=_2kQh3dZmk8',
	},
	'baby-einstein-on-farm': {
		url: 'https://www.youtube.com/watch?v=xbMF6zBzaKI',
	},
	'winnie-the-pooh-part02': {
		url: 'https://www.youtube.com/watch?v=V4d95u2VomI&list=PLJATv1N_YfsENIUDpZ4A5MB0kVUnh782x',
	},
	'word-world-sand-castle': {
		url: 'https://www.youtube.com/watch?v=c5pfZuHJm0w',
	},
	'big-red-dog02': {
		url: 'https://www.youtube.com/watch?v=wudQ9XA4Ue0',
	},
	'pocoyo-s1-p2': {
		url: 'https://www.youtube.com/watch?v=5frHoL7zAso',
	},
	'pocoyo-s2-p5': {
		url: 'https://www.youtube.com/watch?v=P28uscmoEfY',
	},
	'kid-chef-part1': {
		url: 'https://www.youtube.com/watch?v=j6rxiZTtMAA&list=PLJATv1N_YfsEXasnhBtf6nvv9z2HyeLcC',
	},
	'barney-a-counting': {
		url: 'https://www.youtube.com/watch?v=xR2xLLq2s1Y',
	},
	'our-planet-coastal-sea': {
		url: 'https://www.youtube.com/watch?v=r9PeYPHdpNo',
	},
	'kid-chef-part2': {
		url: 'https://www.youtube.com/watch?v=c6EHxssHX7E&list=PLJATv1N_YfsG2B8sP4iec2NgoUlQXUD4q',
	},
	'kid-chef-part3': {
		url: 'https://www.youtube.com/watch?v=nGfdhrJHSHM&list=PLJATv1N_YfsHwnCksU07l9FHECFYzp_oE',
	},
	'kid-chef-part4': {
		url: 'https://www.youtube.com/watch?v=D8Xix7YXk34&list=PLJATv1N_YfsFO6HAwfwVrgyF5Hc96hQ8p',
	},
	'higglytown-heroes-s1-ep3': {
		url: 'https://www.youtube.com/watch?v=DjW4c9UxScY',
	},
	'winnie-the-pooh-part03': {
		url: 'https://www.youtube.com/watch?v=KlrrbLAHB0M&list=PLJATv1N_YfsEScuMRqIG8_zdw0COC8QEo',
	},
	'barney-can-count-on-me': {
		url: 'https://www.youtube.com/watch?v=lDgD-Fsu96s',
	},
	'kid-cooking': {
		url: 'https://www.youtube.com/watch?v=aP8v8G1CkCI',
	},
	'ride-a-bike-part01': {
		url: 'https://www.youtube.com/watch?v=2Uv-0ePaC5U&list=PLJATv1N_YfsH4TrF-w_C5jaEij8t7hggv',
	},
	'word-world-red-ruby': {
		url: 'https://www.youtube.com/watch?v=SKo54F8vXCQ',
	},
	'winnie-the-pooh-123': {
		url: 'https://www.youtube.com/watch?v=_XwmBXize-A',
	},
	'big-red-dog-circus-star': {
		url: 'https://www.youtube.com/watch?v=zfIzZx1ZQrU',
	},
	'ariel-ep01': {
		url: 'https://www.youtube.com/watch?v=P9syZLS_Hdo&list=PLJATv1N_YfsHxmZAqFuL7z5anBHVvcfpB',
	},
	'bible-easter': {
		url: 'https://www.youtube.com/watch?v=s6ggrHPkWsU',
	},
	'barney-a-space-adventure': {
		url: 'https://www.youtube.com/watch?v=ehOKBYxMCIg',
	},
	'winnie-the-pooh-part04': {
		url: 'https://www.youtube.com/watch?v=a1ewi4_qMGI&list=PLJATv1N_YfsGCwtC7MlBUn0Vp0WFgOMfH',
	},
	'i-can-cook-s3e1': {
		url: 'https://www.youtube.com/watch?v=eZSQgZWdEoQ',
	},
	'barney-halloween-guess-who': {
		url: 'https://www.youtube.com/watch?v=jT5trjBAgGQ',
	},
	'big-red-dog-the-halloween-bandit': {
		url: 'https://www.youtube.com/watch?v=NT9mewtE1e8',
	},
	'winnie-the-pooh-boo-to-you': {
		url: 'https://www.youtube.com/watch?v=pY0WozcsShc',
	},
	'word-world-giant': {
		url: 'https://www.youtube.com/watch?v=CmAo9A0J1XY',
	},
	'little-einsteins-s1-e1': {
		url: 'https://www.youtube.com/watch?v=kbC4sxf4sbM',
	},
	'frozen-full-movie': {
		url: 'https://www.youtube.com/watch?v=jLX2bt4ZnS8',
	},
	'ratatouille-full-movie': {
		url: 'https://www.youtube.com/watch?v=B5JOTWsXtT4',
	},
}

const Movie = () => {
	let { pageId } = useParams();

	return (
		<MasterLayout>
			<article className={classes.movie}>
				<ReactPlayer
					url={movieObj[pageId].url}
					controls
				/>
			</article>
		</MasterLayout>
	)
}

export default Movie;