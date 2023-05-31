import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textarea from "./components/Textarea";
import React, { useState } from "react";
import {
  //createBrowserRouter,
  //RouterProvider,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

//react router dom v6 replace switch with routes wrap all in router, import Router as BrowserRouter
export default function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null); //alert is object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
       setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled","success")
      // document.title="TextUtils DarkMode"
      // setInterval(() => {
      //   document.title="Download TextUtils now"
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled","success")
    }
  };

  return (
    
      <Router>
        <>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
         {/* exact says to match exact path of component */}
          <Routes>
            <Route exact path="/" element={<Textarea showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>

        </>
      </Router>
    
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
