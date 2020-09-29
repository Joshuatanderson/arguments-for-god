import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import {
	arrowForwardOutline,
	arrowForwardSharp,
	arrowUpOutline,
	arrowUpSharp,
	brushOutline,
	brushSharp,
	bulbOutline,
	bulbSharp,
	heartHalfOutline,
	heartHalfSharp,
} from "ionicons/icons";
import "./Menu.scss";

import {
	kalamSyllogism,
	contingentSyllogism,
	moralSyllogism,
	ontologicalSyllogism,
	teleologicalSyllogism,
} from "./argumentContent/index";

interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	code: string;
	title: string;
	syllogism: string[];
}

const appPages: AppPage[] = [
	{
		title: "Kalam Cosmological",
		code: "kalamCosmological",
		url: "/page/kalam",
		iosIcon: arrowForwardOutline,
		mdIcon: arrowForwardSharp,
		syllogism: kalamSyllogism,
	},
	{
		title: "Moral",
		code: "moral",
		url: "/page/moral",
		iosIcon: heartHalfOutline,
		mdIcon: heartHalfSharp,
		syllogism: moralSyllogism,
	},
	{
		title: "Contingent Cosmological",
		code: "contingentCosmological",
		url: "/page/contingent",
		iosIcon: arrowUpOutline,
		mdIcon: arrowUpSharp,
		syllogism: contingentSyllogism,
	},
	{
		title: "Teleological",
		code: "teleological",
		url: "/page/teleological",
		iosIcon: brushOutline,
		mdIcon: brushSharp,
		syllogism: teleologicalSyllogism,
	},
	{
		title: "Ontological",
		code: "ontological",
		url: "/page/ontological",
		iosIcon: bulbOutline,
		mdIcon: bulbSharp,
		syllogism: ontologicalSyllogism,
	},
];

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="arguments-list">
					<IonListHeader>Arguments for God</IonListHeader>
					<IonNote>What do you think?</IonNote>
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									className={
										location.pathname === appPage.url ? "selected" : ""
									}
									routerLink={appPage.url}
									routerDirection="none"
									lines="none"
									detail={false}
								>
									<IonIcon
										slot="start"
										ios={appPage.iosIcon}
										md={appPage.mdIcon}
									/>
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
