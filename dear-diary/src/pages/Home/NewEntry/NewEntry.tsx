import { IonContent, IonPage } from '@ionic/react';
import Header from '../../../components/Header';

const NewEntry: React.FC = () => {
    return (
        <IonPage>
            <Header url='/mainhome' />
            <IonContent class="ion-padding">
            </IonContent>
        </IonPage>
    );
};

export default NewEntry;
