import { useState } from "react";
import './Slider.css';

const Slider: React.FC = () => {
    const [value, setValue] = useState(60);

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(event.target.value, 10));
    }

    let iconSize = 200;
    let icon;
    let feeling;
    if (value <= 30) {
        icon = "😞";
        feeling = "Unhappy";
    } else if (value > 30 && value <= 70) {
        icon = "😐";
        feeling = "Neutral";
    } else {
        icon = "😊";
        feeling = "Happy";
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
