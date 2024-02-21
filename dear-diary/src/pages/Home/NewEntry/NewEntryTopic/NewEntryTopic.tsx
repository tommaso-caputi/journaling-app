import { IonButton, IonContent, IonPage } from '@ionic/react';
import Header from '../../../../components/Header';
import TopicCards from '../../../../components/TopicCards/TopicCards';
import { useHistory } from 'react-router';

const NewEntryTopic: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage>
            <Header url='/mainhome' />
            <IonContent class="ion-padding">
                <div className='container'>
                    <div className='bold-new-entry-mood'>
                        What made you<br />
                        happy today?
                    </div>
                    <div>
                        <TopicCards />
                    </div>
                    <div>
                        <IonButton className='margin-bottom' onClick={() => { history.push('/mainhome/newentry') }}>
                            Continue
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default NewEntryTopic;
