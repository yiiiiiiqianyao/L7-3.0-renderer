import React from 'react';
import Scene from './core/scene';

import PlaneLayer from './layers/plane'
class App extends React.Component {
  componentDidMount() {
    const scene = new Scene('container')
    this.scene = scene;
    scene.on('ready', ({ canvas, device }) => {
      const data = [
        -100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, -100.0, 100.0, 100.0,
        -100.0, 100.0, -100.0, -100.0, 100.0, -100.0, 100.0, 100.0,
      ];
   
      const planeLayer = new PlaneLayer(device, data)
      
      planeLayer.mesh.setPosition(300, 250, 0);

      scene.addLayer(planeLayer)
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
