import { useState, useEffect } from 'react';
import routes from '../routes';
import { useHistory, useLocation } from 'react-router-dom';
import env from '../env';

const Navbar = () => {
  const location = useLocation();
  let current = routes.findIndex((ele) => `/${ele.route}` === location.pathname);
  current = current === -1 ? 0 : current;
  const [active, setActive] = useState(current);
  const { push } = useHistory();
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(async () => {
    const req = await fetch(`${env.host}social`);
    const res = await req.json();
    setSocialLinks(res);
  }, []);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          {routes.map((ele, index) => (
            <li key={index} className={`nav-item ${active == index ? 'active' : ''} }`}>
              <a
                className="nav-link"
                onClick={() => {
                  setActive(index);
                  push(`/${ele.route}`);
                }}
              >
                {ele.label}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a className="nav-link" href={env.resume} target="blank">
              Resume
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"
            onClick={(event) => event.preventDefault()}
            id="dropdownMenuButton2" role="button" data-toggle="dropdown" aria-expanded="false">
              Contact Me
            </a>
            <ul className="dropdown-menu social-dropdown dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li>
                <i className="fas fa-envelope"></i> &nbsp;
                <a className="text-dark" href="mailto:kashyap1049@gmail.com">
                  kashyap1049@gmail.com
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <i className="fas fa-mobile-alt"></i> <span>+91-8886861616</span>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="navbar-nav">
          {socialLinks.map((ele, index) => (
            <li key={index} className="nav-item">
              <a className="nav-link" href={ele.link} target="blank">
                <img className="social-icon" src={`images/${ele.icon}`} />
              </a>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
    <h4 className="text-center mt-2">Arun's Portfolio</h4>
    </>
  );
};

export default Navbar;
