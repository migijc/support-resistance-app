import { useEffect, useState } from "react";
import PageContent from "./components/PageContent";
import Header from "./components/Header";
import Router from "./components/Router";



function App() {
  

  useEffect(()=>{
    console.log('hello')
  })


  return (
    <div className="App">
      <div>
        <Header children={[<h1>SRGenerator.com</h1>,]} />
      </div>
      <div>
         <Router/>
      </div>
     
    </div>
  );
}

export default App;
