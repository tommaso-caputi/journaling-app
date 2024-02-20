import { IonButton, IonContent, IonNavLink, IonPage } from '@ionic/react';
import Header from '../../../../components/Header';
import NewEntry from '../NewEntry';
import TopicCards from '../../../../components/TopicCards/TopicCards';

const NewEntryTopic: React.FC = () => {

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
                        <IonNavLink routerDirection="forward" component={() => <NewEntry />}>
                            <IonButton className='margin-bottom'>
                                Continue
                            </IonButton>
                        </IonNavLink>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default NewEntryTopic;
