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

    
        <button onClick={handleAddComment} className="btn btn-primary">
          Comentar
        </button>

    </form>
  );
}




// useEffect(() => {
//   async function fetchTips() {
//     try {
//       const response = await axios({method: "post",
//         url: "https://ironrest.herokuapp.com/irontips", 
//         data: {  username : "teste1",
//         comment : "Teste"}
//       }
//       );

//       setTips([...response.data]);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   fetchTips();
// }, []);
