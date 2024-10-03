import React from 'react';
import './sideBar.css';
import LOGO from '../../assets/A.png';

export const SideBar = () => {
  return (
    <div className="side-bar">
      <nav className="nav-side">
        <ul>
          <li className="logo">
            <a href="#" className="link">
              <img src={LOGO} alt="Logo" />
              <span className="title">Clínica</span>
            </a>
          </li>

          <li className="li">
            <a href="#nosotros" className="link">
              <svg
                className="fas"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 26 26"
              >
                <circle cx="13" cy="13" r="13" fill="#5b7ce9" />
              </svg>
              <span className="nav-item">Sobre Nosotros</span>
            </a>
          </li>

          <li className="li">
            <a href="#servicios" className="link">
              <svg
                className="fas"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#5b7ce9"
                  d="M4 22q-.825 0-1.412-.587T2 20V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v12q0 .825-.587 1.413T20 22zm6-16h4V4h-4zm1 9v3h2v-3h3v-2h-3v-3h-2v3H8v2z"
                />
              </svg>
              <span className="nav-item">Servicios</span>
            </a>
          </li>

          <li className="li">
            <a href="https://clin-link-system.vercel.app/" className="link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#5b7ce9"
                  d="M15 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 1.9a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12.9 8A2.1 2.1 0 0 1 15 5.9M4 7v3H1v2h3v3h2v-3h3v-2H6V7zm11 6c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4m0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H8.9V17c0-.64 3.1-2.1 6.1-2.1"
                />
              </svg>
              <span className="nav-item">Regístrate</span>
            </a>
          </li>

          <li className="li">
            <a href="https://clin-link-system.vercel.app/register" className="link">
              <svg
                className="fas"
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#5b7ce9"
                  fillRule="evenodd"
                  d="M3.5 9.568v4.864c0 2.294 0 3.44.722 4.153c.655.647 1.674.706 3.596.712l-.015-.105c-.115-.844-.115-1.916-.115-3.247v-.053c0-.403.331-.73.74-.73c.408 0 .739.327.739.73c0 1.396.001 2.37.101 3.105c.098.714.275 1.093.548 1.362s.656.445 1.379.54c.744.1 1.731.101 3.146.101h.985c1.415 0 2.401-.002 3.146-.1c.723-.096 1.106-.272 1.378-.541c.273-.27.451-.648.548-1.362c.1-.734.102-1.709.102-3.105V8.108c0-1.397-.002-2.37-.102-3.105c-.097-.714-.275-1.093-.547-1.362c-.273-.27-.656-.445-1.38-.54C17.728 3 16.742 3 15.327 3h-.985c-1.415 0-2.402.002-3.146.1c-.723.096-1.106.272-1.379.541c-.273.27-.45.648-.548 1.362c-.1.734-.101 1.708-.101 3.105c0 .403-.331.73-.74.73a.734.734 0 0 1-.739-.73v-.053c0-1.33 0-2.403.115-3.247l.015-.105c-1.922.006-2.94.065-3.596.712c-.722.713-.722 1.86-.722 4.153m9.885 5.38l2.464-2.432a.723.723 0 0 0 0-1.032l-2.464-2.432a.746.746 0 0 0-1.045 0a.723.723 0 0 0 0 1.032l1.202 1.186H6.457a.734.734 0 0 0-.74.73c0 .403.331.73.74.73h7.085l-1.202 1.186a.723.723 0 0 0 0 1.032a.746.746 0 0 0 1.045 0"
                  clipRule="evenodd"
                />
              </svg>
              <span className="nav-item">Iniciar Sesión</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
