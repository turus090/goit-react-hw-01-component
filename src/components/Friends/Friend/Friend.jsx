import s from "./friend.module.css"
const Friend = ({isOnline, avatar, name}) => {
    const onlineStyle = isOnline ? s.green : s.red
    return (
        <li className={s.item}>
            <span className={`${s.status} ${onlineStyle}`}></span>
            <img className={s.avatar} 
                src={avatar} 
                alt="User avatar"  
            />
            <p className={s.name}>{name}</p>
        </li>
    )
}

export default Friend