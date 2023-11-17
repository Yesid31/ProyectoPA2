import './Menu.css';
import 'animate.css'

export function Menu() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top 
      animate__animated animate__bounce"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="bi bi-scissors"></i>
            The Barber
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Reservas
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reservas">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>


              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

