import React,{useState} from 'react';
import "./App.css";

 function Login() {

    const [welcome,setWelcome] = useState('active');
    const [signin,setSignin] = useState('active');
    const [btn, setBtn] = useState('active');
    const [signup,setSignup] = useState('active');
    const [login,setLogin] = useState('active');
    return (
        <div>
            <section>
                <div class="page">
                    <div className={"welcome "+welcome}>
                        <h2>Welcome</h2>
                        <p>Hello my dear, this is sign in/signup form designed in react.With the help oh React-hooks</p>
                        <button className={"sign_in "+signin} onClick={()=>{
                            setWelcome('active');
                            setLogin('active');
                            setSignin('active');
                            setBtn('active');
                            setSignup('active');
                            }}>Sign In</button>
                        <button className={"btn "+btn} onClick={()=>{
                            setWelcome('');
                            setLogin('');
                            setSignin('');
                            setBtn('');
                            setSignup('');
                            }}>Sign Up</button>
                    </div>
                    <div className={"sign_up "+signup}>
                        <form method="POST" action="signup_user.php">
                        <h2>Sign Up your Account</h2>
                        <input type="text" name="name" placeholder="Full Name" required/><br/>
                        <input type="email" name="email" placeholder="Email" required/><br/>
                        <input type="password" name="password" placeholder="Password" required/><br/>
                        <input type="submit" name="sign_up" value="Sign Up" className="up"/>
                        </form>
                    </div>
                    <div className={"login "+login}>
                            <form method="POST" action="login_user.php">
                            <h2>Login your Account</h2>
                            <input type="email" name="email" placeholder="Email" required/><br/>
                            <input type="password" name="password" placeholder="Password" required/><br/>
                            <input type="submit" name="sign_in" value="Sign In" className="in"/>
                            </form>
                    </div>
                </div>
        </section>
    </div>
    )
}

export default Login;
