import renderLoop from './renderLoop';
import resizeCanvas from './resizeCanvas';
import { status } from './Status';

const lifeCanvas = document.querySelector<HTMLCanvasElement>(
  '#life'
) as HTMLCanvasElement;
const startBtn = document.querySelector<HTMLButtonElement>('.start-btn');
const stepBtn = document.querySelector<HTMLButtonElement>('.step-btn');
const stopBtn = document.querySelector<HTMLButtonElement>('.stop-btn');
const resetBtn = document.querySelector<HTMLButtonElement>('.reset-btn');

export default () => {
  lifeCanvas.addEventListener('click', (e) => {
    const x = e.clientX - lifeCanvas.offsetLeft;
    const y = e.clientY - lifeCanvas.offsetTop;
    for (let i = 0; i < status.state.length; i++) {
      for (let j = 0; j < status.state[i].length; j++) {
        const cell = status.getCell(j, i);
        if (
          y > cell.bounds.top &&
          x > cell.bounds.left &&
          x < cell.bounds.right &&
          y < cell.bounds.bottom
        ) {
          cell.alive = !cell.alive;
          return status.render();
        }
      }
    }
  });

  startBtn?.addEventListener('click', () => {
    status.isStopped = false;
    renderLoop(true);
  });
  stepBtn?.addEventListener('click', () => {
    status.isStopped = true;
    setTimeout(() => {
      status.isStopped = false;
      renderLoop(false);
    }, 1);
  });
  resetBtn?.addEventListener('click', () => {
    status.isStopped = true;
    setTimeout(() => {
      status.state = [];
      status.init();
      status.generations = 0
      status.render();
    }, 1);
  });
  stopBtn?.addEventListener('click', () => (status.isStopped = true));
  window.addEventListener('resize', () => {
    resizeCanvas();
    status.render();
  });
};
