import { Link } from 'react-router-dom';

import classes from './Home.module.css';
import word_world from '../../images/movies/word_world.webp';
import barney from '../../images/movies/barney.webp';
import higglytown_heroes from '../../images/movies/higglytown_heroes.jpeg';
import little_einsteins from '../../images/movies/little_einsteins.webp';
import word_world_robot from '../../images/movies/word_world_robot.webp';
import timmy_time from '../../images/movies/timmy_time.webp';
import MasterLayout from '../../layout/MasterLayout/MasterLayout';

const movies = [
	{
		id: 'LITTLE_EINSTEINS',
		name: 'Little Einsteins',
		url: little_einsteins,
		to: '/movies/little-einsteins'
	},
	{
		id: 'WORD_WORLD_ROBOT',
		name: 'Word World Robot',
		url: word_world_robot,
		to: '/movies/word-world-robot'
	},
	{
		id: 'TIMMY_TIME',
		name: 'Timmy Time',
		url: timmy_time,
		to: '/movies/timmy-time'
	},
	{
		id: 'WORD_WORLD',
		name: 'Word World',
		url: word_world,
		to: '/movies/word-world'
	},
	{
		id: 'HIGGLY_HEROES',
		name: 'Higglytown Heroes',
		url: higglytown_heroes,
		to: '/movies/higglytown-heroes'
	},
	{
		id: 'BARNEY',
		name: 'Barney and friends',
		url: barney,
		to: '/movies/barney'
	},
]

const Home = () => {
	return (
		<MasterLayout>
			<article className={classes.home}>
				<header>
					<h1 className={classes.title}>Choose a movie</h1>
				</header>
				<section className={classes.selectionBlock}>
					{movies.slice(0, 3).map(({ id, name, url, to }) => (
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