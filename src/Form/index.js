import { useEffect, useState } from "react";
import axios from "axios";
import style from '../pages/style.css';

import { useNavigate } from "react-router-dom";

export function Form(props) {
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  async function addComments() {
    try {
      setIsLoading(true);
      if (form.comment) {
        const response = await axios({
          method: "post",
          url: "https://ironrest.herokuapp.com/appdebem-comments",
          data: {
            username: "teste1",
            comment: form.comment
          }
        });
        window.location.reload();
        setForm([...response.data]);

        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
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

      <button
        onClick={handleAddComment}
        disabled={isLoading}
        className={style.buttonComments}
      >
        Comentar
      </button>
    </form>
  );
}
