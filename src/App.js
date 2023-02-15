import React from 'react';
import Scene from './core/scene';
import PlaneGeometry from './geometry/plane';
import {
  VertexAttributeBufferIndex,
  VertexAttributeLocation,
} from '@antv/g-plugin-3d';
import MeshBasicMaterial from './material/MeshBasicMaterial';
import Mesh from './core/mesh'
import BufferAttribute from './geometry/BufferAttribute';
import BufferElement from './geometry/BufferElement'

class App extends React.Component {
  componentDidMount() {
    const scene = new Scene('container')
    this.scene = scene;
    scene.on('ready', ({ canvas, device }) => {
      const data = [
        -100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, -100.0, 100.0, 100.0,
        -100.0, 100.0, -100.0, -100.0, 100.0, -100.0, 100.0, 100.0,
      ]
  
      const attribute = new BufferAttribute(data, 6);
      const element = new BufferElement(VertexAttributeLocation.POSITION, VertexAttributeBufferIndex.POSITION);
      
      const bufferGeometry = new PlaneGeometry(device);
      bufferGeometry.setAttribute(element, attribute);
      
      const basicMaterial = new MeshBasicMaterial({
        fill: '#1890FF',
        opacity: 1,
      })

      const mesh = new Mesh(bufferGeometry, basicMaterial);
      mesh.setPosition(300, 250, 0);

      scene.add(mesh);
      
    })
    
  }
  componentWillUnmount() {
    this.scene && this.scene.destroy();
  }

  render() {
    return (
      <div className="App">
        <div id="container"></div>
      </div>
    );
  }
}

export default App;
