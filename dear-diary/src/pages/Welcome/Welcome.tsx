import { IonButton, IonNavLink, IonPage, IonText } from '@ionic/react';
import './Welcome.css';
import Pin from '../Pin';
import SignUp from '../SignUp/SingUp';

const Welcome: React.FC = () => {
  return (
    <IonPage className='background'>
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
          <IonNavLink routerDirection="forward" component={() => <SignUp />}>
            <IonButton className='margin'>
              Get started
            </IonButton>
          </IonNavLink>
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
