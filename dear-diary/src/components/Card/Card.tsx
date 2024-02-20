import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip } from '@ionic/react';
import './Card.css';
import { Entry } from '../../data/data';

interface CardProps {
    entry: Entry
}

const Card: React.FC<CardProps> = ({ entry }) => {
    return (
        <>
            <div className='container-chips'>
                {entry.topics.map((t, index) => (
                    <div className='chip'>{t}</div>
                ))}
            </div>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{entry.title}</IonCardTitle>
                    <IonCardSubtitle>{entry.date}</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent className='text-card-content'>{entry.content}</IonCardContent>
            </IonCard>
        </>
    );
};

export default Card;
