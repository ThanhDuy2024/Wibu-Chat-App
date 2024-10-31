import './userInfor.css'

const Userinfor = () => {
    return (
        <div className="userInfor">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>John Doe</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./edit.png" alt="" />
            </div>
        </div>
    )
}

export default Userinfor