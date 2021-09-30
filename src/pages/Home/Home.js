import { Link } from 'react-router-dom';

import classes from './Home.module.css';
import word_world from '../../images/movies/word_world.webp';
import barney from '../../images/movies/barney.webp';
import barney_a_game from '../../images/movies/barney_a_game.webp';
import higglytown_heroes from '../../images/movies/higglytown_heroes.jpeg';
import little_einsteins from '../../images/movies/little_einsteins.webp';
import baby_einstein_music_fes from '../../images/movies/baby_einstein_music_fes.webp';
import handy_manny_a_stiky_fix from '../../images/movies/handy_manny_a_stiky_fix.webp';
import our_planet_deserts from '../../images/movies/our_planet_deserts.webp';
import timmy_time from '../../images/movies/timmy_time.webp';
import winnie_the_pooh_part01 from '../../images/movies/winnie_the_pooh_part01.webp';
import big_red_dog01 from '../../images/movies/big_red_dog01.webp';
import mickey_mouse_club from '../../images/movies/mickey_mouse_club.webp';
import animal_mechanical from '../../images/movies/animal_mechanical.webp';
import madeline_s1_ep1 from '../../images/movies/madeline_s1_ep1.webp';
import baby_einstein_on_the_farm from '../../images/movies/baby_einstein_on_the_farm.webp';
import word_world_sand_castle from '../../images/movies/word_world_sand_castle.webp';
import big_red_dog02 from '../../images/movies/big_red_dog02.webp';
import pocoyo_s2_p5 from '../../images/movies/pocoyo_s2_p5.webp';
import pocoyo_s1_p2 from '../../images/movies/pocoyo_s1_p2.webp';
import kid_chef_part1 from '../../images/movies/kid_chef_part1.webp';
import kid_chef_part2 from '../../images/movies/kid_chef_part2.webp';
import barney_a_counting from '../../images/movies/barney_a_counting.webp';
import our_planet_coastal_sea from '../../images/movies/our_planet_coastal_sea.webp';
import MasterLayout from '../../layout/MasterLayout/MasterLayout';

const movies = [
	{
		id: 'OUR_PLANET_COASTAL_SEA',
		name: 'Our Planet | Coastal Seas',
		url: our_planet_coastal_sea,
		to: '/movies/our-planet-coastal-sea'
	},
	{
		id: 'WORD_WORLD_SAND_CASTLE',
		name: 'Castles in the Sea/Get Your Coat | WordWorld',
		url: word_world_sand_castle,
		to: '/movies/word-world-sand-castle'
	},
	{
		id: 'KID_CHEF_PART2',
		name: 'Kid chef part 02',
		url: kid_chef_part2,
		to: '/movies/kid-chef-part2'
	},
	{
		id: 'BIG_RED_DOG_02',
		name: 'Cleo Fair Share',
		url: big_red_dog02,
		to: '/movies/big-red-dog02'
	},
	{
		id: 'BARNEY_A_COUNTING',
		name: 'Barney | A-Counting We Will Go!',
		url: barney_a_counting,
		to: '/movies/barney-a-counting'
	},
	{
		id: 'KID_CHEF_PART1',
		name: 'Kid chef part 01',
		url: kid_chef_part1,
		to: '/movies/kid-chef-part1'
	},
	{
		id: 'POCOYO_S2_P5',
		name: 'Pocoyo season2 part5',
		url: pocoyo_s2_p5,
		to: '/movies/pocoyo-s2-p5'
	},
	{
		id: 'POCOYO_S1_P2',
		name: 'Pocoyo season1 part2',
		url: pocoyo_s1_p2,
		to: '/movies/pocoyo-s1-p2'
	},
	{
		id: 'WINNIE_THE_POOH_PART02',
		name: 'Winnie the Pooh part 02',
		url: winnie_the_pooh_part01,
		to: '/movies/winnie-the-pooh-part02'
	},
	{
		id: 'BABY_EINSTEIN_ON_FARM',
		name: 'Baby MacDonald',
		url: baby_einstein_on_the_farm,
		to: '/movies/baby-einstein-on-farm'
	},
	{
		id: 'MADELINE_S1_EP1',
		name: 'Madeline\'s Christmas',
		url: madeline_s1_ep1,
		to: '/movies/madeline-s1-ep1'
	},
	{
		id: 'ANIMAL_MECHANICAL',
		name: 'Animal Mechanical',
		url: animal_mechanical,
		to: '/movies/animal-mechanical'
	},
	{
		id: 'MICKEY_MOUSE_CLUB',
		name: 'Mickey Mouse Clubhouse',
		url: mickey_mouse_club,
		to: '/movies/mickey-mouse-club'
	},
	{
		id: 'BARNEY_A_GAME',
		name: 'Barney |A Game for Everyone',
		url: barney_a_game,
		to: '/movies/barney-a-game'
	},
	{
		id: 'BIG_RED_DOG_01',
		name: 'Clifford and the Bean Stalk',
		url: big_red_dog01,
		to: '/movies/big-red-dog01'
	},
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