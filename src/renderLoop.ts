import { cloneDeep } from 'lodash';
import { FPS } from './constants';
import { status } from './Status';

let now = 0;
let elapsed = 0;
let then = 0;

const fpsInterval = 1000 / FPS;

export default function renderLoop(loop?: boolean) {
  if (status.isStopped) return;
  if (loop) requestAnimationFrame(() => renderLoop(loop));

  now = Date.now();
  elapsed = now - then;

  if (elapsed < fpsInterval) return;

  then = now - (elapsed % fpsInterval);
  const clonedState = cloneDeep(status.state);
  for (const cells of clonedState) {
    for (const cell of cells) {
      const aliveNeighbours = cell.getNeighbours().filter((p) => p.alive);
      if (cell.alive) {
        if (aliveNeighbours.length < 2) cell.alive = false;
        else if (aliveNeighbours.length > 3) cell.alive = false;
      } else {
        if (aliveNeighbours.length === 3) cell.alive = true;
      }
    }
  }
  status.state = clonedState;
  status.generations++;
  status.render();
}
