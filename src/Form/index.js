/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 13/09/2022 - 18:16:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
import { useState } from "react";

export function Form(props) {
  const [form, setForm] = useState({
    comment: ""
  });

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
      <button type="submit" className="btn btn-primary">
        Comentar
      </button>
      <button type="submit" className="btn btn-primary">
        Editar
      </button>
      <button type="submit" className="btn btn-primary">
        Deletar
      </button>
    </form>
  );
}
