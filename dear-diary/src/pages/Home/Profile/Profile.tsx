import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header';

const Profile: React.FC = () => {
    return (
        <IonPage>
            <Header url='/mainhome' />

            <IonContent class="ion-padding">
            </IonContent>

            <Footer goto='homepage' />
        </IonPage>
    );
};

export default Profile;
