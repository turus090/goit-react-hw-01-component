import propTypes from 'prop-types'
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

Friend.propTypes = {
    isOnline: propTypes.bool,
    avatar: propTypes.string,
    name: propTypes.string
}

export default Friend