import { IonButton, IonContent, IonInput, IonPage, IonToast } from '@ionic/react';
import Header from '../../../components/Header';
import './NewEntry.css';
import { addDataToNewEntry } from '../../../data/data';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';


const NewEntry: React.FC = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const dateRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLIonInputElement>(null);
    const placeRef = useRef<HTMLIonInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);

    const saveEntry = () => {
        var dateValue = dateRef.current?.value;
        const titleValue = titleRef.current?.value;
        const placeValue = placeRef.current?.value;
        const contentValue = contentRef.current?.value;

        if (!dateValue || !titleValue || !placeValue || !contentValue) {
            setToastMessage('Please fill in all fields.');
            setIsOpen(true);
            return;
        } else {
            let temp = new Date(dateValue);
            const formattedDate = temp.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: '2-digit'
            });
            addDataToNewEntry(titleValue.toString(), formattedDate, contentValue, placeValue.toString())
            history.push('/');
        }
    }


    return (
        <IonPage>
            <Header url='/mainhome' />
            <IonContent class="ion-padding">
                <div className='container-new-entry'>
                    <div className='bold-new-entry-mood'>Add entry</div>

                    <div className='container-data'>
                        <div className='bold-new-entry'>Select a date</div>
                        <input className='date-input' type='date' ref={dateRef} />
                    </div>
                    <div className='container-data'>
                        <div className='bold-new-entry'>Title</div>
                        <IonInput ref={titleRef}></IonInput>
                        <div className='divider-horizontal'></div>
                    </div>
                    <div className='container-data'>
                        <div className='bold-new-entry'>Place</div>
                        <IonInput ref={placeRef}></IonInput>
                        <div className='divider-horizontal'></div>
                    </div>
                    <div className='container-data2'>
                        <div className='bold-new-entry'>Write about your day</div>
                        <textarea rows={6} ref={contentRef}></textarea>
                    </div>
                    <div>
                        <IonButton className='margin-bottom' onClick={saveEntry}>
                            Save entry
                        </IonButton>
                    </div>
                </div>
            </IonContent>
            <IonToast
                isOpen={isOpen}
                message={toastMessage}
                onDidDismiss={() => setIsOpen(false)}
                duration={4000}
            ></IonToast>
        </IonPage>
    );
};

export default NewEntry;
