import React, { useState } from 'react';
import { IonButton, IonContent, IonInput, IonItem, IonPage, IonText, IonToast } from '@ionic/react';
import Header from '../../../components/Header';
import { useHistory } from 'react-router-dom';
import { setUserData } from '../../../data/data';

const Login: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleContinueClick = async () => {
        if (email.trim() === '' || !validateEmail(email)) {
            setToastMessage("Please enter a valid email address");
            setIsOpen(true);
            return;
        }
        try {
            const response = await fetch('https://tommasocaputi.altervista.org/DearDiary/webhook.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ command: 'login', email: email, password: password })
            });
            if (!response.ok) {
                throw new Error();
            } else {
                const responseData = await response.json();
                setToastMessage(responseData.message);
                setIsOpen(true);
                if (responseData.status) {
                    setUserData({ email: email, name: responseData.name, password: password })
                    history.push('/mainhome');
                }
            }
        } catch (error) {
            setToastMessage("An error occurred");
            setIsOpen(true);
        }
    };

    return (
        <IonPage>
            <Header url='/mainlog' />
            <IonContent scroll-y={false}>
                <div className='container'>
                    <div className='margin-top'>
                        <IonText className='text'>Email</IonText>
                        <IonItem lines="none">
                            <IonInput type='email' value={email} onIonInput={(e) => setEmail(e.detail.value!)}></IonInput>
                        </IonItem>
                        <div className='divider-horizontal'></div>
                        <IonText className='text'>Password</IonText>
                        <IonItem lines="none">
                            <IonInput type='password' value={password} onIonInput={(e) => setPassword(e.detail.value!)}></IonInput>
                        </IonItem>
                        <div className='divider-horizontal'></div>
                    </div>
                    <div></div>
                    <div>
                        <IonButton className='margin-bottom' onClick={handleContinueClick}>
                            Continue
                        </IonButton>
                    </div>
                </div>
                <IonToast
                    isOpen={isOpen}
                    message={toastMessage}
                    onDidDismiss={() => setIsOpen(false)}
                    duration={5000}
                ></IonToast>
            </IonContent>
        </IonPage >
    );
};

export default Login;
