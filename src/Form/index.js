/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 14/09/2022 - 17:02:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
import { useEffect, useState } from "react";
import axios from "axios";

export function Form(props) {
  const [form, setForm] = useState({});

  useEffect(() => {
    async function addComments() {
      try {
        const response = await axios({
          method: "post",
          url: "https://ironrest.herokuapp.com/6321fd684bf6cd00178ada7f",
          data: {
            username: "teste1",
            comment: "Teste"
          }
        });
        setForm([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    addComments();
  }, []);
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleAddComment(e) {
    e.preventDefault();

    props.attList([form, ...props.comment]);
  }

  return (
    <form onSubmit={handleAddComment}>
      <label htmlFor="comment">Comente aqui:</label>
      <input
        id="user-comment"
        type="text"
        name="comment"
        value={form.comment}
        onChange={handleChange}
      />

      <button onClick={handleAddComment} className="btn btn-primary">
        Comentar
      </button>
    </form>
  );
}