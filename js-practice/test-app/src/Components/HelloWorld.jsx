import React, { useState } from 'react';
import styles from 'styled-components';
import Items from './Items.jsx'

const HelloWorld = () => {

    const [inputVal, setInputVal] = useState("");

    const arr = ['Zach', 'Emerson', 'Jacob'];

    const renderArray = (arr) => {
        arr.forEach((item) => {
            return <li>{item}</li>;
        })
    }

    return(
        <div>
            <Wrapper>
                <p>Enter text here</p>
                <input value={inputVal} onChange={(e) => setInputVal(e.target.value)}></input>
                <button onClick={captureInput}>Submit</button>
            </Wrapper>
            <ul>
                {arr.map((item) => {
                    return <li>{item}</li>;
                })}
            </ul>
        </div>
    );
}

const captureInput = () => {
    console.log("Lisa Murkowski");
}

const Wrapper = styles.div`
    margin: 10px 20px;
    padding: 30px;
    background: lightgreen;
`

export default HelloWorld;