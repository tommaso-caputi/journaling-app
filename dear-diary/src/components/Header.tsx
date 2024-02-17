import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

interface ContainerProps {
  url: string;
}

const Header: React.FC<ContainerProps> = ({ url }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref={url}></IonBackButton>
        </IonButtons>
        <IonTitle>DearDiary</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
