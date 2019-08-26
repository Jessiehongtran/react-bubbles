import React, {useState, useEffect} from "react";
import axios from 'axios';


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [user, setUser] = useState({username: '', password: ''})

  const handleChange = event => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log('user in handleSubmit', user)
    axios
    .post('http://localhost:5000/api/login', user)
    .then(res => {
      console.log('res in Login', res)
      localStorage.setItem('token', res.data.payload)
      console.log(props)
      props.history.push('/bubblepage')
    })
    .catch(err => console.log(err.response))
  }

  return (
    <>
      
      <form className="login-form" onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="username" 
        placeholder="username" 
        value={user.username}
        onChange={handleChange} 
        />

        <input 
        type="text" 
        name="password" 
        placeholder="password" 
        value={user.password}
        onChange={handleChange} 
        />

        <button className="login-btn" type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
