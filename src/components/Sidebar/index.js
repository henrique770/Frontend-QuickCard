import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTimes,
  faBars,
  faPlus,
  faStickyNote,
  faAlignJustify,
  faCalendar,
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
                  <Link className="alignList" to="/">
                    <div className="icon_format">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <span>Criar</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="/">Nova Nota</Link>
                      </li>
                      <li>
                        <Link to="/">Novo Cronograma</Link>
                      </li>
                      <li>
                        <Link to="/">Novo Cartão</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <Link className="alignList" to="/">
                    <div className="icon_format">
                      <FontAwesomeIcon icon={faStickyNote} />
                    </div>
                    <span>Notas</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="/">Todas as Notas</Link>
                      </li>
                      <li>
                        <Link to="/">Blocos</Link>
                      </li>
                    </ul>
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
                <li className="sidebar">
                  <Link className="alignList" to="/">
                    <div className="icon_format">
                      <FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <span>Cronogramas</span>
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
