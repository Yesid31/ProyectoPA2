import { useEffect,useState } from "react";
import './Home.css';
import { Formulario } from "../Formulario/Formulario";
import { Menu } from "../../Menu/Menu";
import { Carrusel } from "../../Carrusel/Carrusel";
import { Historia } from "../../Historia/Historia";
import { Footer } from "../../Footer/Footer";
import { Mapa } from "../../Mapa/Mapa";
import { Servicios } from "../../Servicios/Servicios";
export function Home (){
    return (

        <>
       <Menu/>
        <div className="banner">
          <Formulario/>

        </div>
        <div className="row">
        <div className="col-12 col-md">
            
        <form>





</form>

    <div>
        <Servicios/>
    </div>
  
        </div>
            <Carrusel/>
        </div>

        


        <div>
            <Historia/>
        </div>
    
    <div className="container">
        <div className="row justify-content-center text-center">
            <div className="col-12">
                <Mapa/>
            </div>
        </div>
    </div>
        
    
    <div>
        <Footer></Footer>
    </div>
        </>
    )

}