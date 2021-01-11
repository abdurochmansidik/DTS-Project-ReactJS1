import React from 'react';
//logo dan style
import logo from './logo.svg';
import './App.css';

//Reusable components
function Form () {
  return(
    <div>
      <form>
        <input placeholder="Username" style={{ padding: "10px", margin: "5px 0", borderRadius:"5px", width:"200px"}}/><br/>
        <input placeholder="Password" style={{ padding: "10px", margin: "5px 0", borderRadius:"5px", width:"200px"}}/><br/>
        <button type="submit" style={{ padding:"10px", margin:"10px", width:"100px", borderRadius:"5%"}}>Login</button>
      </form>
    </div>
  )
}

//Funtion components
function App() {
  return (  

    //Class components
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h4>Selamat datang di aplikasi React</h4>
        </p>
        <Form/>
      </header>
    </div>
  );
}

export default App;
