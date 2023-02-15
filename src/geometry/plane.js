import {
    BufferGeometry,
    VertexBufferFrequency,
    Format,
  } from '@antv/g-plugin-3d';

  export default class PlaneGeometry {
  constructor(device) {
    this.device = device;
    const bufferGeometry = new BufferGeometry(device);
    this.geometry = bufferGeometry
  }

  setAttribute(bufferElement, bufferAttribute, instance = false) {
    const frequency = instance ? VertexBufferFrequency.PerInstance : VertexBufferFrequency.PerVertex;
    this.geometry.setVertexBuffer({
      bufferIndex: bufferElement.index,
      byteStride: 4 * 3,
      frequency: frequency,
      attributes: [
        {
          format: Format.F32_RGB,
          bufferByteOffset: 4 * 0,
          location: bufferElement.location,
        },
      ],
      data: bufferAttribute.vertices,
    });
    this.geometry.vertexCount = bufferAttribute.vertexCount;
  }
}
