import { IonButton, IonContent, IonHeader, IonNavLink, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Pin from './Pin';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <div className='container'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className='container2'>
          <div className='margin2'>
            <h1 className='bold'>DearDiary</h1>
            <h3>Save moments of your life</h3>
          </div>
          <IonButton className='margin'>
            Get started
          </IonButton>
          <IonNavLink routerDirection="forward" component={() => <Pin />}>
            <IonText>
              Already user? <IonText className='bold'>Log in</IonText>
            </IonText>
          </IonNavLink>
        </div>
      </div>

    </IonPage>
  );
};

export default Welcome;
