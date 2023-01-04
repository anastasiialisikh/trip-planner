import { FaPlus } from 'react-icons/fa'
import classes from './AddButton.module.css'

const AddButton = () => {
	return (
		<button type='button' className={classes.button}><FaPlus /></button>
	)
}

export default AddButton