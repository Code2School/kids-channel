import { Link } from 'react-router-dom';

import classes from './Home.module.css';
import word_world from '../../images/movies/word_world.webp';
import barney from '../../images/movies/barney.webp';
import higglytown_heroes from '../../images/movies/higglytown_heroes.jpeg';
import little_einsteins from '../../images/movies/little_einsteins.webp';
import baby_einstein_music_fes from '../../images/movies/baby_einstein_music_fes.webp';
import handy_manny_a_stiky_fix from '../../images/movies/handy_manny_a_stiky_fix.webp';
import our_planet_deserts from '../../images/movies/our_planet_deserts.webp';
import timmy_time from '../../images/movies/timmy_time.webp';
import winnie_the_pooh_part01 from '../../images/movies/winnie_the_pooh_part01.webp';
import big_red_dog01 from '../../images/movies/big_red_dog01.webp';
import MasterLayout from '../../layout/MasterLayout/MasterLayout';

const movies = [
	{
		id: 'WINNIE_THE_POOH_PART01',
		name: 'Winnie the Pooh part 01',
		url: winnie_the_pooh_part01,
		to: '/movies/winnie-the-pooh-part01'
	},
	{
		id: 'LITTLE_EINSTEINS',
		name: 'Little Einsteins',
		url: little_einsteins,
		to: '/movies/little-einsteins'
	},
	{
		id: 'BIG_RED_DOG_01',
		name: 'Clifford and the Bean Stalk',
		url: big_red_dog01,
		to: '/movies/big-red-dog01'
	},
	{
		id: 'BABY_EINSTEIN_MUSIC_FES',
		name: 'Baby Einstein Baby Mozart Music Festival',
		url: baby_einstein_music_fes,
		to: '/movies/baby-einstein-music-fes'
	},
	{
		id: 'HANDY_MANNY',
		name: 'Handy Manny A Stiky Fix',
		url: handy_manny_a_stiky_fix,
		to: '/movies/handy-manny-a-stiky-fix'
	},
	{
		id: 'OUR_PLANET_DESERTS',
		name: 'Our Planet deserts',
		url: our_planet_deserts,
		to: '/movies/our-planet-deserts'
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