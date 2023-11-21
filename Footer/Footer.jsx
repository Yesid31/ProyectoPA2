import "./Footer.css";
export function Footer() {
  return (
    <>
      <footer className="footer-area footer--light">
        <div className="footer-big">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-widget">
                  <div className="widget-about">
                    <img
                      src="https://www.visitdubai.com/-/media/gathercontent/article/b/best-dubai-marina-restaurants/best-dubai-marina-restaurants-header-03.jpg?&cw=256&ch=256"
                      alt=""
                      className="img-fluid"
                    />
                    <p>
                      El hotel está siendo desarrollado por The First Group, un
                      promotor inmobiliario líder a nivel internacional. El
                      primer grupo tiene una trayectoria comprobada de éxito en
                      el desarrollo y gestión de hoteles de lujo. Se espera que
                      Ciel Tower sea una propiedad muy solicitada y su valor
                      seguramente aumentará con el tiempo.{" "}
                    </p>
                    <ul className="contact-details">
                      <li>
                        <span className="icon-earphones"></span>LLamar:
                        <a href="tel:344-755-111">+971 4 246 4825</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu footer-menu--1">
                    <h4 className="footer-widget-title">Acerca De El Hotel</h4>
                    <ul>
                      <li>
                        <a href="https://www.thefirstgroup.com/en/about-the-first-group/" target="_blank">Acerca del primer grupo</a>
                      </li>
                      <li>
                        <a href="https://www.thefirstgroup.com/en/corporate-social-responsibility/" target="_blank">Responsabilidad Social Corporativa</a>
                      </li>
                      <li>
                        <a href="https://www.thefirstgroup.com/en/latest-news/" target="_blank">Últimas noticias</a>
                      </li>
                      <li>
                        <a href="https://careers.thefirstgroup.com/" target="_blank">Carreras</a>
                      </li>
                      <li>
                        <a href="https://firstonline.thefirstgroup.com/login?ReturnUrl=%2f" target="_blank">First Online - Owners</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu">
                    <h4 className="footer-widget-title">SEDE</h4>
                    <ul>
                      <li>
                        <a href="#">The First Group 22nd Floor</a>
                      </li>
                      <li>
                        <a href="#">Tameem House, Barsha Heights</a>
                      </li>
                      <li>
                        <a href="#">PO Box 24573</a>
                      </li>
                      <li>
                        <a href="#">Dubai, UAE</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu no-padding">
                    <h4 className="footer-widget-title">Más Info</h4>
                    <ul>
                      <li>
                        <a href="https://www.thefirstgroup.com/en/third-party-hotel-management/" target="_blank">Gestion Hotelera Tercero</a>
                      </li>
                      <li>
                        <a href="https://tfgglobalsolutions.com/citizenship-investment/?utm_source=ws_tfg&utm_medium=footer&utm_campaign=cip" target="_blank">Citizenship Investment</a>
                      </li>
                      <li>
                        <a href="https://www.dubailifestylemembership.com/?utm_source=ws_tfg&utm_medium=footer&utm_campaign=dle" target="_blank">Experiencia de estilo de vida en Dubái</a>
                      </li>
                      <li>
                        <a href="https://www.thefirstgroup.com/en/agents/" target="_blank">Agentes Y Corredores</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mini-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text">
                  <p>
                    © 2023
                    <a href="#">Yesid Garzón Toro</a>. All rights reserved. 
                    <a href="#">AazzTech</a>
                  </p>
                </div>

                <div className="go_top">
                  <span className="icon-arrow-up"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
