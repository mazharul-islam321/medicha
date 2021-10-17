import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
}

export default App;
