import propTypes from 'prop-types'
import Friend from "./Friend/Friend"
import s from "./friends.module.css"
const Friends = ({friends}) => {
    return (
        <ul className ={s.friendList}>
            {friends.map(user => (
                <Friend 
                    avatar={user.avatar}
                    name={user.name}
                    isOnline={user.isOnline}
                    key={user.id}
                />
            ))
            }
        </ul>
    )
}

Friends.propTypes = {
    friends: propTypes.array
}

export default Friends