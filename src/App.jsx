import Profile from "./components/Profile/Profile"
import Statics from "./components/Statics/Statics"
import Friends from "./components/Friends/Friends"
import Transactions from "./components/Transactions/Transactions"

import userJSON from './user.json'
import staticJson from './data.json'
import friendsJson from './friends.json'
import transactionsJson from './transactions.json'


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