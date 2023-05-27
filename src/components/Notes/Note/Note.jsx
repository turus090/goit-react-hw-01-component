const Note = (props) => { 
    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{props.text}</h3>
        </div>
    )
}

export default Note