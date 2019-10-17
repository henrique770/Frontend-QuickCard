import styled from 'styled-components';

export const Container = styled.div`
  @keyframes swing {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(10deg);
    }
    30% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(5deg);
    }
    70% {
      transform: rotate(0deg);
    }
    80% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes sonar {
    0% {
      transform: scale(0.9);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  body {
    font-size: 0.9rem;
  }

  .page-wrapper .theme.chiller-theme {
    background: #1d1d1d;
  }

  /*----------------toggeled sidebar----------------*/

  .page-wrapper.toggled .sidebar-wrapper {
    left: 0px;
  }

  @media screen and (min-width: 768px) {
    .page-wrapper.toggled .page-content {
      padding-left: 300px;
    }
    .page-wrapper.toggled .page-content1 {
      padding-left: 300px;
    }
    .iframenovanota {
      width: 76%;
      height: 100%;
    }
  }

  /*----------------show sidebar button----------------*/
  #show-sidebar {
    position: fixed;
    left: 0;
    top: 10px;
    border-radius: 0 4px 4px 0px;
    width: 35px;
    transition-delay: 0.3s;
  }
  .page-wrapper.toggled #show-sidebar {
    left: -40px;
  }
  /*----------------sidebar-wrapper----------------*/

  .sidebar-wrapper {
    width: 235px;
    height: 100%;
    max-height: 100%;
    position: fixed;
    top: 0;
    left: -300px;
    z-index: 999;
  }

  .sidebar-wrapper ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  /*----------------sidebar-content----------------*/

  .sidebar-content {
    max-height: calc(100% - 30px);
    height: calc(100% - 30px);
    overflow-y: auto;
    position: relative;
  }

  .sidebar-content.desktop {
    overflow-y: hidden;
  }

  /*--------------------sidebar-brand----------------------*/

  .sidebar-wrapper .sidebar-brand {
    padding: 0px 20px;
    display: flex;
    align-items: center;
  }

  .sidebar-wrapper .sidebar-brand > a {
    text-transform: uppercase;
    font-weight: bold;
    flex-grow: 1;
  }

  .sidebar-wrapper .sidebar-brand #close-sidebar {
    cursor: pointer;
    font-size: 20px;
  }
  /*--------------------sidebar-header----------------------*/

  /*----------------------sidebar-menu-------------------------*/

  .sidebar-wrapper .sidebar-menu {
    padding-bottom: 10px;
  }

  .sidebar-wrapper .sidebar-menu .header-menu span {
    font-weight: bold;
    font-size: 14px;
    padding: 15px 20px 5px 20px;
    display: inline-block;
  }

  .sidebar-wrapper .sidebar-menu ul li a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    position: relative;
    padding: 8px 30px 8px 20px;
  }

  .sidebar-wrapper .sidebar-menu ul li a i {
    margin-right: 10px;
    font-size: 12px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
  }

  .sidebar-wrapper .sidebar-menu ul li a:hover > i::before {
    display: inline-block;
    animation: swing ease-in-out 0.5s 1 alternate;
  }

  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {
    padding: 5px 0;
  }

  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li {
    padding-left: 25px;
    font-size: 13px;
  }

  .sidebar-wrapper
    .sidebar-menu
    .sidebar-dropdown
    .sidebar-submenu
    li
    a:before {
    content: '\f111';
    font-family: 'Font Awesome 5 Free';
    font-weight: 400;
    font-style: normal;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-right: 10px;
    font-size: 8px;
  }

  .sidebar-wrapper .sidebar-menu ul li a span.label,
  .sidebar-wrapper .sidebar-menu ul li a span.badge {
    float: right;
    margin-top: 8px;
    margin-left: 5px;
  }

  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,
  .sidebar-wrapper
    .sidebar-menu
    .sidebar-dropdown
    .sidebar-submenu
    li
    a
    .label {
    float: right;
    margin-top: 0px;
  }

  .sidebar-wrapper .sidebar-menu .sidebar-submenu {
    display: none;
  }

  .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active > a:after {
    transform: rotate(90deg);
    right: 17px;
  }

  /*--------------------------side-footer------------------------------*/

  /*------scroll bar---------------------*/

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #636269;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #636269;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #636269;
  }
  ::-webkit-scrollbar-track {
    background: #333238;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #333238;
  }
  ::-webkit-scrollbar-track:active {
    background: #333238;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  /*-----------------------------chiller-theme-------------------------------------------------*/

  .chiller-theme .sidebar-wrapper {
    background: #1d1d1d;
  }

  .chiller-theme .sidebar-wrapper .sidebar-header,
  .chiller-theme .sidebar-wrapper .sidebar-search,
  .chiller-theme .sidebar-wrapper .sidebar-menu {
    border-top: 1px solid #2b2b2b;
  }

  .chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-role,
  .chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-status,
  .chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,
  .chiller-theme .sidebar-wrapper .sidebar-search .input-group-text,
  .chiller-theme .sidebar-wrapper .sidebar-brand > a,
  .chiller-theme .sidebar-wrapper .sidebar-menu ul li a,
  .chiller-theme .sidebar-footer > a {
    color: #bdbdbd;
  }

  .chiller-theme .sidebar-wrapper .sidebar-menu ul li:hover > a,
  .chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active > a,
  .chiller-theme .sidebar-wrapper .sidebar-header .user-info,
  .chiller-theme .sidebar-wrapper .sidebar-brand > a:hover,
  .chiller-theme .sidebar-footer > a:hover i {
    color: #ff4203;
  }

  .chiller-theme .sidebar-wrapper .sidebar-menu .header-menu span {
    color: #6c7b88;
  }

  .chiller-theme .sidebar-footer {
    background: #2b2b2b;
    box-shadow: 0px -1px 5px #131212;
    border-top: 1px solid #3a3a3a;
  }

  .icon_format {
    background: #2b2b2b;
    margin-right: 10px;
    font-size: 12px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
  }

  .alignList {
    display: flex !important;
    align-items: center !important;
  }

  .card {
    background-color: #2b2b2b !important;
  }
  .card-body {
    padding: 0.25rem !important;
  }
`;
