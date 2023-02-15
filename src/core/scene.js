import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import {
  Plugin as Plugin3D,
} from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import EventEmitter from 'eventemitter3';

export default class Scene extends EventEmitter{
  constructor(container) {
    super();
    this.container = container;
    this.init();
  }

  init() {
    const renderer = new Renderer();
    renderer.registerPlugin(new Plugin3D());
    renderer.registerPlugin(new PluginControl());

    // create a canvas
    const canvas = new Canvas({
        container: this.container,
        width: window.innerWidth,
        height: window.innerHeight,
        renderer,
    });

    (async () => {
        await canvas.ready;
        this.canvas = canvas
        // use GPU device
        const plugin = renderer.getPlugin('device-renderer');
        const device = plugin.getDevice();

        canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
            this.emit('afterRender', { canvas, device });
        });

        this.ready = true;
        this.emit('ready', { canvas, device });
    })();
  }

  add(mesh) {
    if(!this.ready) return;
    this.canvas.appendChild(mesh.mesh);
  }

  addLayer(layer) {
    if(!this.ready) return;
    this.canvas.appendChild(layer.mesh);
  }

  destroy() {
    if(!this.ready) return;
    // this.canvas.destroy();
  }
}