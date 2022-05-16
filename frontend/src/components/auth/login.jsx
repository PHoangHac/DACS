import axios from 'axios';
import React, {useState} from 'react';

const Login = () => {

  const [showpass, setShowPass] = useState(false);
  
  const [username, setUseName] = useState("");
  const [password, setPassWord] = useState("");

  const login = () =>{
    const data = {username: username, password: password};
    axios.post("http://localhost:8080/auth/login", data).then((res) =>{
        console.log(res.data);
    });
  }
 
  const togglePassword = () =>{
    setShowPass(!showpass);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };

  return (
    <div className='login-contain'>
      <form onSubmit={onSubmit} action="">
        <h1 id='login-content'>Login</h1>
        <div className="login-input">
          <div id='input-item'>
          <label htmlFor="username">Username: </label>
          <input 
              onChange={(event) =>{
                setUseName(event.target.value);
              }}
              name='username'
              className='inputs' 
              id='username' 
              type="text" 
              placeholder='Username.....'/>
          </div>
          <div id='input-item'>
          <label htmlFor="Password">Password: </label>
            <input 
              onChange={(event) =>{
                setPassWord(event.target.value);
              }}
              name='password'
              className='inputs'
              id='Password' 
              type={showpass ? "text" : "password"} 
              placeholder='Password......'
            />
            <br></br>
            <div className='show-pass'>
              <input className='checkbox-show' id='showpass' type="checkbox" onClick={togglePassword} />       
              <label htmlFor="showpass">ShowPass</label>    
            </div>
          </div>
        </div>
        <div className='login-submit'>
            <button onClick={login} type="submit" id='login-submits'>Sign In</button>
        </div>
      </form>
    </div>
  )
}



export default Login;