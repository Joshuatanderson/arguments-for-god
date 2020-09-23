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
	archiveOutline,
	archiveSharp,
	arrowForwardOutline,
	arrowForwardSharp,
	arrowUpOutline,
	arrowUpSharp,
	bookmarkOutline,
	brushOutline,
	brushSharp,
	bulbOutline,
	bulbSharp,
	heartHalfOutline,
	heartHalfSharp,
	heartOutline,
	heartSharp,
	mailOutline,
	mailSharp,
	paperPlaneOutline,
	paperPlaneSharp,
	trashOutline,
	trashSharp,
	warningOutline,
	warningSharp,
} from "ionicons/icons";
import "./Menu.css";

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
	title: string;
	syllogism: string[];
}

const appPages: AppPage[] = [
	{
		title: "Kalam Cosmological",
		url: "/page/kalam-cosmological",
		iosIcon: arrowForwardOutline,
		mdIcon: arrowForwardSharp,
		syllogism: kalamSyllogism,
	},
	{
		title: "Moral",
		url: "/page/Moral",
		iosIcon: heartHalfOutline,
		mdIcon: heartHalfSharp,
		syllogism: moralSyllogism,
	},
	{
		title: "Contingent Cosmological",
		url: "/page/contingent-cosmological",
		iosIcon: arrowUpOutline,
		mdIcon: arrowUpSharp,
		syllogism: contingentSyllogism,
	},
	{
		title: "Teleological",
		url: "/page/Teleological",
		iosIcon: brushOutline,
		mdIcon: brushSharp,
		syllogism: teleologicalSyllogism,
	},
	{
		title: "Ontological",
		url: "/page/Ontological",
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
				<IonList id="inbox-list">
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
