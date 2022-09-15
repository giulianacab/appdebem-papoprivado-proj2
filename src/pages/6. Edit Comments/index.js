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
import style from '../style.css';
import { useNavigate, useParams } from "react-router-dom";



// const API_URL = "";

export function EditComments(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  const { projectId: _id } = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    axios
      .get(`https://ironrest.herokuapp.com/appdebem-comments/${_id}`)
      .then((response) => {
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
      })
      .catch((error) => console.log(error));
    
  }, [_id]);
  
  
 
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
    const requestBody = { title, description };
 
    axios
      .put(`https://ironrest.herokuapp.com/appdebem-comments/${_id}`, requestBody)
      .then((response) => {
        navigate(`/projects/${_id}`);
      });
  
  
  
  
  const deleteProject = () => {                    //  <== ADD
    // Make a DELETE request to delete the project
    axios
      .delete(`https://ironrest.herokuapp.com/appdebem-comments/${_id}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate("/editcomments");
      })
      .catch((err) => console.log(err));
  };  
 
  
  
  return (
    <div className="EditProjectPage">

 
      <form onSubmit={useEffect}>
        <label>Comentário</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
     
 
        <button type="submit">Atualizar Comentário</button>
      </form>
      
      {/*     ADD     */}
      <button onClick={deleteProject}>Deletar</button>
    </div>
  )}
  
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// export function EditComments() {
//   const [form, setForm] = useState([]);
//   const [editComment, setEditComment] = useState('');

// function getGridData(){
//   axios({
//     method: "get",
//     url: "https://ironrest.herokuapp.com/6321fd684bf6cd00178ada7f",       
//   }).then((response) => {setForm(response.data);}).catch((err) => err)
// }
//       useEffect( ( )=> {  
//          getGridData()            
//       }, [] );

//       function handleDelete(_id) {
//         axios({
//           method: "delete",
//           url: `https://ironrest.herokuapp.com/6321fd684bf6cd00178ada7f/${_id}`,       
//         }).then(() => (getGridData()).catch((err) => err))
//       }
//       function handleEdit(_id, comment) {
//         axios({
//           method: "put",
//           url: `https://ironrest.herokuapp.com/6321fd684bf6cd00178ada7f/${_id}`,
//           data: {
//             comment
//           }       
//         }).then(() => (getGridData()).catch((err) => err))
//       }


// return(
//   <>
//   {form.length > 0 ? form.map(comment =>
//    { return( <><input value={editComment} onChange={(e) => {setEditComment(e.target.value)}}></input>
//   <button onClick={() => handleDelete(comment._id)}>Deletar</button>

//   <Link to={""}>
//   <button onClick={() => handleEdit(comment._id, editComment)}>Salvar Edição</button>
//   </Link>
  
//   </>)}
//   ): <h1>Nenhum comentário</h1>}
//   <button onClick={() => {window.location.href = '/comments'}}>Voltar</button>
//   </>
// )
// }
    

    {/* FOOTER / NAVBAR */}
    
    <footer>
      <div className={style.footer}>

          <div className={style.menuIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"  viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
              </svg>
          </div>


          <div className={style.menuIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white"  viewBox="0 0 16 16">
                  <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
              </svg>
          </div>


          <div className={style.menuIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"  viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
          </div>


          <div className={style.menuIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white"  viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
          </div>


          <div className={style.menuIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"  viewBox="0 0 16 16">
                  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
              </svg>
          </div>


          <div className={style.menuIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"  viewBox="0 0 16 16">
                  <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z"/>
              </svg>
          </div>

      </div>
    </footer>
    
    
    
    
    
  
  
