import { Mesh as MeshBuilder } from '@antv/g-plugin-3d';
import {
    MeshBasicMaterial
  } from '@antv/g-plugin-3d';

export default class Mesh{
    constructor(geometry, material) {
        this.device = geometry.device
        this.geometry = geometry;
        this.material = material;

        const styles = this.getStyles();
        const geo = this.getGeometry(geometry)
        const mat = this.initMaterial();
        const mesh = this.initMesh(styles, geo, mat);
        this.mesh = mesh
    }

    initMesh(styles, geometry, material) {
        return new MeshBuilder({
            style: {
                ...styles,
                geometry,
                material,
            },
          });
    }
    
    getStyles() {
        return this.material.getStyles();
    }

    initMaterial() {
        return new MeshBasicMaterial(this.device)
    }

    getGeometry(geometry) {
        return geometry.geometry;
    }

    setPosition(x, y, z) {
        this.mesh.setPosition(x, y, z);
    }

}