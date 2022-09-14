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
import { useEffect } from "react";
import { Link } from "react-router-dom";


export function EditComments() {
  useEffect(() => {
    async function editComments() {
      try {
        const response = await axios({
          method: "put",
          url: "",
          data: {
            username: "teste1",
            comment: "Teste"
          }
        });
        setTips([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    editComments();
  }, []);
};
async function handleDelete(t) {
  try {
    await axios.delete(``); 
   
  } catch (err) {
    console.log(err);
  }
}

return(
  <>
  <Link to={}>
  <button>Editar</button>
  </Link>

  <button onClick={handleDelete}>Deletar</button>
  </>
)