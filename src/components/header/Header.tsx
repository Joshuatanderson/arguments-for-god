import React from "react";
import {
	IonHeader,
	IonButton,
	IonButtons,
	IonIcon,
	IonMenuButton,
	IonToolbar,
	IonTitle
} from "@ionic/react";
import {moonOutline, moonSharp, sunnyOutline, sunnySharp} from "ionicons/icons";

interface HeaderProps {
	handleToggleTheme: () => void;
	isDark: boolean;
}

const Header = ({handleToggleTheme, isDark}: HeaderProps) => {
	return (
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
					<IonButton onClick={handleToggleTheme}>
						<IonIcon ios={isDark? sunnyOutline : moonOutline} md={isDark ? sunnySharp : moonSharp} />
					</IonButton>
				</IonButtons>
				<IonTitle>Arguments for God</IonTitle>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
