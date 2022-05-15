import React, {useState} from 'react';

const Register = () => {
  const [showpass, setShowPass] = useState(false);

 
  const togglePassword = () =>{
    setShowPass(!showpass);
  }

  return (
    <div className='regis-contain'>
      <form action="">
          <h1>Register</h1>
          <div className='regis-input'>
              <label htmlFor="username">Username: </label>
              <input type="text" placeholder='Enter username....'/>
              <label htmlFor="username">Email: </label>
              <input type="text" placeholder='Enter email.....'/>
              <label htmlFor="username">Phone: </label>
              <input type="text" placeholder='Enter phonenumber....'/>
              <label htmlFor="username">Password: </label>
              <input type="text" placeholder='Enter password....'/>
              <label htmlFor="username">Re-Password: </label>
              <input type="text" placeholder='Repeat-password....'/>
          </div>
          <div className="regis-btn">
              <button className='regis-btns'>Sign up</button>
          </div>
      </form>
    </div>
  )
}

export default Register;