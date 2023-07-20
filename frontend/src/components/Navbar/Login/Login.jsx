import React, {useState} from 'react'
import './login.css'

export const Login = () => {
 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
    console.log();
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
    };
  
    return (
      <form>
        <section className="home-login">
           
          <div className="login-container">
            <h4 className='label'>
              Username:
              <input
                type={"text"}
                value={username}
                onChange={handleUsernameChange}
              />
            </h4>
            <br />
            <h4>
              Password:
              <input
                type={"password"}
                value={password}
                onChange={handlePasswordChange}
              />
            </h4>
            <br />
  
            <button type="submit" onSubmit={handleLogin}>
              Login
            </button>
            <p className='register'>You did not register before?</p>
            <button className="reg-btn">Register</button>
          </div>
        </section>
      </form>
    );
  
}
