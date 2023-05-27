import Profile from "./Components/Profile/Profile"
import Statics from "./Components/Statics/Statics"

import userJSON from './user.json'
import staticJson from './data.json'
import friendsJson from './friends.json'
import transactionsJson from './transactions.json'

import Friends from "./Components/Friends/Friends"
import Transactions from "./Components/Transactions/Transactions"
const App = () => {
    return (
        <>
            <div>
                <Profile
                    username ={userJSON.username}
                    tag ={userJSON.tag}
                    location ={userJSON.location}
                    avatar ={userJSON.avatar}
                    stats ={userJSON.stats}
                />
                <Statics title="Upload stats" static={staticJson}/>
                <Statics  static={staticJson}/>
                <Friends friends={friendsJson}/>
                <Transactions transactions={transactionsJson}/>
            </div>
        </>
    )
}
export default App