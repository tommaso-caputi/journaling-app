import { IonButton, IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Pin from './Pin';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="ion-padding">
        Welcome
        <IonNavLink routerDirection="forward" component={() => <Pin />}>
          <IonButton>go to pin</IonButton>
        </IonNavLink>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
