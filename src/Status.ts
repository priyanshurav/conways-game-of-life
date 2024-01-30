import { CELL_SIZE } from './constants';
import Cell from './Cell';

const lifeCanvas = document.querySelector<HTMLCanvasElement>(
  '#life'
) as HTMLCanvasElement;

const generationsEl = document.querySelector<HTMLDivElement>(
  '.generations'
) as HTMLDivElement;

const ctx = lifeCanvas.getContext('2d') as CanvasRenderingContext2D;

ctx.strokeStyle = 'black';
ctx.lineWidth = 2;

class Status {
  state: Cell[][] = [];
  cols = 25;
  rows = 25;
  isStopped = false;
  private _generations = 0;
  get generations() {
    return this._generations;
  }
  set generations(value) {
    this._generations = value;
    generationsEl.innerText = `Generation: ${value}`;
  }
  init() {
    for (let y = 0; y < this.cols; y++) {
      const temp: Cell[] = [];
      for (let x = 0; x < this.rows; x++) {
        temp.push(
          new Cell(x, y, false, {
            top: y * CELL_SIZE,
            left: x * CELL_SIZE,
            right: x * CELL_SIZE + CELL_SIZE,
            bottom: y * CELL_SIZE + CELL_SIZE,
          })
        );
      }
      this.state.push(temp);
    }
  }

  getCell(x: number, y: number): Cell {
    return this.state?.[y]?.[x];
  }

  render() {
    ctx.clearRect(0, 0, lifeCanvas.width, lifeCanvas.height);
    for (let y = 0; y < this.cols; y++) {
      for (let x = 0; x < this.rows; x++) {
        const cell = this.getCell(x, y);
        ctx.fillStyle = cell.alive ? 'black' : 'white';
        ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        ctx.strokeRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }
  }
}

export const status = new Status();
