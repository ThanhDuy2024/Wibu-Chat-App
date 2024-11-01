import { useState } from 'react';
import './login.css'
import { toast } from 'react-toastify';
import { auth, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';


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

    const handleRegister = async e => {
        e.preventDefault();
        const username = e.target.Username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(email && password) {
            const res = createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, "users", (await res).user.uid), {
                username: username,
                email: email,
                id: (await res).user.uid,
                blocked: [],
            });

            await setDoc(doc(db, "userchats", (await res).user.uid), {
                chats: [],
            });

            alert("Tạo tài khoản thành công");
        }
        else{
            alert("Bạn chưa nhập email hoặc mật khẩu")
        }
    }

    const handleLogin =  async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(email && password){
           try {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Đăng nhập thành công")
           }catch(error){
                alert("Tài khoản hoặc mật khẩu bị sai")
           } 
        }     
    }
    return (
        <div className="login">
            <div className="item">
                <h2>Wellcome back,</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" name="email" placeholder='Nhập email...'/>
                    <input type="password" name="password" placeholder='Nhập password...'/>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Tạo tài khoản</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src="./avatar.png" alt="" />
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