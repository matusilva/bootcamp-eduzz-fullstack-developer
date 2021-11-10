const Item = (props) => {
    return (
        <li className="list-group-item list-group-item-dark">
            { props.children }
        </li>
    )
}

export default Item;