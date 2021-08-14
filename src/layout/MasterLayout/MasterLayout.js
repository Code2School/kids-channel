import { Link } from 'react-router-dom';
import classes from './MasterLayout.module.css';
import logo from '../../images/minnie_house.png';

const MasterLayout = (props) => {
	const { children } = props;
	return (
		<main>
			<nav className={classes.topNav}>
				<Link to="/" className={classes.logo}>
					<img src={logo} alt="logo" />
					<span>Minnie's House</span>
				</Link>
			</nav>
			<section className={classes.content}>
				{children}
			</section>
		</main>
	)
}

export default MasterLayout;