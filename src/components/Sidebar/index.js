import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faBars,
  faPlus,
  faStickyNote,
  faAlignJustify,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';
import logo from '~/assets/white_main_logo.svg';

export default function SideBar() {
  function handleLogout() {
    localStorage.clear();
  }

  return (
    <Container>
      <div className="page-wrapper chiller-theme toggled">
        <div id="show-sidebar" className="btn btn-sm btn-dark" href="#">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand">
              <Link to="/">
                <img
                  classNameName="formatacao-logo-sidebar"
                  src={logo}
                  alt="QuickCardLogo"
                />
              </Link>
              {/* <div id="close-sidebar">
                <FontAwesomeIcon icon={faTimes} />
              </div> */}
            </div>

            <div className="sidebar-menu">
              <ul>
                <li className="header-menu">
                  <span>Geral</span>
                </li>

                <li className="sidebar-dropdown">
                  <div>
                    <span>
                      <a
                        className="alignList"
                        data-toggle="collapse"
                        href="#criar"
                      >
                        <div className="icon_format">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <span> Criar</span>
                      </a>
                    </span>
                  </div>

                  <div className="collapse" id="criar">
                    <div className="card card-body">
                      <ul>
                        <li>
                          <Link to="/addnote">Nova Nota</Link>
                        </li>
                        <li>
                          <Link to="/addcard">Novo Cartão</Link>
                        </li>
                        <li>
                          <Link to="/adddeck">Novo Baralho</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="sidebar-dropdown">
                  <div>
                    <span>
                      <a
                        className="alignList"
                        data-toggle="collapse"
                        href="#notas"
                      >
                        <div className="icon_format">
                          <FontAwesomeIcon icon={faStickyNote} />
                        </div>
                        <span> Notas</span>
                      </a>
                    </span>
                  </div>

                  <div className="collapse" id="notas">
                    <div className="card card-body">
                      <ul>
                        <li>
                          <Link to="/dashboard">Todas as notas</Link>
                        </li>
                        <li>
                          <Link to="/notepads">Blocos</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="sidebar">
                  <Link className="alignList" to="/decks">
                    <div className="icon_format">
                      <FontAwesomeIcon icon={faAlignJustify} />
                    </div>
                    <span>Baralhos</span>
                  </Link>
                </li>
                <li className="sidebar">
                  <Link className="alignList" to="/profile">
                    <div className="icon_format">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span>Perfil</span>
                  </Link>
                </li>
                <div className="align_bottom">
                  <li className="sidebar">
                    <Link className="alignList" onClick={handleLogout} to="/">
                      <div className="icon_format">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                      </div>
                      <span>Logout</span>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
