import Menu from "./components/Menu";
import Page from "./pages/Page";
import React, { useContext, useEffect, useState } from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

import FirebaseContext from "./contexts/firebase";
import ThemeContext from "./contexts/ThemeContext";
import { db } from "./contexts/firebaseConfig";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.scss";
import Header from "./components/header/Header";

const App: React.FC = () => {
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		document.body.classList.toggle("dark", isDark)
	}, [isDark]);

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	return (
		<ThemeContext.Provider value={isDark}>
			<FirebaseContext.Provider value={db}>
				<IonApp>
					<Header handleToggleTheme={toggleTheme} isDark={isDark}/>
					<IonReactRouter>
						<IonSplitPane contentId="main">
							<Menu />
							<IonRouterOutlet id="main">
								<Route path="/page/:code" component={Page} exact />
								<Redirect from="/" to="/page/kalam" exact />
							</IonRouterOutlet>
						</IonSplitPane>
					</IonReactRouter>
				</IonApp>
			</FirebaseContext.Provider>
		</ThemeContext.Provider>
	);
};

export default App;
