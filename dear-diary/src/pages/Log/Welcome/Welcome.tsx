import { IonAlert, IonButton, IonNavLink, IonPage, IonText } from '@ionic/react';
import './Welcome.css';
import SignUp from '../SignUp/SingUp';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { getLatestVersion, getLogged } from '../../../data/data';
import Login from '../Login/Login';

const Welcome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [urlNewVersion, setUrlNewVersion] = useState('');

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      let v = await getLatestVersion();
      console.log(v);
      if (v) {
        setUrlNewVersion(v['download_url']);
        console.log(v);
        setIsOpen(true);
      }
    };

    fetchData();
    if (getLogged()) {
      history.push('/mainlog/pin');
    }
  }, []);

  const handleInstall = () => {
    if (urlNewVersion) {
      window.open(urlNewVersion, '_blank');
      setIsOpen(false);
    }
  };

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
      <IonAlert
        isOpen={isOpen}
        header="New version of Dear Diary is available"
        buttons={[
          {
            text: 'Wait',
            handler: () => setIsOpen(false)
          },
          {
            text: 'Install',
            handler: handleInstall
          }
        ]}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert>
    </IonPage>
  );
};

export default Welcome;
