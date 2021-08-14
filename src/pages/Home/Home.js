import { Link } from 'react-router-dom';

import classes from './Home.module.css';
import word_world from '../../images/movies/word_world.webp';
import barney from '../../images/movies/barney.webp';
import higglytown_heroes from '../../images/movies/higglytown_heroes.jpeg';
import MasterLayout from '../../layout/MasterLayout/MasterLayout';

const movies = [
	{
		id: 'WORD_WORLD',
		name: 'Word World',
		url: word_world,
		to: '/movies/word-world'
	},
	{
		id: 'BARNEY',
		name: 'Barney and friends',
		url: barney,
		to: '/movies/barney'
	},
	{
		id: 'HIGGLY_HEROES',
		name: 'Higglytown Heroes',
		url: higglytown_heroes,
		to: '/movies/higglytown-heroes'
	}
]

const Home = () => {
	return (
		<MasterLayout>
			<article className={classes.home}>
				<header>
					<h1 className={classes.title}>Choose a movie</h1>
				</header>
				<section className={classes.selectionBlock}>
					{movies.map(({ id, name, url, to }) => (
						<Link key={id} className={classes.block} to={to}>
							<img src={url} alt={name} />
						</Link>
					))}
				</section>
			</article>
		</MasterLayout>
	)
}

export default Home;