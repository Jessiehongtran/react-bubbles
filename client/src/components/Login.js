import React, {useState, useEffect} from "react";
import axios from 'axios';


const Login = () => {
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
    })
    .catch(err => console.log(err.response))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
