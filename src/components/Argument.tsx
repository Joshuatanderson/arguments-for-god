import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonText,
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
	}, [name]);

	const createSyllogism = (syllogism: string[]) => {
		console.log(syllogism);
		const points = [];
		for (let i = 0; i < syllogism.length; i++) {
			points.push(
				<Fragment key={`syllogism-${i}`}>
					<IonText>
						{i + 1}. {syllogism[i]}
					</IonText>{" "}
					<br />
				</Fragment>
			);
		}

		return points;
	};

	return (
		<div className="container">
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>{name}</IonCardTitle>
					<IonCardSubtitle></IonCardSubtitle>
				</IonCardHeader>
				<IonCardContent>
					{data && createSyllogism(data.syllogism)}
				</IonCardContent>
			</IonCard>
		</div>
	);
};

export default Argument;
