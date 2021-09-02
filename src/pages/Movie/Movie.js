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