import setConstantsInSCSS from './setConstantsInSCSS';
import { status } from './Status';
import './styles/index.scss';
import resizeCanvas from './resizeCanvas';
import setupEventListeners from './setupEventListeners';

function main() {
  setConstantsInSCSS();
  resizeCanvas();
  status.init();
  setupEventListeners();
  status.render();
}

main();
