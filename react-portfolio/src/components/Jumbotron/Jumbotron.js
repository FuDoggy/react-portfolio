import React, {useEffect} from "react";
import Typed from "typed.js"

function Jumbotron () {
    useEffect(()=> {

        var typed = new Typed("#titleText", {
            strings: ["Hello!", "My Name is Kevin", "I am a great DEV!"],
            typeSpeed: 100,
            backSpeed: 30,
            backDelay: 300,
            loop: true
        })
    }, [])
        return (
        <h1 id="titleText" style = {{textAlign: "center", color:"white", background:"black", height:"80vh"}}>
        </h1>

)
}

export default Jumbotron;