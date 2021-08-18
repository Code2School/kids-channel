import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import classes from './Movie.module.css';
import MasterLayout from '../../layout/MasterLayout/MasterLayout';

const movieObj = {
	'word-world': {
		url: 'https://www.youtube.com/watch?v=hWnDE_W-hcY',
	},
	'word-world-robot': {
		url: 'https://www.youtube.com/watch?v=sWkBbMjDSZ8',
	},
	'barney': {
		url: 'https://www.youtube.com/watch?v=xWdPmK9B2pA',
	},
	'higglytown-heroes': {
		url: 'https://www.youtube.com/watch?v=OkwwSS5JcGI',
	},
	'little-einsteins': {
		url: 'https://www.youtube.com/watch?v=uquqOTNAUjU',
	}
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