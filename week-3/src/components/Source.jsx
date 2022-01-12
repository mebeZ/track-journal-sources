import styles from 'styled-components'

const Source = ({num, name, email, deleteSource}) => {
    return(
        <SourceDiv key="{num}">
            <span>{num}</span>
            <span>{name}</span>
            <span>{email}</span>
            <DeleteButton onClick={() => deleteSource(num)}>Delete</DeleteButton>
        </SourceDiv>
    );
};

const SourceDiv = styles.div`
    display: flex;
    justify-content: space-between;
    width: 100%
    height: 86px;
    border: 1px solid #B6B6B6;
    padding: 20px;
    padding-left: 50px;
    align-items: center;
`

const DeleteButton = styles.button`
    background: #FF7676;
    color: black;
    padding: 15px 30px;
`

export default Source;