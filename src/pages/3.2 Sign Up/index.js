/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 14/09/2022 - 21:29:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
// Tela de cadastro completo
import { useState } from "react";
import './style.module.css';
import  usersList  from "../../data"


export function SignUp () {
    const [userList, setUserList] = useState(
      usersList.map((currentUser) => {
        return {
          username: currentUser.username,
          nome: currentUser.nome,
          sobrenome: currentUser.sobrenome,
          email: currentUser.email,
          password: currentUser.password,
        };
      })
    );
  const [form, setForm] = useState({
    title: "",
    description: "",
    img: "",
    // endereço: { rua: "", n: 0, CEP: 40000000 },
  });
  return (
    <div className="App">
      <h1>SignUp</h1>
      <form>
      <label htmlFor="Nome">Nome</label>
      <input/>     
    </form>

    <form>
      <label htmlFor="Sobrenome">Sobrenome</label>
      <input/>     
    </form>
    <form>
      <label htmlFor="Email">Email</label>
      <input/>     
    </form>

    <form>
      <label htmlFor="Senha">Senha</label>
      <input/>     
    </form>
    <button onClick={() => (window.location.href = '/privatetalk')}>Cadastrar</button>
    </div>
  );
  }