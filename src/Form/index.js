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
    <form onSubmit={handleAddComment}>
      <label htmlFor="comment">Comente aqui:</label>
      <input
        id="user-comment"
        type="text"
        name="comment"
        value={form.comment}
        onChange={handleChange}
      />

      <button
        onClick={handleAddComment}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Comentar
      </button>
    </form>
  );
}
