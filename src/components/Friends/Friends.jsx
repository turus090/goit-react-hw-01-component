import Friend from "./Friend/Friend"
import s from "./friends.module.css"
const Friends = (props) => {
    const FriendsCollection = props.friends.map(user=>{
        return(
            <Friend 
                avatar={user.avatar}
                name={user.name}
                isOnline={user.isOnline}
                key={user.id}
            />
        )
    })
    return (
        <ul className ={s.friendList}>
            {FriendsCollection}
        </ul>
    )
}

export default Friends