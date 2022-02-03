import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Main from "./components/main/main";
import Praise from "./components/praise/praise";
import Appear from "./components/appear/appear";

function App() {
   return (
      <div className="App">
         <Header />
		   <Nav />
		   <Main />
		   <Praise />
		   <Appear/>
      </div>
   );
}

export default App;
