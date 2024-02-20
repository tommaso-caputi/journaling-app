import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Homepage.css';
import Footer from '../../../components/Footer/Footer';
import Card from '../../../components/Card/Card';
import { useState } from 'react';
import { Entry } from '../../../data/data';

const Homepage: React.FC = () => {

  const [entries, setEntries] = useState<Entry[]>(JSON.parse(localStorage.getItem('entries') || '[]'));

  const truncateContent = (content: string): string => {
    const maxLetters = 150;
    if (content.length > maxLetters) {
      return content.substring(0, maxLetters) + '...';
    } else {
      return content;
    }
  };
  const firstFiveEntries = entries.slice(0, 5);

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
              {firstFiveEntries.map((entry, index) => (
                <Card key={index} entry={{ ...entry, content: truncateContent(entry.content) }} />
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
