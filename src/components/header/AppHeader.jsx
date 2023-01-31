import React from 'react';
import classes from "./AppHeader.module.scss";



const AppHeader = () => {
	return (
		<header className={classes.header}>
			<div className={classes.header__container}>
				<div className={classes.header__logo}>
					Logo
				</div>
				<nav className={classes.menu}>
					<ul className={classes.menu__list}>
						<li className={classes.menu__item}><a href="#">Пункт №1</a></li>
						<li className={classes.menu__item}><a href="#">Пункт №2</a></li>
						<li className={classes.menu__item}><a href="#">Пункт №3</a></li>
						<li className={classes.menu__item}><a href="#">Пункт №4</a></li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default AppHeader;