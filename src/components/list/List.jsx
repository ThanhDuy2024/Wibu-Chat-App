import './list.css'
import Userinfor from './userInfor/Userinfor'
import ChatList from './chatList/ChatList'
const List = () => {
    return (
        <div className="list">
            <Userinfor/>
            <ChatList/>
        </div>
    )
}

export default List