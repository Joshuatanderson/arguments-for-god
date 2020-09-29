import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import Argument from '../components/Argument';

const Page: React.FC = () => {

  const { code } = useParams<{ code: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Arguments for God</IonTitle>
        </IonToolbar>
      </IonHeader>

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
