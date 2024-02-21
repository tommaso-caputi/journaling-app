import { IonContent, IonGrid, IonIcon, IonPage, IonRow } from '@ionic/react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header';
import './Profile.css';
import { getTop3MoodsWithCounts, getTop3TopicsWithCounts, moodIcons, topicIcons } from '../../../data/data';
import { useState } from 'react';

const Profile: React.FC = () => {
    const [top3Moods, setTop3Moods] = useState(getTop3MoodsWithCounts())
    const [top3Topics, setTop3Topics] = useState(getTop3TopicsWithCounts())

    return (
        <IonPage>
            <Header url='/mainhome' />

            <IonContent class="ion-padding">
                <div className='container-profile'>
                    <div className='image' />
                    <div className='container-profile2'>
                        <div className='bold-profile'>Top moods for last 30 days</div>
                        <IonGrid>
                            <IonRow>
                                {top3Moods.map((m, index) => (
                                    <div key={index} className='profile-cards'>
                                        <IonIcon className='icon-general' icon={moodIcons[m.mood]} />
                                        <div>{m.count}</div>
                                        <div>{m.mood}</div>
                                    </div>
                                ))}
                            </IonRow>
                        </IonGrid>
                    </div>
                    <div className='container-profile2'>
                        <div className='bold-profile'>Top topics for last 30 days</div>
                        <IonGrid>
                            <IonRow>
                                {top3Topics.map((t, index) => (
                                    <div key={index} className='profile-cards'>
                                        <IonIcon className='icon-general' icon={topicIcons[t.topic]} />
                                        <div>{t.count}</div>
                                        <div>{t.topic}</div>
                                    </div>
                                ))}
                            </IonRow>
                        </IonGrid>
                    </div>
                    <div />
                    <div />
                </div>
            </IonContent>

            <Footer goto='homepage' />
        </IonPage >
    );
};

export default Profile;
