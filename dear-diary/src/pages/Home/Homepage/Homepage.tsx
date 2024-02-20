import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Homepage.css';
import Footer from '../../../components/Footer/Footer';
import Card from '../../../components/Card/Card';
import { useState } from 'react';
import { Entry } from '../../../data/data';

const Homepage: React.FC = () => {

  const [entries, setEntries] = useState<Entry[]>([
    { title: 'Trip to Skagen', content: 'Today was awesome! Went to Skagen with Petra and John. Skagen is so calm and relaxing city, first we saw the city and then we went to the beach...', date: '10 May', topics: ['Happy', 'Sunny', 'Trip', 'Skagen', 'Friends'] }
  ]);

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">
        <div className='container-home'>
          <div className='container-home2'>
            <div>
              <div className='bold2'>Hi {localStorage.getItem('name')}</div>
              <div className='color2'>today can be a good day<div className='divider-horizontal' />
              </div>
            </div>
            <div className='image' />
          </div>
          <div>
            <div className='bold3'>Recent entries</div>
            <div>
              {entries.map((entry, index) => (
                <Card entry={entry} />
              ))}
            </div>
          </div>
        </div>
      </IonContent>


      <Footer goto='profile' />

    </IonPage>
  );
};

export default Homepage;
