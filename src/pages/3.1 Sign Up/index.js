// Tela de username
import { useState } from "react";
import { Link } from "react-router-dom";


export function Form(props) {
  const { form, setForm, setUsersList, usersList } = props;
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  function handleAddUsers(event) {
    event.preventDefault();
    setUsersList([form, ...usersList]);
  }
  return (
    <>
      <h3>Faça seu cadastro</h3>
      <p>Você pode usar um nome de usuário aleatório caso queira permanecer anônima</p>
      <form>
        <label htmlFor="username"></label>
        <input
          placeholder="Nome de usuário"
          id="username"
          type="text"
          onChange={handleChange}
          name="username"
        />
        <button onClick={handleAddUsers} className="btn btn-primary">
          Continuar
        </button>
      </form>
      <p>Já tem uma conta? <a>Entre aqui</a></p>
{/* Colocar link da tela de login no "Entre aqui" */}
    </>
  );
}