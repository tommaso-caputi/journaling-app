import React, { useState } from 'react';
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonList, IonPage, IonText, IonToast } from '@ionic/react';
import Header from '../../../components/Header';
import { useHistory } from 'react-router-dom';
import './SingUp.css';
import { setUserData, sha256 } from '../../../data/data';

const SignUp: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleContinueClick = async () => {
        if (password.trim() === '') {
            setToastMessage("Please enter your password");
            setIsOpen(true);
            return;
        }
        if (name.trim() === '') {
            setToastMessage("Please enter your name");
            setIsOpen(true);
            return;
        }
        if (email.trim() === '' || !validateEmail(email)) {
            setToastMessage("Please enter a valid email address");
            setIsOpen(true);
            return;
        }
        try {
            const hashedPassword = await sha256(password);
            const response = await fetch('https://tommasocaputi.altervista.org/DearDiary/webhook.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ command: 'register', name: name, email: email, password: hashedPassword })
            });
            if (!response.ok) {
                throw new Error();
            } else {
                const responseData = await response.json();
                setToastMessage(responseData.message);
                setIsOpen(true);
                if (responseData.status) {
                    setUserData({ email: email, name: name, password: hashedPassword });
                    history.push('/mainlog/newpin');
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
                        <IonText className='text'>Name</IonText>
                        <IonItem lines="none">
                            <IonInput id="nameInput" value={name} onIonInput={(e) => setName(e.detail.value!)}></IonInput>
                        </IonItem>
                        <div className='divider-horizontal'></div>
                        <IonText className='text'>Email</IonText>
                        <IonItem lines="none">
                            <IonInput id="emailInput" type='email' value={email} onIonInput={(e) => setEmail(e.detail.value!)}></IonInput>
                        </IonItem>
                        <div className='divider-horizontal'></div>
                        <IonText className='text'>Password</IonText>
                        <IonItem lines="none">
                            <IonInput id="passwordInput" type='password' value={password} onIonInput={(e) => setPassword(e.detail.value!)}></IonInput>
                        </IonItem>
                        <div className='divider-horizontal'></div>
                    </div>
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

export default SignUp;
