import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import "./index.css"
import Persik from './panels/Persik';


const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);
	const [history, setHistory] = useState(['home']);
	const activePanel = history[history.length - 1];
	const isFirst = history.length === 1;

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, [isFirst]);

	// const go = e => {
	// 	setActivePanel(e.currentTarget.dataset.to);
	// };
	const goBack = () => setHistory(history.slice(0, -1));
	const go = (panel) => setHistory([...history, panel]);

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot data-vkui-swipe-back={false}>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View history={history} activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} data-vkui-swipe-back={false} />
								<Persik id='persik' go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
