import { IonButton, IonNavLink, IonPage, IonText } from '@ionic/react';
import './Welcome.css';
import SignUp from '../SignUp/SingUp';
import { useHistory } from 'react-router';
import { useEffect, useRef } from 'react';
import { getLogged } from '../../../data/data';
import Login from '../Login/Login';

const Welcome: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    if (getLogged()) {
      history.push('/mainlog/pin');
    }
  }, [])
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
          <IonNavLink routerDirection="forward" component={() => <Login />}>
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
