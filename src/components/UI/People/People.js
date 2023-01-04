import PeopleItem from './PeopleItem'

import classes from './People.module.css'

const dump_people = [
	{ name: 'Join' },
	{ name: 'Participiants' },
	{ name: 'Luk' },
	{ name: 'Andrian' },
	{ name: 'Lea' },
]


const People = () => {

	return (
		<ul className={classes.party}>
			{dump_people.map((person) =>
				<PeopleItem person={person}></PeopleItem>
			)}
		</ul>
	)
}

export default People