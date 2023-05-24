import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react';


export  default function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <Textarea heading="Enter the text to analyze below" mode={mode}/>
    </div>
    </> 
  );
  }

// import { useState } from "react";
// import "./App.css";
// import Alert from "./components/Alert";
// import Navbar from "./components/Navbar";
// import Textarea from "./components/Textarea";
// function App() {
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     })};

//     return (
//       <>
//         <Navbar
//           title="TextUtils"
//           firsttab="Home"
//           secondtab="AboutUs"
//           dropdown="More"
//         />
//         <Alert />
//         <div className="container">
//           <Textarea headings="Online Text Editor" />
//         </div>
//       </>
//     );
//   };


// export default App;
