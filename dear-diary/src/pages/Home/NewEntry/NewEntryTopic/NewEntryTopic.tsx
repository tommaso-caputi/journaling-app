import { IonButton, IonContent, IonNavLink, IonPage } from '@ionic/react';
import Header from '../../../../components/Header';
import NewEntry from '../NewEntry';

const NewEntryTopic: React.FC = () => {

    return (
        <IonPage>
            <Header url='/mainhome' />
            <IonContent class="ion-padding">
                <div className='container'>
                    
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
