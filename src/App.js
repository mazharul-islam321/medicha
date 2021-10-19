import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Homepage/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Departments from "./components/Departments/Departments";
import AllService from "./components/AllService/AllService";
import Doctors from "./components/Doctors/Doctors";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AuthProvider from "./context/AuthProvider";

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/departments">
                            <Departments></Departments>
                        </Route>
                        <Route path="/allService">
                            <AllService></AllService>
                        </Route>
                        <Route path="/doctors">
                            <Doctors></Doctors>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/contact">
                            <Contact></Contact>
                        </Route>
                        <Route path="/signin">
                            <Signin></Signin>
                        </Route>
                        <Route path="/signup">
                            <Signup></Signup>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
