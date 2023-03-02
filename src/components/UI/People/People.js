import PeopleItem from './PeopleItem'

import classes from './People.module.css'

const dump_people = [
	{ name: 'Join', id: 'p1' },
	{ name: 'Participiants', id: 'p2' },
	{ name: 'Luk', id: 'p3' },
	{ name: 'Andrian', id: 'p4' },
	{ name: 'Lea', id: 'p5' },
]


const People = () => {

	return (
		<ul className={classes.party}>
			{dump_people.map((person) =>
				<PeopleItem person={person} key={person.id}></PeopleItem>
			)}
		</ul>
	)
}

export default People