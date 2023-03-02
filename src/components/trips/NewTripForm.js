import { useRef } from 'react'
import AsyncSelect from 'react-select/async';

import { searchPlanet, searchStarship } from '../../lib/api'
import People from '../UI/People/People'
import classes from './NewTripForm.module.css'

const NewTripForm = () => {
	const today = new Date()
	const todayDate = today.toISOString().substring(0, 10)
	const organizerRef = useRef()
	const titleRef = useRef()
	const planetRef = useRef()
	const starshipRef = useRef()
	const startDateRef = useRef()
	const endDateRef = useRef()

	console.log('------- form --------')

	const findPlanet = (inputQuery) => {
		return (inputQuery && inputQuery.length >= 1) && searchPlanet(inputQuery)
	}

	const findStarship = (inputQuery) => {
		return (inputQuery && inputQuery.length >= 1) && searchStarship(inputQuery)
	}

	const dateChangeHandler = (event) => {
		console.log(event)
	}

	const formSubmitHandler = (event) => {
		event.preventDefault()
		const tripData = {
			organizer: organizerRef.current.value,
			title: titleRef.current.value,
			planet: planetRef.current.getValue(),
			starship: starshipRef.current.getValue(),
			startDate: startDateRef.current.value
		}

		console.log(tripData)
		console.log(starshipRef.current)
	}

	return (
		<>
			<h1 className={classes.title}> Plan your trip </h1>
			<form className={classes.form} onSubmit={formSubmitHandler}>
				<section className={classes.control}>
					<label htmlFor='organizer'>Organizer name</label>
					<input type='text' id='organizer' name='organizer' ref={organizerRef} />
				</section>

				<section className={classes.control}>
					<label htmlFor='title'>Trip title</label>
					<input type='text' id='title' name='title' ref={titleRef} />
				</section>

				{/* <section className={classes.control}>
					<label>Trip description</label>
					<textarea maxLength='140' rows='3'></textarea>
				</section> */}

				<section className={classes.control}>
					<label htmlFor='planet'>Pick a planet</label>
					<AsyncSelect
						id='planet'
						name='planet'
						placeholder='Enter planet name ...'
						ref={planetRef}
						loadOptions={findPlanet}
					/>
				</section>

				<section className={classes.control}>
					<label htmlFor='starship'>Pick your starship</label>
					<AsyncSelect
						id='starship'
						name='starship'
						placeholder='Enter starship name ...'
						ref={starshipRef}
						loadOptions={findStarship}
					/>
				</section>

				<section className={classes.control}>
					<label>Chose dates</label>
					<div className={classes.period}>
						<input ref={startDateRef}
							onChange={dateChangeHandler}
							type="date" id="start" name="trip-start"
							defaultValue={todayDate}
							min={todayDate} />

						<input ref={endDateRef}
							type="date" id="end" name="trip-end"
							defaultValue={todayDate}
							min={todayDate} />
					</div>
				</section>

				<section className={classes.control}>
					<label>Add friends</label>
					<People></People>
				</section>

				<section className={classes.actions}>
					<button type='button'>Cancel</button>
					<button type='submit'>Create</button>
				</section>
			</form>
		</>
	)
}

export default NewTripForm