import { IonButton, IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import NewEntry from './NewEntry';

const Homepage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonNavLink routerDirection="forward" component={() => <NewEntry />}>
          <IonButton>+</IonButton>
        </IonNavLink>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
