import React, { useState } from 'react';
import { IonGrid, IonIcon, IonRow } from '@ionic/react';
import './TopicCards.css';
import { bandage, fitness, heart, home, paw, people, sunny } from 'ionicons/icons';
import { addTopicToNewEntry } from '../../data/data';

const TopicCards: React.FC = () => {
    const [pressedTopics, setPressedTopics] = useState<string[]>([]);

    const handleTopicCardClick = (topic: string) => {
        if (pressedTopics.includes(topic)) {
            setPressedTopics(pressedTopics.filter(item => item !== topic));
        } else {
            setPressedTopics([...pressedTopics, topic]);
        }
        addTopicToNewEntry(topic)
    };

    const isPressed = (topic: string) => pressedTopics.includes(topic);

    return (
        <>
            <IonGrid>
                <IonRow>
                    <div className={`topic-card ${isPressed('Friends') ? 'topic-card-pressed' : ''}`} onClick={() => handleTopicCardClick('Friends')}>
                        <IonIcon size='large' icon={people} className='topic-icon'></IonIcon>
                        <div className='topic-text'>Friends</div>
                    </div>
                    <div className={`topic-card ${isPressed('Love') ? 'topic-card-pressed' : ''}`} onClick={() => handleTopicCardClick('Love')}>
                        <IonIcon size='large' icon={heart} className='topic-icon'></IonIcon>
                        <div className='topic-text'>Love</div>
                    </div>
                    <div className={`topic-card ${isPressed('Home') ? 'topic-card-pressed' : ''}`} onClick={() => handleTopicCardClick('Home')}>
                        <IonIcon size='large' icon={home} className='topic-icon'></IonIcon>
                        <div className='topic-text'>Home</div>
                    </div>
                </IonRow>
                <IonRow>
                    <div className={`topic-card ${isPressed('Pet') ? 'topic-card-pressed' : ''}`} onClick={() => handleTopicCardClick('Pet')}>
                        <IonIcon size='large' icon={paw} className='topic-icon'></IonIcon>
                        <div className='topic-text'>Pet</div>
                    </div>
                    <div className={`topic-card ${isPressed('Life') ? 'topic-card-pressed' : ''}`} onClick={() => handleTopicCardClick('Life')}>
                        <IonIcon size='large' icon={sunny} className='topic-icon'></IonIcon>
                        <div className='topic-text'>Life</div>
                    </div>
                    <div className={`topic-card ${isPressed('Health') ? 'topic-card-pressed' : ''}`} onClick={() => handleTopicCardClick('Health')}>
                        <IonIcon size='large' icon={bandage} className='topic-icon'></IonIcon>
                        <div className='topic-text'>Health</div>
                    </div>
                </IonRow>
                <IonRow>
                    <div className={`topic-card ${isPressed('Sport') ? 'topic-card-pressed' : ''}`} onClick={() => handleTopicCardClick('Sport')}>
                        <IonIcon size='large' icon={fitness} className='topic-icon'></IonIcon>
                        <div className='topic-text'>Sport</div>
                    </div>
                </IonRow>
            </IonGrid>
        </>
    );
};

export default TopicCards;
