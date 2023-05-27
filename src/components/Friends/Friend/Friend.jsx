import s from "./friend.module.css"
const Friend = (props) => {
    const onlineStyle = props.isOnline ? s.green : s.red
    return (
        <li className={s.item}>
            <span className={`${s.status} ${onlineStyle}`}></span>
            <img className={s.avatar} 
                src={props.avatar} 
                alt="User avatar"  
            />
            <p className={s.name}>{props.name}</p>
        </li>
    )
}

export default Friend