import classes from './Layout.module.css'

const Layout = (props) => {
	return (
		<main className={classes.main}>
			<div className={classes.container}>{props.children}</div>
		</main>
	)
}

export default Layout