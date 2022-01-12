import styles from 'styled-components'
import React, { useState } from 'react'

const CreateSource = ({captureData}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const resetForm = (e) => {
        e.preventDefault(); // prevent form from reloading
        setName('');
        setEmail('');
    }
    return(
        <div>
            <form class="source-input" onSubmit={(e) => resetForm(e)}>
                <span>
                <label for="source-name">Source Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </span>
                <span>
                <label for="source-email">Source Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </span>
                <button onClick={() => captureData(name, email)}>
                Submit
                </button>
            </form>
            
        </div>
    );
};

export default CreateSource;

