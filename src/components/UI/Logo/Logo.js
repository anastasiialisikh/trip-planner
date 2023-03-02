import classes from './Logo.module.css'
import img from '../../../assets/logo-5.png'

const Logo = (props) => {
	const isSmall = props.size === 'small'

	const styleClasses = `${classes.logo} ${isSmall ? classes.small : ''}`

	return (
		<img src={img} alt='logo' className={styleClasses}></img>
	)
}

export default Logo