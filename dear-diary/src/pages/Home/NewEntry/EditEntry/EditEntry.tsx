import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonIcon, IonPage, IonToast } from '@ionic/react';
import Header from '../../../../components/Header';
import { useState } from 'react';
import { Entry, getActualEntry, setActualEntry, updateEntry } from '../../../../data/data';
import { pencil } from 'ionicons/icons';
import './EditEntry.css';

const EditEntry: React.FC = () => {
    const initialEntry = getActualEntry();
    const [isOpen, setIsOpen] = useState(false);
    const [entry, setEntry] = useState<Entry>(initialEntry);
    const [editMode, setEditMode] = useState(false);
    const [editedEntry, setEditedEntry] = useState<Entry>(initialEntry);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleSave = () => {
        setEntry(editedEntry);
        updateEntry(editedEntry);
        toggleEditMode();
        setIsOpen(true);
    };

    const handleEdit = (field: keyof Entry, value: string) => {
        setEditedEntry(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    return (
        <IonPage>
            <Header url="/mainhome" />
            <IonContent class="ion-padding">
                <div className='container-edit'>
                    <div>
                        <div className='container-chips'>
                            <div className='chip' key={0}>{entry.feeling}</div>
                            {entry.topics.map((t, index) => (
                                <div className='chip' key={index}>{t}</div>
                            ))}
                        </div>
                        {editMode ? (
                            <div>
                                <input
                                    className='input-edit'
                                    type="text"
                                    value={editedEntry.title}
                                    onChange={(e) => handleEdit('title', e.target.value)}
                                />
                                <textarea
                                    className='textarea-edit'
                                    rows={15}
                                    value={editedEntry.content}
                                    onChange={(e) => handleEdit('content', e.target.value)}
                                ></textarea>
                            </div>
                        ) : (
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>{entry.title}</IonCardTitle>
                                    <IonCardSubtitle>{entry.date}</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent className='text-card-content'>{entry.content}</IonCardContent>
                            </IonCard>
                        )}
                    </div>

                    {editMode && (
                        <div className='container-buttons-edit'>
                            <IonButton className='margin-bottom-edit' onClick={handleSave}>
                                Save
                            </IonButton>
                        </div>
                    )}
                </div>
            </IonContent>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton onClick={toggleEditMode}>
                    <IonIcon icon={pencil}></IonIcon>
                </IonFabButton>
            </IonFab>
            <IonToast
                isOpen={isOpen}
                message="Entry saved successfully"
                onDidDismiss={() => setIsOpen(false)}
                duration={5000}
            ></IonToast>
        </IonPage>
    );
};

export default EditEntry;
