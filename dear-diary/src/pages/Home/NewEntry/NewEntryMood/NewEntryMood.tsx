import { IonButton, IonContent, IonNavLink, IonPage } from '@ionic/react';
import Header from '../../../../components/Header';
import './NewEntryMood.css';
import Slider from '../../../../components/Slider/Slider';
import NewEntry from '../NewEntry';

const NewEntryMood: React.FC = () => {

    return (
        <IonPage>
            <Header url='/mainhome' />
            <IonContent class="ion-padding">
                <div className='container'>
                    <div className='bold-new-entry-mood'>
                        How are you<br />
                        feeling today?
                    </div>
                    <div></div>
                    <Slider />
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

export default NewEntryMood;
