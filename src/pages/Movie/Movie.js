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