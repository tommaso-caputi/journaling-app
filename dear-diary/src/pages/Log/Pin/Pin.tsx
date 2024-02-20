import { IonButton, IonContent, IonIcon, IonPage, IonText, IonToast } from '@ionic/react';
import Header from '../../../components/Header';
import { useHistory } from 'react-router';
import './Pin.css';
import { useState } from 'react';
import { getPin } from '../../../data/data';
import { backspaceOutline, closeOutline } from 'ionicons/icons';


const Pin: React.FC = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [pin, setPin] = useState(['', '', '', '']);

    const handleContinue = () => {
        if (pin.every(digit => !isNaN(parseInt(digit)))) {
            if (pin.join('') === getPin()) {
                setToastMessage('Correct pin');
                setIsOpen(true);
                history.push('/mainhome');
            } else {
                setToastMessage('Incorrect pin');
                setIsOpen(true);
            }
        } else {
            setToastMessage('Pin is not fully filled with numbers.');
            setIsOpen(true);
        }
    };

    const handlePinInput = (index: number, value: string) => {
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);
    };

    const handlePinDelete = () => {
        var newPin = [...pin];
        const lastFilledIndex = newPin.indexOf('');
        if (lastFilledIndex === -1) {
            newPin[3] = '';
        } else {
            newPin[lastFilledIndex - 1] = '';
        }
        setPin(newPin);
    };
    const handlePinFullDelete = () => {
        setPin(['', '', '', '']);
    };

    const handleForgot = () => {
        setToastMessage('Check email');
        setIsOpen(true);
    }

    return (
        <IonPage>
            <Header url='/mainlog' />
            <IonContent scroll-y={false}>
                <div className='container-pin'>
                    <div className='container-top'>
                        <IonText className='text1'>Enter Pin</IonText>
                        <div className='circles-container'>
                            {pin.map((digit, index) => (
                                <div key={index} className={digit ? 'circle-full' : 'circle-empty'}></div>
                            ))}
                        </div>
                    </div>
                    <div className='pinpad-container'>
                        <div className='pinpad-grid'>
                            {[...Array(9)].map((_, index) => (
                                <div className="input-number" key={index} onClick={() => handlePinInput(pin.findIndex(digit => digit === ''), String(index + 1))}>
                                    {index + 1}
                                </div>
                            ))}
                            <div className='icon-size'>
                                <IonIcon icon={closeOutline} size="large" className="icon-pad" onClick={handlePinFullDelete}></IonIcon>
                            </div>
                            <div className="input-number" onClick={() => handlePinInput(pin.findIndex(digit => digit === ''), '0')}>0</div>
                            <div className='icon-size'>
                                <IonIcon icon={backspaceOutline} size="large" className="icon-pad" onClick={handlePinDelete}></IonIcon>
                            </div>
                        </div>
                        <div className='pin-text' onClick={handleForgot}>
                            Forgot? Tap here!
                        </div>
                    </div>
                    <IonButton className='margin-bottom' onClick={handleContinue}>
                        Continue
                    </IonButton>
                </div>
            </IonContent>
            <IonToast
                isOpen={isOpen}
                message={toastMessage}
                onDidDismiss={() => setIsOpen(false)}
                duration={1500}
            ></IonToast>
        </IonPage >
    );
};

export default Pin;
