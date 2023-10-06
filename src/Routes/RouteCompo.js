import React , {Component} from "react";
import { BrowserRouter , Link , Route , Routes } from "react-router-dom";
import Home from './Home';
import Contact from "./Contact";
import Student from './Student';


function RouteCompo(){
    return(
        <>
        <BrowserRouter>
        <Link to= '/' >Home || </Link>
        <Link to = '/Student'>Student ||</Link>
        <Link to = '/Contact'>Contact</Link>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/student' element={<Student />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouteCompo