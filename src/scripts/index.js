/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/navigator-bar';
import './components/skip-content';
import './components/error-message';
import './components/favorite-message';
import './components/hero-custom';
import './components/footer-bar';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
