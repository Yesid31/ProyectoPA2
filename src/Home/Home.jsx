import { useEffect,useState } from "react";
import './Home.css';
import { Formulario } from "../Formulario/Formulario";

export function Home (){
    return (

        <>
        <div className="banner"></div>
        <div className="row">
        <div className="col-12 col-md"></div>

        </div>
        <Formulario/>
        </>
    )

}