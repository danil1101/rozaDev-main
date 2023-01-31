import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from "../components/header/AppHeader";
import AppFooter from "../components/footer/AppFooter";
import AppContent from "../components/content/AppContent";

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, classNames } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id} data-vkui-swipe-back={false}>
		<div className="wrapper">
			<AppHeader />
			<AppContent />
			<main></main>
			<AppFooter />
		</div>
	</Panel>
);
Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
