import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonGrid,
	IonHeader,
	IonText,
	IonCol,
	IonRow,
	IonList,
	IonItem,
} from "@ionic/react";
import React, { useState, useContext, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import "./Argument.css";
import firebaseContext from "../contexts/firebase";
import { create } from "domain";

interface ContainerProps {
	name: string;
}

const Argument: React.FC<ContainerProps> = ({ name }: ContainerProps) => {
	const location = useLocation();
	const [data, setData] = useState<firebase.firestore.DocumentData>();
	const db = useContext(firebaseContext);

	useEffect(() => {
		fetchData();
		async function fetchData() {
			await db
				.collection("arguments")
				.get()
				.then((querySnapshot) =>
					querySnapshot.forEach((doc) => {
						const docData = doc.data();
						console.log(docData);

						if (docData.code === name) {
							setData(docData);
						}
					})
				);
		}
	}, [name, db]);

	const createSyllogism = (syllogism: string[]) => {
		console.log(syllogism);
		const points = [];
		for (let i = 0; i < syllogism.length; i++) {
			points.push(
				// <Fragment }>
				<IonItem key={`syllogism-${i}`}>{syllogism[i]}</IonItem>
				// {/* </Fragment> */}
			);
		}

		return points;
	};
	function titleCase(str: string) {
		return str
			.split(" ")
			.map(function (val) {
				return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
			})
			.join(" ");
	}

	return (
		/* <IonCard>
				<IonCardHeader>
					<IonCardTitle>
						<h1>{name}</h1>
					</IonCardTitle>
					<IonCardSubtitle>
						<h2>{data?.subtitle}</h2>
					</IonCardSubtitle>
				</IonCardHeader>
				<IonCardContent>
					{data && createSyllogism(data.syllogism)}
				</IonCardContent>
			</IonCard> */
		<IonGrid>
			<IonRow>
				<IonCol>
					<IonText>
						<h1>{titleCase(name)}</h1>
					</IonText>
					<IonText>
						<h5>{data?.subtitle}</h5>
					</IonText>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<IonList>{data && createSyllogism(data.syllogism)}</IonList>
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};

export default Argument;
