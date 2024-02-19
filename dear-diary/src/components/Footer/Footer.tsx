import { IonButton, IonFab, IonFabButton, IonFooter, IonIcon, IonNavLink } from '@ionic/react';
import { add, home, personOutline } from 'ionicons/icons';
import './Footer.css';
import { useHistory } from 'react-router';
import NewEntry from '../../pages/Home/NewEntry/NewEntry';

interface FooterProps {
    goto: string;
}

const Footer: React.FC<FooterProps> = ({ goto }) => {
    const history = useHistory();

    const goTo = () => {
        if (goto == 'homepage') {
            history.go(-1)
        } else {
            history.push('/mainhome/profile')
        }
    }

    return (
        <>
            <IonNavLink routerDirection="forward" component={() => <NewEntry />}>
                <IonFab slot="fixed" vertical="bottom" horizontal="center">
                    <IonFabButton>
                        <IonIcon icon={add} className='icon-color-selected'></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonNavLink>
            <IonFooter>
                <div className='footer'>
                    {
                        goto === 'profile' ?
                            <>
                                <IonButton className='footer-button'>
                                    <IonIcon slot="icon-only" icon={home} className='icon-color-selected'></IonIcon>
                                </IonButton>
                                <IonButton className='footer-button' onClick={goTo}>
                                    <IonIcon slot="icon-only" icon={personOutline} className='icon-color-not-selected'></IonIcon>
                                </IonButton>
                            </>
                            :
                            <>
                                <IonButton className='footer-button' onClick={goTo}>
                                    <IonIcon slot="icon-only" icon={home} className='icon-color-not-selected'></IonIcon>
                                </IonButton>
                                <IonButton className='footer-button'>
                                    <IonIcon slot="icon-only" icon={personOutline} className='icon-color-selected'></IonIcon>
                                </IonButton>
                            </>
                    }
                </div>
            </IonFooter>
        </>
    );
};

export default Footer;
