import { IonButton, IonContent, IonPage } from '@ionic/react';
import Header from '../../components/Header';
import { useHistory } from 'react-router';


const NewPin: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage>
            <Header url='/mainlog' />
            <IonContent scroll-y={false}>
                <div className='container'>
                    <div className='margin-top'>
                        new pin
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

export default NewPin;
