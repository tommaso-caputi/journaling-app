import { useEffect, useState } from "react";
import './Slider.css';
import { addFeelingToNewEntry, moodIcons } from "../../data/data";
import { IonIcon } from "@ionic/react";

const Slider: React.FC = () => {
    const [value, setValue] = useState(50);
    const [feeling, setFeeling] = useState('Neutral');
    const [lastFeeling, setLastFeeling] = useState('');
    const [icon, setIcon] = useState('😐');
    const [iconSize, setIconSize] = useState(200);

    useEffect(() => {
        addFeelingToNewEntry(feeling);
    }, [])

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const sliderValue = parseInt(event.target.value, 10);
        setValue(sliderValue);
        let currentFeeling = '';
        let currentIcon = '';
        if (sliderValue <= 30) {
            currentFeeling = "Unhappy";
            currentIcon = "😞";
        } else if (sliderValue > 30 && sliderValue <= 70) {
            currentFeeling = "Neutral";
            currentIcon = "😐";
        } else {
            currentFeeling = "Happy";
            currentIcon = "😊";
        }
        if (currentFeeling !== lastFeeling) {
            setLastFeeling(currentFeeling);
            addFeelingToNewEntry(currentFeeling);
        }
        setFeeling(currentFeeling);
        setIcon(currentIcon);
    }

    return (
        <>
            <div>
                <div style={{ fontSize: `${iconSize}px` }}>{icon}</div>
                <p className="feeling">{feeling}</p>
            </div>
            <input
                type="range"
                min="1"
                max="100"
                value={value}
                onChange={onValueChange}
            />
        </>
    );
};

export default Slider;
