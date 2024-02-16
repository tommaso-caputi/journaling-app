import { IonButton, IonContent, IonPage } from '@ionic/react';
import Header from '../../../components/Header';


const Login: React.FC = () => {
    return (
        <IonPage>
            <Header url='/mainlog' />
            <IonContent class="ion-padding">
                <IonButton href="/mainhome">continue(Login)</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;
