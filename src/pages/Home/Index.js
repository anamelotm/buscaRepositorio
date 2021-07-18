import React, { useState } from "react";
import axios from 'axios';
import * as s from './Styled';
import { useHistory } from 'react-router-dom';

function Home(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [ erro, setErro ] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => { 
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true);
    })
  }
 
  return (
    <s.HomeContainer>
      <s.Content>
        <s.Input className="usuarioinput" placeholder="Usuário" onChange={e => setUsuario(e.target.value)} value={usuario}/>
        <s.Button type="button" onClick={handlePesquisa}>Pesquisar</s.Button>
      </s.Content>
        { erro ? <s.ErrorMsg>Ocorreu um erro. Tente novamente</s.ErrorMsg> : ''}
    </s.HomeContainer>
  );
}

export default Home;