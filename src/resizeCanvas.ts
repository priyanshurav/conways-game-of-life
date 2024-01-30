import { CELL_SIZE, CONTROLS_HEIGHT } from './constants';
import { status } from './Status';

const lifeCanvas = document.querySelector<HTMLCanvasElement>(
  '#life'
) as HTMLCanvasElement;

const windowWidth = document.documentElement.clientWidth;
const windowHeight = document.documentElement.clientHeight;

export default () => {
  lifeCanvas.width = Math.floor(windowWidth);
  lifeCanvas.height = Math.floor(windowHeight - CONTROLS_HEIGHT);
  status.rows = Math.floor(windowWidth / CELL_SIZE);
  status.cols = Math.floor((windowHeight - CONTROLS_HEIGHT) / CELL_SIZE);
};
