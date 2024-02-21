import { IonButton, IonContent, IonPage } from '@ionic/react';
import Header from '../../../../components/Header';
import './NewEntryMood.css';
import Slider from '../../../../components/Slider/Slider';
import { useHistory } from 'react-router';

const NewEntryMood: React.FC = () => {
    const history = useHistory();

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
                        <IonButton className='margin-bottom' onClick={() => { history.push('/mainhome/newentrytopic') }}>
                            Continue
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default NewEntryMood;
