import TripItem from "./TripItem"

import classes from './TripsList.module.css'

const TripsList = () => {
	return (
		<ul className={classes.list}>
			<TripItem></TripItem>
			<TripItem></TripItem>
			<TripItem></TripItem>
		</ul>
	)
}

export default TripsList