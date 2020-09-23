import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import './Argument.css';

interface ContainerProps {
  name: string;
}

const Argument: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
		<IonCard>
			<IonCardHeader>
				<IonCardTitle>
					{name}
				</IonCardTitle>
				<IonCardSubtitle>
					
				</IonCardSubtitle>
			</IonCardHeader>
		</IonCard>
    </div>
  );
};

export default Argument;
