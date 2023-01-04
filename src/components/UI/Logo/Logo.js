import classes from './Logo.module.css'
import img from '../../../assets/logo-5.png'

const Logo = () => {
	return (
		<img src={img} alt='logo' className={classes.logo}></img>
	)
}

export default Logo