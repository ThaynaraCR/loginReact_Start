import React from 'react';
import fetchEndereco from '../../assets/api1/index'
import { useState, useEffect } from 'react';

const Home = () => {

const [endereco, setEndereco] = useState(null)

useEffect(() => {
  fetchEndereco("01001000").then(data => {setEndereco(data)},[])

}, [endereco])//toda vez que a variavel endereco muda o fetch é executado denovo
console.log(endereco)

    return(
      <>
        <h1>Cidade</h1>
         {/* <h1 key ={endereco.cep}>{endereco.localidade}</h1> */}
        </>    
      );
} 

    
       
    



export default Home;
