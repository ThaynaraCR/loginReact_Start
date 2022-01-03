
import React, { useState } from 'react';


const Login = () =>{

  const [campos, setCampos] = useState({
    usuario: '',
    senha: ''
  });

  const handleInputChange=(event)=>{
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  const handleFormSubmit=(event)=>{//colocar o campos como parametro
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(campos);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3001/secm/authApi", requestOptions)
      .then(response => response.json())
      .then(function (data){
        if (data.token){
          localStorage.setItem("token_secm", data.token)
          window.location= "http://localhost:3000/home"
        }
      })
      .catch(error => console.log('error', error));
}

    return (
        <>
            <h1>Login</h1>
            <p>Fill the fields to continue</p>
          <form onSubmit={handleFormSubmit}>
            <input id="usuario" name="usuario" onChange= {handleInputChange}/> <br/>
            <input id ="senha" name="senha" onChange = {handleInputChange}/> <br/>
            <button type = "submit">Enviar</button>
          </form>
        </>
        );
} 
    


export default Login;
