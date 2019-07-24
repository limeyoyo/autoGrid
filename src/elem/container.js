export default class Container {
  constructor(draw, width, height) {
    this.width = width;
    this.height = height;
    this.group = draw.group();
    this.group.draggable();
    this.svgElem = this.group.rect(width, height).fill('#fff').stroke('#000');
  }
}
