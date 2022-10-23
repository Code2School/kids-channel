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
import big_red_dog02 from '../../images/movies/big_red_dog02.webp';
import pocoyo_s2_p5 from '../../images/movies/pocoyo_s2_p5.webp';
import pocoyo_s1_p2 from '../../images/movies/pocoyo_s1_p2.webp';
import kid_chef_part1 from '../../images/movies/kid_chef_part1.webp';
import kid_chef_part2 from '../../images/movies/kid_chef_part2.webp';
import kid_chef_part3 from '../../images/movies/kid_chef_part3.webp';
import kid_chef_part4 from '../../images/movies/kid_chef_part4.webp';
import barney_a_counting from '../../images/movies/barney_a_counting.webp';
import our_planet_coastal_sea from '../../images/movies/our_planet_coastal_sea.webp';
import higgletown_heroes_s1_ep3 from '../../images/movies/higgletown_heroes_s1_ep3.webp';
import winnie_the_pooh_part03 from '../../images/movies/winnie_the_pooh_part03.webp';
import barney_count_on_me from '../../images/movies/barney_count_on_me.webp';
import kid_cooking from '../../images/movies/kid_cooking.webp';
import ride_a_bike_part01 from '../../images/movies/ride_a_bike_part01.webp';
import word_world_red_ruby from '../../images/movies/word_world_red_ruby.webp';
import winnie_the_pooh_123 from '../../images/movies/winnie_the_pooh_123.webp';
import big_red_dog_circus from '../../images/movies/big_red_dog_circus.webp';
import ariel_ep01 from '../../images/movies/ariel_ep01.webp';
import bible_easter from '../../images/movies/bible_easter.webp';
import barney_space_adventure from '../../images/movies/barney_space_adventure.webp';
import winnie_the_pooh_part04 from '../../images/movies/winnie_the_pooh_part04.webp';
import i_can_cook_s3e1 from '../../images/movies/i_can_cook_s3e1.webp';
import barney_halloween_guess_who from '../../images/movies/barney_halloween_guess_who.webp';
import winnie_boo_to_you from '../../images/movies/winnie_boo_to_you.webp';
import big_red_dog_halloween_bandit from '../../images/movies/big_red_dog_halloween_bandit.webp';
import MasterLayout from '../../layout/MasterLayout/MasterLayout';

const movies = [
	{
		id: 'BIG_RED_DOG_HALLOWEEN_BANDIT',
		name: 'Puppy Days🐶🎃 - The Halloween Bandit | An Honest Spin',
		url: big_red_dog_halloween_bandit,
		to: '/movies/big-red-dog-the-halloween-bandit'
	},
	{
		id: 'WINNIE_THE_POOH_BOO_TO_YOU',
		name: 'Boo to You Too! Winnie the Pooh',
		url: winnie_boo_to_you,
		to: '/movies/winnie-the-pooh-boo-to-you'
	},
	{
		id: 'BARNEY_HALLOWEEN_GUESS_WHO',
		name: 'Barney|FULL Episode |Guess Who?',
		url: barney_halloween_guess_who,
		to: '/movies/barney-halloween-guess-who'
	},
	{
		id: 'BIBLE_EASTER',
		name: 'Jesus\' Sacrifice + More of the Easter Story',
		url: bible_easter,
		to: '/movies/bible-easter'
	},
	{
		id: 'BARNEY_A_SPACE_ADVENTURE',
		name: 'Barney |The Misbegotten Moon: A Space Adventure',
		url: barney_space_adventure,
		to: '/movies/barney-a-space-adventure'
	},
	{
		id: 'WINNIE_THE_POOH_PART04',
		name: 'Winnie the Pooh part 04',
		url: winnie_the_pooh_part04,
		to: '/movies/winnie-the-pooh-part04'
	},
	{
		id: 'I_CAN_COOK_S3E1',
		name: 'I Can Cook Season 3 Compilation #1 | Easy Recipes | Kids Craft Channel',
		url: i_can_cook_s3e1,
		to: '/movies/i-can-cook-s3e1'
	},
	{
		id: 'KID_CHEF_PART3',
		name: 'Kid chef part 03',
		url: kid_chef_part3,
		to: '/movies/kid-chef-part3'
	},
	{
		id: 'ARIEL_EP01',
		name: 'Ariel - episode 01',
		url: ariel_ep01,
		to: '/movies/ariel-ep01'
	},
	{
		id: 'BIG_RED_DOG_CIRCUS',
		name: 'Clifford - Circus Star',
		url: big_red_dog_circus,
		to: '/movies/big-red-dog-circus-star'
	},
	{
		id: 'KID_COOKING',
		name: 'Kid MasterChef vs Adult Tasty Chef',
		url: kid_cooking,
		to: '/movies/kid-cooking'
	},
	{
		id: 'KID_CHEF_PART4',
		name: 'Kid chef part 04',
		url: kid_chef_part4,
		to: '/movies/kid-chef-part4'
	},
	{
		id: 'WINNIE_THE_POOH_PART_MOVIE_123',
		name: 'WINNIE THE POOH - 123',
		url: winnie_the_pooh_123,
		to: '/movies/winnie-the-pooh-123'
	},
	{
		id: 'RIDE_A_BIKE_PART01',
		name: 'Ride a bike part 01',
		url: ride_a_bike_part01,
		to: '/movies/ride-a-bike-part01'
	},
	{
		id: 'WORD_WORLD_RED_RUBY',
		name: 'The Really Red Ruby/M is for Map | WordWorld',
		url: word_world_red_ruby,
		to: '/movies/word-world-red-ruby'
	},
	{
		id: 'WINNIE_THE_POOH_PART03',
		name: 'Winnie the Pooh part 03',
		url: winnie_the_pooh_part03,
		to: '/movies/winnie-the-pooh-part03'
	},
	{
		id: 'BARNEY_CAN_COUNT_ON_ME',
		name: 'Barney | You Can Count on Me!',
		url: barney_count_on_me,
		to: '/movies/barney-can-count-on-me'
	},
	{
		id: 'POCOYO_S2_P5',
		name: 'Pocoyo season2 part5',
		url: pocoyo_s2_p5,
		to: '/movies/pocoyo-s2-p5'
	},
	{
		id: 'HIGGLY_HEROES_S1_EP3',
		name: 'Flappy\'s Not Happy/An Electric Evening',
		url: higgletown_heroes_s1_ep3,
		to: '/movies/higglytown-heroes-s1-ep3'
	},
	{
		id: 'KID_CHEF_PART2',
		name: 'Kid chef part 02',
		url: kid_chef_part2,
		to: '/movies/kid-chef-part2'
	},
	{
		id: 'OUR_PLANET_COASTAL_SEA',
		name: 'Our Planet | Coastal Seas',
		url: our_planet_coastal_sea,
		to: '/movies/our-planet-coastal-sea'
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