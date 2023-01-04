import People from '../UI/People/People'

import classes from './TripItem.module.css'
import { GiPlanetConquest, GiCalendar, GiSpaceship } from "react-icons/gi";

const TripItem = () => {
	return (
		<li className={classes.item}>
			<div className={classes.title}>Title</div>
			<div className={classes.info}>
				<div><GiPlanetConquest className={classes.icon} />Where</div>
				<div><GiCalendar className={classes.icon} />When</div>
				<div><GiSpaceship className={classes.icon} />Starship</div>
			</div>
			<People></People>
		</li>
	)
}

export default TripItem