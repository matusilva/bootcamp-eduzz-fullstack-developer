const Item = (props) => {
    return (
        <li class="list-group-item list-group-item-dark">
            { props.texto }
        </li>
    )
}

export default Item;