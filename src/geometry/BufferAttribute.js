export default class BufferAttribute {
    constructor(vertices, vertexCount) {
        this.vertices = new Float32Array(vertices);
        this.vertexCount = vertexCount;

    }
   
}