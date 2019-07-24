import SVG from '@svgdotjs/svg.js/src/svg';
import '@svgdotjs/svg.draggable.js';
import Container from './elem/container';

const draw = SVG().addTo('#app').size(900, 900);
const container = new Container(draw, 300, 300);
