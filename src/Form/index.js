import { useEffect, useState } from "react";
import axios from "axios";
import style from '../pages/style.css';


export function Form(props) {
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  async function addComments() {
    try {
      setIsLoading(true)
      if (form.comment) {
        const response = await axios({
          method: "post",
          url: "https://ironrest.herokuapp.com/6321fd684bf6cd00178ada7f",
          data: {
            username: "teste1",
            comment: form.comment
          }

        });
        window.location.href = '/editcomments'
        setForm([...response.data]);
        
        setIsLoading(false)
      }
    } catch (err) {
      setIsLoading(false)
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleAddComment(e) {
    e.preventDefault();
    addComments();
    props.attList([form, ...props.comment]);
  }

  return (
    <form onSubmit={handleAddComment} className={style.formComments}>
      <label htmlFor="comment" className={style.label}></label>
      <input placeholder="Comente aqui:" className={style.placeholder}
        id="user-comment"
        type="text"
        name="comment"
        value={form.comment}
        onChange={handleChange}
      />

      <button className={style.buttonComments} onClick={handleAddComment} disabled={isLoading}>
        Comentar
      </button>
    </form>
  );
}
