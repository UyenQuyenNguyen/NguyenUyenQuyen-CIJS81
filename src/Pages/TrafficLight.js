import { useState } from "react";
import MyCirle from "../Component/circle";
import './TrafficLight.css'
const TrafficLight = () => {
    const lightColor = ['red', '#333333', '#333333'];
    const [light, setLight] = useState(lightColor);
    const [count, setCount] = useState(0);
    const [mytime, setTime] = useState(5);
    setTimeout(() => {
        if (mytime > 0) {
            setTime(mytime - 1);
        } else {
            setTime(5);
        }
    }, 990, mytime);
    setTimeout(() => {
        if (count === 0) {
            setLight(['#333333', 'yellow', '#333333']);
            setCount(count + 1);
        } else if (count === 1) {
            setLight(['#333333', '#333333', 'green']);
            setCount(count + 1);
        } else {
            setLight(['red', '#333333', '#333333']);
            setCount(0);
        }
    }, 6000);
    return (
        <div className="main-2">
            <div className="content-2">
                {light.map(item => {
                    return (
                        <MyCirle color={item}></MyCirle>
                    )
                })}
            </div>
            <div className="myCount"><h1>{mytime}</h1></div>
        </div>

    )
}

export default TrafficLight;