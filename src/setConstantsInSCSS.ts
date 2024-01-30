import { CELL_SIZE, COLS, CONTROLS_HEIGHT, ROWS } from './constants';

function setCSSProperty(key: string, value: string | number) {
  document.body.style.setProperty(`--${key}`, value.toString());
}

export default (): void => {
  setCSSProperty('cell-size', CELL_SIZE + 'px');
  setCSSProperty('cols', COLS);
  setCSSProperty('rows', ROWS);
  setCSSProperty('controls-height', CONTROLS_HEIGHT + 'px');
};
