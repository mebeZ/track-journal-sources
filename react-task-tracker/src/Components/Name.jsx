import styles from 'styled-components'

const Name = ({firstName, lastName}) => {
    return(
        <NameWrapper backgroundColor="green">
            <h3>{displayName(firstName, lastName)}</h3>
        </NameWrapper>
        
    );
};

const NameWrapper = styles.div`
    display: flex;
    justify-content: center;
    margin: 10px 20px;
    padding: 30px;
    max-width: 500px;
    background: ${props => props.backgroundColor};
`;


const displayName = (fName, lName) => {
    return fName + ' ' + lName;
}

export default Name;