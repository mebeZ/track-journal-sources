const Items = ({ arr }) => {
    return(
        <ul>
            {mapItems(arr)}
        </ul>
    );
};

const mapItems = (arr) => {
    arr.map(item => {
        return (<li>{item}</li>); })
}

export default Items;