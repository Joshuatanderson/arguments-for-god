import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/Argument';
import './Page.css';

const Page: React.FC = () => {

  const { code } = useParams<{ code: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{code}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{code}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={code} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
