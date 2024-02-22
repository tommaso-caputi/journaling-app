import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip } from '@ionic/react';
import './Card.css';
import { Entry, setActualEntry } from '../../data/data';
import { useHistory } from 'react-router';

interface CardProps {
    entry: Entry
}

const Card: React.FC<CardProps> = ({ entry }) => {
    const history = useHistory();

    const truncateContent = (content: string): string => {
        const maxLetters = 50;
        if (content.length > maxLetters) {
            return content.substring(0, maxLetters) + '...';
        } else {
            return content;
        }
    };

    return (
        <>
            <div className='container-chips'>
                <div className='chip' key={0}>{entry.feeling}</div>
                {entry.topics.map((t, index) => (
                    <div className='chip' key={index}>{t}</div>
                ))}
            </div>
            <IonCard onClick={() => {
                setActualEntry(entry)
                history.push('/mainhome/editentry')
            }}>
                <IonCardHeader>
                    <IonCardTitle>{entry.title}</IonCardTitle>
                    <IonCardSubtitle>{entry.date}</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent className='text-card-content'>{truncateContent(entry.content)}</IonCardContent>
            </IonCard>
        </>
    );
};

export default Card;
