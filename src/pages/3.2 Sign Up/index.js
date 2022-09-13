// Tela de cadastro completo
import { useState } from "react";
import { Form } from "../3.1 Sign Up";


export function SignUp () {
    const [usersList, setUsersList] = useState(
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
      <Form
        form={form}
        setForm={setForm}
        setMovieList={setUsersList}
        movieList={usersList}
      />
    </div>
  );
  }