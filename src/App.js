import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
function App() {
  return (
    < >
      <Navbar title="TextUtils" firsttab="Home" secondtab="AboutUs" dropdown="More"/>
      <div className="container">
      <Textarea headings="Online Text Editor"/>
      </div>
    </>
  );
}
export default App;
