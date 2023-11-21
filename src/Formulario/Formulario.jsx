export function Formulario() {
  return (

    <>

        <form>
        <h1>Reserva Con Nosotros</h1>
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
                        <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-person-badge"></i>
                        </span>
                        <input type="date" className="form-control" placeholder="Fecha De Entrada" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-envelope-fill"></i>
                        </span>
                        <input type="date" className="form-control" placeholder="Fecha De Salida" />
                    </div>
                </div>
            </div>
      
        



        </form>


    </>
);
}
