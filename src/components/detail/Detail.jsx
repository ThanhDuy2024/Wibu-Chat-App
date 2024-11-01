import { auth } from '../../lib/firebase'
import './detail.css'
import { useChatStore } from "../../lib/chatStore"
const Detail = () => {
    const { chatId, user} = useChatStore() 
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>{user?.username}</h2>
                <p>Nhan vien cua nam</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button className='logout' onClick={() =>auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Detail