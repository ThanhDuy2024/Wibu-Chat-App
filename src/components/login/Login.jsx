import { useState } from 'react';
import './login.css'

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleAvatar = e => {
        if(e.target.files[0]){
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }
    return (
        <div className="login">
            <div className="item">
                <h2>Wellcome back,</h2>
                <form>
                    <input type="email" name="email" placeholder='Nhập email...'/>
                    <input type="password" name="password" placeholder='Nhập password...'/>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Tạo tài khoản</h2>
                <form>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Chọn một ảnh</label>
                    <input type="file" name="" id="file" style={{display: "none"}} onChange={handleAvatar}/>
                    <input type="text" name="Username" placeholder='Nhập tên...'/>
                    <input type="email" name="email" placeholder='Nhập email...'/>
                    <input type="password" name="password" placeholder='Nhập password...'/>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login;