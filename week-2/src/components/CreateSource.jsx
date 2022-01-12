import styles from 'styled-components'
import React from 'react'

const CreateSource = () => {
    return(
        <div>
            <form class="source-input">
                <span>
                <label for="source-name">Source Name:</label>
                <input type="text"></input>
                </span>
                <span>
                <label for="source-email">Source Email:</label>
                <input type="text"></input>
                </span>
                <button>
                Submit
                </button>
            </form>
            
        </div>
    );
};

export default CreateSource;

