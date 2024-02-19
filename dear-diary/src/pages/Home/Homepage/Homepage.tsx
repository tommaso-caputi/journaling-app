import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Homepage.css';
import Footer from '../../../components/Footer/Footer';

const Homepage: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">
        Name: {localStorage.getItem('name')}<br />
        Email: {localStorage.getItem('email')}
      </IonContent>


      <Footer goto='profile' />

    </IonPage>
  );
};

export default Homepage;
