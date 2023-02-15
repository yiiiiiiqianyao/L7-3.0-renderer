import {
    VertexAttributeBufferIndex,
    VertexAttributeLocation,
  } from '@antv/g-plugin-3d';
import Mesh from '../../core/mesh';
import MeshBasicMaterial from '../../material/MeshBasicMaterial';
import PlaneGeometry from '../../geometry/plane';
import BufferAttribute from '../../geometry/BufferAttribute';
import BufferElement from '../../geometry/BufferElement';
export default class PlaneLayer {
    constructor(device, data) {
        this.data = data;
        this.device = device;
        this.buildModel()
    }

    buildModel() {
        const geometry = this.initGeometry();
        const material = this.initMaterial();
        const plane = new Mesh(geometry, material);
        this.mesh = plane.mesh;
    }

    initMaterial() {
        const basicMaterial = new MeshBasicMaterial({
            fill: '#1890FF',
            opacity: 1,
        })
        return basicMaterial;
    }

    initGeometry() {
        const attribute = new BufferAttribute(this.data, 6);
        const element = new BufferElement(VertexAttributeLocation.POSITION, VertexAttributeBufferIndex.POSITION);
        const bufferGeometry = new PlaneGeometry(this.device);
        bufferGeometry.setAttribute(element, attribute);
        return bufferGeometry;
    }   
}