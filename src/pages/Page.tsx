import {
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton
} from "@ionic/react";
import { sunnyOutline, sunnySharp } from "ionicons/icons";
import React from "react";
import { useParams } from "react-router";
import Argument from "../components/argument/Argument";


const Page = () => {
	const { code } = useParams<{ code: string }>();

	return (
		<IonPage>
			

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{code}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<Argument name={code} />
			</IonContent>
		</IonPage>
	);
};

export default Page;
