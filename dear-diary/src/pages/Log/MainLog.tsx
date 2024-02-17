import { IonNav } from '@ionic/react';
import Welcome from './Welcome/Welcome';

const MainLog: React.FC = () => {
    return (
        <IonNav root={() => <Welcome />}></IonNav>
    );
};

export default MainLog;
