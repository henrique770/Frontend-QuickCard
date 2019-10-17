import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faBars,
  faPlus,
  faStickyNote,
  faAlignJustify,
} from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';
import logo from '~/assets/white_main_logo.svg';

export default function SideBar() {
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
                          <Link to="/">Novo Cartão</Link>
                        </li>
                        <li>
                          <Link to="/">Novo Baralho</Link>
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
                          <Link to="/">Blocos</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="sidebar">
                  <Link className="alignList" to="/">
                    <div className="icon_format">
                      <FontAwesomeIcon icon={faAlignJustify} />
                    </div>
                    <span>Baralhos</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
