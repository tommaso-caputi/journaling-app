import { IonButton } from '@ionic/react';
import './Button.css'

interface ContainerProps {
  text: string;
}

const Button: React.FC<ContainerProps> = ({ text }) => {
  return (
    <IonButton className="button1">
      {text}
    </IonButton>
  );
};

export default Button;
