import AddButton from "../components/UI/AddButton/AddButton"
import Logo from "../components/UI/Logo/Logo"
import TripsList from "../components/trips/TripsList"


const Feed = () => {
	return (
		<>
			<Logo></Logo>
			<div className='centered'>
				<AddButton />
			</div>
			<TripsList></TripsList>
		</>
	)
}

export default Feed