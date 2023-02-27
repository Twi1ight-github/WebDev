import Display from "./Display";
import Btn from "./Btn";
import './Box.css';
import React, { useState } from "react";



function Box(props) {
    const [count, setCount] = useState(0)

    const handleCountChange = (newCount) => {
            setCount(newCount)
    }



    const { group, title, imgURL, des } = props;



    return (
        <div class="Box">
            <div class="des_img">
                <div class="description">
                    <h2>{group}</h2>
                    <h4>{title}</h4>
                    <p>{des}</p>
                </div>
                <div>
                    <img src={imgURL} alt=""></img>
                </div>
            </div>
            <div class="btn">
                <Btn vote="Click to Vote" act="vote" onChange={handleCountChange} count={count}/>
                <Display ct={count} />
                <Btn vote="Click to Unvote" act="unvote" onChange={handleCountChange} count={count} />
            </div>

        </div>
    );
}

export default Box;