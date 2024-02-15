import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Pin: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/mainlog"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Pin</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <IonButton href="/mainhome">continue</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Pin;
