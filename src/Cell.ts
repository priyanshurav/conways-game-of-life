import { status } from './Status';
import { Bounds } from './types';

export default class Cell {
  constructor(
    public x: number,
    public y: number,
    public alive: boolean,
    public bounds: Bounds
  ) {}

  getNeighbours(): Cell[] {
    const { x, y } = this;
    const neighbours: Cell[] = [];

    // Top
    neighbours.push(status.getCell(x, y - 1));
    // Bottom
    neighbours.push(status.getCell(x, y + 1));
    // Left
    neighbours.push(status.getCell(x - 1, y));
    // Right
    neighbours.push(status.getCell(x + 1, y));
    // Top left
    neighbours.push(status.getCell(x - 1, y - 1));
    // Bottom left
    neighbours.push(status.getCell(x - 1, y + 1));
    // Top right
    neighbours.push(status.getCell(x + 1, y - 1));
    // Bottom right
    neighbours.push(status.getCell(x + 1, y + 1));

    return neighbours.filter((p) => !!p);
  }
}
