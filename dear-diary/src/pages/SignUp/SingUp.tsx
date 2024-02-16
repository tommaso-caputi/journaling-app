import { IonButton, IonContent, IonInput, IonItem, IonNavLink, IonPage, IonText } from '@ionic/react';
import Header from '../../components/Header';
import Pin from '../Pin';
import './SingUp.css'

const SignUp: React.FC = () => {
    return (
        <IonPage>
            <Header url='/mainlog' />
            <IonContent scroll-y={false}>
                <div className='container'>
                    <div className='margin-top'>
                        <IonText className='text'>Name</IonText>
                        <IonItem lines="none">
                            <IonInput></IonInput>
                        </IonItem>
                        <div className='divider-horizontal'></div>
                        <IonText className='text'>Email</IonText>
                        <IonItem lines="none">
                            <IonInput></IonInput>
                        </IonItem>
                        <div className='divider-horizontal'></div>
                    </div>
                    <div>
                        <IonNavLink routerDirection="forward" component={() => <Pin />}>
                            <IonButton className='margin-bottom'>
                                Continue
                            </IonButton>
                        </IonNavLink>
                    </div>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default SignUp;
