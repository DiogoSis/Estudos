import { useState } from "react";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";


const App = () =>{
  const [user, setUser] = useState();
  const submitForm = (user) =>{
    setUser(user)
  }

  // const artUsuario = Boolean(usuario)

  return(
    <div className="h-screen">
      <Header user={user?.name}/>
      { !!user && <ArticleList/>}
      { !!user || <Form onSubmit={submitForm} />}
    </div>
     
    
  )
   
}

export default App
