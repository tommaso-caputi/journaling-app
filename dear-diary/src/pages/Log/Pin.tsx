import { IonButton, IonContent, IonPage } from '@ionic/react';
import Header from '../../components/Header';


const Pin: React.FC = () => {
    return (
        <IonPage>
            <Header url='/mainlog' />
            <IonContent class="ion-padding">
                <IonButton>Continue (pin)</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Pin;
