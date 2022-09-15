/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 14/09/2022 - 17:24:12
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function EditComments() {
  const [form, setForm] = useState([]);
  const [editComment, setEditComment] = useState('');

function getGridData(){
  axios({
    method: "get",
    url: "https://ironrest.herokuapp.com/6321fd684bf6cd00178ada7f",       
  }).then((response) => {setForm(response.data);}).catch((err) => err)
}
      useEffect( ( )=> {  
         getGridData()            
      }, [] );

      function handleDelete(_id) {
        axios({
          method: "delete",
          url: `https://ironrest.herokuapp.com/6321fd684bf6cd00178ada7f/${_id}`,       
        }).then(() => (getGridData()).catch((err) => err))
      }
      function handleEdit(_id, comment) {
        axios({
          method: "put",
          url: `https://ironrest.herokuapp.com/6321fd684bf6cd00178ada7f/${_id}`,
          data: {
            comment
          }       
        }).then(() => (getGridData()).catch((err) => err))
      }


return(
  <>
  {form.length > 0 ? form.map(comment =>
   { return( <><input value={editComment} onChange={(e) => {setEditComment(e.target.value)}}></input>
  <button onClick={() => handleDelete(comment._id)}>Deletar</button>

  <Link to={""}>
  <button onClick={() => handleEdit(comment._id, editComment)}>Salvar Edição</button>
  </Link>
  
  </>)}
  ): <h1>Nenhum comentário</h1>}
  <button onClick={() => {window.location.href = '/comments'}}>Voltar</button>
  </>
)
}