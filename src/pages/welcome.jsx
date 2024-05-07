import React from "react";
import NavBar from "../components/navbar";
import Comment from "../components/comment";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Homes from "./home";

function Welcome(){
    return (
        <>
<NavBar/>
<Homes/>
<Comment/>
<Contact/>
<Footer/>
        </>
    )
}
export default Welcome