import { IonButton, IonContent, IonPage } from '@ionic/react';
import Header from '../../components/Header';
import { useHistory } from 'react-router';
import { useState } from 'react';


const Pin: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage>
            <Header url='/mainlog' />
            <IonContent scroll-y={false}>
                <div className='container'>
                    <div className='margin-top'>
                        pin
                    </div>
                    <div>
                        <IonButton className='margin-bottom'>
                            Continue
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Pin;
