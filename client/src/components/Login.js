import React, {useState} from "react";


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
