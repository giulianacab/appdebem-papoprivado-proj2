/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 13/09/2022 - 18:58:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "./pages/1. Loading";
import { Login } from "./pages/2. Login"
import { Form } from "./pages/3.1 Sign Up";
import { SignUp } from "./pages/3.2 Sign Up";
import { PrivateTalk } from "./pages/4. Private Talk";
import { Comments } from "./pages/5. Comments";
// import { EditComments } from "./pages/6. Edit Comments";

export default function App() {
    return (
      <>
        <Routes>
          <Route path="/loading" element={<Loading />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Login/>}/>
          <Route path="/username" element={<Form />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privatetalk" element={<PrivateTalk />} />
          <Route path="/comments" element={<Comments />} />
          {/* <Route path="/editcomments" element={<EditComments />} /> */}
        </Routes>
      </>
    )
  }

