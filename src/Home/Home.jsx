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
          
        <div className="row">
    <div className="col-12 col-md-6">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-person-badge"></i>
            </span>
            <input type="text" className="form-control" placeholder="Nombre Cliente" />
        </div>
    </div>
    <div className="col-12 col-md-6">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-envelope-fill"></i>
            </span>
            <input type="text" className="form-control" placeholder="Correo cliente" />
        </div>
    </div>
</div>

<div className="row">
    <div className="col-12">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Telefono Cliente" />
        </div>
    </div>
</div>

<div className="row">
    <div className="col-12 col-md-6">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="date" className="form-control" placeholder="Telefono Cliente" />
        </div>
    </div>
    <button type="button">Reserva</button>
</div>
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