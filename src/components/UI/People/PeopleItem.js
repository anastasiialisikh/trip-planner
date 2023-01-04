import classes from './PeopleItem.module.css'

const PeopleItem = (props) => {
	const firstLetter = props.person.name.charAt(0).toUpperCase()

	return (
		<li className={classes.item}>
			<div className={classes.circle}>
				{firstLetter}
			</div>
		</li>
	)
}

export default PeopleItem