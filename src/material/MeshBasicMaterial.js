const defaultStyles = {
    fill: '#fff',
    opacity: 1,
}

export default class MeshBasicMaterial {
  constructor(props) {
    this.type = 'MeshBasicMaterial';
    this.styles = {
        ...defaultStyles,
        ...props
    }
  }

  getStyles() {
    return this.styles;
  }

  setFill(fill) {
    this.styles.fill = fill;
  }

  getFill() {
    return this.styles.fill;
  }

  setOpacity(opacity) {
    this.styles.opacity = opacity;
  }

  getOpacity() {
    return this.styles.opacity;
  }
}