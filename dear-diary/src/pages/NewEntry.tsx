import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const NewEntry: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/mainhome"></IonBackButton>
                    </IonButtons>
                    <IonTitle>NewEntry</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
            </IonContent>
        </IonPage>
    );
};

export default NewEntry;
