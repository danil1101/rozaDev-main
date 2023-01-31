import React from 'react';
import classes from "./AppFooter.module.scss";

const AppFooter = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.footer__container}>
				<div className={classes.footer__logo}>
					Logo
				</div>
				<div className={classes.footer__more}>
					<div className={classes.footer__link}>Lorem, ipsum dolor</div>
					<div className={classes.footer__link}>Lorem, ipsum dolor</div>
					<div className={classes.footer__link}>Lorem, ipsum dolor</div>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;